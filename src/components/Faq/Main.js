import React from 'react'
import Breadcrumb from '../Breadcrumb/Main'
import Faqsearch from '../Menfaq/Faqsearch'
import Faqpage from '../Menfaq/Faqpage'

function Main() {
    return (
        <>
            <div className="page-wrapper">
                {/* <Header /> */}
                <Breadcrumb subtitle="Home" title="FAQs" />
                <Faqsearch />
                <Faqpage />
                {/* <Footer /> */}
            </div>
        </>
    )
}

export default Main