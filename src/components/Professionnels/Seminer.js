import { Link } from "react-router-dom";
import { seminarItems } from "../Menhomeone/Seminer";
import { createSlug } from "../Menjobs/Jobfrom";
import Breadcrumb from "../Breadcrumb/Main";

const Seminer = () => {
  return (
    <div>
      <Breadcrumb subtitle="Home / Professionnels " title=" Seminer" />
      <div className="container my-5">
        <div className="sec-title">
        Les professionnels et les entreprises ont accès à différentes informations (offres d’emploi, statistiques sur l’emploi, potentialités du pays, projets du budget, etc.) pour choisir et offrir des formations continues adaptées.  <br/><br/>

Ce répertoire de toutes les formations continues et séminaires offerts en Haïti les aide à élaborer un plan de formation et un plan de développement personnel. <br/> <br/>

Ils auront à l’avance un calendrier de toutes les formations et peuvent plus facilement participer. Ce qui augmentera, du coup, la visibilité et la rentabilité des formations. <br/> <br/>

Vous pourrez leur donner cette opportunité <Link to="/login"> en cliquant ici </Link> et en publiant vos séminaires et formations continues dans notre répertoire. <br/>
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
                  <h3 className="service-one-card__title">{service.title}</h3>
                  <p className="service-one-card__text">
                    {service.description.slice(0, 70)}...
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

export default Seminer;
