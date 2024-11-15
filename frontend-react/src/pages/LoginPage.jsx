import React, { useEffect, useState } from "react";
import auth from "../services/auth/AuthService.js";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);

    //중첩 구조 분해 (nested destructuring)
    setUser({ ...user, [name]: value });
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    auth
      .login(user)
      .then((response) => {
        console.log(response);
        localStorage.clear();
        localStorage.setItem("accessToken", response.data.token.access);
        localStorage.setItem("refreshToken", response.data.token.refresh);
        //window.location.href = `/`;
        const navigate = useNavigate();
        navigate("/", { replace: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="container-fluid py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white" style={{}}>
              <div className="card-body p-5 text-center">
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="text-white-50 mb-5">
                  Please enter your login and password!
                </p>
                <form className="form">
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      name="username"
                      placeholder="아이디"
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                    />{" "}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      name="password"
                      type="password"
                      placeholder="패스워드"
                      onChange={handleInputChange}
                      className="form-control form-control-lg"
                    />{" "}
                  </div>
                  <div className="form-outline mb-4 d-grid gap-2">
                    <button
                      type="submit"
                      className="btn btn-info"
                      onClick={onLoginClick}
                    >
                      Login{" "}
                    </button>
                  </div>
                  <div>
                    <p className="mb-2">
                      {" "}
                      Don't have an account?{" "}
                      <a className="text-white-50 fw-bold" href="#!">
                        Sign up
                      </a>
                    </p>
                  </div>
                  <hr className="my-4" />{" "}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
