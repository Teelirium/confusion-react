import * as ActionTypes from './ActionTypes';

export const Comments = (state = { errorMsg: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload;
            return {
                ...state, 
                comments: state.comments.concat(comment)
            };
        case ActionTypes.ADD_COMMENTS:
            return {
                ...state, 
                isLoading: false, 
                errorMsg: null, 
                comments: action.payload,
            };
        case ActionTypes.COMMENTS_FAILED:
            return {
                ...state, 
                isLoading: false, 
                errorMsg: action.payload, 
                comments: [],
            };
        default:
            return state;
    }
};