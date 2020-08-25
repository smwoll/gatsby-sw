import React from 'react'

import Topper from '../components/topper'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="page">
            <Topper />
            <main className="layout container">
             {props.children}   
            </main>
            
            <Footer />
        </div>
    )
}

export default Layout