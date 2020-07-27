import React, {useState, useEffect} from 'react'
import TextTruncate from 'react-text-truncate'

import './css/content.css'

import house from '../../../images/house.jpg'
import search from '../../../icons/search.svg'

// import PropertiesItem from './PropertiesItem'

import {
    Link
} from 'react-router-dom'

const ContentProperties = () => {
    const [popup, setPopup] = useState(false)
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-post', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.posts)
            })
    }, [])

    const deletePost = postId => {
        fetch(`https://aoestate-server-two.herokuapp.com/delete-post/${postId}`, {
            method: "delete",
            headers: {
                Authorization: "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
        .then(result => {
            console.log(result)
            alert("Delete successfully. Reload page to continue")
            // const newData = data.filter(item => {
            //     return item._id !== result._id
            // })
            // setData(newData)
        })
    }

    return (
        <div className="properties-list-tablet">

            <h1>List of Project/Product</h1>

            <div className="search">
                <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                <form className="search-container"><input
                    type="text"
                    placeholder="Search for properties..." 
                    // onChange={this.searchHandler}
                    // value={this.state.searchList}
                /></form>
            </div>

            <div className="properties-list-container">
                {
                    data.map(item => {
                        return(
                            <div className="properties-item-tablet">
                                <div 
                                    className="container" 
                                    key={item._id}
                                >
                                    <div
                                        style={{
                                            backgroundImage: `url(${item.photo})`,
                                            backgroundSize:`cover`,
                                            backgroundPosition:`center`
                                        }}
                                        className="image"
                                    ></div>
                    
                                    <div className="text">
                                        <h6>{item.propertyName}</h6>
                                        <TextTruncate
                                            line={3}
                                            element="span"
                                            truncateText="…"
                                            text={item.propertyDescription}
                                        />
                                        <p className="location">{item.price}</p>
                                        <p>{item.comments.length} people interested</p>
                                        
                                
                                        <button className="view-property">
                                            <Link className="link-button" to={"/properties-details/" + item._id}>
                                                View Project/Product
                                            </Link>
                                        </button>
                                        <br /><br />
                                        <button 
                                            onClick={() => setPopup(!popup)}className="view-property">
                                            View Interested Brokers
                                        </button>
                                        <br /><br />
                                        <button className="delete" onClick={() => deletePost(item._id)}>Delete Project/Product</button>
                                        
                                        <div className={popup ? "properties-details-interested properties-details-interested-on" : "properties-details-interested properties-details-interested-off"}>
                                            <div className={popup ? "background background-on" : "background background-off"} onClick={() => setPopup(!popup)}></div>
                                            <div className={popup ? "inner inner-on" : "inner inner-off"}>
                                                <div className={popup ? "inner-inner inner-inner-on" : "inner-inner inner-inner-off"}>
                                                    <div>
                                                    {
                                                        item.comments.map(record => {
                                                            return(
                                                                <div 
                                                                    // className="comments-item" 
                                                                    className={popup ? "comments-item comments-item-on" : "comments-item comments-item-off"}
                                                                    key={record._id}>
                                                                    {record.text}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                
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

export default ContentProperties
