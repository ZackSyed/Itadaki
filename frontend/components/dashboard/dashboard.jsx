import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFlag, faListUl, faPlus } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

        debugger
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
            <li key={group.id}>{group}</li>
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
                        <Link to="/groups/new"><FontAwesomeIcon icon={faPlus} className="group-add" /> add</Link>
                    </div>
                    <span className="no-groups true">You do not have any groups yet.</span>
                    <div className="add-friends">
                        <button onClick={this.props.openModal}><FontAwesomeIcon icon={faPlus} className="friend-add" /> add </button>
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
                            <FontAwesomeIcon icon={faUserSecret} className="user-pic" />
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