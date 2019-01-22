import React from 'react';

class SessionForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(); 
        this.setState = {
            username: "",
            password: ""
        };
    }

    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }


    render() {
        return (
            <>
            <header>Welcome!!</header>
            <h2>Please {this.props.formType} or {this.props.navLink}</h2>
            <form onSubmit={this.handleSubmit} className="session-form">

                <label>Username:
                <input className="input-field" onChange={this.fillForm('username')} type="text" value={this.state.username}/>
                </label>
                <br/>

                <label>Password:
                <input  className="input-field" onChange={this.fillForm('password')} type="password" value={this.state.password}/>
                </label>
                <br/>
                
                <input type="submit" value={formType}/>
            </form>
            </>
        );
    }

}

export default SessionForm; 