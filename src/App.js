import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
