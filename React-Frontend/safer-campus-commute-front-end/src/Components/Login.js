import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Field from "./login/Field";
import axios from "axios";

function Login() {
  const [user, setUser] = useState({
    nameNumber: "",
    password: "",
  });

  //Update state upon form entry
  const onFormEntry = (e) => {
    
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //Login and take to profile page
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    console.log(user);
    e.preventDefault();
    axios.post("//localhost:5000/check_user_login", {
      username: user.nameNumber,
      password: user.password
    }).then((res) => {
      navigate("/profile", { state: { user: user } });
    }).catch((err) => {
      navigate("/login",);
    });
  };

  const handleRegister = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="shadow container w-50 text-center bg-light rounded p-3 g-3">
        <Form onSubmit={handleSubmit} className="row g-3 px-5 py-3">
          <h1 className="my-5">Login</h1>
          <Field
            type={"text"}
            name={"nameNumber"}
            placeholder={"name.#"}
            onFormEntry={onFormEntry}
          />
          <Field
            type={"password"}
            name={"password"}
            placeholder={"password"}
            onFormEntry={onFormEntry}
          />
          <Col className="col-12">
            <button className="col-4 btn btn-primary">Login</button>
          </Col>
          <Col className="col-12">
            <button className="col-4 btn btn-primary" onClick={handleRegister}>
              Register
            </button>
          </Col>
        </Form>
      </div>
    </>
  );
}

function verifyLogin(login) {
  console.log("Info passed: " + login);
  try {
    const value = axios.get(`//localhost:5000`).then((res) => {
      console.log("database call: " + res.data);
    });
    value = true;
    return value;
  } catch (error) {
    return false;
  }
}

export default Login;
