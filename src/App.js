import './App.css';
import Main from './components/MainComponent';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    );
}

export default App;
