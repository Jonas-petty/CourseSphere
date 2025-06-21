import { Outlet, Navigate } from "react-router";

function ProtectedRoutes() {
    const user = null
    return user ? <Outlet /> : <Navigate to={'/login'} replace/>
}

export default ProtectedRoutes;