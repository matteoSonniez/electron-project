import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styled from "styled-components";
import Account from '../../components/account';
import useFetch from '../../hook/useFetch';
import { HashLoader } from 'react-spinners';
import LeftPart from '../../components/leftPart';


const Index = (props) => {
    const {state} = useLocation();
    const {isMyProfile} = state
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [pathApi, setPathApi] = useState(isMyProfile == false ? 'user/get': 'user');
    const [headerApi, setHeaderApi] = useState(isMyProfile == false ? {} :{'authorization': thecookie});
    const [bodyApi, setBodyApi] = useState(isMyProfile == false ? {"userId": state.userId} : null);
    const [methodApi, setMethodApi] = useState(isMyProfile == false ? 'POST': 'GET');
   

    const { data, isLoading, error, fetchData } = useFetch(pathApi,headerApi, bodyApi, methodApi);
    
    const newImageAdd = () => {
      fetchData();
    };

    useEffect(() => {
        fetchData();
      }, []);

    return (
      <AllPage>
            <LeftPart></LeftPart>
            <RightPart>
              {data && <Account user={data} isMyProfile={isMyProfile} newImageAdd={newImageAdd} />}
            </RightPart>
        </AllPage>
    );
}

const AllPage = styled.div`
  color: #FFFF;
  display: flex;
`;
const RightPart = styled.div`
  width: 78%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  overflow: auto;
`;

export default Index;
