import React from "react";
import { Link } from "react-router-dom";
import { createSlug } from "../Menjobs/Jobfrom";
import img1 from '../../assets/images/34FinalPhotos/IMG-20240320-WA0051.jpg'
import img2 from '../../assets/images/34FinalPhotos/IMG-20240320-WA0056.jpg'
import img3 from '../../assets/images/34FinalPhotos/IMG-20240320-WA0025.jpg'

export const tenderItems = [
  {
    id: 1,
    image: img1,
    title: "Website Redesign Project",
    description:
      "Inviting proposals for the redesign of our company website. The current website lacks modern design elements and user-friendly navigation. We are seeking proposals from experienced web designers and developers to revamp the website and create a more visually appealing and intuitive user experience. The redesign should reflect our brand identity and incorporate responsive design principles to ensure compatibility across various devices. Deadline for submission of proposals is May 1, 2024.",
    organization: "XYZ Organization",
    deadline: "May 1, 2024",
  },
  {
    id: 2,
    image: img3,
    title: "Software Development Contract",
    description:
      "Seeking proposals for the development of a custom software solution to streamline our business processes. The software should automate repetitive tasks, improve data management, and enhance overall efficiency. We require a scalable and secure solution that can adapt to our evolving needs. Interested parties should have a proven track record in software development and provide detailed proposals outlining their approach, timeline, and cost estimates. Deadline for submission of proposals is April 25, 2024.",
    organization: "ABC Inc.",
    deadline: "April 25, 2024",
  },
  {
    id: 3,
    image: img2,
    title: "Freelance Video Editor",
    description:
      "Seeking proposals for the editing of a custom video production. We have raw footage that needs to be edited into a polished final product for promotional purposes. The selected freelancer will be responsible for enhancing the visual and narrative elements of the video to effectively communicate our message and engage our target audience. We require a portfolio demonstrating proficiency in video editing and a creative approach to storytelling. Deadline for submission of proposals is April 25, 2024.",
    organization: "ABC Inc.",
    deadline: "April 25, 2024",
  },
];


function Projectone() {
  return (
    <div className="bg-p">
      <div className="project-one container" >
        
          <div className="sec-title text-center">
            <h6 className="sec-title__tagline">Our Tenders</h6>
            <h3 className="sec-title__title">Recent Tenders</h3>
          </div>
       
        <div className="row gutter-y-30">
          {tenderItems.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="service-one-card service-card-two"
                data-wow-duration="1500ms"
                data-wow-delay={`${index}ms`}
              >
                <div className="service-one-card__image">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="service-one-card__content">
                  <h3
                    style={{ height: "50px" }}
                    className="service-one-card__title"
                  >
                    <Link to={`/tenders/${createSlug(service?.title)}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="service-one-card__text">
                   {service.description.slice(0,50)}...
                  </p>
                  <p className="service-one-card__text">
                    Company: {service.organization}
                  </p>
                </div>
                <Link
                  to={`/tenders/${createSlug(service?.title)}`}
                  className="service-one-card__link"
                >
                  Read More
                  <i className="icon-right-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <Link
            to={`/professionnels/consult-research-work/`}
            className="hiredots-btn"
          >
            More Tendars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Projectone;
