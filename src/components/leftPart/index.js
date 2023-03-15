import React from 'react';
import Header from '../../components/header';
import Logo from '../../components/logo';
import styled from "styled-components";



const Index = () => {
    return (
        <Left>
            <Logo></Logo>
            <Header></Header>
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

export default Index;
