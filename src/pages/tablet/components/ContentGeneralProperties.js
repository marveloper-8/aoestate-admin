import React, {useState, useEffect} from 'react'
import TextTruncate from 'react-text-truncate'

import './css/content.css'

import house from '../../../images/house.jpg'
import search from '../../../icons/search.svg'

// import PropertiesItem from './PropertiesItem'

import {
    Link
} from 'react-router-dom'

const ContentGeneralProperties = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/all-property', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.properties)
            })
    }, [])

    const deletePost = postId => {
        fetch(`https://aoestate-server-two.herokuapp.com/delete-property/${postId}`, {
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
        <div className="properties-list-tablet">

            <h1>List of Properties</h1>

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
                                
                                        <button className="view-property">
                                            <Link className="link-button" to={"/general-properties-details/" + item._id}>
                                                View Property
                                            </Link>
                                        </button>
                                        <br /><br />
                                        <button className="delete" onClick={() => deletePost(item._id)}>Delete Property</button>
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

export default ContentGeneralProperties
