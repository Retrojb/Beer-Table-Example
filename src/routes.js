import React, { Fragment } from "react";
import { Routes, Route } from "react-router";
import BeerCard from "./components/Cards/BeerCard";
import BeerTable from "./components/Tables/BeerTable";
import Home from "./pages/Home";


const ROUTES = [
    {
        path: "/",
        key: "app",
        component: Home
    },
    {
        path: "/beer-table",
        key: "beer-table",
        component: BeerTable
    },
    {
        path: "/beers/:id",
        id: "",
        key: "beer:id",
        component: BeerCard
    }
];

export function RenderRoutes(ROUTES) {
    let routing = ROUTES.routes
    console.log(routing);
    return (
        <Routes>
            {routing.map((route, index) => {
                return (
                    <Route 
                        path={route.path} 
                        key={route.key}
                        render={(props)=> { <route.component { ...props} routes={route.routes} /> }} />
                )
            })}
        </Routes>

    )
}
export default ROUTES;