import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import Dashboard from './dashboard';

const mdp = dispatch => {
    return {
        openModal: () => dispatch(openModal('friendForm')),
    }
}