import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import Field from "./login/Field";

function Register() {
  const [user, setUser] = useState({
    buckID: "",
    name: "",
    age: "",
    gender: "",
    nameNumber: "",
    password: "",
    phone: "",
  });

  //Update state upon form entry
  const onFormEntry = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/profile", {
      state: { user: user },
    });
  };

  return (
    <>
      <div className="shadow container w-50 text-center bg-light rounded p-3">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-5">Register - All Fields Required</h1>
          <div className="container row g-3">
            <Field
              type={"url"}
              name={"BuckID Link"}
              onFormEntry={onFormEntry}
            />
            <Field type={"text"} name={"Full Name"} onFormEntry={onFormEntry} />
            <div className="col-4">
              <Field
                type={"text"}
                name={"Name.#"}
                onFormEntry={() => onFormEntry}
              />
            </div>
            <div className="col-4">
              <Field
                type={"number"}
                name={"Age"}
                onFormEntry={() => onFormEntry}
              />
            </div>
            <div className="col-4">
              <Field
                type={"text"}
                name={"Gender"}
                onFormEntry={() => onFormEntry}
              />
            </div>

            <Field
              type={"password"}
              name={"Password"}
              onFormEntry={() => onFormEntry}
            />
            <Field
              type={"password"}
              name={"Confirm Password"}
              onFormEntry={() => onFormEntry}
            />
            <Field
              type={"tel"}
              name={"Phone Number"}
              onFormEntry={() => onFormEntry}
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
