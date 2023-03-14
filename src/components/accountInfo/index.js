import React from 'react';
import styled from "styled-components";
import Settings from '../../img/setting.png';

const Index = ({user, isMyProfile}) => {

    return (
        <AllPage>
          <Top>
            <UserName>{user.userName}</UserName>
            {isMyProfile ? 
              <Button>Modifier</Button>
              : 
              <Button>Suivre</Button>
            }
            {isMyProfile && <Setting src={Settings}/>}
          </Top>
          <Middle>
            <PubliText>10 publications</PubliText>
            <PubliText>2 programmes</PubliText>
            <PubliText>4 abonnements</PubliText>
          </Middle>
          <Bottom>
            <Names>{user.firstName}</Names>
            <Names>{user.lastName}</Names>
          </Bottom>       
        </AllPage>
    );
}

const AllPage = styled.div`
  display: flex;
  width: 55%;
  flex-direction: column;
`;
const Top = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6%;
`;
const Middle = styled.div`
  display: flex;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 6%;
`;
const Bottom = styled.div`
  display: flex;
  width: 100%;
  display: flex;
`;
const UserName = styled.text`
  font-size: 22px;
`;
const Names = styled.text`
  font-size: 16px;
  margin-right: 8%;
`;
const PubliText = styled.text`
  font-size: 18px;
`;
const Setting = styled.img`
  width: 20px;
  height: 20px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: #2F2D2E;
  color: white;
  padding: 10px 10px;
  border-radius: 8px;
  font-size: 16px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #1C1A1A;
            color: white;
        }
`;
export default Index;