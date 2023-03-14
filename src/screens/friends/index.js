import React from 'react';
import Header from '../../components/header';
import LeftPart from '../../components/leftPart';
import Logo from '../../components/logo';
import Support from '../../img/support.png';
import Cookies from 'js-cookie';
import styled from "styled-components";
import useFetch from '../../hook/useFetch';
import Input from '../../components/input';
import FriendsSearch from '../../components/friendsSearch';
import { useEffect, useState } from 'react';



const Index = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const { data, isLoading, error, fetchData } = useFetch('user/search',{}, {"searchString":searchTerm}, 'POST');

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
      }
    const submitRegister = (event) => {
        event.preventDefault();
        console.log(searchTerm);
        fetchData();
    };

    return (
        <AllPage>
            <LeftPart></LeftPart>
            <Right>
                <div>
                    <form onSubmit={(e)=>submitRegister(e)}>
                        <Input type="texte" name="search" placeholder="rechercher" required={true} onChange={(e)=>handleSearch(e)} value={searchTerm}/>
                        <button>chercher</button>
                        {data && <FriendsSearch users={data}/>}     
                    </form>
                </div>
            </Right>
        </AllPage>
    );
}

const AllPage = styled.div`
  color: #FFFF;
  display: flex;
`;
const Right = styled.div`
  width: 75%;
  justify-content: center;
`;

export default Index;
