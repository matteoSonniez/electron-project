import React from 'react';
import styled from "styled-components";
import ImageIcon from '../../img/images.png';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import useFetch from '../../hook/useFetch';
import { Link, useNavigate } from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [imagePath, setImagePath] = useState();
    const [imageIsSelect, setImageIsSelect] = useState(false);
    const { data, isLoading, error, fetchData } = useFetch('publication/create',{'authorization': thecookie}, {"imagePath":imagePath}, 'POST');

    const selectImage =  () => {
     
        window.thedialog.openFiles()
        window.thedialog.getFilePath(setImagePath);
        //console.log(imagePath)
       
      };
    const postImage =  () => {
     
        if((imagePath != 'safe-file://undefined')&&(imagePath != undefined)){
          fetchData();
        }
       
      };
    
    useEffect(() => {
        if((imagePath != 'safe-file://undefined')&&(imagePath != undefined)){
          console.log("path" , imagePath);
          //fetchData();
          setImageIsSelect(true);
        }
      }, [imagePath]);

      if(imageIsSelect == true){
        return (
            <AllPage>
                <Header>
                    <p>Création de publication</p>
                    <Button  onClick={postImage}>Sélectionner une photo</Button>
                </Header>
                <Image src={imagePath}/> 
            </AllPage>
          );
        }

    return (
        <AllPage>
            <Header>
                <p>Création de publication</p>
            </Header>
            <ImagesIcon src={ImageIcon}></ImagesIcon>
            <ButtonPadding>
                <Button  onClick={selectImage}>Sélectionner une photo</Button>
            </ButtonPadding>
        </AllPage>
    );
}

const AllPage = styled.div`
  background-color: #353434;
  border-radius: 4%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
`;
const ButtonPadding = styled.div`
  padding-top: 10%;
  padding-bottom: 20%;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

const ImagesIcon = styled.img`
  padding-top: 25%;
  width: 80px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const Image = styled.img`
  width: 70%;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: black;
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
