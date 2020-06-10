import React, { useReducer } from 'react';
import axios from 'axios';
import  githubContext from './githubContext';
import GithubReducer from './githubReducer';

import { SEARCH_USERS,
     SET_ALERT,
     CLEAR_REPOS,
     CLEAR_USERS,
     REMOVE_ALERT,
     SET_LOADING, 
     GET_USER,
    GET_REPOS} from '../types';


let githubClientID = '';
let githubClientSecret = '';

if (process.env.NODE_ENV != 'production') {
    githubClientID = process.env.REACT_APP_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_CLIENT_SECRET_KEY;
}else{
    githubClientID = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET_KEY;
}

const GithubState = props => {
    const initial_state = {
        users : [],
        user : {},
        loading : false,
        repos : []
    }

    const [state, dispatch] = useReducer( GithubReducer, initial_state);

    //SEARCH USERS
    const searchUsersFunc = async (text) => {
        //console.log("prop drilling is: ", text);
        setLoading();
        const result = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientID}&client_secret=${githubClientSecret}`);


        //setUsers(result.data.items);

        dispatch({ 
            type: SEARCH_USERS,
            payload: result.data.items
        });
        
    };

    //CLEAR USERS
    const clearUserss = () => {
        dispatch({ type: CLEAR_USERS});
    }


    //get single user details
    const getUserFun = async (username) => {
        setLoading();
        const result = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientID}&client_secret=${githubClientSecret}`);

       // setUser(result.data);
       dispatch({ type: GET_USER, payload: result.data });
        //setLoading(false);
    }


    //get single user repos
    const getUserReposFunc = async (username) => {
        setLoading();
        const result = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${githubClientID}&client_secret=${githubClientSecret}`);

        //setRepos(result.data);
        dispatch({ 
            type: GET_REPOS,
            payload: result.data
        });
    }




    const setLoading = () => dispatch({ type: SET_LOADING })



    return <githubContext.Provider
    value={{
        users : state.users,
        user : state.user,
        repos : state.repos,
        loading : state.loading, 
        searchUsersFunc: searchUsersFunc,
        clearUsers: clearUserss,
        getUser: getUserFun,
        getUserRepos:getUserReposFunc
    }}
    >
        {props.children}
    </githubContext.Provider>
}

export default GithubState;