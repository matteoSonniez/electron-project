import React from 'react';
import User from '../../img/user.png';
import Programme from '../../img/file.png';
import Discover from '../../img/compass.png';
import Home from '../../img/home.png';
import Close from '../../img/close.png';
import Search from '../../img/chercher.png';
import Send from '../../img/send.png';
import { Link, useNavigate  } from "react-router-dom";
import styled from "styled-components";
import { useEffect, useState } from 'react';
import useFetch from '../../hook/useFetch';
import Support from '../../img/support.png';
import Input from '../../components/input';
import FriendsSearch from '../../components/friendsSearch';


const Index = () => {
  const navigate = useNavigate();
  const [sidebarOuverte, setSidebarOuverte] = useState(false);
  const [searchString, setSearchString] = useState("");

  const { data, isLoading, error, fetchData } = useFetch('user/search',{}, {"searchString":searchString}, 'POST');

  const openSideBar =  () => {
    setSidebarOuverte(true)
  };
  const handleChange = (event) => {
    setSearchString(event.target.value);
    setTimeout(() => { 
      fetchData();
    }, 1000)
  };

  return (
    <>
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
        <Button onClick={openSideBar}>
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
      <BottonContact>
        <Button>
          <IconBlanc src={Support}></IconBlanc>
          Contact us
        </Button>
      </BottonContact>
    </AllHeader>
    <Sidebar open={sidebarOuverte}>
      <SidebarContent>
        <HeaderSideBar>
          <TitleSideBar>Rechercher</TitleSideBar>
          <CloseSideBar  onClick={() => setSidebarOuverte(false)} src={Close}></CloseSideBar>
        </HeaderSideBar>
        <TheInput>
            <form>
                <Input type="text" name="searchString" placeholder="Rechercher" required="true" onChange={(e)=>handleChange(e)}  value={searchString}/>
            </form>
        </TheInput>
        {data && <FriendsSearch users={data}/>} 
      </SidebarContent>
    </Sidebar>
    </>
    );
}
const AllHeader = styled.div`
  flex-direction: column;
  height: 80vh;
`;
const IconBlanc = styled.img`
  margin: 8%;
  width: 30px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const CloseSideBar = styled.img`
  padding: 25px 25px;
  float: right;
  width: 20px;
  height: 20px;
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
const BottonContact = styled.div`
  bottom : 0px;
  position: absolute;
  width: 80%;
`;
const TheInput = styled.div`
  width: 80%;
  padding: 20px 20px;
`;
const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const HeaderSideBar = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TitleSideBar = styled.text`
  padding: 25px 25px;
  font-size: 20px;
`;

const Sidebar  = styled.button`
  position: fixed;
  color: white;
  top: 0;
  left: 0;
  width: 500px;
  border-right: 1px solid #8B9095;
  height: 100vh;
  background-color: #1A1717;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transform: ${({ open }) => (open ? "translatex(0%)" : "translatex(-100%)")};
  transition: transform 0.3s ease-in-out;
`;


export default Index;