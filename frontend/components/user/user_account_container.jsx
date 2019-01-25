import React from 'react';
import { connect } from 'react-redux'; 
import UserAccount from './user_account'; 
import { fetchUser } from '../../actions/user_actions';


const msp = state => {
    let user = {}; 
    if (session.id) {
        user = entities.users[session.id];
    }
    return {
        user
    };
};

const mdp = dispatch => {
    return {
    fetchUser: (id) => dispatch(fetchUser(id)), 
    };    
}; 

export default connect(msp, mdp)(UserAccount); 