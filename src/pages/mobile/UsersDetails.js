import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'

import {Link} from 'react-router-dom'

import './css/App.scss'

const UsersDetails = () => {
    const [userProfile, setProfile] = useState([])
    const {userId} = useParams()
    console.log(userId)

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/user-details/${userId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setProfile(result)
            })
    }, [])

    return (
        <div className="how-we-work">
            <div className="mobile">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{userProfile.user ? userProfile.user.firstName: "loading"} {userProfile.user ? userProfile.user.lastName: "loading"}</div>
                    </h1>
                </div>

                <div className="users-details-content">

                    <h1>{userProfile.user ? userProfile.user.firstName: "loading"} {userProfile.user ? userProfile.user.lastName: "loading"}</h1>

                    <div className="text">
                        <div>
                            <b>Email address</b>
                            <p>{userProfile.user ? userProfile.user.email: "loading"}</p>
                        </div>

                        <div>
                            <b>Phone number</b>
                            <p>{userProfile.user ? userProfile.user.phone: "loading"}</p>
                        </div>

                        <div>
                            <b>Account name</b>
                            <p>{userProfile.user ? userProfile.user.bankAccountName: "loading"}</p>
                        </div>

                        <div>
                            <b>Account number</b>
                            <p>{userProfile.user ? userProfile.user.bankName: "loading"}</p>
                        </div>

                        <div>
                            <b>Bank Name</b>
                            <p>{userProfile.user ? userProfile.user.bankName: "loading"}</p>
                        </div>

                        <div>
                            <b>Properties Sold</b>
                            <p>20</p>
                        </div>

                        <div>
                            <b>Referred by</b>
                            <p>
                                {userProfile.user ? userProfile.user.referredBy: "loading"}
                                <br />
                                {userProfile.user ? userProfile.user.referredByEmail: "loading"}
                                <br />
                                <button>
                                    <Link className="links" to={`/users-details/${userProfile.user ? userProfile.user.referredById: "loading"}`} target="_blank">VIEW PROFILE</Link>
                                </button>
                            </p>
                        </div>

                        <div>
                            <b>First affiliate</b>
                            <p>Peter James Doe</p>
                        </div>

                        <div>
                            <b>Second affiliate</b>
                            <p>Bruno Liam Doe</p>
                        </div>

                        {/* <div>
                            <b>Referral link</b>
                            <p>localhost:3000/user-details/{userProfile.user ? userProfile.user._id: "loading"}</p>
                        </div> */}
                    </div>

                    <div className="buttons">
                        <button className="brochure">EDIT USER INFO</button>
                    </div>

                </div>

                <Footer />
            </div>
        </div>
    )
}

export default UsersDetails
