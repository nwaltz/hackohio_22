import React, {useEffect} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";

function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  try {
    let user = location.state.user;
    console.log("pre axios");
    const checkLogin = () => {
      axios.get("//localhost:5000/find_user_profile", {
        username: user.nameNumber,
        password: user.password
      }).then((res) => {
        console.log(">>>>>> " + res.data);
      }).catch((err) => {
        navigate("/login",);
      });
    }
    console.log("post axios");
    //temp REMOVE WHEN REAL TESTING
    user.buckID = "../Images/brian.1.jpg";

    checkLogin();
    return (
      <>
        <div className="container w-100 text-center bg-light rounded p-3">
          <div className="container">
            <div className="row">
              <div className="col-sm">
                <h1>Profile</h1>
                <hr />
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
    );
  } catch (error) {
    //redirect to login page
    console.log("Could not import");
    return (
      <>
        <h1>error, redirect later</h1>
      </>
    );
  }
}

export default Profile;
