import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faFlag, faListUl, faPlus, faUser, faTag } from '@fortawesome/free-solid-svg-icons';
import DashCenter from './dashboard_center';
import DashRec from './dashboard_recents';
import DashAct from './dashboard_active';

class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.renderCenter = this.renderCenter.bind(this);
    }   

    componentDidMount(){
        this.props.fetchGroups();
        this.props.fetchFriends(this.props.cUId);
        this.props.fetchTabs();
    }

    renderCenter() {
        switch (this.props.location.pathname) {
            case '/dashboard':
                return <DashCenter />
            case '/activity':
                return <DashRec />
            default:
                break;
        }
    }


    render() {  

        let { groups, friends, cUId, users } = this.props;
        const groupli = []; 
        const groupTag = [];
            
        for (let i = 0; i < groups.length; i++) {
                groupli.push(<li key={`groups-${[i]}`} className="group-side-name" ><FontAwesomeIcon icon={faUsers} className="group-side-tag" />{groups[i].group_name}</li>)
                groupTag.push(<li key={`groupss-${[i]}`} className="left-side-group-display"><FontAwesomeIcon icon={faTag} className="group-tag" size="xs" />{groups[i].group_name}</li>)
        }


            
        const friendList = [];
        const myFriends = friends ? friends : []; 
        for (let i = 0; i < users.length; i++) {
            if (users[i].id !== cUId && myFriends.includes(`${users[i].id}`)) {
                friendList.push(<li key={`friends-${[i]}`} className="u-have-friends"><FontAwesomeIcon icon={faUser} className="friend-side-tag" /> {users[i].username}</li>)
            }
        }

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
                    {this.props.tabs ? <DashAct /> : this.renderCenter()}
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