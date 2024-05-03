import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logos/logo-light.png";
import Logo1 from "../../assets/images/logos/logo-for-dark.png";
import WOW from "wowjs";
import fr from "../../assets/images/country/fr.png";
import ht from "../../assets/images/country/ht.png";
import spain from "../../assets/images/country/spain.jpg";
import uk from "../../assets/images/country/uk.png";

function Main() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [homeDrop, sethomeDrop] = useState(false);
  const [headerDrop, setheaderDrop] = useState(false);
  const [pageDrop, setpageDrop] = useState(false);
  const [servicesDrop, setservicesDrop] = useState(false);
  const [projectsDrop, setprojectsDrop] = useState(false);
  const [blogDrop, setblogDrop] = useState(false);
  const [search, setsearch] = useState(false);
  const location = useLocation();
  const path = location.pathname;
  const [menu, setmenu] = useState({});
  const activeMenu = () => {
    if (path === "/" || path === "/") {
      setmenu({ home: true });
    } else if (path === "/professionnels" || path === "/professionnels") {
      setmenu({ header: true });
    } else if (path === "/services" || path === "/services") {
      setmenu({ pages: true });
    } else if (path === "/projects" || path === "/projects") {
      setmenu({ projects: true });
    } else if (path === "/services" || path === "/services") {
      setmenu({ services: true });
    } else if (path === "/blog" || path === "/blog") {
      setmenu({ blog: true });
    }
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  useEffect(() => {
    window.scroll(0, 0);
    new WOW.WOW({
      live: false,
    }).init();
    activeMenu();
  }, [path]);
  const isSticky = () => {
    const scrollTop = window.scrollY;
    scrollTop >= 141 ? setSticky(true) : setSticky(false);
  };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };
  const [selectedValue, setSelectedValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    if (event.target.value === "Entreprises") {
      navigate("/login");
    } else if (event.target.value === "Professionnels") {
      navigate("/professionnels");
    } else if (event.target.value === "Universities") {
      navigate("/universities");
    }
  };

  return (
    <>
      <header
        className={`main-header sticky-header sticky-header--normal ${
          sticky && "main-header sticky-header sticky-header--cloned active"
        }`}
      >
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link to="/">
              <img
                className="img-fluid w-100 w-md-120"
                src={Logo}
                alt="Jbbpaw LOGO"
              />
            </Link>
          </div>
          <Link
            to="#"
            className="search-toggler main-header__search"
            onClick={() => setsearch(true)}
          >
            <i className="icon-magnifying-glass" aria-hidden="true" />
            <span className="sr-only">Search</span>
          </Link>
          <div className="main-header__menu">
            <nav className="main-header__nav main-menu">
              <ul className="main-menu__list">
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/professionnels">Professionels</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/entreprises">Entreprises</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/universities">Universities</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/services">Services</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/projets">Projets</Link>
                </li>
              </ul>
            </nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "",
                flexDirection: "column",
              }}
              className="main-header__call"
            >
              <p style={{ fontSize: "10px", marginTop: "10px" }}>
                <i className="icon-message" />
                <Link to="mailto:info@jobpaw.com">info@jobpaw.com</Link>
              </p>
              <p style={{ fontSize: "10px" }}>
                <i className="icon-telephone" />
                <Link to="tel:+50937019232">+(509) 3701 9232</Link>
              </p>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                gap: "10px",
              }}
            >
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
                >
                  Inscription
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link className="dropdown-item" to="/entreprises">
                      Entreprises
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/professionnels">
                      Professionnels
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/universities">
                      Universités
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown ">
                <span
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  className="dropdown-toggle "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "100px",
                    width: "50px",
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img width={15} height={15} src={fr} alt="fr icon" />
                  FR
                </span>
                <ul
                  className="dropdown-menu p-3"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    width: "50px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <li>
                    <img width={15} height={15} src={uk} alt="fr icon" />
                    EN
                  </li>
                  <li>
                    <img width={15} height={15} src={ht} alt="fr icon" />
                    HT
                  </li>
                  <li>
                    <img width={15} height={15} src={spain} alt="fr icon" />
                    ES
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="main-header__link">
            <Link className="main-header__btn"></Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              alignItems: "center",
            }}
          >
            <div
              className="mobile-nav__btn mobile-nav__toggler"
              onClick={toggleMobileMenu}
            >
              <span />
              <span />
              <span />
            </div>
            <div style={{fontSize:"12px"}} className="d-flex d-md-none">
              <Link to="">Connexion</Link>
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
                >
                  Inscription
                </span>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <li>
                    <Link className="dropdown-item" to="/entreprises">
                      Entreprises
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/professionnels">
                      Professionnels
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/universities">
                      Universités
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="dropdown ">
                <span
                  data-mdb-button-init
                  data-mdb-ripple-init
                  data-mdb-dropdown-init
                  className="dropdown-toggle "
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginRight: "100px",
                    width: "50px",
                  }}
                  type="button"
                  id="dropdownMenuButton"
                  data-mdb-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img width={15} height={15} src={fr} alt="fr icon" />
                  FR
                </span>
                <ul
                  className="dropdown-menu p-3"
                  aria-labelledby="dropdownMenuButton"
                  style={{
                    width: "50px",
                    backgroundColor: "transparent",
                    border: "none",
                  }}
                >
                  <li>
                    <img width={15} height={15} src={uk} alt="fr icon" />
                    EN
                  </li>
                  <li>
                    <img width={15} height={15} src={ht} alt="fr icon" />
                    HT
                  </li>
                  <li>
                    <img width={15} height={15} src={spain} alt="fr icon" />
                    ES
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {search && (
        <div className="search-popup active">
          <div
            className="search-popup__overlay search-toggler"
            onClick={() => setsearch(false)}
          />
          <div className="search-popup__content">
            <form
              role="search"
              method="get"
              className="search-popup__form"
              action="#"
            >
              <input type="text" id="search" placeholder="Search Here..." />
              <button
                type="submit"
                aria-label="search submit"
                className="hiredots-btn hiredots-btn--base"
              >
                <span>
                  <i className="icon-magnifying-glass" />
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      {mobileMenuOpen && (
        <div
          className={`mobile-nav__wrapper ${mobileMenuOpen ? "expanded" : ""}`}
        >
          <div
            className="mobile-nav__overlay mobile-nav__toggler"
            onClick={() => setIsDropdownOpen(false)}
          />
          <div className="mobile-nav__content">
            <span
              className="mobile-nav__close mobile-nav__toggler"
              onClick={() => setMobileMenuOpen(false)}
            >
              <i className="fa fa-times" />
            </span>
            <div className="logo-box">
              <Link
                to="/"
                aria-label="logo image"
                onClick={() => setIsDropdownOpen(false)}
              >
                <img src={Logo1} width={130} alt="" />
              </Link>
            </div>

            <div className="mobile-nav__container">
              <ul className="main-menu__list">
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/professionnels">Professionels</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/entreprises">Entreprises</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/universities">Universities</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/services">Services</Link>
                </li>
                <li className={`dropdown ${menu.home && "current"}`}>
                  <Link to="/projets">Projets</Link>
                </li>
              </ul>
            </div>
            <div
                    style={{ marginLeft: "-50px" }}
                    className="footer-widget__social"
                  >
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
      )}
    </>
  );
}

export default Main;
