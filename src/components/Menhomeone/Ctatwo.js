import React from 'react'
import { Link } from 'react-router-dom'
import Bgimg from '../../assets/images/resources/cta-2-2.jpg'
import Ctashape1 from '../../assets/images/shapes/cta-2-shape-1.png'
import Ctashape2 from '../../assets/images/shapes/cta-2-shape-2.png'
import Ctashape3 from '../../assets/images/shapes/Meet-Our-Team.png'


function Ctatwo() {
    return (
        <div>
            <section className="cta-two" style={{ backgroundImage:`url(${Bgimg})`}} >
                <div className="cta-two__shape-one">
                    <img src={Ctashape1} alt="hiredots" />
                </div>
                <div className="cta-two__shape-two">
                    <img src={Ctashape2} alt="hiredots" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 wow fadeInLeft" data-wow-delay="200ms">
                            <div className="cta-two__content">
                                <h2 className="cta-two__title">
                                    Hire Your Next Candidate on JOBPAW
                                </h2>
                                <Link to="/about" className="hiredots-btn">
                                    <span>Discover more</span>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 wow fadeInRight" data-wow-delay="300ms">
                            <div className="cta-two__image">
                                <img src={Ctashape3} alt="hiredots" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Ctatwo