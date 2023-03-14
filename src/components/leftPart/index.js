import React from 'react';
import Header from '../../components/header';
import Logo from '../../components/logo';
import Support from '../../img/support.png';
import styled from "styled-components";



const Index = () => {
    return (
        <Left>
            <Logo></Logo>
            <Header></Header>
            <Contact>
                <Icon src={Support}></Icon>
                Contact us
            </Contact>
        </Left>
    );
}

const Left = styled.div`
  width: 22%;
  min-height: 100vh;
  flex-direction: column;
  border-right: 1px solid #8B9095;
  position: relative;
`;
const Contact = styled.button`
  position: absolute;
  bottom : 0px;
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
const Icon = styled.img`
  margin: 8%;
  width: 30px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;

export default Index;
