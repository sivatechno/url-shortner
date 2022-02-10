import React, { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';


export default function Register() {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    // const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const registerData = async (event) => {
        event.preventDefault();
        const data = { email, password, username }
        await axios.post('http://localhost:5201/create', {
            username: username,
            password: password,
            email: email
        }).then((response) => {
            console.log(response)
            navigate("/login")
        })
    }
    return (
        <>
            <div className="container">
                <div className="forms-container">
                    <div className="signin-signup">
                        <form className="sign-in-form" >
                            <h2 className="title">Register</h2>


                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="text" placeholder="username"
                                    onChange={(event) => {
                                        setUsername(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-User" />
                                <input type="text" placeholder="Email"
                                    onChange={(event) => {
                                        setEmail(event.target.value);
                                    }}
                                />
                            </div>
                            <div className="input-field">
                                <i className="fas fa-lock" />
                                <input type="password" placeholder="Password"
                                    onChange={(event) => {
                                        setPassword(event.target.value);
                                    }}
                                />
                            </div>

                            <input type="submit" defaultValue="Login" className="btn solid" onClick={registerData}
                            />
                            <p className="social-text">Or Login with social platforms</p>

                        </form>
                    </div>
                </div>
                <div className="panels-container">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>I have an account</h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                                ex ratione. Aliquid!
                            </p>
                            <Link to="/login">
                                <button className="btn transparent" id="sign-up-btn">
                                    Sign in
                                </button>
                            </Link>

                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}
