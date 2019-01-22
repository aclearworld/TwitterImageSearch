import React from 'react';
import ImageList from './containers/ImageList'
import Search from "./containers/Search";
import  './App.css';

const App = () => {
    return (
        <div>
            <Search/>
            <ImageList />
        </div>
    );
};

export default App;