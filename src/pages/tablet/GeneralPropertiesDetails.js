import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import house from '../../images/house.jpg'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'

import './css/App.scss'

const Estates = () => {
    const [generalPropertyDetails, setPropertyDetails] = useState([])
    const {propertyId} = useParams()
    console.log(propertyId)

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/general-properties-details/${propertyId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setPropertyDetails(result)
            })
    }, [])

    return (
        <div className="how-we-work">
            <div className="tablet">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}</div>
                    </h1>
                </div>

                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoTwo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoThree : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoFour : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoFive : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${generalPropertyDetails.property ? generalPropertyDetails.property.photoSix : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                    
                    <div className="text">
                        <h1>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyName : "loading"}</h1>

                        <div>
                            <b>Type Of Document</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.typeOfDocument : "loading"}</p>
                        </div>

                        <div>
                            <b>Location of property</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyLocation : "loading"}</p>
                        </div>

                        <div>
                            <b>Company</b>
                            <p>{generalPropertyDetails.property ? generalPropertyDetails.property.companyName : "loading"}</p>
                        </div>

                        <div className="buttons">
                            <a
                                href={generalPropertyDetails.post ? generalPropertyDetails.post.brochure : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="brochure">DOWNLOAD BROCHURE</button>
                            </a>

                            {/* <a
                                href={generalPropertyDetails.post ? generalPropertyDetails.post.flyers : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="flyers">DOWNLOAD FLYERS</button>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="properties-details-content">
                    <div className="text">
                        <p>{generalPropertyDetails.property ? generalPropertyDetails.property.propertyDescription : "loading"}</p>

                        {/* <div className="buttons">
                            <button className="delete">DELETE PROPERTY</button>
                        </div> */}
                    </div>

                    <iframe title="properties" id="video" width="420" height="315" src={generalPropertyDetails.property ? generalPropertyDetails.property.youTubeLink : "loading"} frameborder="0" allowfullscreen></iframe>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Estates
