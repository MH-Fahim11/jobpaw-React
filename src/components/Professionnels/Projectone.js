import React from 'react';
import { Link } from 'react-router-dom';

import Project1 from '../../assets/images/professionnels/stat.png';
import Project2 from '../../assets/images/professionnels/pro.png';
import Project3 from '../../assets/images/project/project-1-3.jpg';
import Project4 from '../../assets/images/project/project-1-4.jpg';
import Project5 from '../../assets/images/project/project-1-5.jpg';
import Project6 from '../../assets/images/project/project-1-6.jpg';

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
            path: "/",
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
