import React,{Component} from 'react'
import Header from '../Header/Header.js'
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Login extends Component{
    render(){
        return(
            <Container className="Container">
                <Row className="Row-Con">
                    <Col className="Col-con">
                        <Header />
                    </Col>
                </Row>
                <Row>
                    <Col className="col-main">
                        <Main />
                    </Col>
                </Row>
            </Container>
        )
    }
}

export class Main extends Component{
    render(){
        return(
            <div className="Login">
            <Form>
            <h3>Masuk</h3>

            <div className="form-group">
                <label>username</label>
                <input type="email" className="form-control" placeholder="Masukan username" />
            </div>

            <div className="form-group">
                <label>Kata Sandi</label>
                <input type="password" className="form-control" placeholder="Masukan Kata Sandi" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Ingat saya</label>
                    <p className="forgot-password">
                    <Link to="/forgot-password">Lupa Password</Link>
            </p>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Masuk</button>
            <p className="Daftar text-right">
                Belum memiliki Akun <Link to="/daftar">Daftar</Link>
            </p>
        </Form>
        </div>
        )
    }
}