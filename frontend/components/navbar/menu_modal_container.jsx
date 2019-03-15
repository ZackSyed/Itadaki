import React from 'react';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { closeModal } from '../../actions/modal_actions';
import Dropdown from './menu_modal';


const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
});

export default connect(null, mdp)(Dropdown);