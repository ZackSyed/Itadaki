import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';


// Center of dashboard when the user has no friends!!
class DashCenter extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <div className="activity-main">  
                    <h1 className="activity-header">Dashboard</h1>
                    <Link className="btn bill" to='' onClick={this.props.openTabModal}>Add a tab</Link>
                    <Link className="btn sttl" to="/">settle up</Link>
                </div>

                <div className="activity-center">
                    <div className="fresh-user">
                    <FontAwesomeIcon icon={faUserSecret} className="user-pic" size="8x"/>
                        <div className="act-center-words">
                            <h1>Welcome to Itadaki!</h1>
                            <p>Itadaki helps you split tabs with friends.</p>
                            <p>Click "add a tab" above to get started, or invite some friends first!</p>
                            <Link className="btn activity-add-friends" to="" onClick={this.props.openModal}>
                                <FontAwesomeIcon icon={faPlus} className="plus-friend-btn" /> 
                                <FontAwesomeIcon icon={faUser} className="friend-btn-user-icon" /> Add friends on Itadaki</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

const mdp = dispatch => ({
    openTabModal: () => dispatch(openModal('tab')),
    openModal: () => dispatch(openModal('friend')),
})

export default connect(null, mdp)(DashCenter);