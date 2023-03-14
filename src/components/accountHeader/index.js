import React from 'react';
import styled from "styled-components";
import ImageProf from '../../img/user2.png';
import AccountInfo from '../../components/accountInfo';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Index = ({user, isMyProfile}) => {
    const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));
    const [imagePath, setImagePath] = useState();
    const { data, isLoading, error, fetchData } = useFetch('user/image/profile',{'authorization': thecookie}, {"imagePath":imagePath}, 'POST');


    console.log("IMAGEPROFILEE",user.imageProfile);
    const selectImage =  () => {
     
      window.thedialog.openFiles()
      window.thedialog.getFilePath(setImagePath);
     
    };
    useEffect(() => {
      if((imagePath != 'safe-file://undefined')&&(imagePath != undefined)){
        fetchData();
      }
    }, [imagePath]);//imageProfile

    return (
        <AllPage>
            <AccountInfo user={user} isMyProfile={isMyProfile}/>
            <RightPart>
                {user.imageProfile ? 
                  <Image onClick={selectImage} src={user.imageProfile}/>
                  : 
                  <Image onClick={selectImage} src={ImageProf}/>
                }
            </RightPart>
        </AllPage>
    );
}

const AllPage = styled.div`
  display: flex;
  width: 100%;
  padding: 25px 0px;
  border-bottom: 1px solid gray;
  justify-content: space-around;
`;
const RightPart = styled.div`
  margin-right: 8%;
  width: 150px;
  height: 150px;
  overflow: hidden;
  border-radius: 100px;
  border: 2px solid gray;
`;
const Image = styled.img`
  width: 150px;
  cursor: pointer;
`;
export default Index;