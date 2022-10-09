import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Profile from "./Components/Profile";
import Register from "./Components/Registration";
import Login from "./Components/Login";
import FindPartner from "./Components/FindPartner";
import YourRequest from "./Components/YourRequest";
import WalkRequest from "./Components/WalkRequest";
import NavBar from "./Components/navbar/NavBar";
import Matches from "./Components/Matches";
import Test from "./Components/Test";

function App() {
  const url = "//localhost:5000/add_user_profile";

  return (
    <>
      <NavBar />
      <div className="w-75 m-auto mt-5">
        <Router>
          <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register url={url}/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/find-partner" element={<FindPartner />} />
            <Route path="/your-request" element={<YourRequest />} />
            <Route path="/walk-request" element={<WalkRequest />} />
            <Route path="/matches" element={<Matches />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
