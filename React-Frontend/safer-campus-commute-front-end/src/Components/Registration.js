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

  const walking = "../Images/walking.bmp";

  //Update state upon form entry
  const onFormEntry = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    navigate("/profile", {
      state: { user: user },
    });
  };

  return (
    <>
      <div className="container w-50 text-center bg-light rounded p-3">
        <Form onSubmit={handleSubmit}>
          <h1 className="my-5">Register - All Fields Required</h1>
          <div className="container row g-3">
            <Field type={"url"} name={"BuckID Link"} onChange={onFormEntry} />
            <Field type={"text"} name={"Full Name"} onChange={onFormEntry} />
            <Field type={"number"} name={"Age"} onChange={onFormEntry} />
            <Field type={"text"} name={"Gender"} onChange={onFormEntry} />
            <Field type={"text"} name={"Name.#"} onChange={onFormEntry} />
            <Field type={"password"} name={"Password"} onChange={onFormEntry} />
            <Field
              type={"text"}
              name={"Confirm Password"}
              onChange={onFormEntry}
            />
            <Field type={"text"} name={"Name.#"} onChange={onFormEntry} />
            <Field
              type={"tel"}
              name={"Phone Number"}
              onChange={onFormEntry}
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

  function FormComponent({
    entrySize,
    dataType,
    dataName,
    label,
    placeholder,
    onFormEntry,
  }) {
    return (
      <>
        <Col xs={entrySize}>
          <Form.Group>
            <Form.Label>{label}</Form.Label>
            <Form.Control
              type={dataType}
              name={dataName}
              placeholder={placeholder}
              onChange={onFormEntry}
              required={true}
            />
          </Form.Group>
        </Col>
      </>
    );
  }
}

export default Register;
