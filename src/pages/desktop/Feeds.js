import React, {useState} from 'react'

import FeedsList from './components/FeedsList'

import Navigation from './Navigation'
import Footer from './Footer'

// import './css/home.css'
import './css/general.css'

import {useHistory} from 'react-router-dom'

const UploadProperty = () => {

    const history = useHistory()

    const [feedHeadline, setFeedHeadline] = useState("")
    const [feedInformation, setFeedInformation] = useState("")
    const [feedLink, setFeedLink] = useState("")

    const postFeeds = () => {
        fetch("https://aoestate-server-two.herokuapp.com/create-feed", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                feedHeadline,
                feedInformation,
                feedLink
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    alert("Created post successfully")
                    history.push('/feeds')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="home-desktop">
            <Navigation />

            <div className="form-desktop">

                <h1>Upload Feeds</h1>

                <div className="form upload-form">
                    <div className="tab">
                        <label>Feed's Headline</label>
                        <br />
                        <input 
                            className="input"
                            type="text"
                            placeholder="Feed's headline..."
                            value={feedHeadline}
                            onChange={(e) => setFeedHeadline(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Feed's Information</label>
                        <br />
                        <input 
                            className="input"
                            type="text"
                            placeholder="Feed's information..."
                            value={feedInformation}
                            onChange={(e) => setFeedInformation(e.target.value)}
                        />
                    </div>
                    
                    <div className="tab">
                        <label>Link to Feed's Property</label>
                        <br />
                        <input 
                            className="input"
                            type="text"
                            placeholder="Link to feed's property..."
                            value={feedLink}
                            onChange={(e) => setFeedLink(e.target.value)}
                        />
                    </div>

                    <div className="button">
                        <button onClick={() => postFeeds()}>
                            Send now →
                        </button>
                    </div>
                </div>

            </div>

            <FeedsList />

            <Footer />
        </div>
    )
}

export default UploadProperty
