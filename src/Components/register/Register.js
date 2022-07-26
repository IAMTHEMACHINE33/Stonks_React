import React from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import RegisterIcon from "../../images/user.png"
import './Register.css'
import uiImg from "../../images/register.svg"
import { useState } from "react";
import axios from "axios";

const Register= () => {

    const [username, setUsername] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [message, setMessage] = useState('');

    const RegisterUser=(e)=>{
       e.preventDefault();
       const data = {
                    username: username,
                    firstname: firstname,
                    lastname: lastname,
                    age: age,
                    email: email,
                    password: password,
                    // user_img:image
                };
    //    const data = new FormData();
    //     data.append("username",username);
    //     data.append("firstname",firstname);
    //     data.append("lastname",lastname);
    //     data.append("age",age);
    //     data.append("email",email);
    //     data.append("password",password);
    //     data.append("user_img",image);
        axios
                    .post("http://localhost:90/user/insert",data)
                    .then((response)=>{
                        if(response.data.msg="Added"){
                            setMessage("User Registered successfully");
                            console.log(response);
                        }
                        else{
                            setMessage("Failed to register");
                            console.log(response);
                        }
                    })
                    .catch()
            
    }

    return (
        <>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
                        <img className='icon-img' src={RegisterIcon} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicUsername">
                                <Form.Control type="text" placeholder="Enter username" onChange={(e)=>{setUsername(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicFirstname">
                                <Form.Control type="text" placeholder="Enter Firstname" onChange={(e)=>{setFirstname(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicLastname">
                                <Form.Control type="text" placeholder="Enter Lastname" onChange={(e)=>{setLastname(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicAge">
                                <Form.Control type="text" placeholder="Enter Age" onChange={(e)=>{setAge(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
                            </Form.Group>
                            {/* <br/>
                            <Form.Group controlId="formBasicImage">
                                <Form.Control type="file" placeholder="Password" onChange={(e)=>{setImage(e.target.files[0])}}/>
                            </Form.Group> */}
                            <br/>
                            {/* <Form.Group controlId="formBasicImage">
                                <Form.Control type="text" placeholder="image" onChange={(e)=>{setImage(e.target.value)}}/>
                            </Form.Group>
                            <br/> */}
                            <Form.Group controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" onClick={RegisterUser}>
                                    Register
                                </Button>
                            </div>
                            <div className='text-left mt-3'>
                                <a href='/login'><small className='reset'>Already have an account || Login</small></a>
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

export default Register;