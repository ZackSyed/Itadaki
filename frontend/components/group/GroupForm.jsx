import React from 'react';
import { Link } from 'react-router-dom';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: "",
            usernames: []
        };

        this.input_fields = ['inputs-0', 'inputs-1', 'inputs-2', 'inputs-3'];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addField = this.addField.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
        this.setState = ({
            group_name: "",
            usernames: []
        });
        this.props.history.push('/dashboard');
    }


    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    addField(e) {
        e.preventDefault();
        var newInput = `input-${this.input_fields.length}`;
        this.input_fields.inputs.concat(newInput);
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
                        <h1>Add friends here:</h1>
                        <br />
                            {this.input_fields.map(input => 
                                <div>
                                    <input type="text" onChange={this.fillUsername('username')} value='' />
                                    <button onClick={this.addUsername}>check</button>
                                    <button className='add-more-fields' onClick={this.addField}>+</button>
                                </div>
                                )}
                    </div>

                    <input className='btn group-submit' type="submit" value="Save"/>
                </form>
            </div>

        );
    }

}

export default GroupForm; 