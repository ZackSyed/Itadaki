import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewUser, haveErrors } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => {
    return {
        formType: 'sign-up', 
        navLink: <Link className="session-link" to='/login'>Already have an account,  Log in</Link>,
        taglines: { top: "INTRODUCE YOURSELF", first: "Hi there! My name is", button: "Sign me up!" },
        className: { form: "signmeup", email: "email-field", tag: "tag", submit: "btn submit", t: "top" },
        errors: Object.values(state.errors),
    };
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(createNewUser(user)),
    clearErrors: () => dispatch(haveErrors([])),
}); 

export default connect(msp, mdp)(SessionForm); 