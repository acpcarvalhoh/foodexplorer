import { Route, Routes } from "react-router-dom";

import { Home } from "../pages/Home";
import { Favorites } from "../pages/Favorites";
import { Details } from "../pages/Details";
import { OrderHistory } from "../pages/OrderHistory";


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={ <Home/> }/>
            <Route path="/fatorites" element={ <Favorites/> }/>
            <Route path="/order-history" element={ <OrderHistory/> }/>
            <Route path="/details/:id" element={ <Details/> }/>
        </Routes>
    )
};