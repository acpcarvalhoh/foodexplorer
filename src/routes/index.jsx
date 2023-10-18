import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AdminRoutes } from "./admin.routes";
import { AuthRoutes } from "./auth.routes";

export function Routes(){
    return(
        <BrowserRouter>
            <AuthRoutes/>
        </BrowserRouter>
    )
};