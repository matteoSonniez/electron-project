import React from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import styled from "styled-components";
import useFetch from '../../hook/useFetch';
import path from 'path-browserify';


////// DERNIERRRRRRR AJOUT: AJOUE DU PATH IMAGE DANS LA BDD
//////////------------------------------------------------------------------------







const Index = () => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [imagePath, setImagePath] = useState();
    const { data, isLoading, error, fetchData } = useFetch('user/image',{'authorization': thecookie}, {"images":imagePath}, 'POST');

    const selectImage =  () => {
     
        window.thedialog.openFiles()
        window.thedialog.getFilePath(setImagePath);
        //console.log(imagePath)
       
      };
    
    useEffect(() => {
        if((imagePath != 'safe-file://undefined')&&(imagePath != undefined)){
          console.log("path" , imagePath);
          fetchData();
        }
      }, [imagePath]);
    return (
        <AllPage>
            <Button onClick={selectImage}>Ajouter une image</Button>
        </AllPage>
    );
}

const AllPage = styled.div`
  color: #FFFF;
`;
const Button = styled.button`
  background-color: white;
  color: black;
  border: 3px solid #e8b851;
  padding: 8px 10px;
  font-size: 16px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #e8b851;
            color: white;
        }
`;


export default Index;