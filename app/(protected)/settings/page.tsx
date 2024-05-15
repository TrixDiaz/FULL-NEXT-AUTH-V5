import {auth, signOut} from "@/auth";
import {getSession} from "next-auth/react";

const SettingPage = async () => {
    const session = await auth();
    return (
        <>
            {JSON.stringify(session)}
            <form
             action={async () => {
               "use server";
               await signOut();
             }}>

                <button type={'submit'}>
                    Sign out
                </button>
            </form>
        </>
    );
}

export default SettingPage ;