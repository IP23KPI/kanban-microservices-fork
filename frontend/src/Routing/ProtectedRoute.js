import {useAuth} from "../Providers/AuthProvider";
import {Navigate, Outlet} from "react-router-dom";

export const ProtectedRoute = () => {
    const { token } = useAuth();

    if (!token) {
        return <Navigate to="/login" />;
    }

    return <Outlet />;
};