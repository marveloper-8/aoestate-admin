import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import house from '../../images/house.jpg'

import './css/properties-details.css'
import './components/css/content.css'

import Navigation from './Navigation'
import Footer from './Footer'

import './css/App.scss'

const Estates = () => {
    const [propertyDetails, setPropertyDetails] = useState([])
    const [propertyComments, setPropertyComments] = useState([])
    const {propertyId} = useParams()
    console.log(propertyId)

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/properties-details/${propertyId}`, {
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

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/properties-details/${propertyId}/comment`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setPropertyComments(result)
            })
    }, [])

    return (
        <div className="how-we-work">
            <div className="desktop">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{propertyDetails.post ? propertyDetails.post.propertyName : "loading"}</div>
                    </h1>
                </div>

                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoTwo : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoThree : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoFour : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoFive : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${propertyDetails.post ? propertyDetails.post.photoSix : "loading"})`,
                                        backgroundSize:`cover`,
                                        backgroundPosition:`center`
                                    }}
                                ></div>
                            </Carousel.Item>
                        </Carousel>
                    
                    </div>
                    
                    <div className="text">
                        <h1>{propertyDetails.post ? propertyDetails.post.propertyName : "loading"}</h1>

                        <div>
                            <b>Price of property</b>
                            <p>{propertyDetails.post ? propertyDetails.post.price : "loading"}</p>
                        </div>

                        <div>
                            <b>Type Of Document</b>
                            <p>{propertyDetails.post ? propertyDetails.post.typeOfDocument : "loading"}</p>
                        </div>

                        <div>
                            <b>Location of product/project</b>
                            <p>{propertyDetails.post ? propertyDetails.post.propertyLocation : "loading"}</p>
                        </div>

                        <div>
                            <b>Company</b>
                            <p>{propertyDetails.post ? propertyDetails.post.companyName : "loading"}</p>
                        </div>

                        <div className="buttons">
                            <a
                                href={propertyDetails.post ? propertyDetails.post.brochure : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="brochure">DOWNLOAD BROCHURE</button>
                            </a>

                            {/* <a
                                href={propertyDetails.post ? propertyDetails.post.flyers : "loading"} 
                                target="_blank" rel="noopener noreferrer"
                            >
                                <button className="flyers">DOWNLOAD FLYERS</button>
                            </a> */}
                        </div>
                    </div>
                </div>

                <div className="properties-details-content">
                    <div className="text">
                        <p>{propertyDetails.post ? propertyDetails.post.propertyDescription : "loading"}</p>

                        {/* <div className="buttons">
                            <button className="delete">DELETE PROPERTY</button>
                        </div> */}
                    </div>

                    <iframe 
                        title="properties" 
                        id="video" 
                        width="420" 
                        height="315"
                        src={`${propertyDetails.post ? propertyDetails.post.youTubeLink : "loading"}`}
                        frameBorder="0" 
                        allow="autoplay; encrypted-media" 
                        allowFullScreen="false" 
                        className="video__iframe"
                    ></iframe>
                </div>

                <div className="properties-list-container">
                {propertyDetails.post ? propertyDetails.post.comments.text : "loading"}
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Estates
