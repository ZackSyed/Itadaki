import React from 'react';
import { Link } from 'react-router-dom'; 
import { push } from 'react-router-redux'; 
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret, faFlag, faListUl } from '@fortawesome/free-solid-svg-icons';

class Dashboard extends React.Component {
    constructor(props){
        super(props);

    this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {

    }


    render() {
        debugger
        return (
            <div className="dash">
                <div className="sidebar">
                    <Link onClick={this.handleSubmit} className="btn to-dash" to="/dashboard"><img className="main-dash-img" src={window.flavicon}/> Dashboard</Link>
                    <Link onClick={this.handleSubmit} className="btn rec-act" to="/activity"><FontAwesomeIcon icon={faFlag} className="flag" /> Recent activity</Link>
                    <Link onClick={this.handleSubmit} className="btn all-exp" to="/all"><FontAwesomeIcon icon={faListUl} className="menu" /> All expenses</Link>
                </div>

                <div className="activity-top"> 
                    <div className="activity-main">  
                        <h1 className="activity-header">Dashboard</h1>
                        <Link className="btn bill" to="/"></Link>
                        <Link className="btn sttl" to="/"></Link>
                    </div>
                        <div className="activity-center">
                            <FontAwesomeIcon icon={faUserSecret} className="user-pic" />
                        </div>
                </div>
            </div>
        )
    }
}

export default Dashboard; 