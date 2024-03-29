import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Redirect, Route, Switch, useParams } from 'react-router-dom';
import { postComment, postFeedback, 
    fetchDishes, fetchComments, 
    fetchPromos, fetchLeaders } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
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
    postFeedback: feedback => dispatch(postFeedback(feedback)),
    fetchDishes: () => dispatch(fetchDishes()),
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders()),
    resetFeedbackForm: () => dispatch(actions.reset('feedback')),
});

class Main extends Component {
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
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
                    leader={this.props.leaders.leaders.filter(leader => leader.featured)[0]}
                    leadersLoading={this.props.leaders.isLoading}
                    leadersErrorMsg={this.props.leaders.errorMsg}                  
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
                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                    <Switch>
                        <Route path='/home' 
                        component={() => <HomePage/>}
                        />
                        <Route exact path='/aboutus' 
                        component={() => <About leaders={this.props.leaders}/>}
                        />
                        <Route exact path='/menu' 
                        component={() => <Menu dishes={this.props.dishes}/>}
                        />
                        <Route path='/menu/:dishId' 
                        component={() => <DishWithId/>}
                        />
                        <Route exact path='/contactus' 
                        component={() => 
                            <Contact 
                            resetFeedbackForm={this.props.resetFeedbackForm}
                            postFeedback={this.props.postFeedback}
                            />}
                        />
                        <Redirect to='/home'/>
                    </Switch>                     
                    </CSSTransition>
                </TransitionGroup>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
