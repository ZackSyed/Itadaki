import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchFriends } from '../../actions/friend_actions'; 
import Dashboard from './dashboard';

const msp = ({ entities }) => ({
    groups: Object.values(entities.groups),
    // friends: object.values(entities.friends),
});

const mdp = dispatch => ({
        openModal: () => dispatch(openModal('friend')),
        fetchGroups: () => dispatch(fetchGroups()),
//         fetchFriends: () => dispatch(fetchFriends()),
});

export default connect(msp, mdp)(Dashboard);