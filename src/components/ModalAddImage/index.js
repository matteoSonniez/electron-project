import styled from "styled-components";
import Close from '../../img/close.png';
import ImageProf from '../../img/user2.png';
import { Link, useNavigate } from "react-router-dom";
import useFetch from '../../hook/useFetch';
import Comment from '../../components/comment';
import Cookies from 'js-cookie';
import ImageIcon from '../../img/images.png';
import { useEffect, useState } from 'react';


const Index = ({ closeModal, newImageAdd }) => {
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
      useEffect(() => {
        if(data){
            closeModal();
            newImageAdd();
        }
      }, [data]);

      if(imageIsSelect == true){
        return (
            <>
            <Overlay onClick={closeModal}></Overlay>
            <Modal>
              <CloseSideBar onClick={closeModal} src={Close}></CloseSideBar>
              <Content >
                <Header>
                    <p>Création de publication</p>
                    <Button  onClick={postImage}>Poster</Button>
                </Header>
                <Image src={imagePath}/>     
              </Content>
            </Modal>
          </>
          );
        }

  return (
    <>
      <Overlay onClick={closeModal}></Overlay>
      <Modal>
        <CloseSideBar onClick={closeModal} src={Close}></CloseSideBar>
        <Content >
            <Header>
                <p>Création de publication</p>
            </Header>
            <ImagesIcon src={ImageIcon}></ImagesIcon>
            <ButtonPadding>
                <Button  onClick={selectImage}>Sélectionner une photo</Button>
            </ButtonPadding>       
        </Content>
      </Modal>
    </>
  );
}


const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background: #0000005c;
    top: 0;
    z-index: 999998;
`;
const Header = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
`;
const ButtonPadding = styled.div`
  padding-top: 10%;
  padding-bottom: 20%;
`;
const ImagesIcon = styled.img`
  padding-top: 25%;
  width: 80px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const Image = styled.img`
  width: 60%;
  height: 70vh;
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
const Modal = styled.div`
    position: fixed;
    width: 45%;
    background: #353434;
    z-index: 999999;
    left: 50%;
    top: 4%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const CloseSideBar = styled.img`
  position: fixed;
  padding: 25px 25px;
  width: 20px;
  height: 20px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const CloseSideDiv = styled.div`
  float: right;
`;


export default Index;
