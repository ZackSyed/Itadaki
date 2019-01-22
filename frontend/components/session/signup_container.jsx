import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session_actions';
import SessionForm from './session_form';


const msp = state => {
    return {
        formType: 'Sign Up', 
        navLink: <Link to='/login'>Already have an account</Link>
    };
};

const mdp = dispatch => ({
    processForm: (user) => dispatch(createNewUser(user))
}); 

export default connect(msp, mdp)(SessionForm); 