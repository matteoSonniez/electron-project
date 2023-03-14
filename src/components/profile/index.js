import React from 'react';
import styled from "styled-components";

const Index = ({user}) => {
    return (
        <div>
            <p>{user.firstName}</p>
            <p>{user.lastName}</p>
            <p>{user.email}</p>
            {user.images.map((imagePath) => (
                <Image src={imagePath}/>   
            ))}
        </div>
    );
}

const Image = styled.img`
  width:100px;
  height: 120px;
`;

export default Index;
