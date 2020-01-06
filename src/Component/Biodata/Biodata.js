import React,{Component} from 'react'
import Header from '../Header/Header.js'
import {Container,Row,Col,Form} from 'react-bootstrap';
import { RadioGroup, RadioButton,ReversedRadioButton } from 'react-radio-buttons';
import {Link} from 'react-router-dom';

export default class Biodata extends Component{
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
            <h3>Biodata</h3>

            <div className="form-group">
                <label>No Pendaftaran</label>
                <input type="text" className="form-control" name="noDaftar" />
            </div>
            <div className="form-group">
                <label>Nama</label>
                <input type="text" className="form-control" placeholder="Masukan nama" />
            </div>
            <div className="form-group">
                <label>nisn</label>
                <input type="text" className="form-control" placeholder="Masukan nisn" name="nisn" />
            </div>
            <div className="form-group">
                <label>Tempat Lahir</label>
                <input type="text" className="form-control" placeholder="Masukan tanggal lahir" />
                <label>Tanggal Lahir</label>
                <input type="date" className="form-control" placeholder="Masukan tanggal lahir" />
            </div>
            <div className="form-group">
                <label>Agama</label>
                <Agama />
            </div>
            <label>Asal sekolah</label>a
            <div className="form-group">
                <label>Nama sekolah</label>
                <input type="text" className="form-control" placeholder="Masukan nisn" name="nisn" />
            </div>
            <div className="form-group">
                <label>Kabupaten/Kota</label>
                <input type="text" className="form-control" placeholder="Masukan nisn" name="nisn" />
            </div>
            <button type="submit" className="btn btn-primary btn-block">Selanjutnya</button>
        </Form>
        </div>
        )
    }
} 

export class Agama extends Component{
    render(){
        return(
            <form>
  <input type="radio" name="rdoAgama" value="Kristen Protestan" />Kristen Protestan&nbsp;
  <input type="radio" name="rdoAgama" value="islam" />Islam&nbsp;
  <input type="radio" name="rdoAgama" value="Katolik" />Katolik&nbsp;
  <input type="radio" name="rdoAgama" value="Budha" />Budha&nbsp;
  <input type="radio" name="rdoAgama" value="Hindu" />Hindu&nbsp;
</form>
        )
    }
}