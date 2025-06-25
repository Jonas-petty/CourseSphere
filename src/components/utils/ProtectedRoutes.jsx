import { Outlet, Navigate } from "react-router";

function ProtectedRoutes({ isLogged }) {
    return isLogged ? <Outlet /> : <Navigate to={'/login'} replace/>
}

export default ProtectedRoutes;