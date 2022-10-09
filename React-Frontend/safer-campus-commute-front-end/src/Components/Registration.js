import React, { isValidElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Field from "./login/Field";
import axios from "axios";

function Register() {
  const [user, setUser] = useState({
    buckID: "",
    name: "Samiul Islam",
    age: "21",
    gender: "Male",
    nameNumber: "islam.128",
    password: "123",
    phone: "6141234567",
  });

  //Update state upon form entry
  const onFormEntry = (e) => {
    console.log(e.target.value);

    const { name, value } = e.target;
    console.log(name + ", " + value);
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    axios.post("//localhost:5000/add_user_profile", {
      dot_number: user.nameNumber,
      password: user.password,
      name: user.name,
      age: user.age,
      gender: user.gender,
      phone: user.phone,
    });
    navigate("/profile", { state: { user: user } });
  };

  return (
    <>
      <div className="shadow container w-50 text-center bg-light rounded p-3">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-5">Register - All Fields Required</h1>
          <div className="container row g-3">
            <Field
              type={"url"}
              name={"buckID"}
              placeholder={"BuckID Link"}
              onFormEntry={onFormEntry}
            />
            <Field
              type={"text"}
              name={"name"}
              placeholder={"Full Name"}
              onFormEntry={onFormEntry}
            />
            <div className="col-4">
              <Field
                type={"text"}
                name={"nameNumber"}
                placeholder={"Name.#"}
                onFormEntry={onFormEntry}
              />
            </div>
            <div className="col-4">
              <Field
                type={"number"}
                name={"age"}
                placeholder={"Age"}
                onFormEntry={onFormEntry}
              />
            </div>
            <div className="col-4">
              <Field
                type={"text"}
                name={"gender"}
                placeholder={"Gender"}
                onFormEntry={onFormEntry}
              />
            </div>

            <Field
              type={"password"}
              name={"password"}
              placeholder={"Password"}
              onFormEntry={onFormEntry}
            />
            <Field
              type={"password"}
              name={"confirmpassword"}
              placeholder={"Confirm Password"}
              onFormEntry={onFormEntry}
            />
            <Field
              type={"tel"}
              name={"phone"}
              placeholder={"Phone Number"}
              onFormEntry={onFormEntry}
              // pattern={"[0-9]{3}-[0-9]{2}-[0-9]{3}"}
            />
            <Col className="col-12">
              <button class="col-4 btn btn-primary">Register</button>
            </Col>
          </div>
        </Form>
      </div>
    </>
  );
}

export default Register;
