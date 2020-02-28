import React from "react";
import "../index.css";
import Wrapper from "../components/Wrapper"

// after successful signup, redirected to login
// if unsuccessful, show error and reload signup
// after signup and login, redirected to search page

function Login() {

  return (
    <Wrapper>
    <div className="container">
    <div className="row">
      <div className="col-lg-10 col-xl-9 mx-auto">
        <div className="card card-signin flex-row my-5">
          <div className="card-img-left d-none d-md-flex">
          </div>
          <div className="card-body">
            <h5 className="card-title text-center">Login</h5>
            <form className="form-signin">
              <div className="form-label-group">
                <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />
                <label for="inputUserame">Username</label>
              </div>

              <div className="form-label-group">
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <label for="inputPassword">Password</label>
              </div>
   
              <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Sign In</button>
              <a className="d-block text-center mt-2 small" href="http://localhost:3000/signup">Sign Up</a>

             </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </Wrapper>

  );
}

export default Login;
