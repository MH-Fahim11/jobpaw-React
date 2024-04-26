import React from "react";
import { Link } from "react-router-dom";

import Project1 from "../../assets/images/professionnels/stat.png";
import Project2 from "../../assets/images/professionnels/pro.png";
import Project3 from "../../assets/images/professionnels/cv.png";
import Project4 from "../../assets/images/professionnels/offreemploi.png";
import Project5 from "../../assets/images/professionnels/coach.png";
import Project6 from "../../assets/images/professionnels/seminair.png";
import Project7 from "../../assets/images/professionnels/creation.png";
import Project8 from "../../assets/images/professionnels/bourse.png";
import Project9 from "../../assets/images/professionnels/search.png";
import icon1 from '../../assets/images/5x/1.jpg'
import icon2 from '../../assets/images/5x/2.jpg'
import icon3 from '../../assets/images/5x/5.jpg'
import icon4 from '../../assets/images/5x/7.jpg'
import icon5 from '../../assets/images/5x/8.jpg'
import icon6 from '../../assets/images/5x/9.jpg'
import icon7 from '../../assets/images/5x/10.jpg'
import icon8 from '../../assets/images/5x/11.jpg'
import icon9 from '../../assets/images/5x/12.jpg'

function Projectone() {
  // Array of project image paths

  const prolinks = [
    {
      title: "Voir statistiques opportunités",
      img: Project1,
      path: "/",
      icon: icon1,
    },
    {
      title: "Choisir université ou école",
      img: Project2,
      path: "/professionnels/choose-school-or-universiry",
      icon: icon2,
    },
    {
      title: "Créer un CVPaw",
      img: Project3,
      path: "/professionnels/cv-paw",
      icon: icon3,
    },
    {
      title: "Trouver un emploi",
      img: Project4,
      path: "/professionnels/find-job",
      icon: icon4,
    },
    {
      title: "Avoir un coaching",
      img: Project5,
      path: "/professionnels/choose-school-or-universiry",
      icon: icon5,
    },
    {
      title: "Trouver formation continue",
      img: Project6,
      path: "/professionnels/seminer",
      icon: icon6,
    },
    {
      title: "Monter son entreprise",
      img: Project7,
      path: "/professionnels/choose-school-or-universiry",
      icon: icon7,
    },
    {
      title: "Trouver bourse d’étude",
      img: Project8,
      path: "/professionnels/choose-school-or-universiry",
      icon: icon8,
    },
    {
      title: "Consulter travaux recherche",
      img: Project9,
      path: "/professionnels/consult-research-work",
      icon: icon9,
    },
  ];
  return (
    <div>
      <section className="feature-one">
        <div className="container">
          <div className="row gutter-y-30">
            {prolinks.map((feature, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${100 * (index + 1)}ms`}
              >
                <div className="feature-one__item text-center">
                  <div className="feature-one__item__img2">
                    <img src={feature.img} alt="hiredots" />
                  </div>
                  <div className="feature-one__item__content">
                    <div className="feature-one__item__ball" />
                    <div className="feature-one__item__icon">
                      <img className="rounded-circle" width={100} height={100} src={feature.icon} alt="icon"/>
                    </div>
                    <h3 className="feature-one__item__title">
                      {feature.title}
                    </h3>
                    <p className="feature-one__item__text">{feature.text}</p>
                    <Link to={feature.path} className="hiredots-btn">
                      <span>{feature.title}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projectone;
