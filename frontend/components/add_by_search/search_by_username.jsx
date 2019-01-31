import React from 'react';
import { connect } from 'react-redux';
import { createFriend } from '../../actions/friend_actions';


const msp = state => ({
    top: 'username', 
});

const mdp = dispatch => ({
    createFriend: (username) => dispatch(createFriend(username)),
});



class SearchByUsername extends React.Component {

    constructor(props){
        super(props);
        
        this.state = {
            username: "",
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createFriend(this.state.username);
        this.setState = ({
            username: "",
            body: ""
        });
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
                        <input className="inv-user-field"  onChange={this.fillForm('username')} type="text" value={this.state.username}/>

                        <input className="inv-message" onChange={this.fillForm('body')} type="text-area" value={this.state.body} />

                        <input className="btn inv-friends-btn" type="submit" value="Send invites and add friends" />
                    </form>
            </div>
        )
    }
}

export default connect(msp, mdp)(SearchByUsername); 