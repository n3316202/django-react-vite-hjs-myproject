import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../router/Router';
import { LoginContext } from '../../context/LoginContext';

const Header = () => {
    const loginContext = useContext(LoginContext);
    const ACCESS_TOKEN = localStorage.getItem('accessToken');
    const USER_NAME = localStorage.getItem('userName');

    console.log('헤더', loginContext);

    useEffect(() => {
        if (ACCESS_TOKEN) {
            //console.log("헤더실행:", ACCESS_TOKEN);
            //console.log("유저이름:", USER_NAME);
        }
    }, [ACCESS_TOKEN, USER_NAME]);

    const onLoginClick = (e) => {
        //e.preventDefault();
        if (
            e.target.innerText.includes('로그인') ||
            e.target.innerText.includes('로그아웃')
        ) {
            console.log('로그아웃');
            localStorage.clear();
        }
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="{() => false}">
                        MyProject
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {routes &&
                                routes.map((route) => (
                                    //console.log(route.loader() + route.path)
                                    <li className="nav-item dropdown">
                                        <Link
                                            to={route.path}
                                            className="nav-link dropdown-toggle"
                                            id="navbarDropdown"
                                            role="button"
                                            data-bs-toggle="dropdown"
                                            aria-expanded="false"
                                            onClick={onLoginClick}
                                        >
                                            {route.loader() == '로그인' &&
                                            USER_NAME
                                                ? '로그아웃' +
                                                  '(' +
                                                  USER_NAME +
                                                  ')'
                                                : route.loader()}
                                        </Link>
                                        {route.children && (
                                            <ul
                                                className="dropdown-menu"
                                                aria-labelledby="navbarDropdown"
                                            >
                                                {route.children.map((child) => (
                                                    <li key={child.loader()}>
                                                        <Link
                                                            to={child.path}
                                                            className="dropdown-item"
                                                        >
                                                            {child.loader()}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                ))}
                        </ul>
                        <form className="d-flex">
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;
