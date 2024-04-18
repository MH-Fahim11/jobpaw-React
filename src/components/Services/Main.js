import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Servicepage from '../Menservice/Servicepage'
import Footer from '../Footer/Main'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                <Breadcrumb subtitle="Home" title="Services" />
                <Servicepage />
            </div>

        </>
    )
}

export default Main