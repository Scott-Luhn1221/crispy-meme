import React, { useState } from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function AddSub() {
    const history = useHistory();

    const [subscription, setSubscription] = useState({
        name: "",
        plan: '',
        cost: "",
        paymentDate: "",
        cancelLink: "",
        userEmail:"",
    })



    const subscriptionChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const tempSubscription = { ...subscription };
        tempSubscription[name] = value;
        setSubscription(tempSubscription)

    }

    const addSubSubmitHandler = () => {
       subscription.userEmail = localStorage.getItem('loggedInUser');
        axios.post("http://localhost:8080/savesub", subscription).then((response) => {
            localStorage.setItem("addedSubscription", response.data.tempSubscription)
            history.push("/profile");
        }).catch((error) => {
            console.log("Subscription object not placed" + error)
        })
    }

    return (
        <div class="wrapper">
            <form class="form-signin">
                <h2 class="form-signin-heading">Add a New Subscription</h2>
                <br></br>
                <input type="text" class="form-control" value={subscription.name} onChange={subscriptionChangeHandler} name="name" placeholder="Name" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.plan} onChange={subscriptionChangeHandler} name="plan" placeholder="Plan" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.cost} onChange={subscriptionChangeHandler} name="cost" placeholder="Cost Per Month" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.paymentDate} onChange={subscriptionChangeHandler} name="paymentDate" placeholder="Payment Date" required="" autofocus="" />
                <br></br>
                <input type="text" class="form-control" value={subscription.cancelLink} onChange={subscriptionChangeHandler} name="cancelLink" placeholder="Cancel Link" required="" />
                <br></br>
                <button class="btn btn-lg btn-primary btn-block" onClick={addSubSubmitHandler} type="button">Add Subscription</button>
            </form>
        </div>
    )
}