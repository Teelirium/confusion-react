import React, { Component } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          dishes: DISHES,
          promotions: PROMOTIONS,
          leaders: LEADERS,
        };
      }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    dish={this.state.dishes.filter(dish => dish.featured)[0]}
                    promotion={this.state.promotions.filter(promo => promo.featured)[0]}
                    leader={this.state.leaders.filter(leader => leader.featured)[0]}
                />
            );
        }

        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='home' element={<HomePage/>}/>
                    <Route exact path='menu' element={<Menu dishes={this.state.dishes}/>}/>
                    <Route exact path='contactus' element={<Contact/>}/>
                    <Route path="*" element={<Navigate to="home"/>}/>
                </Routes>
                <Footer/>
            </div>
        );
    }
}

export default Main;
