"use client"
import React from "react";
import { logout } from "@/actions/logut";

interface LogoutButtonProps {
    children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
    const onclick = () => {
        logout();
    }

    return (
        <span onClick={onclick} className={'cursor-pointer'}>
            {children}
        </span>
    );
}