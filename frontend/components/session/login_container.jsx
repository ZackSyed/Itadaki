import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => {
    return {
        formType: 'Log In', 
        navLink: <Link to='/signup'>Need to make an account?</Link>
    };
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(SessionForm);