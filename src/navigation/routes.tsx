import React from "react";

const PokemonsListPage = React.lazy(() => import("../pages/PokemonsListPage"));

const routes: Route[] = [
  {
    path: "/",
    component: PokemonsListPage,
    title: "Pokemon",
  },
];

interface Route {
  path: string;
  component: React.LazyExoticComponent<any>;
  title: string;
}

export default routes;
