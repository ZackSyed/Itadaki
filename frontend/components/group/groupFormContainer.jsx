import React from 'react';
import { connect } from 'react-redux';
import { createGroup, haveErrors } from '../../actions/group_actions';
import GroupForm from './GroupForm';

const msp = state => {
    return {
        errors: Object.values(state.errors),
    }
}

const mdp = dispatch => {
    return {
        processForm: (group) => dispatch(createGroup(group)),  
        clearErrors: () => dispatch(haveErrors([])),
        // fetchGroups: () => dispatch(fetchGroups()),
    };
};

export default connect(msp, mdp)(GroupForm);