import React, { Component, Fragment } from "react";
import { Routes, Route, Switch } from "react-router";
import BeerCard from "./components/Cards/BeerCard";
import BeerTable from "./components/Tables/BeerTable";
import Home from "./pages/Home";


const ROUTES = [
    {
        path: "/app",
        key: "APP",
        component: RenderRoutes,
        routes: [
            {
                path: "/",
                key: "0",
                component: Home
            },
            {
                path: "/beer-table",
                key: "1",
                component: BeerTable
            },
            {
                path: "/beers/:id",
                key: "2",
                id: ":id",
                component: BeerCard
            }

        ]
    }
];

export function RouteWithSubRoute (route) {
    return (
        <Route 
            path={route.path} 
            key={route.key}
            render={(props)=>  <route.component { ...props} routes={route.routes} /> } 
        />
    );
}

export function RenderRoutes({ routes }) {
    console.log(routes);
    return (
        <Routes>
            {routes.map((route, ind) => {
                const fixed = route.routes;
                console.log(fixed)
                 return (
                    <Route 
                        path={fixed.path} 
                        key={ind}
                        render={ props =>  <routes.Component { ...props} routes={route.routes} /> } 
                    />
                );
            })}
        </Routes>

    )
}
export default ROUTES;