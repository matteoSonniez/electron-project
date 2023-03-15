import React from 'react';
import styled from "styled-components";
import ImageProf from '../../img/user2.png';
import LikeVide from '../../img/coeurVide.png';
import LikePlein from '../../img/coeurPlein.png';
import Comment from '../../img/commenter.png';
import useFetch from '../../hook/useFetch';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";


const Index = ({post}) => {
    const navigate = useNavigate();
    const [isLike, setIsLike] = useState(false);
    const [nbLikes, setNbLikes] = useState(post.likes);

    const { data, isLoading, error, fetchData } = useFetch('publication/likes/increase',{}, {"publiId": post._id}, 'PUT');

    const likeImage =  () => {
      if(isLike == true){
        setIsLike(false);
      }else{
        setIsLike(true);
        fetchData();
        setNbLikes(nbLikes + 1);
      }
     
    };
    

    useEffect(() => {

    }, [post.likes]);

    return (
      <Publication>
        <HeaderPublication onClick={() => navigate("/profile2", {state: {isMyProfile: false, userId: post.user._id }})}>
          {post.user.imageProfile ? 
                <ImgProfile>
                  <ImageProfile src={post.user.imageProfile}/>
                </ImgProfile>
                : 
                <ImgProfile>
                  <ImageProfile src={ImageProf}/>
                </ImgProfile>
                  
                }
          <AllNames>
              <UserName>{post.user.userName}</UserName>
              <Names>{post.user.firstName}  {post.user.lastName}</Names>
          </AllNames>
        </HeaderPublication>
        <Image src={post.images}/>
        <ButtonsImage>
          {isLike == false ? <ButtonImage onClick={likeImage} src={LikeVide}></ButtonImage>: <Like onClick={likeImage} src={LikePlein}></Like> }
          <ButtonImage src={Comment}></ButtonImage>
        </ButtonsImage>
        <text>{nbLikes} likes</text>
        <Comments>
          <text>14 commentaires</text>
          <p>Ajouter un comentaire...</p>
        </Comments>
      </Publication> 
    );
}

const HeaderPublication = styled.div`
  display: flex;
  padding: 20px 0px;
  cursor: pointer;
`;
const Comments = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2% 0%;
`;
const Publication = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #BEB6B6;
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
const Image = styled.img`
  width: 100%;
`;
const ImageProfile = styled.img`
  width: 40px;
`;
const ImgProfile = styled.div`
  margin-right: 2%;
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid gray;
`;
const ButtonImage = styled.img`
  padding-top: 2%;
  padding-bottom: 2%;
  width: 30px;
  margin-right: 3%;
  filter: invert(100%);
  -webkit-filter: invert(100%);
  cursor: pointer;
`;
const Like = styled.img`
  padding-top: 2%;
  padding-bottom: 2%;
  width: 30px;
  margin-right: 3%;
  cursor: pointer;
`;
const ButtonsImage = styled.div`
  display: flex;
`;

export default Index;