import React from 'react';
import './App.css';
import Informasi from '../src/Component/Informasi/Informasi';
import Login from '../src/Component/Login/Login.js';
import Home from '../src/Component/Home/Home';
import Daftar from '../src/Component/Daftar/Daftar';
import Biodata from '../src/Component/Biodata/Biodata';
import BiodataOrtu from '../src/Component/Biodata-ortu/BiodataOrtu';
import{BrowserRouter as Router, Route, Link} from'react-router-dom';


export default class App extends React.Component{
  render(){
    return(
      <Router>
        <div>

         <Route path="/"exact component={Home}/>
          <Route path="/home"component={Home}/>
          <Route path="/daftar"component={Daftar}/>
          <Route path="/informasi"component={Informasi}/> 
          <Route path="/Biodata" component={Biodata}/>
          <Route path="/Login"component={Login}/>
          <Route path="/Biodata-Ortu"component={BiodataOrtu}/>
        </div>
      </Router>
    )
  }
}