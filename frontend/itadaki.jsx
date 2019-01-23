import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root'
import * as SessionApi from './util/session_api_util';
import { createNewUser } from './actions/session_actions';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();

    // TESTING START
    window.signup = SessionApi.signup; 
    window.login = SessionApi.login;
    window.logout = SessionApi.logout; 
    window.getState = store.getState; 
    window.dispatch = store.dispatch; 
    window.create = createNewUser; 
    // TESTING END 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});