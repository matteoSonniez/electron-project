import React from 'react';
import styled from "styled-components";
import Settings from '../../img/setting.png';

const Index = () => {
    return (
        <AllPage>
            <Column>
                <p>nomuser</p>
                <p>10 publications</p>
                <p>firstname</p>
            </Column>
            <Column>
                <p>modifier</p>
                <p>2 programmes</p>
                <p>firstname</p>
            </Column>
            <Column>
                <Setting src={Settings}/>
                <p>4 abonnements</p>
            </Column>
           
        </AllPage>
    );
}

const AllPage = styled.div`
  display: flex;
  width: 60%;
  display: flex;
`;
const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Setting = styled.img`
  padding: 15px 0px;
  width: 20px;
  height: 20px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
export default Index;