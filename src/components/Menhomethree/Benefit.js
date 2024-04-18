import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Feature1 from '../../assets/images/resources/features-1.jpg'
import Vdoimg from '../../assets/images/shapes/feature-bg-with-shape.png'

function Benefit() {

    // const [show, setshow] = useState(false)

    return (
        <>
            <section className="features-one about-page--feature " style={{ backgroundImage:`url(${Vdoimg})` }}>
                <div className="container ">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="features-one__left">
                                <div className="sec-title text-left">
                                    <h6 className="sec-title__tagline">our benefits</h6>
                                    <h3 className="sec-title__title">Que fait JobPaw?</h3>
                                </div>
                                <p className="features-one__sec-text">
                                Des chercheurs ont démontré que l’inégalité et la pauvreté sont principalement dues au manque ou absence d’opportunités et d’interactions entre entreprises, universités et professionnels.
                                <Link to="https://www.jobpaw.com/private/memoire/757.pdf" 
                                    className="text-danger" >
                                        Lire Waddle (2017).
                                    </Link> <br/>
                                    S’attaquer à ces deux fléaux exige, surtout et avant tout, de connecter ces trois acteurs clés avec les opportunités du marché, de créer ainsi un pont, un lien entre la production, la formation et la consommation en vue de stimuler la création d’emplois et la croissance inclusive. <br/>

C’est exactement ce que fait la plateforme JobPaw.com, à travers le modèle innovant de création de richesse individuelle et collective ci-dessous.<br/>

Pour chaque département ou région, elle donne les potentialités, les projets du budget mis en oeuvre, les entreprises et leurs secteurs d’activités, le nombre et le type de professionnels, les salaires offerts, etc. Ce sont ces informations nécessaires à un entrepreneur ou un investisseur pour décider de monter, renforcer ou financer une entreprise.
                                </p>




                                {/* <div className="features-one__video">
                                    <Link to="#" 
                                    className="video-popup" onClick={() => setshow(true)}>
                                        <i className="fa fa-play" />
                                        Watch our video
                                    </Link>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="features-one__right">
                                <div className="features-one__list">
                                    <i className="icon-recruitment1" />
                                    <h3 className="features-one__list__title">
                                        Sourcing Best <br />
                                        Resource
                                    </h3>
                                    <p className="features-one__list__info">
                                        There are many not of age of rm available the majority.
                                    </p>
                                </div>
                                <div className="features-one__list">
                                    <i className="icon-save-time" />
                                    <h3 className="features-one__list__title">
                                        Save Your <br />
                                        Time &amp; Money
                                    </h3>
                                    <p className="features-one__list__info">
                                        There are many not of age of rm available the majority.
                                    </p>
                                </div>
                                <div className="features-one__list">
                                    <i className="icon-background-check" />
                                    <h3 className="features-one__list__title">
                                        Partners in <br />
                                        Team Building
                                    </h3>
                                    <p className="features-one__list__info">
                                        There are many not of age of rm available the majority.
                                    </p>
                                </div>
                                <div className="hiredots-stretch-element-inside-column">
                                    <div className="features-one__bg">
                                        <img src={Feature1} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* {show &&
                <div className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready" tabIndex={-1}>
                    <div className="mfp-container mfp-s-ready mfp-iframe-holder">
                        <div className="mfp-content" onClick={() => setshow(false)}>
                            <div className="mfp-iframe-scaler">
                                <button title="Close (Esc)" type="button" className="mfp-close" onClick={() => setshow(false)}>
                                    ×
                                </button>
                                <iframe className="mfp-iframe" src="//www.youtube.com/embed/h9MbznbxlLc?autoplay=1" frameBorder={0} allowFullScreen="" />
                            </div>
                        </div>
                        <div className="mfp-preloader">Loading...</div>
                    </div>
                </div>
            } */}
        </>
    )
}

export default Benefit