import React from 'react';
import { Link } from 'react-router-dom';
import { $ } from 'jquery';

class GroupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            group_name: "",
            usernames: []
        };

        // this.input_fields = ['inputs-0', 'inputs-1', 'inputs-2', 'inputs-3'];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.addUsernames = this.addUsernames.bind(this);
        // this.addField = this.addField.bind(this)
    }

    // componentDidUpdate(prevProps) {
    //     if (prevProps !== this.props) {
    //         if (this.state.group_name.length > 0 && ) {

    //         }
    //     }
    // }

    handleSubmit(e) {
        e.preventDefault();
        this.addUsernames();
        debugger
        this.props.processForm(this.state);
        this.setState = ({
            group_name: "",
            usernames: []
        });
        if (this.props.errors) {
            this.render();
        } else {
            this.props.history.push('/dashboard');
        }
    }


    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    addUsernames() {
        e.preventDefault();
        let usernames = $(".friend_fields").val();
        // usernames.forEach(input => {
        //     if (input === '') {
        //         let idx = arr.indexOf(input);
        //         arr.slice(0, idx - 1);
        //     }
        //     debugger
        // })
        debugger
        this.setState({ usernames })
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
                            <input type="text" defaultValue='' placeholder='name' />

                            <input type="text" defaultValue='' placeholder='name' />

                            <input type="text" defaultValue='' placeholder='name' />

                            <input type="text" defaultValue='' placeholder='name' />
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