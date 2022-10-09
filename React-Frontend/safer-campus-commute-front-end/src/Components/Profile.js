import React from "react";
import { useLocation } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from "react-bootstrap/Badge";

function Profile() {
    const location = useLocation();
    let user = [];

    try {
        user = location.state.user;
        //temp REMOVE WHEN REAL TESTING
        user.buckID = "../Images/brian.1.jpg";

        return <>
            <div className="container w-100 text-center bg-light rounded p-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h1>Profile</h1>
                            <hr/>
                            <h2>Name: {user.name}</h2>
                            <h2>Age: {user.age}</h2>
                            <h2>Gender: {user.gender}</h2>
                            <h2>Name.#: {user.nameNumber}</h2>
                            <h2>Phone: {user.phone}</h2>
                        </div>
                        <div className="col-sm">
                            <img src={user.buckID} />
                        </div>
                        <button>Edit Info</button>
                    </div>
                </div>
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