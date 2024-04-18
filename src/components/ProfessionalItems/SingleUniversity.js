import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { universitylist } from "./ChooseUniversity";
import Breadcrumb from "../Breadcrumb/Main";

const SingleUniversity = () => {
  const { universityId } = useParams();
  const [University, setUniversity] = useState(null);
  useEffect(() => {
    const selectedUniversity = universitylist.find(
      (university) => university.link === universityId
    );

    setUniversity(selectedUniversity);
  }, [universityId]);

  if (!University) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Breadcrumb
        subtitle="Home / Professionnels/ Choose school or university"
        title={University?.name}
      />
      <div className="container my-5">
        <div
          style={{
            fontFamily: "Arial, sans-serif",
            margin: "auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "20px" }}>
            <img
              src={University.logo}
              alt="University Logo"
              style={{ width: "200px", borderRadius: "10px" }}
            />
          </div>
          <h1
            style={{ textAlign: "center", color: "#333", marginBottom: "10px" }}
          >
            {University.name}
          </h1>
          <div style={{ marginBottom: "20px" }}>
            <p>
              <strong>Type of Training:</strong> {University.type_training}
            </p>
            <p>
              <strong>Phone:</strong> {University.phone}
            </p>
            <p>
              <strong>Address:</strong> {University.address}
            </p>
            <p>
              <strong>Acronym:</strong> {University.acronym}
            </p>
            <p>
              <strong>Website:</strong>{" "}
              <a href={University.website}>{University.website}</a>
            </p>
            <p>
              <strong>Country:</strong> {University.country}
            </p>
            <p>
              <strong>Fax:</strong> {University.fax}
            </p>
            <p>
              <strong>Email:</strong> {University.email}
            </p>
          </div>
          <div
            style={{
              backgroundColor: "#f9f9f9",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <div className="sec-title text-center">
              <h6 className="sec-title__tagline">Description</h6>
            </div>
            <p>{University.description}</p>
          </div>
          <div style={{ marginTop: "20px" }}>
            <div className="sec-title text-center">
              <h6 className="sec-title__tagline">Training program</h6>
            </div>
            <div className="row gutter-y-30">
              {University.training_program.map((program, index) => (
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
                        <span>{program.speciality}</span>
                      </h3>
                      <p className="service-one-card__text">{program.domain}</p>
                      <div
                        style={{
                          marginTop: "10px",
                          display: "flex",
                          flexDirection: "column",
                          gap: "5px",
                        }}
                      >
                        <span>Date: {program.duration}</span>
                        <span>Time: {program.type_diploma}</span>
                      </div>
                    </div>
                    <span className="service-one-card__link">
                      Book now
                      <i className="icon-right-arrow" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleUniversity;
