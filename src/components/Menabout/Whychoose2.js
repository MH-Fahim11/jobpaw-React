import React from "react";
import { Link } from "react-router-dom";
// import Chooseimg1 from '../../assets/images/resources/about-circle-1.png'
import Chooseimg1 from "../../assets/images/shapes/benefit2.png";
// import Chooseimg2 from '../../assets/images/resources/about-circle-2.png'
import ChooseShape from "../../assets/images/shapes/about-circle-shape.png";
import ceo_img from "../../assets/images/resources/1.jpg";

function Whychoose2() {
  const circleTextOptions = {
    radius: 92,
    forceWidth: true,
    forceHeight: true,
  };

  return (
    <div>
      <section className="why-choose-two">
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="why-choose-two__image">
                <img src={Chooseimg1} alt="" />
                {/* <img src={Chooseimg2} className="why-choose-two__image__two" alt="" /> */}
                <img
                  src={ChooseShape}
                  className="why-choose-two__image__shape"
                  alt=""
                />
                <div className="why-choose-two__circle">
                  <span className="video-popups">
                    <i className="icon-talent-search" />
                  </span>
                  <div className="curved-circle">
                    <div
                      className="curved-circle--item"
                      data-circle-text-options='{
                                                "radius": 92,
                                                "forceWidth": true,
                                                "forceHeight": true
                                            }'
                    >
                      {/* new human resources theme */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="why-choose-two__content">
                <div className="sec-title text-left">
                  <h6 className="sec-title__tagline">about jobpaw</h6>
                  <h3 className="sec-title__title">
                    Reliable &amp; Trusted <br /> Recruitment Org
                  </h3>
                </div>
                <p className="why-choose-two__text">
                  La plateforme JobPaw crée un pont, un lien entre formation,
                  production et consommation en connectant les entreprises , ,
                  universités et professionnels entre eux et aux opportunités :
                  offres d’emplois, appels d’offres, formations, séminaires,
                  ressources humaines, travaux de recherche, projets et
                  potentialités par région, etc. Elle fait interagir les acteurs
                  entre eux pour bénéficier des opportunités directes et
                  dérivées. Elle réduit ainsi les barrières au succès collectif
                  et à la création de richesse collective. <br />
                  <div style={{display:"flex", alignItems:"center", gap:"40px", marginTop:"20px"}}>
                    <div style={{display:"flex", alignItems:"center", gap:"5px"}}>
                      <img width={75} height={75} style={{borderRadius:"50%"}} src={ceo_img} alt="Images" />
                      <p>
                        <span style={{fontSize:"18px"}}>Raisul abir</span>
                        <br/>
                        CO Founder
                      </p>
                    </div>
                    <Link to="/services" className="hiredots-btn">
                      <span>Discover More</span>
                    </Link>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whychoose2;
