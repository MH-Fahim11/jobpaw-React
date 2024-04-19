import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container my-5" style={{maxWidth:"600px"}}>
        <h2>Signup Here</h2>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      <form
        className="contact-one__form  form-one background-base wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <div className="form-one__control form-one__control--full">
            <input type="text" name="name" placeholder="Full name" />
          </div>
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

export default Signup;