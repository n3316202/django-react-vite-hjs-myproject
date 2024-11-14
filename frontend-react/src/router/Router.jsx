import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import BoardListPage from "../pages/BoardListPage";
import LoginPage from "../pages/LoginPage";

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
  {
    path: "/",
    element: <App />,
    loader: () => "로그인",
    children: [
      {
        path: "/",
        loader: () => "로그인",
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
