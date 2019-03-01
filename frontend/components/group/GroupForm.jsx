import React from 'react';
import { Link } from 'react-router-dom';
// import { $ } from 'jquery';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: "",
            usernames: [''],
            numInputFields: 1,
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

                    <label className="group-tag">My group shall be called...
                        <br />
                        <input className="group-name-field" onChange={this.fillForm('group_name')} type="text" value={this.state.group_name} />
                    </label>
                    <br />

                    <div className="friend-add present" ref={node => this.friend_fields = node} >
                        <h3>Group Members:</h3>
                        <p></p>
                        <br />
                        <div className='friend_fields'>
                            {(this.state.usernames).map((username, idx) => 
                                <input type="text" key={idx} value={username} placeholder='name' onChange={this.addUsername(idx)} /> 
                            )}
                            <button onClick={this.addInputField}>+</button>
                        </div>

                    </div>

                    <input className='btn group-submit' type="submit" value="Save"/>
                </form>
                {this.renderErrors()}
            </div>

        );
    }

}

export default GroupForm; 