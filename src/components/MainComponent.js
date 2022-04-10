import React, { Component } from 'react';
import { Route, Switch, Redirect, useParams } from 'react-router-dom';
import { withRouter } from 'react-router';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
};

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    dish={this.props.dishes.filter(dish => dish.featured)[0]}
                    promotion={this.props.promotions.filter(promo => promo.featured)[0]}
                    leader={this.props.leaders.filter(leader => leader.featured)[0]}
                />
            );
        };

        const DishWithId = () => {
            const {dishId} = useParams();
            return (
                <DishDetail 
                    dish={this.props.dishes.filter(dish => 
                        dish.id === parseInt(dishId, 10))[0]
                    }
                    comments={this.props.comments.filter(comm => 
                        comm.dishId === parseInt(dishId, 10))
                    }
                />
            );
        };

        return (
            <div>
                <Header/>
                <Switch>
                    <Route path='/home' component={() => <HomePage/>}/>
                    <Route path='/aboutus' component={() => <About leaders={this.props.leaders}/>}/>
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}/>
                    <Route path="/menu/:dishId" component={() => <DishWithId/>}/>
                    <Route exact path='/contactus' component={() => <Contact/>}/>
                    <Redirect  to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));
