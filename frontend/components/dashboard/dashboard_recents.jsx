import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashRec extends React.Component {

    constructor(props){
        super(props);
        
        this.parseTime = this.parseTime.bind(this);
    }

    componentDidMount() {
        if (!this.props.tabs) {
            this.props.fetchTabs();
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render();
        }
    }

    parseTime(timestamp) {
       let date = new Date().toString().split(' ');
       let createdTime = new Date(timestamp).toString().split(' ');
       if (date[0] === createdTime[0]) {
            return 'Today'
       } else if (date[1] !== createdTime[1]) {
            return `${createdTime[1]}`
       } else if (date[2] - createdTime[2] >= 7) {
           let ellipsedTime = date[2] - createdTime[2];
            if (ellipsedTime >= 7) {
                return 'A week ago';
            } else if (ellipsedTime >= 14) {
                return '2 weeks ago';
            } else if (ellipsedTime >= 21) {
                return '3 weeks ago';
            } else if (ellipsedTime === 30) {
                return 'Month ago'
            }  
       } else {
           return `${createdTime[0]}`
       }
    }

    parseSettled(bool) {
        if (bool) {
            return 'This is all paid up';
        } else {
            return 'You still have to pay this tab'
        }
    }

    render() {
        let { groups, tabs } = this.props;
        const activity = [];
        groups = groups ? groups : [];
        tabs = tabs ? tabs : [];

            for (let i = 0; i < groups.length; i++) {
                activity.push(<li key={`group-rec-${groups[i].id}`} className='recent-li-list'>
                <img className="recent-list-img" src={window.flavicon}/>
                    <div className='recent-list-block'>
                            <span className='recent-list-tag-descrip'>You created the group "{`${groups[i].group_name}`}"</span>
                            <span className='recent-list-tag-time'>{this.parseTime(groups[i].created_at)}</span>
                    </div>
                </li>)
            }

            for (let i = 0; i < tabs.length; i++) {
                activity.push(<li key={`list-rec-${tabs[i].id}`} className='recent-li-list'>
                <img className="recent-list-img" src={window.tab}/>
                    <div className='recent-list-block'>
                            <span className='recent-list-tag-descrip'>You created the tab "{`${tabs[i].name}`}"</span>
                            <span className='recent-list-owe'>The total is {`${tabs[i].total}`}</span>
                            <span className='recent-list-settled'>{this.parseSettled(tabs[i].settled)}</span>
                            <span className='recent-list-tag-time'>{this.parseTime(tabs[i].created_at)}</span>
                    </div>
                </li>)
            }


        return (
            <div>
                <div className="activity-main">  
                    <h1 className="activity-header">Recent Activity</h1>
                </div>
                <div className="activity-center">
                    <div className="recent-container">
                        <ul className="recent-list">
                            {activity}
                        </ul>   
                    </div>
                </div>
            </div>


        )
    }


}

const msp = ({ entities, session }) => ({
        groups: Object.values(entities.groups),
        users: Object.values(entities.users),
        friends: entities.users[session.id].friends,
        tabs: Object.values(entities.tabs),
})

const mdp = (dispatch) => ({
    fetchTabs: () => dispatch(fetchTabs()),
})

export default connect(msp)(DashRec);