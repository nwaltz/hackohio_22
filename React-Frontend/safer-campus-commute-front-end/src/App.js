import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//components
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Register from "./Components/Registration";
import Login from "./Components/Login";
import FindPartner from "./Components/FindPartner";
import YourRequest from "./Components/YourRequest";
import WalkRequest from "./Components/WalkRequest";
import NavBar from "./Components/navbar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/find-partner" element={<FindPartner />} />
          <Route path="/your-request" element={<YourRequest />} />
          <Route path="/walk-request" element={<WalkRequest />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
