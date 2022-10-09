import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

let data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  useEffect(() => {
    document.getElementById("navBarHeader").style.display = "block";
  });

  try {
    let user = location.state.user;

    axios({
      method: "post",
      url: "//localhost:5000/find_user_profile",
      data: {
        username: user.nameNumber,
        password: user.password,
      },
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((res) => {
        data = res.data;
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
        //navigate("/login",);
      });

    //temp REMOVE WHEN REAL TESTING
    user.buckID = "../Images/brian.1.jpg";

    return (
      <>
        <div className="container w-100 text-center bg-light rounded p-3">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h1>Profile</h1>
                <hr />
                <h4>Name: {userData.name}</h4>
                <h4>Age: {userData.age}</h4>
                <h4>Gender: {userData.gender}</h4>
                <h4>Name.#: {userData.dot_number}</h4>
                <h4>Phone: {userData.phone_number}</h4>
              </div>
              <div className="col-sm">
                <img src={user.buckID} />
              </div>
              <button className="mt-3">Edit Info</button>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    //redirect to login page
    // navigate("/login");
  }
}

export default Profile;
