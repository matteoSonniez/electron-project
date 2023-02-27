import React from 'react';
import logo from '../../img/gs.png';
import { Link, useNavigate } from "react-router-dom";


const Index = () => {
    return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </header>
    </div>
    );
}

export default Index;