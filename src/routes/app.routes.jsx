import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Details } from "../pages/Details";
import { OrderHistory } from "../pages/OrderHistory";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { Orders } from "../pages/Orders"
import { useAuth } from "../hooks/auth";
import { useEffect } from "react";
import { api } from "../services/api";

export function AppRoutes(){
    const { user } = useAuth();
    
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/details/:dish_id" element={ <Details/> }/>
            {user  && <Route path="/orders" element={ <Orders/> }/>}
            {user  && <Route path="/favorites" element={ <Favorites/> }/>}
            {user && <Route path="/order-history" element={ <OrderHistory/> }/>}
            {user && <Route path="*" element={ <Home/> }/>}

            {!user && <Route path="/register" element={ <SignUp/> }/>}
            {!user && <Route path="/login" element={ <SignIn/> }/>}
            {!user && <Route path="*" element={ <SignIn/> }/>}
        </Routes>
    )
};