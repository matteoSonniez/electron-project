import React from 'react';
import styled from "styled-components";
import ImageProf from '../../img/profile.jpg';

const Index = ({users}) => {
    return (
        <Publications>
            {users.map((user) => (
                <Publication>
                    <HeaderPublication>
                        <ImageProfile src={ImageProf}></ImageProfile>
                        <AllNames>
                            <UserName>{user.userName}</UserName>
                            <Names>{user.firstName}  {user.lastName}</Names>
                        </AllNames>
                    </HeaderPublication>
                    {user.images.map((imagePath) => (
                        <Image src={imagePath}/>   
                    ))}
                </Publication> 
            ))}
        </Publications>
    );
}

const Publications = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
`;
const HeaderPublication = styled.div`
  display: flex;
  padding: 20px 0px;
`;
const Publication = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #BEB6B6;
`;
const UserName = styled.text`
  font-size: 20px;
`;
const Names = styled.text`
  font-size: 15px;
`;
const AllNames = styled.div`
  display: flex;
  flex-direction: column;
`;
const Image = styled.img`
  width: 100%;
`;
const ImageProfile = styled.img`
  width: 40px;
  border-radius: 20px;
  border: 2px solid #BEB6B6;
  margin-right: 2%;
`;

export default Index;
