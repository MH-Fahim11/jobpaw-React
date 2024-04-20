import React from "react";
import { Link } from "react-router-dom";
import Bgimg from "../../assets/images/shapes/service-bg-1.jpg";
import Service1 from "../../assets/images/services/sv-1.png";
import Service2 from "../../assets/images/services/sv-2.png";
import Service3 from "../../assets/images/services/sv-3.png";
import { createSlug, jobslist } from "../Menjobs/Jobfrom";

const services = [
  {
    image: Service1,
    icon: "icon-consulting",
    company: "Tiger IT",
    title: "HR Consulting",
    link: "/service-consulting",
    text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod",
  },
  {
    image: Service2,
    icon: "icon-controller",
    company: "Brain station",
    title: "Technical operator",
    link: "/service-resources",
    text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod",
  },
  {
    image: Service2,
    icon: "icon-policy",
    company: "Enosis solution",
    title: "Frontend developer",
    link: "/service-resources",
    text: "Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod",
  },
];

function Service() {
  return (
    <div>
      <section
        className="service-one"
        style={{ backgroundImage: `url(${Bgimg})` }}
      >
        <div className="container">
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our Jobs</h6>
            <h3 className="sec-title__title">
              Find Your Next Job <br />
              Be gladden
            </h3>
          </div>
          <div className="row gutter-y-30">
            {jobslist.slice(0, 3).map((job, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div
                  className="service-one-card service-card-two"
                  data-wow-duration="1500ms"
                  data-wow-delay={`${index}ms`}
                >
                  <div className="service-one-card__image">
                    <img src={job.image} alt={job.title} />
                  </div>
                  <div className="service-one-card__content">
                    <div style={{display:"flex", justifyContent:"space-between"}} className="service-one-card__icon">
                      <img style={{width:"50px", height:"50px"}} src={job.logo} alt={job.company} />
                      <Link to="/services" className="service-one-card__cat">
                        {job.category}
                      </Link>
                    </div>
                    <h3
                      style={{ height: "50px" }}
                      className="service-one-card__title"
                    >
                      <Link to={job.link}>{job.title}</Link>
                    </h3>
                    <p className="service-one-card__text">
                      Company: {job.company}
                    </p>
                    <p className="service-one-card__text">
                      Deadline: {job.deadline}
                    </p>
                  </div>
                  <Link
                    to={`/professionnels/find-job/${createSlug(job?.title)}`}
                    className="service-one-card__link"
                  >
                    Read More
                    <i className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link to={`/professionnels/find-job/`} className="hiredots-btn">
            View more jobs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service;
