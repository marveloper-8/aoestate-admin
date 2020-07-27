import React, {useState, useEffect} from 'react'

import './css/content.css'

import house from '../../../images/house.jpg'
import search from '../../../icons/search.svg'

import {Link} from 'react-router-dom'

const EventsList = () => {

    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-events', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.events)
            })
    }, [])

    const deletePost = postId => {
        fetch(`https://aoestate-server-two.herokuapp.com/delete-event/${postId}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            // const newData = data.filter(item => {
            //     return item._id !== result._id
            // })
            // setData(newData)
        })
    }

    return (
        <div className="properties-list-mobile">

            <h1>Events to Attend</h1>

            <div className="search">
                <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                <form className="search-container"><input
                    type="text"
                    placeholder="Search for events..." 
                    // onChange={this.searchHandler}
                    // value={this.state.searchList}
                /></form>
            </div>

            <div className="properties-list-container">
                {
                    data.map(item => {
                        return(
                            <div className="properties-item-mobile">
                                <Link className="link" to={"/event-details/" + item._id}>
                                <div className="container">
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.photo})`,
                                            backgroundSize:`cover`,
                                            backgroundPosition:`center`
                                        }}
                                        className="image"
                                    ></div>
                    
                                    <div className="text">
                                        <h6>{item.eventName}</h6>
                                        <p className="description">{item.eventDescription}</p>
                                        <p className="location">{item.eventDate}</p>
                                
                                        <button className="view-property">
                                            <Link className="link-button" to={"/event-details/" + item._id}>
                                                View Event
                                            </Link>
                                        </button>
                                        <br /><br />
                                        <button className="delete" onClick={() => deletePost(item._id)}>Delete Event</button>
                                    </div>
                                </div>
                                </Link>
                                
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default EventsList
