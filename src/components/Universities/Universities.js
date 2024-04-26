import img1 from "../../assets/images/universities/formation.png";
import img2 from "../../assets/images/universities/seminaire.png";
import img3 from "../../assets/images/universities/inovation.png";
import img4 from "../../assets/images/universities/diplome.png";
import img5 from "../../assets/images/universities/memoire.png";
import img6 from "../../assets/images/universities/creation.png";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Main";
import icon1 from '../../assets/images/5x/1.jpg'
import icon2 from '../../assets/images/5x/2.jpg'
import icon3 from '../../assets/images/5x/5.jpg'
import icon4 from '../../assets/images/5x/7.jpg'
import icon5 from '../../assets/images/5x/8.jpg'
import icon6 from '../../assets/images/5x/9.jpg'
// import icon7 from '../../assets/images/5x/10.jpg'
// import icon8 from '../../assets/images/5x/11.jpg'
// import icon9 from '../../assets/images/5x/12.jpg'
// import icon10 from '../../assets/images/5x/13.jpg'
// import icon11 from '../../assets/images/5x/14.jpg'
// import icon12 from '../../assets/images/5x/15.jpg'

const data = [
  {
    name: "Adapter les formations au marché",
    image: img1,
    link: "",
    icon: icon1,
  },
  {
    name: "Promouvoir son université ou son école",
    image: img2,
    link: "/professionnels/choose-school-or-universiry",
    icon: icon2,
  },
  {
    name: "Stimuler recherche et innovation",
    image: img3,
    link: "",
    icon: icon3,
  },
  {
    name: "Valoriser les diplomés",
    image: img4,
    link: "",
    icon: icon4,
  },
  {
    name: "Partager les travaux de recherche",
    image: img5,
    link: "/professionnels/consult-research-work",
    icon: icon5,
  },
  {
    name: "Opportunités d’affaires",
    image: img6,
    link: "",
    icon: icon6,
  },
];

const Universities = () => {
  return (
    <div>
      <Breadcrumb subtitle="Home" title="Universities" />
      <div className="row gutter-y-30 container mx-auto my-5">
        {data.map((feature, index) => (
          <div
            key={index}
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay={`${100 * (index + 1)}ms`}
          >
            <div className="feature-one__item text-center">
              <div className="feature-one__item__img2">
                <img src={feature?.image} alt="hiredots" />
              </div>
              <div className="feature-one__item__content">
                <div className="feature-one__item__ball" />
                <div className="feature-one__item__icon">
                  {/* <span className={feature.iconClass} /> */}
                  <img className="rounded-circle" width={100} height={100} src={feature.icon} alt="icon"/>
                </div>
                <h3 className="feature-one__item__title">{feature.name}</h3>
                <Link to={feature.link} style={{height:"60px"}} className="hiredots-btn">
                  <span>{feature.name}</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Universities;
