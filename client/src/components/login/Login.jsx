
import React, { useState } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import './Login.scss'
import { Link, useNavigate } from 'react-router-dom';



export default function Login() {
    const [email, setEmail] = useState();

    const navigate = useNavigate();

    const [password, setPassword] = useState();

    const loginTest = async (event) => {
        event.preventDefault();
        const data = { email, password }
        await axios.post('https://shortu6l.herokuapp.com/login', data).then((response) => {
            console.log({ response });
            // localStorage.setItem('token', JSON.stringify(response.data))
            if (response.status == "200") {
                sessionStorage.setItem('token', JSON.stringify(response.data))
                navigate("/")
                console.log(response.status)
            }
            else{
                console.log("try again")
            }
        })
    }
    return (
        <>
            <div>
                <div className="container">
                    <div className="forms-container">
                        <div className="signin-signup">
                            <form className="sign-in-form" >
                                <h2 className="title">Login</h2>
                                <div className="input-field">
                                    <i className="fas fa-User" />
                                    <input type="text" placeholder="Username"
                                        onChange={(event) => {
                                            setEmail(event.target.value);
                                        }}
                                    />
                                </div>
                                <div className="input-field">
                                    <i className="fas fa-lock" />
                                    <input type="password" placeholder="password"
                                        onChange={(event) => {
                                            setPassword(event.target.value);
                                        }}
                                    />
                                </div>
                                <input type="submit" defaultValue="Login" className="btn solid" onClick={loginTest}
                                />
                                <p className="social-text">Or Login with social platforms</p>

                            </form>
                        </div>
                    </div>
                    <div className="panels-container">
                        <div className="panel left-panel">
                            <div className="content">
                                <h3>New here ?</h3>
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                    ex ratione. Aliquid!
                                </p>
                                <Link to="/register">
                                    <button className="btn transparent" id="sign-up-btn">
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="panel right-panel">
                            <div className="content">
                                <h3>One of us ?</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                    laboriosam ad deleniti.
                                </p>
                                <button className="btn transparent" id="sign-in-btn">
                                    Sign in
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
