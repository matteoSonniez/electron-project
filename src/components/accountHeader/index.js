import React from 'react';
import styled from "styled-components";
import ImageProf from '../../img/user2.png';
import AccountInfo from '../../components/accountInfo';

const Index = ({user}) => {
    return (
        <AllPage>
            <AccountInfo/>
            <div>
                <ImageProfile src={ImageProf}/>
            </div>
        </AllPage>
    );
}

const AllPage = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 0px;
  border-bottom: 1px solid gray;
  justify-content: space-around;
`;
const ImageProfile = styled.img`
  width: 140px;
  border-radius: 20px;
  margin-right: 2%;
`;
export default Index;