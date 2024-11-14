import React from "react";

const routes = [
  {
    path: "/",
    element: <App />,
    loader: () => "로또",
    children: [
      {
        path: "/",
        loader: () => "로또",
        element: <LottoPage />,
      },
    ],
  },
];

export { router, routes };
