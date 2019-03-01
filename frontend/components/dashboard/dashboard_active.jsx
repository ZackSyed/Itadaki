import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class DashAct extends React.Component {
    constructor(props) {
        super(props);

    }   


    render() {
        return (
            <div>
                <div className="activity-main">  
                    <h1 className="activity-header">Coming Soon!</h1>
                </div>
                <div className="activity-center">
                    <div className='coming-soon'>
                        {/* <FontAwesomeIcon icon={faDesktop} className="user-pic" size="m" /> */}
                        <h1 className='soon-header'>This page is coming soon</h1>
                        <p className='soon-header'>I am currently working on implementing this feature, stay tuned!</p>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        
    }
} 

const mdp = dispatch => {
    return {    
        
    }
}

export default connect(msp, mdp)(DashAct); 