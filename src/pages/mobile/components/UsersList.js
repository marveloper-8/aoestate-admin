import React, {useState, useEffect} from 'react'

import './css/content.css'

import search from '../../../icons/search.svg'

import {
    Link
} from 'react-router-dom'

const UsersList = () => {
    const [data, setData] = useState([])
    
    useEffect(() => {
        fetch('https://aoestate-server-two.herokuapp.com/user', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(result => {
                setData(result.user)
            })
    }, [])

    return (
        <div 
            style={{backgroundColor:`#fff`}}
            className="properties-list-mobile"
        >

            <div className="search">
                <div className="icon-container"><img src={search} className="icons" alt="account" /></div>
                <form className="search-container"><input
                    type="text"
                    placeholder="Search for users..." 
                    // onChange={this.searchHandler}
                    // value={this.state.searchList}
                /></form>
            </div>

            <div className="properties-list-container">
                {
                    data.map(item => {
                        return(
                            <div className="properties-item-mobile">
                                <Link className="link" to={"/users-details/" + item._id}>
                                <div 
                                    className="container"
                                    key={item._id}
                                >
                                    <div className="text">
                                        <h6>{item.firstName} {item.lastName}</h6>
                                        <p className="description">
                                            {item.email}<br />
                                            {item.phone }
                                        </p>
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

export default UsersList
