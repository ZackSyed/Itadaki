import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFlag, faListUl, faPlus, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import DashCenter from './dashboard_center';
import DashRec from './dashboard_recents';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

    }   

    componentDidMount(){
        this.props.fetchGroups();
        this.props.fetchFriends(this.props.cUId);

    }


    render() {

        let { groups, friends, cUId, users } = this.props;
        const groupli = []; 
            for (let i = 0; i < groups.length - 1; i+2) {
                groupli.push(<li key={`groups-${[i]}`} className="group-side-name" ><FontAwesomeIcon icon={faUsers} className="group-side-tag" />{groups[++i]}</li>)
            }

        const groupTag = [];
            for (let i = 0; i < groups.length - 1; i+2) {
                groupTag.push(<li key={`groupss-${[i]}`} className="left-side-group-display"><FontAwesomeIcon icon={faTag} className="group-tag" size="xs" />{groups[++i]}</li>)
            }

            
        const friendList = [];
        const myFriends = friends ? friends : []; 
        for (let i = 0; i < users.length; i++) {
            if (users[i].id !== cUId && myFriends.includes(`${users[i].id}`)) {
                friendList.push(<li key={`friends-${[i]}`} className="u-have-friends"><FontAwesomeIcon icon={faUser} className="friend-side-tag" /> {users[i].username}</li>)
            }
        }

        let renderOnCenter = < />;
        if (this.props.location.pathname === 'dashboard') {
            renderOnCenter = <DashCenter />;
        } else if (this.props.location.pathname === 'activity') {
             renderOnCenter = <DashRec />;
        } 
        {/* // else if (this.props.location.pathname === 'all') {
            
        // } */}

        return (
            <div className="dash">
                <div className="sidebar">
                    <Link to="/account" className='to-account'><FontAwesomeIcon icon={faUser} className="user-img" /> Account</Link>
                    <NavLink className="btn to-dash" to="/dashboard"><img className="main-dash-img" src={window.flavicon}/> Dashboard</NavLink>
                    <NavLink className="btn rec-act" to="/activity"><FontAwesomeIcon icon={faFlag} className="flag" /> Recent activity</NavLink>
                    <NavLink className="btn all-exp" to="/all"><FontAwesomeIcon icon={faListUl} className="menu" /> All expenses</NavLink>
                    <div className="add-group">
                        <span className="groups">GROUPS</span>
                        <Link to="/groups/new" className="redir-group">
                        <FontAwesomeIcon icon={faPlus} className="group-add" size="xs" /> add</Link>
                    </div>
                    <span className={groupli ? "group" : "no-group"}>You do not have any groups yet.</span>
                    <div>
                        <ul className={groupli ? "tag-group" : "no-g"}>
                            {groupTag}
                        </ul>
                    </div>
                    <div className="add-friends">
                        <span className="friends-link">FRIENDS</span>
                        <Link to="" onClick={this.props.openModal} className="redir-friend" >
                        <FontAwesomeIcon icon={faPlus} className="friend-add" size="xs"/> add </Link>
                    </div>
                    <span className={friendList ? "yes-friends" : "no-friends"}>You do not have any groups yet.</span>
                        <div className="add-friends-here">
                            <ul className="add-friends-list">
                                {friendList}
                            </ul>
                        </div>
                </div>

                <div className="activity-top"> 
                    {renderOnCenter}
                </div>

                <div className="dashboard-right-sidebar">
                    <h1 className="right-side-header">GROUP BALANCES</h1>
                    <ul className="groups-holder">
                       {groupli}
                    </ul>
                </div>
            </div>
        )
    }
}

export default Dashboard; 