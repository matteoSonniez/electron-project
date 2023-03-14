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
        console.log(imagePath);
        fetchData();
      }, [imagePath]);
    return (
        <AllPage>
            <button onClick={selectImage}>Ouvrir une boîte de dialogue</button>
            {imagePath && <p>{imagePath}</p>}
        </AllPage>
    );
}

const AllPage = styled.div`
  color: #FFFF;
`;

export default Index;
