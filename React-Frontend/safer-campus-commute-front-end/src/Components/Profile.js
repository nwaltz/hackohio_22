import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


let data = [0, 1, 2, 3, 4, 5, 6, 7, 8];

function Profile() {
  console.log("start area");

  const location = useLocation();
  const navigate = useNavigate();


  try {
    let user = location.state.user;
    console.log("pre axios");

    axios({
      method: 'post',
      url: "//localhost:5000/find_user_profile",
      data: {
      username: user.nameNumber,
      password: user.password
      },
      headers: {
        'Content-Type': 'application/json'
      }
      
    }).then((res) => {
      console.log(res.data);
      data = res.data;
    }).catch((err) => {
      console.log(err.response.data);
      //navigate("/login",);
    });
    
    console.log("post axios");
    //temp REMOVE WHEN REAL TESTING
    user.buckID = "../Images/brian.1.jpg";

    //console.log(test)
    return (
      <>
        <div className="container w-100 text-center bg-light rounded p-3">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h1>Profile</h1>
                <hr />
                <h2>Name: {data[4]}</h2>
                <h2>Age: {data[2]}</h2>
                <h2>Gender: {data[0]}</h2>
                <h2>Name.#: {data[1]}</h2>
                <h2>Phone: {data[5]}</h2>
              </div>
              <div className="col-sm">
                <img src={user.buckID} />
              </div>
              <button>Edit Info</button>
            </div>
          </div>
        </div>
      </>
    );
  } catch (error) {
    //redirect to login page
    navigate("/login",);
  }
}

export default Profile;
