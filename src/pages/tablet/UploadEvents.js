import React, {useState} from 'react'

import login from '../../images/login.png'
// import house from '../../images/house.jpg'
// import logoClient from '../../images/logo-client.png'

import EventsList from './components/EventsList'

import Navigation from './Navigation'
import Footer from './Footer'

// import './css/home.css'
import './css/general.css'

import {useHistory} from 'react-router-dom'

const UploadEvents = () => {

    const history = useHistory()

    const [eventName, setEventName] = useState("")
    const [eventLocation, setEventLocation] = useState("")
    const [eventDate, setEventDate] = useState("")
    const [eventVideo, setEventVideo] = useState("https://www.youtube.com/embed/AN8Iq9IC6VE")
    const [eventDescription, setEventDescription] = useState("")
    const [eventTime, setEventTime] = useState("")
    const [image, setImage] = useState("")
    const [url, setUrl] = useState("")

    const postEvents = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "ao-estate")
        data.append("cloud_name", "josh-equere")
        fetch("https://api.cloudinary.com/v1_1/josh-equere/image/upload", {
            method: "post",
            body: data
        })
        .then(res => res.json())
        .then(data => {
            setUrl(data.url)
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })

        fetch("https://aoestate-server-two.herokuapp.com/create-event", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                eventName,
                eventLocation,
                eventDate,
                eventTime,
                eventVideo,
                eventDescription,
                pic: url
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert("Created post successfully")
                    history.push('/upload-events')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="home-tablet">
            <Navigation />
            
            <div className="form-tablet">

                    <h1>Upload Event</h1>

                    <div className="form upload-form">
                        <div className="tab">
                            <label>Event Name</label>
                            <br />
                            <input
                                className="input" 
                                type="text"
                                placeholder="Event name..."
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Event's Location</label>
                            <br />
                            <input
                                className="input" 
                                type="text"
                                placeholder="Event's location..."
                                value={eventLocation}
                                onChange={(e) => setEventLocation(e.target.value)}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Event's Date</label>
                            <br />
                            <input
                                className="input" 
                                type="text"
                                placeholder="Event's date..."
                                value={eventDate}
                                onChange={(e) => setEventDate(e.target.value)}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Event's Video Link</label>
                            <br />
                            <input
                                className="input" 
                                type="text"
                                placeholder="Event's video link..."
                                value={eventVideo}
                                onChange={(e) => setEventVideo(e.target.value)}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Pictures of Property</label>
                            <br />
                            <input
                                className="input" 
                                type="file"
                                onChange={(e) => setImage(e.target.files[0])}
                            />
                        </div>
                        
                        <div className="tab">
                            <label>Event's Description</label>
                            <br />
                            <textarea
                                placeholder="Event's description..."
                                value={eventDescription}
                                onChange={(e) => setEventDescription(e.target.value)}
                            ></textarea>
                        </div>

                        <div className="tab">
                            <label>Event's Time</label>
                            <br />
                            <input
                                className="input" 
                                type="text"
                                placeholder="Event's time..."
                                value={eventTime}
                                onChange={(e) => setEventTime(e.target.value)}
                            />
                        </div>
                        
                        <div className="button">
                            <button onClick={() => postEvents()}>
                                Send now →
                            </button>
                        </div>
                    </div>

            </div>

            <EventsList />

            <Footer />
        </div>
    )
}

export default UploadEvents
