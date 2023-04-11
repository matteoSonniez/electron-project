import React from 'react';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import styled from "styled-components";
import ImageProf from '../../img/user2.png';
import { Link, useNavigate } from "react-router-dom";


const Index = ({commentId}) => {
    const navigate = useNavigate();
    const { data, isLoading, error, fetchData } = useFetch('/comment/get/one',{}, {"commentId": commentId}, 'POST');

    useEffect(() => {
        fetchData();
      }, []);
    
    return (
        <>
            {data &&
            <AllTheComment>
                {data.user.imageProfile ? 
                        <ImgProfile onClick={() => navigate("/profile2", {state: {isMyProfile: false, userId: data.user._id }})}>
                            <ImageProfile src={data.user.imageProfile}/>
                        </ImgProfile>
                        : 
                        <ImgProfile onClick={() => navigate("/profile2", {state: {isMyProfile: false, userId: data.user._id }})}>
                            <ImageProfile src={ImageProf}/>
                        </ImgProfile>
                        
                        }
                <AllNames>
                    <UserName onClick={() => navigate("/profile2", {state: {isMyProfile: false, userId: data.user._id }})}>
                        {data.user.userName}
                    </UserName>
                    <Content>{data.content}</Content>
                </AllNames>
            </AllTheComment> 
            }
        </>
    );
}
const UserName = styled.text`
  font-size: 20px;
`;
const Content = styled.text`
  font-size: 15px;
`;
const AllNames = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const AllTheComment = styled.div`
  display: flex;
  padding: 20px 0px;
  margin-left: 20px;
  cursor: pointer;
`;
const ImageProfile = styled.img`
  width: 40px;
  cursor: pointer;
`;
const ImgProfile = styled.div`
  margin-right: 2%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid gray;
  cursor: pointer;
`;
export default Index;
