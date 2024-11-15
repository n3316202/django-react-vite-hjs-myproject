import React from "react";
import { routes } from "../router/Router";
import MainCard from "./../components/main/MainCard";
//화면구현 힌트
//https://hangbok-archive.com/development/bootstrap/%EB%B6%80%ED%8A%B8%EC%8A%A4%ED%8A%B8%EB%9E%A9-%EC%B9%B4%EB%93%9C-%EA%B5%AC%ED%98%84/

const MainPage = () => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mx-auto w-75 pb-5">
      {routes &&
        routes.map((route) => (
          <div className="col-md-4 d-flex justify-content-center">
            <MainCard route={route}></MainCard>
          </div>
        ))}
    </div>
  );
};

export default MainPage;
