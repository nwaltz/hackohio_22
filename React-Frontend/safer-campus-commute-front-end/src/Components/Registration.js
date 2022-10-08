import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Register(){
    const [user, setUser] = useState({
        buckID: "",
        name: "",
        age: "",
        gender: "",
        nameNumber:"",
        password: "",
        phone: ""
    });

    //Update state upon form entry
    const onFormEntry = (e) => {
        const {name, value} = e.target;
        setUser((prevState)=> ({
            ...prevState,
            [name]: value,
        }));
    }

    //
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        navigate("/profile", {
            state: {user: user}
        });
    }

    return <>
    <div>
        <Form onSubmit={handleSubmit}>
            <h1>Register - All Fields Required</h1>

            <Col xs={4}>
                <Form.Group>
                    <Form.Label>BuckID</Form.Label>
                    <Form.Control 
                    type="text"
                    name="buckID"
                    placeholder="BuckID link"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control 
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control 
                    type="number"
                    name="age"
                    placeholder="Age"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control 
                    type="text"
                    name="gender"
                    placeholder="Gender"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Name.#</Form.Label>
                    <Form.Control 
                    type="text"
                    name="nameNumber"
                    placeholder="Name.#"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                    type="text"
                    name="password"
                    placeholder="Password"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            
            <Col xs={4}>
                <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                    type="number"
                    name="phone"
                    placeholder="614-123-4567"
                    onChange={onFormEntry}
                    required={true}
                    />
                </Form.Group>
            </Col>

            <button>Register</button>
        </Form>
    </div>
    </>

}

export default Register;