import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { openModal } from '../../actions/modal_actions';

class AddFriend extends React.Component {
    constructor(props){
        super(props);

    }

    render(){


        return (
            <div className="add-friend">

                <Link to="" className="by-email" onClick={this.props.openModal}>
                    <FontAwesomeIcon icon={faEnvelope} className="friend-email-icon" size="2x" />
                    <p className="email-word">Invite friends by email address</p>
                </Link> 
                <p className="or">or</p>
                <Link to="" className="by-username" onClick={this.props.openUserModal}>
                    <FontAwesomeIcon icon={faUserFriends} className="friend-user-icon" size="2x" />
                    <p className="username-words">Invite friends by username</p>
                </Link>
            </div>
        )
    }
}

export default AddFriend;