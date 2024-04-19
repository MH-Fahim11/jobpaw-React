import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Contactform from '../Mencontact/Contactform'
import Map from '../Mencontact/Map'
import Footer from '../Footer/Main'

function Main() {
  return (
    <div>
        <div className="page-wrapper">
            <Breadcrumb subtitle="Home" title="Contact" />
            <Contactform/>
            {/* <Map /> */}
        </div>
    </div>
  )
}

export default Main