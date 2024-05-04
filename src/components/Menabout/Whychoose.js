import React from "react";
import { Link } from "react-router-dom";
// import Chooseimg1 from '../../assets/images/resources/about-circle-1.png'
import Chooseimg1 from "../../assets/images/shapes/benefit2.png";
// import Chooseimg2 from '../../assets/images/resources/about-circle-2.png'
import ChooseShape from "../../assets/images/shapes/about-circle-shape.png";

function Whychoose() {
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
                </p>
              </div>
            </div>
          </div>
          <p className="why-choose-two__text">
            <br />
            <span className="why-choose-two__feature">
              <i className="fas fa-check-circle" />
              <b>
                Créée en 2008, JobPaw est devenue un écosystème de référence en
                Haiti sur le marché (recrutement, achats de biens et de
                services, formations, développement personnel, Publicités et
                autres opportunités, etc.) avec les résultats suivants :
              </b>
            </span>

            <ul>
              <li>
                Plus de 335 universités et écoles répertoriées reconnues par
                l'Etat et 48,000 diplômés annuels;
              </li>
              <li>Plus de 50,000 professionnels qualifiés enregistrés;</li>
              <li>
                Plus de 3,500 entités postant plus de 15,000 offres d'emploi et
                plus de 3,000 appels d'offres et plus de 250 séminaires de
                formation continue et, recrutant plus de 14,000 professionnels.
              </li>
            </ul>

            <span className="why-choose-two__feature">
              <b>
                <i className="fas fa-check-circle" />
                Ces entités sont réparties en :
              </b>
            </span>

            <ul>
              <li>
                Entreprises privées : Dgicel, Natcom, Sogebank, Barbancourt,
                Bracour, UniQ, FonKoZe, Group Croissance, DHL, REBO, Solutions,
                Transversal, Profin, Agribel, Brown Consulting, Gildan, etc.
              </li>
              <li>
                Organisations internationales : US Embassy, World Bank, BID,
                Union Européenne, USAID, PNUD, FAO, UNESCO, etc.
              </li>
              <li>
                Ministères et Projets : MICT, MSPP, MCI, MEF, MARNDR, MENFP,
                etc.
              </li>
              <li>
                ONG : CARE, CRS, Chemonics, DAI, Compassion, Concern Worldwide,
                Croix-Rouge, Goal, Plan International, Save the Children, etc.
              </li>
              <li>
                Plus de 720 travaux de recherche sur Haiti; plus de 150 bourses
                d'études;
              </li>
              <li>
                Plus de 500 documents de stratégies et politiques sectorielles;
                plus de 81 potentialités et produits typiques;
              </li>
              <li>
                Plus de 150,000 projets d'investissement dans les 10
                départements d'Haiti.
              </li>
            </ul>
            <span className="why-choose-two__feature">
              <b>
                <i className="fas fa-check-circle" />
                Avec plus de 20,000 visiteurs par jour, la plateforme JobPaw
                offre ainsi un moyen moderne de :
              </b>
            </span>

            <ul>
              <li>
                faire du recrutement de professionnels; des achats de biens et
                services; des publications de formations et séminaires, de
                bourses d'études, de travaux de recherche; de la promotion des
                biens et services des entreprises, des universités, etc.
              </li>
              <li>
                connecter les acteurs (entreprises, professionnels, universités)
                entre eux et aux opportunités et, réduire ainsi les barrières au
                succès collectif et à la création de richesse collective.
              </li>
            </ul>
            <ul className="why-choose-two__feature   ">
              <li>
                <i className="fas fa-check-circle" />
                Understand Your Needs
              </li>
              <li>
                <i className="fas fa-check-circle" />
                Find the Perfect Candidate
              </li>
            </ul>
            <div className="why-choose-two__progress col-xl-6">
              <h4 className="why-choose-two__progress__title">Recruitments</h4>
              <div className="why-choose-two__progress__bar">
                <div
                  className="why-choose-two__progress__inner count-bar"
                  style={{ width: "89%" }}
                >
                  <div
                    className="why-choose-two__progress__inner count-bar counted"
                    data-percent="89%"
                  >
                    <div className="why-choose-two__progress__number count-text">
                      89%
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/services" className="hiredots-btn">
              <span>Discover More</span>
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Whychoose;
