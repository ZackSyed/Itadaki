import React from 'react';
import { push } from 'react-router-redux'; 
import { Link } from 'react-router-dom';

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
        let { formType, navLink, 
            taglines: { top, first, button }, 
            className: { email, tag, form, submit, t } } = this.props; 

        return (
            <div className={formType}>
             <Link to="/"><img className="session-img" src={window.flavicon}/></Link>
            <form onSubmit={this.handleSubmit} className={form}>
                <h2 className={t}>{top}</h2>

                <label className="tag">{first}
                <br/>
                <input className="user-field" onChange={this.fillForm('username')} type="text" value={this.state.username}/>
                </label>
                <br/>

                <label className={tag}>Here's my <strong>email address</strong> (optional):
                <br/>
                <input  className={email} onChange={this.fillForm('email')} type="text" value={this.state.email}/>
                </label>
                <br/>

                <label className="tag">Password:
                <br/>
                <input  className="password-field" onChange={this.fillForm('password')} type="password" value={this.state.password}/>
                </label>
                <br/>
                
                <input className={submit} type="submit" value={button}/>
                <h2 className="either-or">{navLink}</h2>
            </form>
            </div>
        );
    }

}

export default SessionForm; 