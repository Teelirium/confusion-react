import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import logo from './logo.svg';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() { 
    return (
      <div>
        <Navbar dark color="primary">
          <div className='container'>
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className='container text-center'>
          <div className='col-4 offset-5'>
            This is honestly pretty epic
          </div>
        </div>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
