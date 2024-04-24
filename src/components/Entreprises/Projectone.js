import React from 'react';
import { Link } from 'react-router-dom';

import Project1 from '../../assets/images/professionnels/bannierepub.png';
import Project2 from '../../assets/images/professionnels/blastemail.png';
import Project3 from '../../assets/images/professionnels/seminair.png';
import Project4 from '../../assets/images/professionnels/bannierepub.png';
import Project5 from '../../assets/images/professionnels/offreemploi.png';
import Project6 from '../../assets/images/professionnels/cv.png';
import Project7 from '../../assets/images/professionnels/headhunter.png';
import Project8 from '../../assets/images/professionnels/appel.png';
import Project9 from '../../assets/images/professionnels/formation.png';
import Project10 from '../../assets/images/professionnels/re.png';
import Project11 from '../../assets/images/professionnels/search.png';
import Project12 from '../../assets/images/professionnels/projet.png';

function Projectone() {
    // Array of project image paths
    
    const prolinks = [
        {
            title:"Publicité via Bannière web",
            img: Project1,
            path: "/",
        },
        {
            title:"Publicité via Blast e-mail",
            img: Project2,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Publier un séminaire",
            img: Project3,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Publier un appel d’offres",
            img: Project4,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Publier une offre d’emploi",
            img: Project5,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Recruter via Base de CV",
            img: Project6,
            path: "/entreprises/recruter-via-base-de-cv",
        },
        {
            title:"Recruter via Head Hunter",
            img: Project7,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Trouver un appel d’offres",
            img: Project8,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Trouver formation continue",
            img: Project9,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Renforcer son entreprise",
            img: Project10,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Profiter mieux de R&D",
            img: Project11,
            path: "/professionnels/choose-school-or-universiry",
        },
        {
            title:"Bénéficier projets du Budget",
            img: Project12,
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
