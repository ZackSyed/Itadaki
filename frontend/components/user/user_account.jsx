import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFlag, faListUl, faPen } from '@fortawesome/free-solid-svg-icons';

class UserAccount extends React.Component {
    constructor(props){
        super(props); 

    }

    render(){
        let { user } = this.props; 
        // add links when those features are flushed out!!!!!!!!!
        return (
            <div className="info">
            <h1>Your account</h1>
            <FontAwesomeIcon icon={faUserSecret} className="account-pic" />
            <ul className="account-list">
                <li>your name</li>>
                <li>{user.username}<FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                <li>your email address</li>
                <li>{user.email ? user.email : "None"}<FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                <li>Your password</li>
                <li>........<FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                <li></li>
            </ul>

        </div>
        )
    }
}

export default UserAccount; 