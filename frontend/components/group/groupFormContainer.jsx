import React from 'react';
import { connect } from 'react-redux';
import { createGroup, haveErrors } from '../../actions/group_actions';
import GroupForm from './GroupForm';

const msp = state => {
    return {
        errors: Object.values(state.errors),
        currentUser: (state.entities.users[state.session.id])
    }
}

const mdp = dispatch => {
    return {
        processForm: (group) => dispatch(createGroup(group)),  
        clearErrors: () => dispatch(haveErrors([])),
    };
};

export default connect(msp, mdp)(GroupForm);