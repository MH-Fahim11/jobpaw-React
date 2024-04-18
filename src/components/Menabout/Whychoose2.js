import React from 'react'
import { Link } from 'react-router-dom'
import Chooseimg1 from '../../assets/images/resources/about-circle-1.png'
import Chooseimg2 from '../../assets/images/resources/about-circle-2.png'
import ChooseShape from '../../assets/images/shapes/about-circle-shape.png'

function Whychoose2() {

     const circleTextOptions = {
        radius: 92,
        forceWidth: true,
        forceHeight: true
    };

    return (
        <div>
            <section className="why-choose-two">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="why-choose-two__image">
                                <img src={Chooseimg1} alt="" />
                                <img src={Chooseimg2} className="why-choose-two__image__two" alt="" />
                                <img src={ChooseShape} className="why-choose-two__image__shape" alt="" />
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
                                    <h6 className="sec-title__tagline">why jobpaw?</h6>
                                    <h3 className="sec-title__title">
                                    Pourquoi utiliser JobPaw?
                                    </h3>
                                </div>
                                <p className="why-choose-two__text">
                                Let's help reduce poverty and inequalityby sharing information about opportunitieswith businesses, professionals and universities. The interactions between them will do the rest by generating a socially and economically acceptable balance .Let's continue publishing: <br/>

                                </p>
                                <p className="why-choose-two__text">
                                    {/* <span className='why-choose-two__feature'><i className="fas fa-check-circle" /><b>Créée en 2008, JobPaw est devenue un écosystème de référence en Haiti sur le marché (recrutement, achats de biens et de services, formations, développement personnel, Publicités et autres opportunités, etc.) avec les résultats suivants :</b></span><br/>

                                    
                                    <span className='why-choose-two__feature'><b ><i className="fas fa-check-circle" />Ces entités sont réparties en :</b></span><br/>

                                    
                                    <span className='why-choose-two__feature'><b><i className="fas fa-check-circle" />Avec plus de 20,000 visiteurs par jour, la plateforme JobPaw offre ainsi un moyen moderne de :</b></span><br/> */}

                                    
                                <ul className="why-choose-two__feature   ">
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Appels d’offres et Consultations
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Offres d’emplois et Stages
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Séminaires
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Mémoires et Travaux de recherche
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Plans annuels de passation de marchés
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Bourses d’études
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Formation continue
                                    </li>
                                    <li>
                                        <i className="fas fa-check-circle" />
                                        Projets du budget et Stratés
                                    </li>
                                </ul>
                                {/* <div className="why-choose-two__progress col-xl-6">
                                    <h4 className="why-choose-two__progress__title">Recruitments</h4>
                                    <div className="why-choose-two__progress__bar" >
                                        <div className="why-choose-two__progress__inner count-bar" style={{ width: "89%" }}>
                                            <div className="why-choose-two__progress__inner count-bar counted" data-percent="89%" >
                                                <div className="why-choose-two__progress__number count-text">89%</div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                                <Link to="/services" className="hiredots-btn">
                                    <span>Discover More</span>
                                </Link>

                    </p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Whychoose2