import React from 'react';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styled from "styled-components";
import ImageProf from '../../img/user2.png';
import { Link, useNavigate } from "react-router-dom";



const Index = ({users}) => {
    const navigate = useNavigate();
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [userId, setUserId] = useState();
    const { data, isLoading, error, fetchData } = useFetch('user/friends/add',{'authorization': thecookie}, {"userId":userId}, 'PUT');

    const addFriend = (event, params) => {
        event.preventDefault();
        setUserId(params._id)
    };

    useEffect(() => {
        if(userId != undefined){
            fetchData();
        }
      }, [userId]);
    return (
        <>
            {users.map((user) => (
                <AllComponent onClick={() => navigate("/profile", {state: {isMyProfile: false, userId: user._id }})}>
                    {user.imageProfile ? 
                        <ImgProfile>
                            <ImageProfile src={user.imageProfile}/>
                        </ImgProfile>
                        : 
                        <ImgProfile>
                            <ImageProfile src={ImageProf}/>
                        </ImgProfile>
                        
                        }
                    <p>{user.userName}</p>
                    <Button onClick={event => addFriend(event, user)}>suivre</Button> 
                </AllComponent> 
            ))}
        </>
    );
}

const ImageProfile = styled.img`
  width: 40px;
`;
const ImgProfile = styled.div`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid gray;
`;
const AllComponent = styled.div`
  display: flex;
  width: 60%;
  border-radius: 10px;
  padding: 10px 10px;
  margin: 20px;
  justify-content: space-between;
  background-color: #2A2727 ;
  cursor: pointer;
  &:hover{
            background-color: #211F1F;
            color: white;
        }
  
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
  width: 70px;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #1C1A1A;
            color: white;
        }
`;

export default Index;
