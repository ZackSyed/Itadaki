import React from 'react';
import { push } from 'react-router-redux'; 

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state); 
        this.setState = {
            username: "",
            email: "",
            password: ""
        };
        push('/');
    }

    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }


    render() {
        let { formType, navLink } = this.props; 

        return (
            <div>
            <img className="small-img" src={window.flavicon}/>
            <form onSubmit={this.handleSubmit} className="session-form">
                <h2>Please {formType} or {navLink}</h2>

                <label>Username:
                <input className="input user" onChange={this.fillForm('username')} type="text" value={this.state.username}/>
                </label>
                <br/>

                <label>email:
                <input  className="input email " onChange={this.fillForm('email')} type="text" value={this.state.password}/>
                </label>
                <br/>

                <label>Password:
                <input  className="input password" onChange={this.fillForm('password')} type="password" value={this.state.password}/>
                </label>
                <br/>
                
                <input type="submit" value={formType}/>
            </form>
            </div>
        );
    }

}

export default SessionForm; 