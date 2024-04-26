import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/professionnels/cvpaw/cv.png";
import img3 from "../../assets/images/professionnels/cvpaw/job.png";
import img4 from "../../assets/images/professionnels/cvpaw/memoire.png";
import img5 from "../../assets/images/professionnels/cvpaw/modify.png";
import img6 from "../../assets/images/professionnels/cvpaw/list.png";
import img7 from "../../assets/images/professionnels/cvpaw/suscribe.png";

const data = [
  {
    img: img1,
    name: "Voir mon CVPaw",
  },
  {
    img: img1,
    name: "Créer un CVPaw",
  },
  {
    img: img5,
    name: "Modifier mon CVPaw",
  },
  {
    img: img7,
    name: "S’abonner aux offres d’emploi",
  },
  {
    img: img3,
    name: "Appliquer pour un poste",
  },
  {
    img: img6,
    name: "Lister mes applications",
  },
  {
    img: img4,
    name: "Publier un article/mémoire",
  },
  {
    img: img4,
    name: "Lister mes articles",
  },
];

const CareerUnCVpaw = () => {
  return (
    <div className="container my-5">
      <h2>Welcome, Mehetaj Khandaker</h2>
      <p>
        From this interface, you can update your profile. You will discover a
        universe of opportunities:
        <Link>
          create professional CV, find profession, job, internship, seminar,
          coaching, statistics, scholarship, etc.
        </Link>
      </p>
      <p>
        The platform guides you in your decisions:
        <Link>
          professional guidance, professional integration, entrepreneurship,
          personal development,
        </Link>{" "}
        etc.
      </p>
      <div className="row gutter-y-30">
        {data.map((feature, index) => (
          <div
            key={index}
            className="col-lg-3 col-md-6 wow fadeInUp"
            data-wow-delay={`${100 * (index + 1)}ms`}
          >
            <div className="feature-one__item text-center">
              <div className="feature-one__item__img3">
                <img
                  width={100}
                  height={100}
                  src={feature.img}
                  alt="hiredots"
                />
              </div>
              <div className="feature-one__item__content">
                <div className="feature-one__item__ball" />
                <p
                  style={{ fontSize: "18px" }}
                  className="feature-one__item__title"
                >
                  {feature.name}
                </p>
                <Link
                  to={feature.path}
                  style={{ height: "65px" }}
                  className="hiredots-btn"
                >
                  <span>{feature.name}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <h6 className="m-2 mt-5">
        Nous vous invitons à faire partie des contributeurs de la plateforme
        JobPaw en:
      </h6>

      <ul className="">
        <li>
          Partageant, avec le bouton share, les pages de JobPaw avec vos
          contacts e-mail, Facebook, Twitter, Instagram, LinkedIn, etc.
        </li>
        <li>Commentant, avec Disqus, les pages de JobPaw.com.</li>
        <li>Suivant nos pages Facebook, Twitter, Instagram, LinkedIn</li>
      </ul>
    </div>
  );
};

export default CareerUnCVpaw;
