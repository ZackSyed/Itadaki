import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
// import { openModal } from '../../actions/modal_actions';
import { fetchGroups } from '../../actions/group_actions';
import { fetchFriends } from '../../actions/friend_actions'; 
import Dashboard from './dashboard_skeleton';

const msp = ({ entities, session }) => {
    return {
        groups: Object.values(entities.groups),
        users: Object.values(entities.users),
        friends: entities.users[session.id].friends,
        tabs: Object.values(entities.tabs),
        cUId: session.id,
    };
};

const mdp = dispatch => ({
        // openModal: () => dispatch(openModal('friend')),
        // openTabModal: () => dispatch(openModal('tab')),
        fetchGroups: () => dispatch(fetchGroups()),
        fetchFriends: (currentUserId) => dispatch(fetchFriends(currentUserId)),
});

export default withRouter(connect(msp, mdp)(Dashboard));