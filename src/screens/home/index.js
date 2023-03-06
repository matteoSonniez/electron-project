import React from 'react';
import { useState } from 'react';
import Header from '../../components/header';
//const { dialog } = require.resolve('electron');

const Index = () => {
    const [imagePath, setImagePath] = useState('');

    return (
        <div>
            <Header></Header>
        </div>
    );
}

export default Index;
