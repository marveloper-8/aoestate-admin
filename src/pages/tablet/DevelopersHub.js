import React from 'react'

import login from '../../images/login.png'
import house from '../../images/house.jpg'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'
import Footer from './Footer'

function DevelopersHub() {
    return (
        <div className="developers-hub">
            <div className="tablet">
                <Navigation />

                <div
                    className="header"
                    style={{
                        backgroundImage: `url(${house})`,
                        backgroundSize:`cover`,
                        backgroundPosition:`center`
                    }}
                >
                    <h1 className="text">
                        <span className="primary">Developers'</span> <br />
                        <span>Hub</span>
                    </h1>
                </div>

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h1>Developers' Hub</h1>
                            
                            <p>Do You have properties You need to sell? AO Chariots holds a strong track record and database of marketing professionals who possess skills in marketing and have built a robust network of constant buyers across the world. You can trust us to help you with selling your property in good time and at the best rate.</p>
                        </div>

                        <div className="image">
                            <img 
                                src={login} 
                                alt="description" 
                                style={{width:`25vw`}}
                            />
                        </div>
                    </div>
                </div>
                    
                <div className="container-text-two">
                    <div className="success-story content-right">
                        <div className="image">
                            <h1>Success<br />Stories</h1>
                        </div>
                    </div>
                </div>

                <div className="container-text">
                    <div className="statistics">
                        <div className="tab">
                            <h2>500+</h2>
                            <span className="value">Properties Sold</span>
                        </div>
                        
                        <div className="tab">
                            <h2>₦80,000,000+</h2>
                            <span className="value">Worth of property sold</span>
                        </div>
                        
                        <div className="tab">
                            <h2>120+</h2>
                            <span className="value">Happy Clients</span>
                        </div>
                        
                        <div className="tab">
                            <h2>600+</h2>
                            <span className="value">Properties Available</span>
                        </div>
                    </div>
                </div>

                <div className="container-text-two">

                    <div className="container-upload">
                        <h1>Upload a Property</h1>

                        <form className="upload-form">
                            <div className="tab">
                                <label>Your Name</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Your name..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Company Name</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Company name..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Phone Number</label>
                                <br />
                                <input 
                                    type="tel" 
                                    placeholder="Phone number..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Email Address</label>
                                <br />
                                <input 
                                    type="email" 
                                    placeholder="Email address..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Office Address</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Office Address..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Name</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Property name..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Location</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Property location..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Type Of Document</label>
                                <br />
                                <input 
                                    type="text"
                                    placeholder="Type of document..."
                                />
                            </div>
                            
                            <div className="tab">
                                <label>Property Description</label>
                                <br />
                                <textarea
                                    placeholder="Property description..."
                                ></textarea>
                            </div>

                            <div className="button">
                                <button>
                                    Send now →
                                </button>
                            </div>
                        </form>
                    </div>
                    
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default DevelopersHub
