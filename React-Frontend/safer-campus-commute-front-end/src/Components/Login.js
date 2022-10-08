import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

function Login() {
    const [user, setUser] = useState({
        nameNumber: "",
        password: ""
    });

    //Update state upon form entry
    const onFormEntry = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    //Login and take to profile page
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        
        if(verifyLogin(user)){
            navigate("/profile", {
                state: { user: user }
            });
        } else {
            navigate("/login");
        }
        
    }

    const handleRegister = () => {
        navigate("/register");
    }
    return <>
        <div className="container w-50 text-center bg-light rounded p-3">
            <Form onSubmit={handleSubmit}>
                <h1>Login - All Fields Required</h1>

                <Col xs={4}>
                    <Form.Group>
                        <Form.Label>name.#</Form.Label>
                        <Form.Control
                            type="text"
                            name="nameNumber"
                            placeholder="name.#"
                            onChange={onFormEntry}
                            required={true}
                        />
                        
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="text"
                            name="password"
                            placeholder="password"
                            onChange={onFormEntry}
                            required={true}
                        />
                    </Form.Group>
                </Col>
                <button>Login</button>
            </Form>
            <button onClick={handleRegister}>Register Instead</button>
        </div>
    </>
}

function verifyLogin(login) {
    return true;
    //make database call to verify login
}

export default Login;