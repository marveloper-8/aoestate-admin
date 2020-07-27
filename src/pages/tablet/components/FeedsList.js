import React, {useState, useEffect} from 'react'

import './css/content.css'

import house from '../../../images/house.jpg'
import search from '../../../icons/search.svg'

import {Link} from 'react-router-dom'

const FeedsList = () => {

    const [feed, setFeed] = useState([])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-feeds', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setFeed(result.feeds)
            })
    }, [])

    const deletePost = postId => {
        fetch(`https://aoestate-server-two.herokuapp.com/delete-feed/${postId}`, {
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
        <div 
            style={{backgroundColor:`#fff`}}
            className="properties-list-desktop"
        >

            <h1>Feeds</h1>

            <div className="search">
                <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                <form className="search-container"><input
                    type="text"
                    placeholder="Search for feeds..." 
                    // onChange={this.searchHandler}
                    // value={this.state.searchList}
                /></form>
            </div>

            <div className="properties-list-container">
                {
                    feed.map(item => {
                        return(
                            <div className="properties-item-desktop">
                                <div className="container">
                                    <div className="text">
                                        <h6>{item.feedHeadline}</h6>
                                        <p className="description">{item.feedInformation}</p>
                                
                                        <button className="view-property">
                                            <Link className="link-button"  href={item.feedLInk}>
                                                View Property
                                            </Link>
                                        </button>
                                        <br /><br />
                                        <button className="delete" onClick={() => deletePost(item._id)}>Delete Feed</button>
                                    </div>
                                </div>
                                
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default FeedsList
