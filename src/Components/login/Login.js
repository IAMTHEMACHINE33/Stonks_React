import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import loginIcon from "../../images/user.png"
import './Login.css'
import uiImg from "../../images/login.svg"
import { useState } from "react";
import axios from "axios";

const Login= () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const loginUser=(e)=>{
       e.preventDefault();
       const data={
        email: email,
        password: password,
       };
       axios
            .post("http://localhost:90/user/login",data)
            .then((response)=>{
                console.log(response.data.token)
                if(response.data.token){
                    localStorage.setItem("ticket",response.data.token);

                    window.location.replace('/dashboard')
                }else{
                    setMessage("Invalid credential!")
                }
            })
            .catch((e)=>{
                console.log(e)
            })
    }

    return (
        <>
            <Container className="mt-5 pt-5">
                <Row>

                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
                        <img className='icon-img' src={loginIcon} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" onClick={loginUser}>
                                    Login
                                </Button>
                            </div>
                            <div className='text-left mt-3'>
                                <a href='/register'><small className='reset'>Don't Have an account || Register</small></a>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                    <div className="log-line d-flex">
                        <div className="vr"></div>
                    </div>
                    </Col>
                    <Col lg={7} md={6} sm={12}>
                        <img className='w-100' src={uiImg} alt=""/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Login;