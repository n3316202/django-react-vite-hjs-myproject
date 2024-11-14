import React from "react";

const LoginPage = () => {
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
                      type="email"
                      placeholder="Email Address"
                      className="form-control form-control-lg"
                    />{" "}
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control form-control-lg"
                    />{" "}
                  </div>
                  <div className="form-outline mb-4 d-grid gap-2">
                    <button type="submit" className="btn btn-info">
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
