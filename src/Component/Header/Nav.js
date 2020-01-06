import React,{Component} from 'react';
import {Nav} from 'react-bootstrap';


export default class Navigation extends Component{
    render(){
        return(
            <Nav variant="pills" className="Nav" defaultactivekey="/home">
  <Nav.Item>
    <Nav.Link href="/home" activekey="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Informasi" href="/Informasi" activekey="/Informasi">Informasi</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="/Login" href="/Login" activekey='Login'>
      Login
    </Nav.Link>
  </Nav.Item>
</Nav>
        )
    }
}