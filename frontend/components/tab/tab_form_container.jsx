import React from 'react';
import { connect } from 'react-redux';
import TabModal from './tab_modal';
import { createTab } from '../../actions/tab_action';

const msp = ({ session, entities }) => {
    return {
        currentUserId: session.id, 
        groups: entities.groups, 
    }
}

const mdp = (dispatch) => {
    return {
        createTab: () => dispatch(createTab()),
    }
}

export default connect(msp, mdp)(TabModal);