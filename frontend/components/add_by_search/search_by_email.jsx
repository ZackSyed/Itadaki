import React from 'react'
import { connect } from 'react-redux';
import { createFriend } from '../../actions/friend_actions';

class SearchByEmail extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
        this.fillForm = this.fillForm.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createFriend(this.state);
        this.setState = {
            email: "",
            body: ""
        };
    }

    fillForm(field){
        return e => {
            this.setState({ [field]: e.target.value });
        }; 
    }

    render() {
        return (
            <div className="search-me">
                
                <h1 className="inv-tag"><img className="inv-img" src={window.flavicon}/> Invite friends</h1> 
                    <form onSubmit={this.handleSubmit} className="inv-form">
                        <input className="inv-user-field"  onChange={this.fillForm('email')} type="text" value={this.state.email}/>

                        <input className="inv-message" onChange={this.fillForm('body')} type="text-area" value={this.state.body} />

                        <input className="btn inv-friends-btn" type="submit" value="Send invites and add friends" />
                    </form>
            </div>
        )
    }
}

const msp = state => ({
    top: 'email',
});

const mdp = dispatch => ({
    createFriend: () => dispatch(createFriend()),
    // findUserByEmail: (email) => dispatch(findUserByEmail(email)),
});

export default connect(msp, mdp)(SearchByEmail); 