import React from "react";
import { Link } from "react-router-dom";
import Bgimg from "../../assets/images/backgrounds/footer-bg.jpg";
import Logo from "../../assets/images/logos/logo-for-dark.png";
import './footer.css';

function Main() {
  return (
    <div>
      <footer className="main-footer background-black">
        <div
          className="main-footer__bg"
          style={{ backgroundImage: `url(${Bgimg})` }}
        />
        
        {/* Hidden Part of Desktop Footer */}
        <div className="main-footer__top">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-widget footer-widget--about">
                <Link to="/" className="footer-widget__logo">
                  <img src={Logo} width={200} alt="JobPaw Logo" />
                </Link>
                <div style={{marginLeft:"-40px"}} className="footer-widget__social">
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
                    <i className="fa-brands fa-youtube" aria-hidden="true" />
                    <span className="sr-only">YouTube</span>
                  </Link>
                </div>
              </div>

              <div className="footer-widget">
                <h3 className="footer-widget__title">A propos</h3>
                <ul className="list-unstyled footer-widget__links">
                  <li><Link to="/about">A propos de nous</Link></li>
                  <li><Link to="/team">Notre équipe</Link></li>
                  <li><Link to="/testimonials">Témoignages</Link></li>
                  <li><Link to="/faq">FAQ</Link></li>
                  <li><Link to="/contact">Contactez-nous</Link></li>
                </ul>
              </div>

              <div className="footer-widget">
                <h3 className="footer-widget__title">Services</h3>
                <ul className="list-unstyled footer-widget__links">
                  <li><Link to="/recruitment">Recrutement</Link></li>
                  <li><Link to="/purchasing">Achats</Link></li>
                  <li><Link to="/training">Formation</Link></li>
                  <li><Link to="/advertising">Publicité</Link></li>
                </ul>
              </div>

              <div className="footer-widget">
                <h3 className="footer-widget__title">Projets</h3>
                <ul className="list-unstyled footer-widget__links">
                  <li><Link to="/one-pager">One-pager</Link></li>
                  <li><Link to="/masterclass">MasterClass</Link></li>
                  <li><Link to="/siksèpaw">SiksèPaw-SiksèLòtyo</Link></li>
                  <li><Link to="/podcast">Podcast</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Main;
