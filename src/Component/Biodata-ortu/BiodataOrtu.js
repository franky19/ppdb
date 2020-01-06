import React,{Component} from 'react'
import Header from '../Header/Header.js'
import {Container,Row,Col,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class BiodataOrtu extends Component{
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
            <h3>Biodata Orangtua</h3>

            <div className="form-group">
                <label>Nama Ayah</label>
                <input type="text" className="form-control" name="Masukan Nama Ayah" />
            </div>
            <div className="form-group">
                <label>Nama Ibu</label>
                <input type="text" className="form-control" placeholder="Masukan nama Ibu" />
            </div>
            <div className="form-group">
                <label>Alamat Orangtua</label>
                <input type="text" className="form-control" placeholder="Masukan Alamat" name="nisn" />
            </div>
            <div className="form-group">
                <label>No hp Orangtua</label>
                <input type="int" className="form-control" placeholder="Masukan No Hp Orangtua" />
            </div>
            <div className="form-group">
                <label>Pekerjaan Ayah</label>
                <input type="text" className="form-control" placeholder="Masukan Alamat" name="nisn" />
            </div>
            <div className="form-group">
                <label>Pekerjaan Ibu</label>
                <input type="int" className="form-control" placeholder="Masukan No Hp Orangtua" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Selanjutnya</button>
        </Form>
        </div>
        )
    }
} 

export class Wali extends Component{
  
    render(){
        return(
            <div className="Login">
            <Form>
            <div className="form-group">
                <label>Nama Wali</label>
                <input type="text" className="form-control" name="Masukan Nama Ayah" />
            </div>
            
            <div className="form-group">
                <label>Alamat Wali</label>
                <input type="text" className="form-control" placeholder="Masukan Alamat" name="nisn" />
            </div>
            <div className="form-group">
                <label>No hp Wali</label>
                <input type="int" className="form-control" placeholder="Masukan No Hp Orangtua" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Selanjutnya</button>
        </Form>
        </div>
        )
    }
} 
