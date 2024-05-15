import React from "react";
import {Navbar} from "@/app/(protected)/_components/navbar";
interface ProtectedLayoutProps {
    children?: React.ReactNode
}
const ProtectedLaylout = ({children} : ProtectedLayoutProps) => {
    return (
        <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center
        bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]">
            <Navbar/>
            {children}
        </div>
    )
}

export default ProtectedLaylout