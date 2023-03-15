import React from 'react';
import styled from "styled-components";


const Index = ({type, name, placeholder, required, onChange, value}) => {
    return (
        <Inputstyle  type={type} name={name} placeholder={placeholder} required={required} onChange={onChange} value={value} />
    );
}

const Inputstyle = styled.input`
  border-radius: 8px;
  border: 1px solid gray;
  width: 100%;
  height: 4vh;
  background-color: #171819;
  color: white;
  margin-bottom: 10px;
`;
export default Index;