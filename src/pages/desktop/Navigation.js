import React, {useContext} from 'react'

import {
    Link,
    useHistory
} from 'react-router-dom'

import {UserContext} from './App'

import './css/navigation.css'

import logo from '../../images/logo-two.png'

const Navigation = () => {
    const {state, dispatch} = useContext(UserContext)
    const history = useHistory()
    const renderList = () => {
        if(state){
            return [
                <span className="active">
                    <Link className="link-items" to='/upload-brokers-property'>Brokers Property</Link>
                </span>,
                <span>
                    <Link className="link-items" to='/upload-general-property'>General Property</Link>
                </span>,
                <span>
                    <Link className="link-items" to='/upload-events'>Event</Link>
                </span>,
                <span>
                    <Link className="link-items" to='/feeds'>Feeds</Link>
                </span>,
                <span>
                    <Link className="link-items" to='/users'>Users</Link>
                </span>,
                // <span>
                //     <Link className="link-items" to='/users-details/5ed4b898247261194c8ace47'>Brokers Feeds</Link>
                // </span>,
                <button 
                    className="upload"
                    onClick={() => {
                        localStorage.clear()
                        dispatch({type: "CLEAR"})
                        history.push('/')
                    }}
                >LOGOUT</button>
            ]
        } else{
            return [
            ]
        }
    }
    return (
        <div className="navigation-desktop">
            <Link className="link-items" to={state ? "/sign-in" : "/"}>
                <img 
                    src={logo} 
                    alt="AO Estate's Logo" 
                    className="logo" 
                />
            </Link>
            

            <div className="links">
                {renderList()}
            </div>
        </div>
    )
}

export default Navigation
