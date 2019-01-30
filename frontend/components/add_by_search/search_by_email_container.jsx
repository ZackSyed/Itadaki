import React from 'react'
import { connect } from 'react-redux';
import SearchBy from './search_by';
import { createFriend } from '../../actions/friend_actions';

const msp = state => ({
    top: 'email',
});

const mdp = dispatch => ({
    createFriend: () => dispatch(createFriend()),
    // findUserByEmail: (email) => dispatch(findUserByEmail(email)),
});

export default connect(msp, mdp)(SearchBy); 