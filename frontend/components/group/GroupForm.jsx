import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: "",
            usernames: [''],
        };

        this.addInputField = this.addInputField.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps !== this.props) {
    //         if (this.state.group_name.length > 0 && ) {

    //         }
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then( () => {
            this.props.history.push('/dashboard');
        });
        this.setState = ({
            group_name: "",
            usernames: []
        });
    }

    addUsername(idx) {
        return (e) => {
            const { usernames } = this.state;
            usernames[idx] = e.target.value;
            this.setState({ usernames });
        };
    }

    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    renderErrors() { 
        let { errors } = this.props; 

        return (
        <ul>
        {errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
        </ul>
        );
    }

    addInputField(e) {
        e.preventDefault();
        const { usernames } = this.state;
        usernames[usernames.length] = '';
        this.setState({ usernames })
    }

    render() {

        return (
            <div className="add-new-group">
                <Link to="/dashboard"><img className="group-img" src={window.flavicon} /></Link>

                <form onSubmit={this.handleSubmit} className="group-form">
                    <h2 className="group-form-header">START A NEW GROUP</h2>

                    <label className="group-tagline">My group shall be called...
                        <br />
                        <input className="group-name-field" onChange={this.fillForm('group_name')} type="text" value={this.state.group_name} />
                    </label>
                    <br />

                    <div className="line"></div>

                    <div className="friend-add present" ref={node => this.friend_fields = node} >
                        <h3 className='friend-add-tag'>Group Members</h3>
                        
                        <p className='current-user-info'>
                        <FontAwesomeIcon icon={faUser} className="plus-friend-btn" />
                        {this.props.currentUser.email}
                        </p>
                        
                        <div className='friend_fields'>
                            {(this.state.usernames).map((username, idx) => 
                                <input type="text" key={idx} className='group-friend-input' value={username} placeholder='name' onChange={this.addUsername(idx)} /> 
                            )}
                        </div>

                        <button className='btn add-friend-input-field-btn' onClick={this.addInputField}>+ Add a person</button>
                    </div>

                    <input className='btn group-submit' type="submit" value="Save"/>
                </form>

                <div className="line"></div>
                {this.renderErrors()}
            </div>

        );
    }

}

export default GroupForm; 