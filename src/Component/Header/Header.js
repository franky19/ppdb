import React, {Component} from 'react';
import logo from './sma2.png';
import {Container,Row,Col} from 'react-bootstrap';
import Navigasi from './Nav.js'
import './Header.css'

export default class Header extends Component{
    render(){
        return(
            <Container className="container">
                <Row className="Row">
                    <Col className="col-Header">
                        <div className="Header">
                            <img src={logo} alt="logo" className="logo1" />
                            <h1>SMA Negeri 2 Lubuk Pakam</h1>
                            <Navigasi />
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}