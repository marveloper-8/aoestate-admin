import React from 'react'

import login from '../../images/login.png'
// import house from '../../images/house.jpg'
// import logoClient from '../../images/logo-client.png'

import UsersList from './components/UsersList'

import Navigation from './Navigation'
import Footer from './Footer'

// import './css/home.css'
import './css/general.css'

function UploadProperty() {
    return (
        <div className="home-mobile">
            <Navigation />

            <div className="content" style={{padding:`5vh 10vw 0 10vw`}}>
                <div className="text">
                    <h1>Users' Dashboard</h1>
                </div>
            </div>

            <UsersList />

            <Footer />
        </div>
    )
}

export default UploadProperty
