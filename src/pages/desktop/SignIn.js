import React, {useState, useContext} from 'react'
import {UserContext} from './App'
import {
  Link,
  useHistory
} from 'react-router-dom'

import './css/general.css'
import './css/hub.css'

import Navigation from './Navigation'


const SignIn = () => {
    const {state, dispatch} = useContext(UserContext)

    const history = useHistory()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    // const [confirmPassword, setConfirmPassword] = useState("")

    const PostData = () => {
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            alert("invalid email")
            return
        }
        fetch("https://aoestate-server-two.herokuapp.com/signin-admin", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.error){
                    alert(data.error)
                }
                else{
                    localStorage.setItem("jwt", data.token)
                    localStorage.setItem("admin", JSON.stringify(data.admin))
                    dispatch({type: "USER", payload: data.admin})
                    alert("Signed in successfully")
                    history.push('/upload-brokers-property')
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="developers-hub">
            <div className="desktop">
                <Navigation />

                <div className="container-text">
                    <div className="content content-left">
                        <div className="text">
                            <h1>Sign In as Admin</h1>
                            
                            <p>Are you the admin? Insert the email and password given to you by the developer to proceed successfully. Thank you!</p>
                        </div>

                        <div className="image">
                            <div className="upload-form">
                                <div className="tab">
                                    <label>Email Address</label>
                                    <br />
                                    <input 
                                        type="email" 
                                        placeholder="Email address..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="tab">
                                    <label>Password</label>
                                    <br />
                                    <input
                                        type="password"
                                        placeholder="Password..."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>

                                <div className="button tab">
                                    <button onClick={() => PostData()}>
                                        Sign in →
                                    </button>
                                </div>

                                <div className="tab extras">
                                    <div className="right">Forgot password? <Link to='/brokers-signup'>Reset password</Link></div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
