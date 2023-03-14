import React from 'react';
import styled from "styled-components";
import Popup from 'reactjs-popup';
import PopupContent from '../../components/popupContent';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';


const Index = ({user}) => {
  console.log("publiIIIIIII", user.publications);
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const { data, isLoading, error, fetchData } = useFetch('user/publications/get',{'authorization': thecookie}, null, 'GET');
    
    useEffect(() => {
        fetchData();
      }, []);

      useEffect(() => {
        console.log("OKKKKKKK", data);
      }, [data]);
    return (
        <AllPage>
            <TitlesDiv>
                <TitleDiv>
                    <p>PUBLICATIONS</p>
                </TitleDiv>
                <TitleDiv>
                    <p>PROGRAMMES</p>
                </TitleDiv>
            </TitlesDiv>
            <Popup trigger={<Button> Ajouter</Button>}position="right center" contentStyle={{ width: '40%'}}>
                <PopupContent/>
            </Popup>
            <FlexPost>
                    {user.publications.map((publication) => (
                      <Posts>
                        <Image src={publication.images}/> 
                      </Posts>  
                    ))}
              </FlexPost>
        </AllPage>
    );
}
const Image = styled.img`
  width: 90%;
  cursor: pointer;
  transition-duration: 0.5s;
  &:hover{
      filter: sepia(50%);
      -webkit-filter: sepia(50%);
      width: 95%;
        }
`;

const Posts = styled.div`
  width: 290px;
  height: 300px;
  margin-bottom: 5%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`; 
const AllPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  color: white;
`;
const FlexPost = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const TitlesDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TitleDiv = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-around;
  &:hover{
            border-top: 1px solid blue;
            cursor: pointer;
        }
`;
const Button = styled.button`
  margin-left: 2%;
  margin-bottom: 2%;
  display: flex;
  align-items: center;
  background-color: #2F2D2E;
  color: white;
  padding: 10px 10px;
  width: 10%;
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