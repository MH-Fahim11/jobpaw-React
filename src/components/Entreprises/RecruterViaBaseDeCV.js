import { Link } from "react-router-dom";

const data = [
  {
    image: "https://www.jobpaw.com/pont/img/icones/db.png",
    name: "Recruter via base de CV",
    path: "/login",
  },
  {
    image: "https://www.jobpaw.com/pont/img/icones/hunter.png",
    name: "Recruter via Head Hunter",
    path: "/login",
  },
  {
    image: "https://www.jobpaw.com/pont/img/icones/emploi.png",
    name: "Publier offre d’emploi",
    path: "/login",
  },
];

const RecruterViaBaseDeCV = () => {
  return (
    <div className="container my-5">
      <p>
        Ce répertoire des professionnels et des{" "}
        <Link>consultants donne une idée des ressources humaines</Link> en Haïti
        et dans la Diaspora.
      </p>

      <p>
        Il sert à l’Etat dans le choix et la mise en œuvre de la politique
        publique en éducation.
      </p>

      <p>
        Il aide les entreprises et les organisations à recruter en toute
        discrétion et aussi à élaborer leur plan de recrutement.
      </p>

      <p>
        Il aide les universités/écoles à faire la promotion des diplômés. Vous
        pourrez ajouter ici votre CV.
      </p>
      <div className="row gutter-y-30">
        {data?.map((feature, index) => {
          return (
            <div
              key={index}
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={`${100 * (index + 1)}ms`}
            >
              <div className="feature-one__item text-center">
                <div className="feature-one__item__img2">
                  <img src={feature.image} alt="hiredots" />
                </div>
                <div className="feature-one__item__content">
                  <div className="feature-one__item__ball" />
                  <div className="feature-one__item__icon">
                    <span className={feature.iconClass} />
                  </div>
                  <h3 className="feature-one__item__title">{feature.name}</h3>
                  <p className="feature-one__item__text">{feature.text}</p>
                  <Link to={feature.path} className="hiredots-btn">
                    <span>{feature.name}</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-5">
        Vous pourrez découvrir ici et utiliser la banque de ressources humaines
        pour <Link>recruter en toute discrétion.</Link>
      </p>
      <p>
        Vous pouvez la tester en recherchant un professionnel{" "}
        <Link>
          en filtrant par expérience, spécialité, éducation, université/école,
          etc.
        </Link>
      </p>
    </div>
  );
};

export default RecruterViaBaseDeCV;
