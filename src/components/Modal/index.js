import styled from "styled-components";
import Close from '../../img/close.png';
import ImageProf from '../../img/user2.png';
import { Link, useNavigate } from "react-router-dom";
import useFetch from '../../hook/useFetch';
import Comment from '../../components/comment';
import { useEffect, useState } from 'react';
import Input from '../../components/input';
import Cookies from 'js-cookie';



const Index = ({ closeModal, publiInfo, userInfo }) => {
  const navigate = useNavigate();
  const [thecookie, setCookie] = useState(Cookies.get('token_cookie'));

  const [comment, setComment] = useState('');

  const { data, isLoading, error, fetchData } = useFetch('/comment/get',{}, {"publicationId": publiInfo._id}, 'POST');
  const {data: dataComment, error:errorComment, loading:loadingComment, fetchData:fetchDataComment} = useFetch('comment/post',{'authorization': thecookie}, {"content": comment,"publicationId":publiInfo._id}, 'PUT');

  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const submitComment = (event) => {
    event.preventDefault();
    fetchDataComment();
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [dataComment]);


  return (
    <>
      <Overlay onClick={closeModal}></Overlay>
      <Modal>
        <CloseSideBar onClick={closeModal} src={Close}></CloseSideBar>
        <Content >
            <ImageModal src={publiInfo.images}/>
            <RightPart>
                <HeaderPublication onClick={() => navigate("/profile2", {state: {isMyProfile: false, userId: userInfo._id }})}>
                    {userInfo.imageProfile ? 
                            <ImgProfile>
                            <ImageProfile src={userInfo.imageProfile}/>
                            </ImgProfile>
                            : 
                            <ImgProfile>
                            <ImageProfile src={ImageProf}/>
                            </ImgProfile>
                            
                            }
                    <AllNames>
                        <UserName>{userInfo.userName}</UserName>
                        <Names>{userInfo.firstName}  {userInfo.lastName}</Names>
                    </AllNames>
                </HeaderPublication>
                <TheForm onSubmit={(e)=>submitComment(e)}>
                  <Input type="text" name="comment" placeholder="commentez.." required="true" onChange={(e)=>handleChange(e)} value={comment}/>
                  <Button>Publier</Button>
                </TheForm>
                {data && 
                <Comments>
                    {data.map((comment) => (
                        <Comment commentId={comment._id}></Comment>
                    ))}
                </Comments>
                }
            </RightPart> 
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
const TheForm = styled.form`
    margin-top: 20px;
    margin-left: 20px;
    display: flex;
`;
const ImageProfile = styled.img`
  width: 40px;
`;
const Comments = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImgProfile = styled.div`
  margin-right: 2%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid gray;
`;
const RightPart = styled.div`
    width: 50%;
`;
const ImageModal = styled.img`
  width: 60%;
  height: 90vh;
`;
const UserName = styled.text`
  font-size: 20px;
`;
const Names = styled.text`
  font-size: 15px;
`;
const AllNames = styled.div`
  display: flex;
  flex-direction: column;
`;
const HeaderPublication = styled.div`
  display: flex;
  padding: 20px 0px;
  margin-left: 20px;
  cursor: pointer;
  border-bottom: 1px solid #BEB6B6;
`;
const Modal = styled.div`
    position: fixed;
    width: 70%;
    background: #181717;
    z-index: 999999;
    left: 50%;
    top: 4%;
    transform: translateX(-50%);
    border-radius: 10px;
    overflow: hidden;
`;
const Content = styled.div`
    display: flex;
`;
const CloseSideBar = styled.img`
  padding: 25px 25px;
  float: right;
  width: 20px;
  height: 20px;
  filter: invert(100%);
  -webkit-filter: invert(100%);
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: black;
  color: white;
  height: 40px;
  border-radius: 8px;
  font-size: 15px;
  font-family: 'Poppins';
  transition-duration: 0.5s;
  cursor: pointer;
  &:hover{
            background-color: #1C1A1A;
            color: white;
        }
`;


export default Index;
