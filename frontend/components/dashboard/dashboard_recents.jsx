import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class DashRec extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {
            this.render();
        }
    }

    render() {
        const activity = [];
        this.props.groups ? this.props.groups : [];
        this.props.groups.forEach( group => {
           activity.push(<li className='group-list'><img className="recent-group-img" src={window.flavicon}/>You created the group "{group.name}"</li>)
        })


        return (
            <div className="recent-container">
                <ul className="recent-list">
                    {activity}
                </ul>   
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