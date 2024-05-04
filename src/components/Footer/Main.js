import React from "react";
import { Link } from "react-router-dom";
import Bgimg from "../../assets/images/backgrounds/footer-bg.jpg";
import Logo from "../../assets/images/logos/logo-for-dark.png";
import wp from "../../assets/images/wp.png";
import './footer.css'

function Main() {
  return (
    <div>
      <footer className="main-footer background-black">
        <div
          className="main-footer__bg"
          style={{ backgroundImage: `url(${Bgimg})` }}
        />
        <div className="main-footer__subscribe">
          <div className="container">
            <div className="main-footer__subscribe__wrapper">
              <div className="main-footer__subscribe__left">
                <span className="main-footer__subscribe__icon">
                  <i className="icon-message" />
                </span>
                <h3 className="main-footer__subscribe__title">
                  Subscribe Now to Get <br />
                  Latest Updates
                </h3>
              </div>
              <div className="main-footer__subscribe__right">
                <form
                  action="#"
                  data-url="MAILCHIMP_FORM_URL"
                  className="main-footer__newsletter mc-form"
                >
                  <input type="text" name="EMAIL" placeholder="Email address" />
                  <button type="submit" className="fas fa-paper-plane">
                    <span className="sr-only">submit</span>
                  </button>
                </form>
                <div className="mc-form__response" />
              </div>
            </div>
          </div>
        </div>
        <div className="main-footer__top">
          <div className="container">
            <div className="footer-grid">
              <div className="">
                <div className="footer-widget footer-widget--about">
                  <Link to="/" className="footer-widget__logo">
                    <img src={Logo} width={200} alt="Hiredots HTML Template" />
                  </Link>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      color: "white",
                      flexDirection: "column",
                      marginLeft: "-100px",
                    }}
                    className="main-header__call"
                  >
                    <p
                      style={{
                        fontSize: "10px",
                        marginTop: "10px",
                        color: "white",
                      }}
                    >
                      <i style={{ color: "white" }} className="icon-message" />
                      <Link
                        style={{ color: "white" }}
                        to="mailto:info@jobpaw.com"
                      >
                        info@jobpaw.com
                      </Link>
                    </p>
                    <p style={{ fontSize: "10px" }}>
                      <i
                        style={{ color: "white" }}
                        className="icon-telephone"
                      />
                      <Link style={{ color: "white" }} to="tel:+50937019232">
                        +(509) 3701 9232
                      </Link>
                    </p>
                  </div>
                  {/* Removed text under the logo */}
                  <div
                    style={{ marginLeft: "-70px" }}
                    className="footer-widget__social"
                  >
                    {/* Moved social media icons here */}
                    <Link to="https://twitter.com">
                      <i className="fab fa-twitter" aria-hidden="true" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                    <Link to="https://facebook.com">
                      <i className="fab fa-facebook" aria-hidden="true" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                    <Link to="https://linkedin.com">
                      <i className="fab fa-linkedin" aria-hidden="true" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                    <Link to="https://instagram.com">
                      <i className="fab fa-instagram" aria-hidden="true" />
                      <span className="sr-only">Instagram</span>
                    </Link>
                    <Link to="https://youtube.com">
                      <i
                        class="fa-brands fa-youtube"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Youtube</span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="">
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <Link to="/about">About Company</Link>
                  </li>
                  <li>
                    <Link to="/professionnels/find-job">Trouver un emploi</Link>
                  </li>
                  <li>
                    <Link to="/login">Creer un CVPaw</Link>
                  </li>
                  <li>
                    <Link to="/project">Trouver une formation continue</Link>
                  </li>
                </ul>
              </div>
              <div className="">
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <Link to="/contact">Publier une offre d’emploi</Link>
                  </li>
                  <li>
                    <Link to="/testimonials">Temoignages</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contactez-nous</Link>
                  </li>
                  <li>
                    <Link to="/login">Publier un appel d’offre</Link>
                  </li>
                </ul>
              </div>
              <div  className="">
                <ul className="list-unstyled footer-widget__links">
                  <li>
                    <Link to="/contact">Recruter via Base de CV</Link>
                  </li>
                  <li>
                    <Link to="/team">
                      Statistiques sur le marche de l’emploi
                    </Link>
                  </li>
                  <li>
                    <Link to="/history">Partager travaux de recherche</Link>
                  </li>
                  <li>
                    <Link to="/about">Publier une formation continue</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Removed contact section */}
        <div className="main-footer__bottom">
          <div className="container">
            <div className="main-footer__bottom__inner">
              {/* Removed copyright */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
