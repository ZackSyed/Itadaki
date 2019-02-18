import React from 'react';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchFriends } from '../../actions/friend_actions'; 
import Dashboard from './dashboard_skeleton';

const msp = ({ entities, session }) => {
    return {
        groups: Object.values(entities.groups),
        users: Object.values(entities.users),
        friends: entities.users[session.id].friends,
        cUId: session.id,
    };
};

const mdp = dispatch => ({
        openModal: () => dispatch(openModal('friend')),
        openTabModal: () => dispatch(openModal('tab')),
        fetchGroups: () => dispatch(fetchGroups()),
        fetchFriends: (currentUserId) => dispatch(fetchFriends(currentUserId)),
});

export default connect(msp, mdp)(Dashboard);