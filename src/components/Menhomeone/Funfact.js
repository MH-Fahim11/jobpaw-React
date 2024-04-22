import pic_1 from "../../assets/images/5x/7.jpg";
import pic_2 from "../../assets/images/5x/5.jpg";
import pic_3 from "../../assets/images/5x/4.jpg";
import pic_4 from "../../assets/images/5x/3.jpg";
import pic_5 from "../../assets/images/5x/11.jpg";
import pic_6 from "../../assets/images/5x/2.jpg";
import pic_7 from "../../assets/images/5x/15.jpg";
import pic_8 from "../../assets/images/5x/1.jpg";
import pic_9 from "../../assets/images/5x/6.jpg";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Publier offre d emploi",
    image: pic_1,
    link: "/professionnels/find-job",
  },
  {
    name: "Publier appel d offres",
    image: pic_2,
    link: "/professionnels",
  },
  {
    name: "Publier saminaire",
    image: pic_3,
    link: "/projets",
  },
  {
    name: "Recruiter via head Hunter",
    image: pic_4,
    link: "/find-job",
  },
  {
    name: "Monter son enterprise",
    image: pic_5,
    link: "/find-job",
  },
  {
    name: "Creer un CVpaw",
    image: pic_6,
    link: "/find-job",
  },
  {
    name: "Publier Memoire",
    image: pic_7,
    link: "/find-job",
  },
  {
    name: "Utiliser JobPaw",
    image: pic_8,
    link: "/find-job",
  },
  {
    name: "Statistiques Oppurtunites",
    image: pic_9,
    link: "/find-job",
  },
];

function Funfact() {
  return (
    <div className="my-5 container">
      <div className="sec-title text-center">
        <h6 className="sec-title__tagline">Services</h6>
        <h3 className="sec-title__title">How we can help you</h3>
      </div>
      <div className="row gutter-y-30">
        {data.map((item, index) => {
          return (
            <Link to={item.link} key={index} className="col-md-6 col-lg-4">
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  width={100}
                  height={100}
                  src={item?.image}
                  alt={item.name}
                />
              </div>
              <h4 className="text-center">{item?.name}</h4>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Funfact;
