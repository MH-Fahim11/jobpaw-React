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
          {jobslist.slice(0, 3).map((job, index) => (
            <div key={index} className="jobs-list__card">
              <div className="jobs-list__left">
                <div className="jobs-list__logo">
                  <img src={job.logo} alt="" />
                </div>
                <div className="jobs-list__content">
                  <span className="jobs-list__time">
                    <i className="fas fa-clock" /> Posted 3 days ago
                  </span>
                  <h3 className="jobs-list__title">{job.title}</h3>
                  <span className="jobs-list__location">{job.location}</span>
                </div>
              </div>
              <div className="jobs-list__right">
                <span className="jobs-list__price">
                  <b>$85,000 - $90,000</b> Per Year
                </span>
                <Link
                  to={`/professionnels/find-job/${createSlug(job?.title)}`}
                  className="hiredots-btn"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:"flex", justifyContent:"center", marginTop:"20px"}}>
          <Link to={`/professionnels/find-job/`} className="hiredots-btn">
            View more jobs
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Service;
