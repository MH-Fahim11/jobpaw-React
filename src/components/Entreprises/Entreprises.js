import React from 'react'
import Breadcrumb from '../Breadcrumb/Main'
import Projectone from './Projectone'

function Entreprises() {
    return (
        <>
            <div className="page-wrapper">
                <Breadcrumb subtitle="Home" title="Entreprises" />
                <Projectone/>
            </div>

        </>
    )
}

export default Entreprises