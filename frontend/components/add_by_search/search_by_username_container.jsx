import React from 'react'
import { connect } from 'redux';
import SearchBy from './search_by';
import { createFriend } from '../../actions/friend_actions';


const msp = state => ({
    top: 'username', 
});

const mdp = dispatch => ({
    createFriend: () => dispatch(createFriend()),
    // findUser: (username) => dispatch(findUser(username)),
});

export default connect(msp, mdp)(SearchBy); 