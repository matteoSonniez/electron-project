import React from 'react';
import styled from "styled-components";
import AccountHeader from '../../components/accountHeader';
import AccountPublication from '../../components/accountPublication';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useFetch from '../../hook/useFetch';

const Index = ({user, isMyProfile}) => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const { data, isLoading, error, fetchData } = useFetch('user',{'authorization': thecookie}, null, 'GET');
    
    useEffect(() => {
        fetchData();
      }, []);
    return (
        <>
            {data && 
            <AllPage>
                <AccountHeader user={data}/>
                <AccountPublication user={user}/>
            </AllPage> }
        </>
    );
}

const AllPage = styled.div`
  width: 60%;
  margin-top: 6vh;
`;

export default Index;
