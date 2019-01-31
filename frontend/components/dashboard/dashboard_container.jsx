import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchFriends } from '../../actions/friend_actions'; 
import Dashboard from './dashboard';

const msp = ({ entities, session }) => {
    return {
        groups: Object.values(entities.groups),
        friends: Object.values(entities.users),
        cUId: session.id,
    };
};

const mdp = dispatch => ({
        openModal: () => dispatch(openModal('friend')),
        fetchGroups: () => dispatch(fetchGroups()),
        fetchFriends: (currentUserId) => dispatch(fetchFriends(currentUserId)),
});

export default connect(msp, mdp)(Dashboard);