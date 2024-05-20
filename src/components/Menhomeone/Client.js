import React from 'react'
import Slider from 'react-slick'
import Brandimg from '../../assets/images/resources/brand-1-1.png'

const Clientslider = {
    items: 5,
    margin: 65,
    smartspeed: 1000,
    loop: true,
    autoplay: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                margin: 30,
            },
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                margin: 30,
            },
        },
    ],
}

function Client() {
    return (
        <div style={{backgroundColor:"#FDF5DF",marginTop:"50px"}}>
            <div className="client-carousel ">
                <div className="container">
                
                    <div className="row">
                        <div className="col-xl-3">
                            <h3 className="client-carousel__title">
                                Trusted and funded by more
                                <br /> then 800 companies
                            </h3>
                        </div>
                        <div className="col-xl-9">
                            <Slider className='client-one'{...Clientslider} slidesToShow={5} slidesToScroll={1} autoplay={true} autoplaySpeed={2000}>
                                <div className="client-carousel__one__item">
                                    <img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515358_10512.png" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://kgo.googleusercontent.com/profile_vrt_raw_bytes_1587515400_10885.png" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6-1200-80.jpg" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://elements.envato.com/favicon.ico" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://s.w.org/style/images/about/WordPress-logotype-wmark.png" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXpU79_HFRNHqW4SiJq2bGMZnf9svidTueYk3QjdY&usqp=CAE&s" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg" alt="hiredots" />
                                </div>
                                <div className="client-carousel__one__item">
                                    <img src="https://www.wikipedia.org/portal/wikipedia.org/assets/img/Wikipedia-logo-v2.png" alt="hiredots" />
                                </div>
                            </Slider>
                        </div>
                    </div>
                    <div className="client-carousel__border" />
                </div>
            </div>
        </div>
    )
}

export default Client