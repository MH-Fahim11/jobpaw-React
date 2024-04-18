import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Main";

export const universitylist = [
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
  {
    logo: "https://www.jobpaw.com/private/logoetablissement/418.png",
    name: "Bee Homemaking School",
    link:"bee-homemaking-school",
    type_training: "Technical",
    phone: "2257 7260",
    address: "Rue C. Mayard # 207, Pétion-Ville, Port-au-Prince, West",
    acronym: "-",
    website: "www.beehomamakingschool.com",
    country: "Haiti",
    fax: "999 00976 54",
    email: "info@bee.com",
    description: "Diploma in Cooking, Pastry, Women's Confectionery Cutter",
    training_program: [
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
      {
        speciality: "Women's confect",
        domain: "Arts, culture, design, fashion",
        duration: "2",
        type_diploma: "Technical",
        graduates: "303",
      },
    ],
  },
];

export const ChooseUniversity = () => {
  return (
    <div className="page-wrapper mb-5">
      <Breadcrumb
        subtitle="Home / Professionals"
        title="Choose school or university"
      />
      <div className="container">
        <div className="row gutter-y-30 mt-5">
          {universitylist.map((school, index) => (
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
                  <h3
                    style={{ height: "40px" }}
                    className="service-one-card__title"
                  >
                    <Link to={school.link}>{school.name}</Link>
                  </h3>
                  <p
                    style={{ height: "50px" }}
                    className="service-one-card__text"
                  >
                    {school.description}...
                  </p>
                </div>
                <Link to={school.link} className="service-one-card__link">
                  View details
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
