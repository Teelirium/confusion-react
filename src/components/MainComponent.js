import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { postComment, addComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import About from './AboutComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders,
    }
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (dishId, rating, author, comment) => 
        dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }

    render() {
        const HomePage = () => {
            return (
                <Home 
                    dish={this.props.dishes.dishes.filter(dish => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishesErrorMsg={this.props.dishes.errorMsg}
                    promotion={this.props.promotions.promotions.filter(promo => promo.featured)[0]}
                    promosLoading={this.props.promotions.isLoading}
                    promosErrorMsg={this.props.promotions.errorMsg}
                    leader={this.props.leaders.filter(leader => leader.featured)[0]}
                />
            );
        };

        const DishWithId = () => {
            const {dishId} = useParams();
            return (
                <DishDetail 
                    dish={this.props.dishes.dishes.filter(dish => 
                        dish.id === parseInt(dishId, 10))[0]
                    }
                    isLoading={this.props.dishes.isLoading}
                    errorMsg={this.props.dishes.errorMsg}
                    comments={this.props.comments.comments.filter(comm => 
                        comm.dishId === parseInt(dishId, 10))
                    }
                    commentsErrorMsg={this.props.comments.errorMsg}
                    postComment={this.props.postComment}
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
                    <Route exact path='/contactus' 
                    component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>}
                    />
                    <Redirect  to="/home"/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
