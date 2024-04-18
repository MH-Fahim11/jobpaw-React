import React from 'react'
import Header from '../Header/Main'
import Breadcrumb from '../Breadcrumb/Main'
import Projectone from './Projectone'
import Footer from '../Footer/Main'

function Professionnels() {
    return (
        <>
            <div className="page-wrapper">
                <Header />
                <Breadcrumb subtitle="Home" title="Professionnels" />
                <Projectone/>
                <Footer />
            </div>

        </>
    )
}

export default Professionnels