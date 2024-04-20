import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <div className="container my-5" style={{maxWidth:"600px"}}>
        <h2>Login Here</h2>
        <p>Create a new account. <Link to="/signup">Signup</Link></p>
      <form
        className="contact-one__form  form-one background-base wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <div className="form-one__control form-one__control--full">
            <input type="email" name="email" placeholder="Email address" />
          </div>
          <div className="form-one__control form-one__control--full">
            <input type="password" style={{width:"100%"}} name="email" placeholder="Password" />
          </div>
          <div className="form-one__control form-one__control--full">
            <button type="submit" className="hiredots-btn hiredots-btn--white w-100">
              <span>Continue</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
