import React, { useState } from "react"
import loginBox from './../loginbox/loginBox';
import { useHistory } from 'react-router-dom';
import axios from 'axios';




export default function Home() {

    const [signInUser, setSignInUser] = useState({ email: '', password: '' })

    const history = useHistory();

    const signOutSubmitHandler = () => {
        console.log('sign out clicked');
        localStorage.clear();
        history.push('/');
    }

    const changeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        const tempSignIn = { ...signInUser };
        tempSignIn[name] = value;
        setSignInUser(tempSignIn);
    }

    const signInSubmitHandler = () => {
        axios.post('http://localhost:8080/login', signInUser).then(response => {
            console.log(response);
            localStorage.setItem("loggedInUser", response.data.email);
            history.push('/profile');
        }).catch((error) => {
            console.log("invalid" + error);
        })
    }



    return (
        <div className="container-fluid home margin-top-less-200px" >
            <div className="row">
                <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                    <br />
                    <main className="px3">
                        <center><h1>Welcome to Subscription Tracker</h1></center>
                        <center><p class="lead">To begin tracking your subs login below.</p></center>
                        <p class="lead">
                            <div class="wrapper">
                                <form class="form-signin">
                                    <h2 class="form-signin-heading">Please login</h2>
                                    <input type="text" class="form-control" value={signInUser.email} onChange={changeHandler} name="email" placeholder="Email Address" required=""  />
                                    <input type="password" class="form-control" value={signInUser.password} onChange={changeHandler} name="password" placeholder="Password" required="" />

                                    <button class="btn btn-lg btn-primary btn-block" onClick={signInSubmitHandler} type="button">Login</button>
                                </form>
                            </div>
                            <br></br>
                            <center>Not a member, sign-up <a href="/sign-up">here</a></center>
                            <center><a href="about-us" class="btn btn-lg btn-secondary fw-bold border-white bg white">About Us</a></center>
                        </p>


                    </main>
                </div>
            </div>
        </div>
    )
}