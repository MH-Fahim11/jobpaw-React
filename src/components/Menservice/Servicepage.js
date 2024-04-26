import React from "react";
import { Link } from "react-router-dom";

import Service1 from "../../assets/images/services/about.png";
import Service2 from "../../assets/images/services/contact.png";
import Service3 from "../../assets/images/services/faq.png";
import Service4 from "../../assets/images/services/forum.png";
import Service5 from "../../assets/images/services/bannierepub.png";
import Service6 from "../../assets/images/services/creation.png";

function Servicepage() {
  const services = [
    {
      image: Service1,
      title: "A propos de JobPaw",
      path: "/about",
    },
    {
      image: Service2,
      title: "Contactez-nous",
      path: "/professionnels/cv-paw",
    },
    {
      image: Service3,
      title: "Questions-Réponses",
      path: "/faq",
    },
    {
      image: Service4,
      title: "Témoignage",
      path: "/testimonials",
    },
    {
      image: Service5,
      title: "Mettre publicité sur JobPaw",
      path: "/services/advertise-on-jobpaw",
    },
    {
      image: Service6,
      title: "Cartographie des opportunités",
    },
  ];

  return (
    <section className="service-one service-one--page">
      <div className="container">
        <div className="row gutter-y-30">
          {services.map((feature, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (index + 1)}ms`}
            >
              <div className="feature-one__item text-center">
                <div className="feature-one__item__img2">
                  <img src={feature.image} alt="hiredots" />
                </div>
                <div className="feature-one__item__content">
                  <div className="feature-one__item__ball" />
                  <div className="feature-one__item__icon">
                    <span className={feature.icon} />
                  </div>
                  <h3 className="feature-one__item__title">{feature.title}</h3>
                  <Link to={feature.path} className="hiredots-btn">
                    <span>Details</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicepage;
