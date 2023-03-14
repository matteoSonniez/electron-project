import React from 'react';
import User from '../../img/user.png';
import Programme from '../../img/file.png';
import Discover from '../../img/compass.png';
import Home from '../../img/home.png';
import Search from '../../img/chercher.png';
import Send from '../../img/send.png';
import { Link, useNavigate  } from "react-router-dom";
import styled from "styled-components";


const Index = () => {
  const navigate = useNavigate();
  
  return (
    <AllHeader>
      <div>
        <Button onClick={() => navigate("/")}>
          <IconBlanc src={Home}></IconBlanc>
            Accueil
        </Button>
      </div>
      <div>
        <Button onClick={() => navigate("/discover")}>
          <IconBlanc src={Discover}></IconBlanc>
            Découvrir
        </Button>
      </div>
      <div>
        <Button onClick={() => navigate("/friends")}>
          <IconBlanc src={Search}></IconBlanc>
          Rechercher
        </Button>
      </div>
      <div>
        <Button onClick={() => navigate("/")}>
          <IconBlanc src={Send}></IconBlanc>
          Messages
        </Button>
      </div>
      <div>
        <Button onClick={() => navigate("/")}>
          <IconBlanc src={Programme}></IconBlanc>
          Programmes
        </Button>
      </div>
      <div>
        <Button onClick={() => navigate("/profile", {state: {isMyProfile: true}} )}>
          <IconBlanc src={User}></IconBlanc>
          Profile
        </Button>
      </div>
    </AllHeader>
    );
}
const AllHeader = styled.div`
  flex-direction: column;
`;
const IconBlanc = styled.img`
margin: 8%;
  width: 30px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  width: 80%;
  height: 50px;
  border-radius: 8px;
  font-size: 20px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #1C1A1A;
            color: white;
        }
`;

export default Index;