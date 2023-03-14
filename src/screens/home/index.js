import React from 'react';
import LeftPart from '../../components/leftPart';
import Publications from '../../components/homePublication';
import styled from "styled-components";
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';



const Index = () => {
    const navigate = useNavigate();
    
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const { data, isLoading, error, fetchData } = useFetch('user/friends/get',{'authorization': thecookie}, null, 'GET');

    useEffect(() => {
        if(thecookie == undefined){
            navigate('/login');
        }
        if(thecookie != undefined){
            fetchData();
        }
      }, []);

    useEffect(() => {
        if(data != null){
            console.log("data", data);
        }
    }, [data]);
    return (
        <AllPage>
            <LeftPart></LeftPart>
            <Right>
                {data != null && <Publications users={data}/>}
            </Right>
        </AllPage>
    );
}

const AllPage = styled.div`
  color: #FFFF;
  display: flex;
`;
const Right = styled.div`
  width: 78%;
  display: flex;
  justify-content: center;
  height: 100vh;
  overflow: auto;
`;
export default Index;

