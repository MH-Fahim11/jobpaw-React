import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import project1 from "../../assets/images/project/project-1-1.jpg";
import project2 from "../../assets/images/project/project-1-2.jpg";
import project3 from "../../assets/images/project/project-1-3.jpg";
import project4 from "../../assets/images/project/project-1-4.jpg";
import project5 from "../../assets/images/project/project-1-5.jpg";
import project6 from "../../assets/images/project/project-1-6.jpg";

const tenderItems = [
  {
    id: 1,
    title: "Website Redesign Project",
    description:
      "Inviting proposals for the redesign of our company website. Deadline for submission...",
    organization: "XYZ Organization",
    deadline: "May 1, 2024",
    link: "/tenders/website-redesign",
  },
  {
    id: 2,
    title: "Software Development Contract",
    description:
      "Seeking proposals for the development of a custom software solution...",
    organization: "ABC Inc.",
    deadline: "April 25, 2024",
    link: "/tenders/software-development",
  },
  {
    id: 3,
    title: "Freelance video editor",
    description:
      "Seeking proposals for the editor of a custom video decoration...",
    organization: "ABC Inc.",
    deadline: "April 25, 2024",
    link: "/tenders/software-development",
  },
];

const Projectslider = {
  dots: false,
  arrows: false,
  slidesToShow: 3.2,
  centerMode: true,
  centerPadding: "60px",
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        margin: 30,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        margin: 30,
      },
    },
  ],
};

const projectImages = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
];

function Projectone() {
  return (
    <div>
      <div className="project-one container">
        <div className="">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our Tenders</h6>
            <h3 className="sec-title__title">Recent Tenders</h3>
          </div>
        </div>
        <div className="row gutter-y-30">
          {tenderItems.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="service-one-card service-card-two"
                data-wow-duration="1500ms"
                data-wow-delay={`${index}ms`}
              >
                <div className="service-one-card__image" style={{paddingBottom:"10px"}}>
                </div>
                <div className="service-one-card__content">
                  <h3 style={{height:"60px"}} className="service-one-card__title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p style={{height:"50px"}} className="service-one-card__text">
                    {service.description}
                  </p>
                </div>
                <Link to={service.link} className="service-one-card__link">
                  Apply now
                  <i className="icon-right-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projectone;

/**
 * 
 *  <div className={styles.card}>
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p>Organization: {organization}</p>
      <p>Deadline: {deadline}</p>
      <a href={link}>Learn More</a>
    </div>
*/
