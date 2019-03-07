import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { fetchSplits } from '../../actions/split_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class DashAct extends React.Component {
    constructor(props) {
        super(props);

        this.totals = this.totals.bind(this);
    }   

    componentDidMount() {
        if (this.props.splits.length === 0) {
            this.props.fetchSplits();
        }
    }
    
    totals() {
        let totalOwed = 0;
        let totalOwe = 0;
        for (let i = 0; i < this.props.splits.length; i++) {
            for (let j = 0; j < this.props.tabs.length; j++) {
                let split = this.props.splits[i];
                let tab = this.props.tabs[j];
                if (split.user_id === tab.lender_id && split.tab_id === tab.id) {
                    totalOwed += split.amount_owed;
                } else if (!(split.user_id === tab.lender_id) && split.tab_id === tab.id) {
                    totalOwe += tab.total - split.amount_owed;
                }
            }
        }
        return [totalOwe, totalOwed]
    }

    render() {

        return (
            <div>
                <div className="activity-main">  
                <h1 className="activity-header">Dashboard</h1>
                    <Link className="btn bill" to='' onClick={this.props.openTabModal}>Add a tab</Link>
                    <Link className="btn sttl" to="/">settle up</Link>
                </div>
                <div className="activity-center">
                    <div className='dash-amounts'>
                        <span className='dash-amounts-descrip'>{`Total Balance ${this.totals()[0] - this.totals()[1]}`}</span>
                        <span className='dash-amounts-descrip'>{`you owe ${this.totals()[0]}`}</span>
                        <span className='dash-amounts-descrip'>{`you are owed ${this.totals()[1]}`}</span>
                    </div>
                </div>
            </div>
        )
    }
}

const msp = (state) => {
    return {
        splits: Object.values(state.entities.splits),  
        tabs: Object.values(state.entities.tabs),
        users: Object.values(state.entities.users),
        friends: state.entities.users[state.session.id].friends,
        cUId: state.session.id,
    }
} 

const mdp = dispatch => {
    return {        
        fetchSplits: () => dispatch(fetchSplits()),
        openTabModal: () => dispatch(openModal('tab')),
    }
}

export default connect(msp, mdp)(DashAct); 