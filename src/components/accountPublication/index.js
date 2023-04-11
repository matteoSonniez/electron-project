import React from 'react';
import styled from "styled-components";
import Popup from 'reactjs-popup';
import PopupContent from '../../components/popupContent';
import Modal from '../../components/Modal';
import ModalAdd from '../../components/ModalAddImage';
import { useEffect, useState } from 'react';


const Index = ({user, isMyProfile, newImageAdd}) => {
    const [isOpen , setIsOpen] = useState(false);
    const [isOpenAdd , setIsOpenAdd] = useState(false);
    const [publiInfo , setPubliInfo] = useState();
    const [userInfo , setUserInfo] = useState();
    const openModal =  (publication, user) => {
      setPubliInfo(publication);
      setUserInfo(user);
      setIsOpen(true)
    };
    const openModalAddModal =  () => {
      setIsOpenAdd(true)
    };
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
            {isMyProfile && 
              <Button onClick={() => openModalAddModal()}> Ajouter</Button>
            }
              <FlexPost>
                    {user.publications.map((publication) => (
                      <>
                        <Posts onClick={() => openModal(publication, user)}>
                          <Image src={publication.images}/> 
                        </Posts>  
                      </>
                      
                    ))}
              </FlexPost>
              {
                  isOpen && (
                    <Modal title="Modifier mon profil" closeModal={() => {setIsOpen(false);}} publiInfo={publiInfo} userInfo={userInfo}>
                    </Modal>
                  )
              }
              {
                  isOpenAdd && (
                    <ModalAdd newImageAdd={newImageAdd} title="Modifier mon profil" closeModal={() => {setIsOpenAdd(false);}}>
                    </ModalAdd>
                  )
              }
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
  margin-top: 5%;
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
  width: 80px;
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