import React from 'react';
import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import { fetchUser } from '../../actions/user_actions'; 
import AddFriend from './add_Friend';


const msp = ({ session, entities }) => ({
    user: entities.users[session.id],
});

const mdp = dispatch => ({
    fetchUser: (id) => dispatch(fetchUser(id)),
    closeModal: () => dispatch(closeModal()),
    openModal: () => dispatch(openModal('email')),
    openUserModal: () => dispatch(openModal('username')),
});

export default connect(msp, mdp)(AddFriend);