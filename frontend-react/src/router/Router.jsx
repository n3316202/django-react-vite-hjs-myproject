import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import BoardListPage from "../pages/BoardListPage";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "게시판",
    children: [
      {
        path: "/",
        loader: () => "게시판",
        element: <BoardListPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
