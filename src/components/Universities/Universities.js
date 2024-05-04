import img1 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0025.jpg";
import img2 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0026.jpg";
import img3 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0027.jpg";
import img4 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0029.jpg";
import img5 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0031.jpg";
import img6 from "../../assets/images/34FinalPhotos/IMG-20240320-WA0035.jpg";
import { Link } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Main";
import icon1 from '../../assets/images/5x/1.jpg'
import icon2 from '../../assets/images/5x/2.jpg'
import icon3 from '../../assets/images/5x/5.jpg'
import icon4 from '../../assets/images/5x/7.jpg'
import icon5 from '../../assets/images/5x/8.jpg'
import icon6 from '../../assets/images/5x/9.jpg'
const data = [
  {
    name: "Adapter les formations au marché",
    image: img1,
    icon: icon1,
    link: "",
   
  },
  {
    name: "Promouvoir son université ou son école",
    image: img2,
    icon: icon2,
    link: "/professionnels/choose-school-or-universiry",
 
  },
  {
    name: "Stimuler recherche et innovation",
    image: img3,
    icon: icon3,
    link: "",
 
  },
  {
    name: "Valoriser les diplomés",
    image: img4,
    icon: icon4,
    link: "",
  },
  {
    name: "Partager les travaux de recherche",
    image: img5,
    icon: icon5,
    link: "/professionnels/consult-research-work",

  },
  {
    name: "Opportunités d’affaires",
    image: img6,
    icon: icon6,
    link: "",

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
                  <span className={feature.icon} />
                </div>
                <h3 className="feature-one__item__title">{feature.name}</h3>
                <Link
                  to={feature.link}
                  style={{ height: "60px" }}
                  className="hiredots-btn"
                >
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
