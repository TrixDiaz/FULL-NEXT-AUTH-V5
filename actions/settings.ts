import {getUserById} from "@/data/user";

"user server"

import * as z from "zod"
import {db} from "@/lib/db";
import {SettingSchema} from "@/schemas";
import {currentUser} from "@/lib/auth";

export const settings = async (
    values: z.infer<typeof SettingSchema>
) => {
    const user = await currentUser();
    if (!user) {
        return {error: "Unauthorized"}
    }

    const dbUser = await getUserById(user.id)

    if(!dbUser) {
        where: { id: dbUser.id }
        data: {...values,
        }

    }
}