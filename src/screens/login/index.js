import React from 'react';
import Header from '../../components/header';

const { useState } = require('react');

const Index = () => {
    const [imagePath, setImagePath] = useState();

    const selectImage =  () => {
     
      window.thedialog.openFiles()
      window.thedialog.getFilePath(setImagePath);
     
    };

    return (
    <div>
      <header>
        <Header></Header>
      </header>
      <button onClick={selectImage}>Ouvrir une boîte de dialogue</button>
        {imagePath && <img src={imagePath}></img>}
        
    </div>
    );
}

export default Index;
