import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => {
    return {
        formType: 'sign-up', 
        navLink: <Link to='/login'>Already have an account,  Log in</Link>,
        taglines: { top: "INTRODUCE YOURSELF", first: "Hi there! My name is", button: "Sign me up!" },
        className: { form: "signmeup", email: "email-field", tag: "tag-2", submit: "btn submit", t: "top" }
    };
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(createNewUser(user))
}); 

export default connect(msp, mdp)(SessionForm); 