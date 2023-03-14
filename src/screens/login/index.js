import React from 'react';
import Header from '../../components/header';
import Input from '../../components/input';
import useFetch from '../../hook/useFetch';
import Title from '../../components/title';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Logo from '../../components/logo';
import styled from "styled-components";
import { Link } from "react-router-dom";
import LeftPart from '../../components/leftPart';
//const { useState } = require('react');

const Index = () => {
    const navigate = useNavigate();
    const [userForm, setUserForm] = useState(
      {
        email:"",
        password:""
      }
    );
    const { data, isLoading, error, fetchData } = useFetch('auth/login/user',{}, userForm, 'POST');
    const inputValue = [
      {
        name:"email",
        placeholder:'email',
        required: true,
        type: "email",
        value: userForm.email
      },
      {
        name:"password",
        placeholder:'password',
        required: true,
        type: "password",
        value: userForm.password
      }
    ]

    
    const handleChange = (event) => {
      setUserForm({...userForm, [event.target.name]:event.target.value});
    };
    const submitRegister = (event) => {
      event.preventDefault();
      fetchData();
      //console.log(data);
    };

    useEffect(() => {
      if(data){
        if (data.auth == true){
          Cookies.set('token_cookie', data.token);
          console.log(Cookies.get('token_cookie'))
          navigate("/profile", {state: {isMyProfile: true}})
        }
      }
    }, [data]);

    return (
    <AllPage>
      <LoginForm>
      <LogoTitle><Logo/></LogoTitle>
        <TheForm onSubmit={(e)=>submitRegister(e)}>
            {inputValue.map((input) => (
                        // eslint-disable-next-line react/jsx-key
                <Input type={input.type} name={input.name} placeholder={input.placeholder} required={input.required} onChange={(e)=>handleChange(e)} value={input.value}/>         
            ))}
            <Button>Se connecter</Button>
            <StyledLink to="/register">Pas de compte ?  s'enregistrer</StyledLink>
        </TheForm>
      </LoginForm>
    </AllPage>
    );
}
const AllPage = styled.div`
  color: #FFFF;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LogoTitle = styled.div`
  margin-bottom: 5%;
`;
const LoginForm = styled.div`
  width: 20%;
  height: 45vh;
  border-radius: 20px;
  border: 1px solid #BEB6B6;
  background-color: #353434;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TheForm = styled.form`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #65B7EE;
  color: white;
  width: 100%;
  height: 40px;
  border-radius: 8px;
  margin-top: 10%;
  font-size: 15px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #3296D8;
            color: white;
        }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  outline: none;
  color: white;
  margin-top: 8%;
`;

export default Index;
