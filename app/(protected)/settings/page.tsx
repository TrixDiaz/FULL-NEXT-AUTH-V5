"use client"


import { logout } from "@/actions/logut";
import {useCurrentUser} from "@/hooks/use-current-user";

const SettingPage =  () => {
    const user = useCurrentUser();
    const onClick = () => {
        logout();
    }
    return (
        <>
            <div className={'bg-white p-4 rounded-xl'}>
                <button onClick={onClick} type={'submit'}>
                    Sign out
                </button>
            </div>
        </>
    );
}

export default SettingPage;