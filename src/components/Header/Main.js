import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logos/logo-light.png";
import Logo1 from "../../assets/images/logo-light.png";
import WOW from "wowjs";

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
      <div className="topbar-one container d-flex justify-content-between">
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Link to="/login">Connexion</Link>
          <select
            value={selectedValue}
            onChange={handleChange}
            className="custom-select custom-select-sm border-0"
          >
            <option value="">Inscription</option>
            <option value="Entreprises">Entreprises</option>
            <option value="Professionnels">Professionnels</option>
            <option value="Universités">Universités</option>
          </select>
        </div>
        <select
          value={selectedValue}
          onChange={handleChange}
          className="custom-select custom-select-sm border-0"
        >
          <option value="FR">FR</option>
          <option value="EN">EN</option>
          <option value="ES">ES</option>
          <option value="HT">HT</option>
        </select>
      </div>
      <header
        className={`main-header sticky-header sticky-header--normal ${
          sticky && "main-header sticky-header sticky-header--cloned active"
        }`}
      >
        <div className="main-header__inner">
          <div className="main-header__logo">
            <Link to="/">
              <img src={Logo} alt="Hiredots HTML" width={150} />
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
            <div className="main-header__call">
              <i className="icon-telephone" />
              <Link to="tel:+9288006930">+ 92 (8800)-6930</Link>
            </div>
          </div>
          <div className="main-header__link">
            <Link className="main-header__btn" to="/login">
              Login / <br /> Signup
            </Link>
          </div>
          <div
            className="mobile-nav__btn mobile-nav__toggler"
            onClick={toggleMobileMenu}
          >
            <span />
            <span />
            <span />
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
                <img src={Logo1} width={155} alt="" />
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
          </div>
        </div>
      )}
    </>
  );
}

export default Main;
