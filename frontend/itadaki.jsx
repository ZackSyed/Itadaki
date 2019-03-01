import React from 'react';
import configureStore from './store/store';
import ReactDOM from 'react-dom';
import Root from './components/root';
import * as SessionApi from './util/session_api_util';
import { createNewUser } from './actions/session_actions';
import * as groupApi from './util/group_api_util';
import { fetchGroups } from './actions/group_actions';
import { fetchFriends } from './actions/friend_actions';
import { fetchSplits } from './actions/split_actions';


document.addEventListener("DOMContentLoaded", () => {

    let store;
    if (window.current_user) {
        const preloadedState = {
            entities: {
                users: { [window.current_user.id]: window.current_user }
            },
            session: { id: window.current_user.id }
        };
        store = configureStore(preloadedState);
        delete window.current_user;
    } else {
        store = configureStore();
    }

    // TESTING START
    window.friends = fetchFriends;
    window.signup = SessionApi.signup;
    window.login = SessionApi.login;
    window.logout = SessionApi.logout;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.create = createNewUser;
    window.groups = groupApi.fetchGroups;
    window.fetchGroups = fetchGroups;
    window.fetchSplits = fetchSplits;
    // TESTING END 

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});