import React from "react"
import AuthLayout from "@/layout/AuthLayout"
import { Outlet } from "react-router-dom"

const Auth: React.FC = () => {
    return (
        <AuthLayout>
            <Outlet />
        </AuthLayout>
    )
}
export default Auth