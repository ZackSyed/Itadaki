import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFlag, faListUl, faPlus, faUser } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

    // this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentDidMount(){
        this.props.fetchGroups();
    }



    // handleSubmit(e) {
    //     
    // }


    render() {
        const groups = this.props.groups.map( group => {
            <li key={`groups-${group.id}`}>{group}</li>
        });

        return (
            <div className="dash">
                <div className="sidebar">
                    <Link to="/account">Go To Account</Link>
                    <NavLink className="btn to-dash" to="/dashboard"><img className="main-dash-img" src={window.flavicon}/> Dashboard</NavLink>
                    <NavLink className="btn rec-act" to="/activity"><FontAwesomeIcon icon={faFlag} className="flag" /> Recent activity</NavLink>
                    <NavLink className="btn all-exp" to="/all"><FontAwesomeIcon icon={faListUl} className="menu" /> All expenses</NavLink>
                    <div className="add-group">
                        <span className="groups">GROUPS</span>
                        <Link to="/groups/new" className="redir-group"><FontAwesomeIcon icon={faPlus} className="group-add" size="xs" /> add</Link>
                    </div>
                    <span className="no-groups true">You do not have any groups yet.</span>
                    <div className="add-friends">
                        <span className="friends-link">FRIENDS</span>
                        <Link to="" onClick={this.props.openModal} className="redir-friend" ><FontAwesomeIcon icon={faPlus} className="friend-add" size="xs"/> add </Link>
                    </div>
                    <span className="no-friends true">You do not have any groups yet.</span>
                </div>

                <div className="activity-top"> 
                    <div className="activity-main">  
                        <h1 className="activity-header">Dashboard</h1>
                        <Link className="btn bill" to="/"></Link>
                        <Link className="btn sttl" to="/"></Link>
                    </div>
                        <div className="activity-center">
                            <div className="fresh-user">
                            <FontAwesomeIcon icon={faUserSecret} className="user-pic" size="8x"/>
                                <h1>Welcome to Itadaki!</h1>
                                <p>Itadaki helps you split tabs with friends.</p>
                                <p>Click "add a tab" above to get started, or invite some friends first!</p>
                                <Link className="btn activity-add-friends" to="" onClick={this.props.openModal}>
                                     <FontAwesomeIcon icon={faPlus} className="plus-friend-btn" /> 
                                     <FontAwesomeIcon icon={faUser} className="friend-btn-user-icon" /> Add friends on Itadaki</Link>
                            </div>

                            {/* where the list of tabs info will go. */}
                        </div>
                </div>

                <div className="dashboard-right-sidebar">
                    <ul>
                        {groups}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard; 