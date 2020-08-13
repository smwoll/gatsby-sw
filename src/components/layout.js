import React from 'react'

import Topper from '../components/topper'
import Footer from '../components/footer'
import '../styles/index.scss'

const Layout = (props) => {
    return (
        <div className="page">
            <Topper />
            <div className="container">
             {props.children}   
            </div>
            
            <Footer />
        </div>
    )
}

export default Layout