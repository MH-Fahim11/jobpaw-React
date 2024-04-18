import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/backgrounds/footer-bg.jpg'
import Logo from '../../assets/images/logos/logo-for-dark.png'

function Main() {
    return (
        <div>
            <footer className="main-footer background-black">
                <div className="main-footer__bg" style={{ backgroundImage:`url(${Bgimg})` }}/>
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
                                <form action="#" data-url="MAILCHIMP_FORM_URL" className="main-footer__newsletter mc-form">
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
                        <div className="row">
                            <div className="col-md-6 col-xl-5">
                                <div className="footer-widget footer-widget--about">
                                    <Link to="/" className="footer-widget__logo">
                                        <img src={Logo} width={125} alt="Hiredots HTML Template"/>
                                    </Link>
                                    <p className="footer-widget__text">
                                        Lorem ipsum dolor sit amet, consect etur adi pisicing elit <br />
                                        sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer-widget footer-widget--links">
                                    <h2 className="footer-widget__title">Explore</h2>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li>
                                            <Link to="/about">About Company</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Trouver un emploi</Link>
                                        </li>
                                        <li>
                                            <Link to="/">Creer un CVPaw</Link>
                                        </li>
                                        <li>
                                            <Link to="/project">Trouver une formation continue</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Publier une offre d’emploi</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Temoignages</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Contactez-nous</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-2">
                                <div className="footer-widget footer-widget--contact">
                                    <h2 className="footer-widget__title">Links</h2>
                                    <ul className="list-unstyled footer-widget__links">
                                        <li>
                                            <Link to="/about">Publier un appel d’offre</Link>
                                        </li>
                                        <li>
                                            <Link to="/contact">Recruter via Base de CV</Link>
                                        </li>
                                        <li>
                                            <Link to="/team">Statistiques sur le marche de l’emploi</Link>
                                        </li>
                                        <li>
                                            <Link to="/history">Partager travaux de recherche</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Publier une formation continue</Link>
                                        </li>
                                        <li>
                                            <Link to="/about">Mettre publicité sur JobPaw</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-3">
                                <div className="footer-widget footer-widget--time">
                                    <h2 className="footer-widget__title">Contact</h2>
                                    <p className="footer-widget__text">
                                        66 Road Broklyn Street, 600 <br /> New York, USA
                                    </p>
                                    <ul className="list-unstyled footer-widget__info">
                                        <li>
                                            <i className="fas fa-envelope" />{" "}
                                            <Link to="mailto:needhelp@company.com">needhelp@company.com</Link>
                                        </li>
                                        <li>
                                            <i className="fas fa-phone-square" />{" "}
                                            <Link to="tel:+92(8800)-6930">+ 92 ( 8800 ) - 6930</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-footer__bottom">
                    <div className="container">
                        <div className="main-footer__bottom__inner">
                            <div className="footer-widget__social">
                                <Link to="https://twitter.com">
                                    <i className="fab fa-twitter" aria-hidden="true" />
                                    <span className="sr-only">Twitter</span>
                                </Link>
                                <Link to="https://facebook.com">
                                    <i className="fab fa-facebook" aria-hidden="true" />
                                    <span className="sr-only">Facebook</span>
                                </Link>
                                <Link to="https://pinterest.com">
                                    <i className="fab fa-pinterest-p" aria-hidden="true" />
                                    <span className="sr-only">Pinterest</span>
                                </Link>
                                <Link to="https://instagram.com">
                                    <i className="fab fa-instagram" aria-hidden="true" />
                                    <span className="sr-only">Instagram</span>
                                </Link>
                            </div>
                            {/* <p className="main-footer__copyright">
                                © Copyright <span className="dynamic-year" /> by JobPaw-2024
                            </p> */}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Main