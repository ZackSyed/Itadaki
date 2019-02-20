import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashRec extends React.Component {

    constructor(props){
        super(props);
        
        this.parseTime = this.parseTime.bind(this);
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

    render() {
        let { groups } = this.props;
        const activity = [];
        groups = groups ? groups : [];
        
        if (groups.length === 3) {
           activity.push(<li key={`group-rec-${groups[0]}`} className='group-list'>
           <img className="recent-group-img" src={window.flavicon}/>
            <div className='recent-list-block'>
                    <span className='recent-list-tag-descrip'><strong>You</strong> created the group <strong>"{`${groups[1]}`}"</strong></span>
                    <span className='recent-list-tag-time'>{this.parseTime(groups[2])}</span>
            </div>
           </li>)
        } else {
            for (let i = 3; i < groups.length; i+3) {
                activity.push(<li key={`group-rec-${groups[i]}`} className='group-list'>
                <img className="recent-group-img" src={window.flavicon}/>
                    <div className='recent-list-block'>
                            <span className='recent-list-tag-descrip'>You created the group "{`${groups[i+1]}`}"</span>
                            <span className='recent-list-tag-time'>{groups[i+2]}</span>
                    </div>
                </li>)
            }
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

export default connect(msp)(DashRec);