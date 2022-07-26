import React from 'react';
import {Button, Col, Container, Form, Row, Dropdown, DropdownButton, InputGroup} from "react-bootstrap";
import PortfolioIcon from "../../images/user.png"
import './portfolio_add.css'
import uiImg from "../../images/portfolio.svg"
import { useState, useEffect } from "react";
import axios from "axios";

const Portfolio= (selected, setSelected) => {

    const [isActive, setIsActive] = useState(false);
    // const options = ["React", "Vue", "Angular"];
    const config = {
        headers:{
            Authorization : "Bearer "+ localStorage.getItem('ticket')
        }
    }
    const [details, setDetails] = useState([]);
    const [price, setPrice] = useState('');
    const [qty, setQty] = useState('');
    const [bdate, setBdate] = useState('');
    const [stock, setStock] = useState('');
    const [message, setMessage] = useState('');

    const PortfolioAdd=(e)=>{
       e.preventDefault();
       const data={
        price: price,
        qty: qty,
        bdate: bdate,
        stock: stock
       };
       axios
       .post("http://localhost:90/portfolio/insert", data, config)
       .then((response) => {
         console.log(response)
       })
       .catch(e=>{
         console.log(e)
       });
       
    };
    useEffect(()=>{
        axios.get("http://localhost:90/stock/show",config)
        .then(result=>{
            console.log(result.data.data)
            setDetails(result.data.data)
        })
        .catch(e=>{
            console.log(e)
        })
    },[],)

    return (
        <>
            <Container className="mt-5 pt-5">
                <Row>
                    <Col lg={4} md={6} sm={12} className="text-center mt-5 p-5">
                        <img className='icon-img' src={PortfolioIcon} alt="icon"/>
                        <Form>
                            <Form.Group controlId="formBasicprice">
                                <Form.Control type="number" placeholder="Enter price" onChange={(e)=>{setPrice(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicqty">
                                <Form.Control type="number" placeholder="Enter qty" onChange={(e)=>{setQty(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId="formBasicdate">
                                <Form.Control type="date" name="bdate" placeholder="Enter Bought Date" onChange={(e)=>{setBdate(e.target.value)}}/>
                            </Form.Group>
                            <br/>
                            <Form.Group controlId='formBasicstock'>
                                <Form.Select aria-label="Default select example" onChange={(e)=>{setStock(e.target.value)}}>
                                    <option>Select Stock</option>
                                    
                                    {details.map(option=>{
                                        return(
                                                    <option value={option._id}>{option.Symbol}</option>
                                        )
                                    })}        
                                </Form.Select>
                            </Form.Group>
                            <br/>
                            <div className="d-grid gap-2">
                                <Button variant="primary" type="submit" onClick={PortfolioAdd}>
                                    Add Portfolio
                                </Button>
                            </div>
                            {/* <div className='text-left mt-3'>
                                <a href='/register'><small className='reset'>Don't Have an account || Register</small></a>
                            </div> */}
                        </Form>
                    </Col>
                    <Col>
                    <div className="port-line d-flex">
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

export default Portfolio;