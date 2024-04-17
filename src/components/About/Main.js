import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Whychoose from '../Menabout/Whychoose'
import Testimonial from '../Menhomeone/Testimonial'
import Ctathree from '../Menabout/Ctathree'
import Benefit from '../Menhomethree/Benefit'
import Team from '../Menabout/Team'
import Clienttwo from '../Menhometwo/Clienttwo'
import Footer from '../Footer/Main'
import Benefit2 from '../Menhomethree/Benefit2'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="About" />
                <Whychoose />

                <Benefit />
                <Benefit2/>

                <Testimonial />
                <Ctathree />
                
                <Team />
                <Clienttwo />
                <Footer />
            </div>
        </>
    )
}

export default Main