import React from 'react'
import Breadcrumb from '../Breadcrumb/Main'
import Projectone from './Projectone'

function Professionnels() {
    return (
        <>
            <div className="page-wrapper">
                <Breadcrumb subtitle="Home" title="Professionnels" />
                <Projectone/>
            </div>

        </>
    )
}

export default Professionnels