import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { useAuth } from "../hooks/auth";

export function Routes(){
    const { user } = useAuth();
    const admin = user && user.role === "admin";

    return(
        <BrowserRouter>
            { admin ? <AdminRoutes/> : <AppRoutes/> }
        </BrowserRouter>
    )
};