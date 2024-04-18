import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Whychoose from '../Menabout/Whychoose'
import Testimonial from '../Menhomeone/Testimonial'
import Ctathree2 from '../Menabout/Ctathree2'
import Benefit from '../Menhomethree/Benefit'
import Team from '../Menabout/Team'
import Clienttwo from '../Menhometwo/Clienttwo'
import Footer from '../Footer/Main'
import Benefit2 from '../Menhomethree/Benefit2'
import Whychoose2 from '../Menabout/Whychoose2'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Breadcrumb subtitle="Home" title="About" />
                <Whychoose />

                <Benefit />
                <Benefit2/>
                <Whychoose2/>
                {/* <Testimonial /> */}
                <Ctathree2 />
            </div>
        </>
    )
}

export default Main