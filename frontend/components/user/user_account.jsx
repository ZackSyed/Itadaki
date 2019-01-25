import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFlag, faListUl, faPen } from '@fortawesome/free-solid-svg-icons';

class UserAccount extends React.Component {
    constructor(props){
        super(props); 

    }

    render(){
        const account = (
            <div className="info">
                <h1>Your account</h1>
                <FontAwesomeIcon icon={faUserSecret} className="account-pic" />
                <ul className="account-list">
                    <li>{}<FontAwesomeIcon icon={faUserSecret} className="account-pic" /></li>
                </ul>

            </div>
       )




        return (

        )
    }
}

export default UserAccount; 