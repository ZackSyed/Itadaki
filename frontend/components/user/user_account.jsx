import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPen, faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

class UserAccount extends React.Component {
    constructor(props){
        super(props); 

    }
                                
    render(){
        let { user } = this.props; 
        // add links when those features are flushed out!!!!!!!!!
        return (
        
        <div className="account-page">
            <div className="info">
                <div className="account-info">
                    <h1 className="account-header">Your account</h1>
                    <div className="account-img-border">
                        <FontAwesomeIcon icon={faUserAstronaut} className="account-pic" size="8x" />
                    </div>
                </div>
                <ul className="account-list">
                    <li className="list-header">your name</li>
                    <li><strong>{user.username}</strong><FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                    <li className="list-header">your email address</li>
                    <li><strong>{user.email ? user.email : "None"}</strong> <FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                    <li className="list-header">Your password</li>
                    <li><strong className="password">........</strong><FontAwesomeIcon icon={faPen} className="ac-pen" /> Edit</li>
                </ul>

            </div>
        </div>
        )
    }
}

export default UserAccount; 