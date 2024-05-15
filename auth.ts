import NextAuth from "next-auth"
import authConfig from "@/auth.config";
import {PrismaAdapter} from "@auth/prisma-adapter";
import {db} from "@/lib/db";
import {getUserByEmail, getUserById} from "@/data/user";


export const {auth, handlers, signIn, signOut} = NextAuth({
    pages: {
        signIn: "/auth/login",
        error: "/auth/error",
    },
    events: {
        async linkAccount({user}) {
            await  db.user.update({
                where: { id: user.id },
                data: { emailVerified: new Date() }
            });
        },
    },
    callbacks: {
         async signIn({ user, account }) {
        // Allow OAuth without email verification
        if(account?.provider !== "credentials") return true;

        // @ts-ignore
             const existingUser = await getUserById(user.id);

        // Prevent sign in without email verification
        if(!existingUser?.emailVerified) return false;

        // TODO: add 2FA check

            return true;
         },
        async session({token, session}) {
            console.log({
                sessionToken: token,
            })
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (token.role && session.user) {
                // @ts-ignore
                session.user.role = token.role;
            }
            return session
        },
        async jwt({token}) {
            if (!token.sub) return token;

            const existingUser = await getUserById(token.sub);

            if (!existingUser) return token;

            token.role = existingUser.role;
            return token
        }
    },
    adapter: PrismaAdapter(db),
    session: {strategy: "jwt"},
    ...authConfig
});