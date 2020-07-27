import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import house from '../../images/house.jpg'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'

import './css/App.scss'

function ModifyProperty() {
    return (
        <div className="how-we-work">
            <div className="desktop">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">3 Bedroom Flat</div>
                    </h1>
                </div>

                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${house})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${house})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${house})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div className="text">
                        <h1>3 Bedroom Flat</h1>

                        <div>
                            <b>Type Of Document</b>
                            <p>C of O</p>
                        </div>

                        <div>
                            <b>Location of property</b>
                            <p>Lekki Phase 1, Lagos, Nigeria</p>
                        </div>

                        <div>
                            <b>Company</b>
                            <p>LandWey</p>
                        </div>

                        <div>
                            <b>Status</b>
                            <p>Available</p>
                        </div>

                        <div className="buttons">
                            <button className="brochure">DOWNLOAD BROCHURE</button>
                            <button className="flyers">DOWNLOAD FLYERS</button>
                        </div>
                    </div>
                </div>

                <div className="properties-details-content">
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sagittis eu volutpat odio facilisis. Diam quis enim lobortis scelerisque fermentum. Et sollicitudin ac orci phasellus. Adipiscing elit ut aliquam purus sit. Amet commodo nulla facilisi nullam vehicula ipsum. Nulla facilisi cras fermentum odio eu. Nibh tellus molestie nunc non. Eu non diam phasellus vestibulum lorem sed risus. Sed risus pretium quam vulputate. Molestie at elementum eu facilisis sed odio. Euismod in pellentesque massa placerat duis ultricies lacus sed. Commodo ullamcorper a lacus vestibulum sed arcu.</p>

                        <div className="buttons">
                            <button className="brochure">SAVE CHANGES</button>
                            <button className="flyers">DELETE PROPERTY</button>
                        </div>
                    </div>

                    <iframe title="properties" id="video" width="420" height="315" src="//www.youtube.com/embed/9B7te184ZpQ?rel=0" frameborder="0" allowfullscreen></iframe>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default ModifyProperty
