import React, {useContext, useState} from 'react'

import {
    Link,
    useHistory
} from 'react-router-dom'

import {UserContext} from './App'

import './css/navigation.css'

import logo from '../../images/logo-two.png'
import menu from '../../icons/menu.svg'

const Navigation = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()

    const [condition, setCondition] = useState(false)

    return (
        <div className="navigation-mobile">

            <div className="logo">
            <Link className="link-items" to={state ? "/sign-in" : "/"}>
                <img 
                    src={logo} 
                    alt="AO Estate's Logo" 
                />
            </Link>
            </div>

            <div className="menu">
                <img 
                    onClick={() => setCondition(!condition)}
                    src={menu} 
                    alt="Menu" 
                />
            </div>

            <div className={condition ? "menu-panel menu-toggled" : "menu-panel"}>
                <div className="close">
                    <span onClick={() => setCondition(!condition)}>
                        &times;
                    </span>
                </div>

                <div className="links">
                    <span className="active">
                        <Link className="link-items" to='/upload-brokers-property'>Brokers Property</Link>
                    </span>
                    <span>
                        <Link className="link-items" to='/upload-general-property'>General Property</Link>
                    </span>
                    <span>
                        <Link className="link-items" to='/upload-events'>Event</Link>
                    </span>
                    <span>
                        <Link className="link-items" to='/feeds'>Feeds</Link>
                    </span>
                    <span>
                        <Link className="link-items" to='/users'>Users</Link>
                    </span>
                </div>

                <div className="activity-buttons">
                    <button 
                        className="upload"
                        onClick={() => {
                            localStorage.clear()
                            dispatch({type: "CLEAR"})
                            history.push('/')
                        }}
                    >LOGOUT</button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
