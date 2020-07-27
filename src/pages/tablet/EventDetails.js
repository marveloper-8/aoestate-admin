import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel'

import house from '../../images/house.jpg'

import './css/properties-details.css'

import Navigation from './Navigation'
import Footer from './Footer'

import './css/App.scss'

function Events() {
    const [eventDetails, setEventDetails] = useState([])
    const {eventId} = useParams()
    console.log(eventId)

    useEffect(() => {
        fetch(`https://aoestate-server-two.herokuapp.com/event-details/${eventId}`, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                setEventDetails(result)
            })
    }, [])

    return (
        <div className="how-we-work">
            <div className="tablet">
                <Navigation />

                <div className="properties-details-header">
                    <h1 className="text">
                        <div className="subhead">You Are Now Viewing</div>
                        <div className="head">{eventDetails.event ? eventDetails.event.eventName : "loading"}</div>
                    </h1>
                </div>
                <div className="properties-details-content">
                    <div className="image-container">
                        <Carousel>
                            <Carousel.Item>
                                <div
                                    className="d-block w-100 images"
                                    style={{
                                        backgroundImage: `url(${eventDetails.event ? eventDetails.event.photo : "loading"})`,
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

                    <iframe title="properties" id="video" src="//www.youtube.com/embed/9B7te184ZpQ?rel=0" frameborder="0" allowfullscreen></iframe>
                </div>

                <div className="properties-details-content">
                    <div className="text">
                        <h1>{eventDetails.event ? eventDetails.event.eventName : "loading"}</h1>

                        <div>
                            <b>Location of event</b>
                            <p>{eventDetails.event ? eventDetails.event.eventLocation : "loading"}</p>
                        </div>

                        <div>
                            <b>Event's date</b>
                            <p>{eventDetails.event ? eventDetails.event.eventDate : "loading"}</p>
                        </div>

                        <div>
                            <b>Event's time</b>
                            <p>{eventDetails.event ? eventDetails.event.eventTime : "loading"}</p>
                        </div>
                    </div>
                
                    <div className="text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Natoque penatibus et magnis dis parturient. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin. Sagittis eu volutpat odio facilisis. Diam quis enim lobortis scelerisque fermentum. Et sollicitudin ac orci phasellus. Adipiscing elit ut aliquam purus sit. Amet commodo nulla facilisi nullam vehicula ipsum. Nulla facilisi cras fermentum odio eu. Nibh tellus molestie nunc non. Eu non diam phasellus vestibulum lorem sed risus. Sed risus pretium quam vulputate. Molestie at elementum eu facilisis sed odio. Euismod in pellentesque massa placerat duis ultricies lacus sed. Commodo ullamcorper a lacus vestibulum sed arcu.</p>

                        <div className="buttons">
                            <button className="delete">DELETE EVENT</button>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default Events
