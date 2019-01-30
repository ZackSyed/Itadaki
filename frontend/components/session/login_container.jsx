import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => {
    return {
        formType: 'log-in', 
        navLink: <Link to='/signup'>Make an account</Link>,
        taglines: { top: "WELCOME TO ITADAKI", 
        bottom: "forgot your password?", 
        button: "Log in", first: "username:" },
        className: { form: "logmein", email: "em-field", 
        tag: "empty", submit: "btn log", t: "tip" },
        errors: Object.values(state.errors),
    };
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(loginUser(user))
});

export default connect(msp, mdp)(SessionForm);