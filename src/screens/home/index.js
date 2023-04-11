import React from 'react';
import LeftPart from '../../components/leftPart';
import Publication from '../../components/posts';
import styled from "styled-components";
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';



const Index = () => {
    
    const { data, isLoading, error, fetchData } = useFetch('publication/get',{}, null, 'GET');

    useEffect(() => {
        fetchData();
      }, []);

    useEffect(() => {
        if(data != null){
            console.log("all_publis!!!", data);
        }
    }, [data]);
    return (
        <AllPage>
            <LeftPart></LeftPart>
            <Right>
                {data != null &&
                <Publications>
                    {data.map((post) => (
                        <Publication post={post}/>
                    ))}
                </Publications>}
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
const Publications = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
`;
export default Index;

