import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, Route, useHistory } from "react-router-dom"


const Profile = () => {
    const [user, setUser] = useState(0)

    const [subscriptions, setSubs] = useState([{name: "WordsThere"}])

    const historyTwo = useHistory();

    const signOutSubmitHandler = () => {
        console.log('Sign out clicked');
        localStorage.clear();
        historyTwo.push('/');
    }

    useEffect(() => {
        const params = {
            email: localStorage.getItem('loggedInUser')
        }
        let userEmail = localStorage.getItem('loggedInUser');
        axios.get(`http://localhost:8080/findAllSubsByEmail?userEmail=${userEmail}`).then(response => {
            console.log(response);
            setSubs(response.data);
        }).catch(error => {
            console.log("error" + error)
        });

        // axios.get('http://localhost8080/findByEmail', { params }).then(response => {
        //     console.log(response);
        //     setUser(response.data);
        // }).catch(error => {
        //     console.log("error" + error)
        // });
    }, [])


    const getRows = () => {
        console.log(subscriptions)

        return (
            subscriptions.map((item, index) => {
                { console.log(item) }
                <tr>
                    <td>{item.name}</td>
                    <td>{item.plan}</td>
                    <td>{item.cost}</td>
                </tr>
            })

        )

    }




    return (
        <div className="container-fluid home-margin-top-less-200px">
            <h1 className="h1">Welcome {user.firstName}!</h1>
            <div className="row">
            </div>
            <div>
                <br></br>
                <main role="main" class="inner cover">

                    <h2 class="cover-heading">Active Subscriptions</h2>
                    <table class="table sortable">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Plan</th>
                                <th scope="col">Cost</th>
                                <th scope="col">Payment Date</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        {subscriptions.map((item, index) => {
                             { console.log(item) }
                            <tr>
                                <td>item.name</td>
                                <td>item.plan</td>
                                <td>item.cost</td>
                            </tr>
                        })}
                    </table>
                </main>
            </div>
            <a href="add-sub" class="btn btn-lg btn-secondary fw-bold border-white bg white">Add Subscription</a>
            <button className="btn btn-outline-success" onClick={signOutSubmitHandler} type="button">Logout</button>
        </div>

    )
}


export default Profile;
