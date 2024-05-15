import React from "react";


const AuthLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <>
            <div className={'h-full flex items-center justify-center bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]'}>
                {children}
            </div>
        </>
    )
}

export default AuthLayout;