import * as ActionTypes from './ActionTypes';
import { baseUrl }from '../shared/baseUrl';

export const addComment = (comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment,
});

export const postComment = (dishId, rating, author, comment) => dispatch => {
    const newComment = { dishId, rating, author, comment };
    newComment.date = new Date().toISOString();
    return fetch(baseUrl + 'comments', { 
        method:'POST', 
        body: JSON.stringify(newComment),
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'same-origin',
    }).then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                let err = new Error(`Error ${resp.status}: ${resp.statusText}`);
                err.response = resp;
                throw err;
            }
        }, err => {
            let errMsg = new Error(err.message);
            throw errMsg;
        })
    .then(resp => resp.json())
    .then(resp => dispatch(addComment(resp)))
    .catch(err => {
        console.log('Post comments ', err.message);
        alert('Your comment could not be posted\nError: ' + err.message);
    });
};

export const fetchDishes = () => dispatch => {
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
        .then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                let err = new Error(`Error ${resp.status}: ${resp.statusText}`);
                err.response = resp;
                throw err;
            }
        }, err => {
            let errMsg = new Error(err.message);
            throw errMsg;
        })
        .then(resp => resp.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(err => dispatch(dishesFailed(err.message)));
};

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = errorMsg => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errorMsg,
});

export const addDishes = dishes => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes,
});

export const fetchComments = () => dispatch => {
    return fetch(baseUrl + 'comments')
        .then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                let err = new Error(`Error ${resp.status}: ${resp.statusText}`);
                err.response = resp;
                throw err;
            }
        }, err => {
            let errMsg = new Error(err.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(err => dispatch(commentsFailed(err.message)));
};

export const commentsFailed = errorMsg => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errorMsg,
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments,
});

export const fetchPromos = () => dispatch => {
    dispatch(promosLoading(true));

    return fetch(baseUrl + 'promotions')
        .then(resp => {
            if (resp.ok) {
                return resp;
            }
            else {
                let err = new Error(`Error ${resp.status}: ${resp.statusText}`);
                err.response = resp;
                throw err;
            }
        }, err => {
            let errMsg = new Error(err.message);
            throw errMsg;
        })
        .then(res => res.json())
        .then(prom => dispatch(addPromos(prom)))
        .catch(err => dispatch(promosFailed(err.message)));
};

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING,
});

export const promosFailed = errorMsg => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errorMsg,
});

export const addPromos = promos => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos,
});