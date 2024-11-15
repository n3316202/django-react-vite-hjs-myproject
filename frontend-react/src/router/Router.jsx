import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "./../App";
import BoardListPage from "../pages/BoardListPage";
import LoginPage from "../pages/LoginPage";
import MainPage from "../pages/MainPage";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "메인페이지",
    children: [
      {
        path: "/",
        loader: () => "메인페이지",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/board",
    element: <App />,
    loader: () => "게시판",
    children: [
      {
        path: "/board",
        loader: () => "게시판",
        element: <BoardListPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <App />,
    loader: () => "로그인",
    children: [
      {
        path: "/login",
        loader: () => "로그인",
        element: <LoginPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export { router, routes };
