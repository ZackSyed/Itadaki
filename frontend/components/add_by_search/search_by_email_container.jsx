import React from 'react'
import { connect } from 'redux';
import SearchBy from './search_by';


const msp = state => ({
    top: 'email',
});

const mdp = dispatch => ({
    createFriend: () => dispatch(createFriend()),
    // findUserByEmail: (email) => dispatch(findUserByEmail(email)),
});

export default connect(msp, mdp)(SearchBy); 