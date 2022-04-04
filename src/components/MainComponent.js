import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from "./DishDetailComponent";
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Routes, Navigate } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dishes: DISHES,
          selectedDishId: null
        };
      }

    render() {
        function HomePage() {
            return (
                <Home/>
            );
        }

        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='home' element={<HomePage/>}/>
                    <Route exact path='menu' element={<Menu dishes={this.state.dishes}/>}/>
                    <Route path="*" element={<Navigate to="home"/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
    /*
                    <div className='container text-center'>
                    <div className='col-4 offset-5'>
                    This is honestly pretty epic
                    </div>
                </div>
                <Menu 
                dishes={this.state.dishes} onClick={(dishId) => {this.onDishSelect(dishId)}} 
                />
                <DishDetail 
                dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} 
                />
                */
}

export default Main;
