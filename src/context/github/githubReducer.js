import {
    SEARCH_USERS,
    SET_ALERT,
    CLEAR_REPOS,
    CLEAR_USERS,
    REMOVE_ALERT,
    SET_LOADING,
    GET_USER,
    GET_REPOS
} from '../types';

export default (state, action) => {
    switch (action.type) {
        case SEARCH_USERS : 
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case CLEAR_USERS:
            return {
                ...state,
                users : [],
                loading: false
            }    
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case GET_USER:
            return {
                ...state,
                user : action.payload,
                loading : false
            }
        case GET_REPOS:
            return {
                ...state,
                repos: action.payload,
                loading: false
            }        
            
        default:
            return state;
           // break;
    }

}