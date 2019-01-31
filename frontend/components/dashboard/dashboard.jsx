import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faUsers, faFlag, faListUl, faPlus, faUser, faTag } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

    // this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentDidMount(){
        this.props.fetchGroups();
        this.props.fetchFriends(this.props.cUId);
    }

    // componentDidUpdate(prevProps){
    //     debugger
    // }

    // handleSubmit(e) {
    //     
    // }


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
        for (let i = 0; i < users.length; i++) {
            if (users[i].id !== cUId && friends.includes(`${users[i].id}`)) {
                friendList.push(<li key={`friends-${[i]}`} className="u-have-friends"><FontAwesomeIcon icon={faUser} className="friend-side-tag" /> {users[i].username}</li>)
            }
        }

        return (
            <div className="dash">
                <div className="sidebar">
                    <Link to="/account">Go To Account</Link>
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
                    <div className="activity-main">  
                        <h1 className="activity-header">Dashboard</h1>
                        <Link className="btn bill" to="/">Add a bill</Link>
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

                            {/* where the list of tabs info will go. */}
                        </div>
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