import React from 'react';
import { Link } from 'react-router-dom';
import Bgimg from '../../assets/images/shapes/service-bg-1.jpg';
import Service1 from '../../assets/images/services/sv-1.png';
import Service2 from '../../assets/images/services/sv-2.png';
import Service3 from '../../assets/images/services/sv-3.png';

const services = [
    {
        image: Service1,
        icon: "icon-consulting",
        company: "Tiger IT",
        title: "HR Consulting",
        link: "/service-consulting",
        text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
    },
    {
        image: Service2,
        icon: "icon-controller",
        company: "Brain station",
        title: "Technical operator",
        link: "/service-resources",
        text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
    },
    {
        image: Service2,
        icon: "icon-policy",
        company: "Enosis solution",
        title: "Frontend developer",
        link: "/service-resources",
        text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod"
    }
];

function Service() {
    return (
        <div>
            <section className="service-one" style={{ backgroundImage: `url(${Bgimg})` }}>
                <div className="container">
                    <div className="sec-title text-center">
                        <h6 className="sec-title__tagline">Our Jobs</h6>
                        <h3 className="sec-title__title">
                            Find Your Next Job <br />
                            Be gladden
                        </h3>
                    </div>
                    <div className="row gutter-y-30">
                        {services.map((service, index) => (
                            <div key={index} className="col-md-6 col-lg-4">
                                <div className="service-one-card service-card-two" data-wow-duration="1500ms" data-wow-delay={`${index}ms`}>
                                    <div className="service-one-card__image">
                                        <img src={service.image}  alt={service.title} />
                                    </div>
                                    <div className="service-one-card__content">
                                        <div className="service-one-card__icon">
                                            <i className={service.icon} />
                                            <Link to="/services" className="service-one-card__cat">
                                                {service.company}
                                            </Link>
                                        </div>
                                        <h3 className="service-one-card__title">
                                            <Link to={service.link}>{service.title}</Link>
                                        </h3>
                                        <p className="service-one-card__text">
                                            {service.text}
                                        </p>
                                    </div>
                                    <Link to={service.link} className="service-one-card__link">
                                        View details
                                        <i className="icon-right-arrow" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Service;
