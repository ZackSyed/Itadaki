import React from 'react';
import { Link } from 'react-router-dom';

class Dropdown extends React.Component {
    constructor(props){
        super(props);

        this.userLogout = this.userLogout.bind(this);
    }

    userLogout(e) {
        e.preventDefault();
        this.props.logout();
        this.props.closeModal();
    }

    render() {
        return (
            <div className='dropdown-holder'>
                <Link to="/account" className='drop-option' onClick={this.props.closeModal}> Your Account</Link>
                <Link to="/groups/new" className='drop-option' onClick={this.props.closeModal}> Create a group</Link>
                <Link to="" className='drop-option' onClick={this.userLogout}> Log out</Link>
            </div>
        )
    }
}

export default Dropdown;