import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";

const Login = () => {
  return (
    <div className="container my-5" style={{ maxWidth: "600px" }}>
      <h2>Login Here</h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <p>Create a new account.</p>
        <div className="dropdown">
          <span
            data-mdb-button-init
            data-mdb-ripple-init
            data-mdb-dropdown-init
            className="dropdown-toggle "
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
            style={{ marginBottom: "-110px" }}
          >
            Sign Up
          </span>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <Link
                className="dropdown-item"
                to="/entreprises/CreateEntreprisesProfile"
              >
                Entreprises
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/professionnels/CreateProfessionnelsProfile"
              >
                Professionnels
              </Link>
            </li>
            <li>
              <Link
                className="dropdown-item"
                to="/universities/CreateUniversitiesPorfile"
              >
                Universités
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <form
        className="contact-one__form  form-one background-base wow fadeInUp"
        data-wow-duration="1500ms"
      >
        <div className="form-one__group">
          <div className="form-one__control form-one__control--full">
            <input type="email" name="email" placeholder="Email address" />
          </div>
          <div className="form-one__control form-one__control--full">
            <input
              type="password"
              style={{ width: "100%" }}
              name="email"
              placeholder="Password"
            />
          </div>
          <div className="form-one__control form-one__control--full">
            <button
              type="submit"
              className="hiredots-btn hiredots-btn--white w-100"
            >
              <span>Continue</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
