import { Link } from "react-router-dom";
import { createSlug } from "../Menjobs/Jobfrom";

export const seminarItems = [
  {
    id: 1,
    title: "Introduction to Data Science Workshop",
    description:
      "TechMaster Bootcamp is an intensive training program designed to equip participants with the skills and knowledge needed to excel in the rapidly evolving field of technology. Whether you're a beginner looking to kickstart your career or a seasoned professional aiming to enhance your expertise, our bootcamp offers a comprehensive curriculum tailored to meet your needs.",
    date: "May 10, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "123 Main Street, Cityville",
    link: "/seminars/data-science-workshop",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    description:
      "Learn the latest technologies and frameworks in web development...",
    date: "May 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "456 Elm Street, Townsville",
    link: "/seminars/web-development-bootcamp",
  },
  {
    id: 3,
    title: "Learn about Digital marketing",
    description:
      "Learn the latest technologies and frameworks in web development...",
    date: "May 15, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "456 Elm Street, Townsville",
    link: "/seminars/web-development-bootcamp",
  },
];

const Seminer = () => {
  return (
    <div>
      <div className="container">
        <div className="sec-title text-center">
          <h6 className="sec-title__tagline">Seminers</h6>
          <h3 className="sec-title__title">Join free seminers</h3>
        </div>
        <div className="row gutter-y-30">
          {seminarItems.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div
                className="service-one-card service-card-two"
                data-wow-duration="1500ms"
                data-wow-delay={`${index}ms`}
              >
                <div
                  className="service-one-card__image"
                  style={{ paddingBottom: "10px" }}
                ></div>
                <div className="service-one-card__content">
                  <h3 className="service-one-card__title">
                    <Link to={service.link}>{service.title}</Link>
                  </h3>
                  <p className="service-one-card__text">
                    {service.description.slice(0,70)}...
                  </p>
                  <div
                    style={{
                      marginTop: "10px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "5px",
                    }}
                  >
                    <span>Date: {service.date}</span>
                    <span>Time: {service.time}</span>
                  </div>
                </div>
                <Link
                  to={`/seminars/${createSlug(service.title)}`}
                  className="service-one-card__link"
                >
                  Book now
                  <i className="icon-right-arrow" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/**
 * <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3>{title}</h3>
      <p className={styles.description}>{description}</p>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Location: {location}</p>
      <a href={link}>Learn More</a>
    </div>
 * */

export default Seminer;
