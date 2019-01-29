import React from 'react';
import { connect } from 'react-redux';
import { createGroup } from '../../actions/group_actions';
import GroupForm from './GroupForm';

const mdp = dispatch => {
    return {
        createGroup: (group) => dispatch(createGroup(group)),  
        
    };
};

export default connect(null, mdp)(GroupForm);