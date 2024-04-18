import React from 'react'
import { Link } from 'react-router-dom'
import Ctaimg from '../../assets/images/backgrounds/codioful-formerly.jpg'

function Ctathree2() {
    return (
        <>
            <section className="cta-three mb-2">
                <div className="cta-three__bg2 jarallax" data-jarallax="" data-speed="0.3" style={{ backgroundImage: `url(${Ctaimg})` }} />
                    <div className="container ">
                        <h2 className="cta-three__title"> 
                        A quoi contribue JobPaw?
                        </h2>
                        <div className='cta-three__p'>
                            <p>Depuis sa création en 2007, la plateforme JobPaw.com est devenue un écosystème, une référence en Haïti sur le marché de l’emploi avec les résultats estimés de plus de:</p>
                            <table className="table table-bordered">
                                <tbody>
                                    <tr>

                                        <td>335 Universités et Ecoles avec 48,000 diplomés annuels</td>
                                        <td>150 bourses d’études</td>
                                    </tr>
                                    <tr>
                                        <td>50,000 professionnels qualifiés enregistrés</td>
                                        <td>14,000 professionnels recrutés</td>
                                    </tr>
                                    <tr>
                                        <td>15,000 offres d’emplois</td>
                                        <td>720 articles de recherche</td>
                                    </tr>
                                    <tr>
                                        <td>3,500 entreprises et organisations</td>
                                        <td>150,000 projets d’investissement</td>
                                    </tr>
                                    <tr>
                                        <td>3,000 appels d’offres</td>
                                        <td>500 documents de stratégies et politiques sectorielles</td>
                                    </tr>
                                    <tr>
                                        <td>250 séminaires et formation courte</td>
                                        <td>7 types de statistiques sur le marché</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className=' text-left'>
                                <p>This confirms that with maximum visibility of20,000 visitors per day, the JobPaw platform thus offers a modern way to:</p>
                            <ul>
                                <li>
                                recruit professionals; purchases of goods and services; publications of training and seminars, scholarships, research work; promoting the goods and services of businesses, universities, etc.
                                </li>
                                <li>
                                connect actors (companies, professionals, universities) to each other and to opportunities and thus reduce the barriers to collective success and the creation of collective wealth.
                                </li>
                            </ul>
                            </div>
                            
                        </div>
                        


                        <div className="cta-three__btns">
                            <Link to="/services" className="hiredots-btn cta-three__link">
                                <span>Discover more</span>
                            </Link>
                            <Link to="/jobs" className="hiredots-btn hiredots-btn--primary">
                                <span>for employers</span>
                            </Link>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default Ctathree2