import React from 'react';
import { Link } from 'react-router-dom';

import Project1 from '../../assets/images/professionnels/stat.png';
import Project2 from '../../assets/images/professionnels/pro.png';
import Project3 from '../../assets/images/professionnels/cv.png';
import Project4 from '../../assets/images/professionnels/offreemploi.png';
import Project5 from '../../assets/images/professionnels/coach.png';
import Project6 from '../../assets/images/professionnels/seminair.png';
import Project7 from '../../assets/images/professionnels/creation.png';
import Project8 from '../../assets/images/professionnels/bourse.png';
import Project9 from '../../assets/images/professionnels/search.png';

function Projectone() {
    // Array of project image paths
    
    const prolinks = [
        {
            title:"Voir statistiques opportunités",
            img: Project1,
            path: "/",
        },
        {
            title:"Choisir université ou école",
            img: Project2,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Créer un CVPaw",
            img: Project3,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Trouver un emploi",
            img: Project4,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Avoir un coaching",
            img: Project5,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Trouver formation continue",
            img: Project6,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Monter son entreprise",
            img: Project7,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Trouver bourse d’étude",
            img: Project8,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Consulter travaux recherche",
            img: Project9,
            path: "/professionnels/choose-school-or-universiry",
        },
    ]
    return (
        <div>
            <section className="feature-one">
                <div className="container">
                    <div className="row gutter-y-30">
                        {prolinks.map((feature, index) => (
                            <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${100 * (index + 1)}ms`}>
                                <div className="feature-one__item text-center">
                                    <div className="feature-one__item__img2">
                                        <img src={feature.img} alt="hiredots" />
                                    </div>
                                    <div className="feature-one__item__content">
                                        <div className="feature-one__item__ball" />
                                        <div className="feature-one__item__icon">
                                            <span className={feature.iconClass} />
                                        </div>
                                        <h3 className="feature-one__item__title">
                                            {feature.title}
                                        </h3>
                                        <p className="feature-one__item__text">
                                            {feature.text}
                                        </p>
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
