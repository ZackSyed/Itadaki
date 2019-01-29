import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUserFriends } from '@fortawesome/free-solid-svg-icons';

class AddFriend extends React.Component {
    constructor(props){
        super(props);

    }

    render(){


        return (
            <div className="add-friend">

                <div className="by-email">
                    <FontAwesomeIcon icon={faEnvelope} className="friend-email-icon" size="2x" />
                    <p className="email-word">Invite friends by email address</p>
                </div> 
                <p className="or">or</p>
                <div className="by-username">
                    <FontAwesomeIcon icon={faUserFriends} className="friend-user-icon" size="2x" />
                    <p className="username-words">Invite friends by username</p>
                </div>
            </div>
        )
    }
}

export default AddFriend;