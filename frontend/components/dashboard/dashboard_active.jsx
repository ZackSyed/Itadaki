import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { fetchSplits } from '../../actions/split_actions';
import { openModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';

class DashAct extends React.Component {
    constructor(props) {
        super(props);

    }   

    componentDidMount() {
        if (this.props.splits.length === 0) {
            this.props.fetchSplits();
        }
    }

    // totalBalance() {

    // }

    // totalOwe() {
        
    // }

    // totalAmountOwed() {
       
    

    render() {

        // let totalOwed = 0;
        // let totalOwe = 0;
        // this.props.splits.forEach(el => {
        //     if (el.user_id === this.props.) {

        //     }
        //     totalOwed += el.amount_owed; 
        // })
        // return total;

        return (
            <div>
                <div className="activity-main">  
                <h1 className="activity-header">Dashboard</h1>
                    <Link className="btn bill" to='' onClick={this.props.openTabModal}>Add a tab</Link>
                    <Link className="btn sttl" to="/">settle up</Link>
                </div>
                <div className="activity-center">
                    <div className='dash-amounts'>
                        <span className='dash-amounts-descrip'>{`Total Balance ${null}`}</span>
                        {/* <span className='dash-amounts-descrip'>{`you owe ${this.props.splits[0].amount_owed}`}</span> */}
                        <span className='dash-amounts-descrip'>{`you are owed ${null}`}</span>
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