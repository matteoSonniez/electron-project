import React from 'react';
import Logo from '../../img/logo.png';
import Title from '../../img/title.png';
import { Link, useNavigate } from "react-router-dom";


const Index = () => {
    return (
    <div>
      <img src={Logo} alt="logo" />
      <img src={Title} alt="logo" />
      <header>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </header>
    </div>
    );
}

export default Index;