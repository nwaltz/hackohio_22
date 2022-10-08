import React from "react";
import {useLocation} from "react-router-dom";
function Profile(){
    const location = useLocation();
    let user = [];

    try {
        user = location.state.user;
        //temp REMOVE WHEN REAL TESTING
        user.buckID = "../Images/brian.1.jpg";

        return <>
        <h1>Profile</h1>
        
        <div>
            <h2>BuckID: <img src={user.buckID} width="30%" height="auto"/></h2>
            <h2>Name: {user.name}</h2>
            <h2>Age: {user.age}</h2>
            <h2>Gender: {user.gender}</h2>
            <h2>Name.#: {user.nameNumber}</h2>
            <h2>Phone: {user.phone}</h2>
        </div>
        </>
    } catch (error) {
        //redirect to login page
        console.log("Could not import");
        return <>
        <h1>error, redirect later</h1>
        </>
    }



}

export default Profile;