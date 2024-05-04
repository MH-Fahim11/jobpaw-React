import React from "react";
import { Link } from "react-router-dom";

import Service1 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0036.jpg";
import Service2 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0038.jpg";
import Service3 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0039.jpg";
import Service4 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0042.jpg";
import Service5 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0045.jpg";
import Service6 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0046.jpg";
import icon1 from "../../assets/images/5x/1.jpg";
import icon2 from "../../assets/images/5x/2.jpg";
import icon3 from "../../assets/images/5x/3.jpg";
import icon4 from "../../assets/images/5x/4.jpg";
import icon5 from "../../assets/images/5x/5.jpg";
import icon6 from "../../assets/images/5x/6.jpg";

function Servicepage() {
  const services = [
    {
      image: Service1,
      title: "A propos de JobPaw",
      icon: icon1,
      path: "/about",
    },
    {
      image: Service2,
      title: "Contactez-nous",
      icon: icon2,
      path: "/professionnels/cv-paw",
    },
    {
      image: Service3,
      title: "Questions-Réponses",
      icon: icon3,
      path: "/faq",
    },
    {
      image: Service4,
      title: "Témoignage",
      icon: icon4,
      path: "/testimonials",
    },
    {
      image: Service5,
      title: "Mettre publicité sur JobPaw",
      icon: icon5,
      path: "/services/advertise-on-jobpaw",
    },
    {
      image: Service6,
      title: "Cartographie des opportunités",
      icon: icon6,
      path: "/services/advertise-on-jobpaw",
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
                    <img className="rounded-circle" width={100} height={100} src={feature.icon} alt="Icon" />
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
