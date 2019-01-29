import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups } from '../../actions/group_actions';
import Dashboard from './dashboard';

const msp = state => {
    return {
        groups: Object.values(entities.groups)
    };
};

const mdp = dispatch => {
    return {
        openModal: () => dispatch(openModal('friend')),
        fetchGroups: () => dispatch(fetchGroups()),
    };
};