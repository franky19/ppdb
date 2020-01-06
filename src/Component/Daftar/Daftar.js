import React,{Component} from 'react'
import Header from '../Header/Header.js'
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class Daftar extends Component{
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
            <h3>Daftar</h3>

            <div className="form-group">
                <label>No Kartu Keluarga</label>
                <input type="text" className="form-control" placeholder="Masukan No Kartu Keluarga" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Masukan email" />
            </div>
            <div className="form-group">
                <label>username</label>
                <input type="username" className="form-control" placeholder="Masukan username" />
            </div>
            <div className="form-group">
                <label>Kata Sandi</label>
                <input type="password" className="form-control" placeholder="Masukan Kata Sandi" />
            </div>
            <div className="form-group">
                <label>Ulangi Kata Sandi</label>
                <input type="password" className="form-control" placeholder="Masukan ulang Kata Sandi" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Masuk</button>
            <p className="Daftar text-right">
                Sudah memiliki Akun <Link to="/Login">Login</Link>
            </p>
        </Form>
        </div>
        )
    }
}