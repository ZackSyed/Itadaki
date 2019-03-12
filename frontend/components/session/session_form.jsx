import React from 'react';
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
        this.processDemo = this.processDemo.bind(this);
        this.clearState = this.clearState.bind(this);
    }


    clearState() {
        this.setState({
            username: "",
            email: "",
            password: ""
        });
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state); 
        this.clearState();
    }

    processDemo() {
        this.setState({
            username: 'demo_user',
            email: 'demo@demo.com',
            password: 'thisIspassword'
        })
        // this.props.processForm(this.state);
    }
    
    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }

    componentWillUnmount() {
        this.props.clearErrors();  
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
        let { formType, navLink, 
            taglines: { top, first, button }, 
            className: { email, tag, form, submit, t } } = this.props; 

            let demo_log_button;
            if (this.props.taglines.demo_button) {
                demo_log_button = <button onClick={this.processDemo} className="btn demo-btn">{this.props.taglines.demo_button}</button>
            }

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

                    <label className={tag}>Here's my <strong>email address</strong>:
                    <br/>
                    <input  className={email} onChange={this.fillForm('email')} type="email" value={this.state.email}/>
                    </label>
                    <br/>

                    <label className="tag">Password:
                    <br/>
                    <input  className="password-field" onChange={this.fillForm('password')} type="password" value={this.state.password}/>
                    </label>
                    <br/>
                    
                    <input className={submit} type="submit" value={button}/>
                    {demo_log_button}
                    <h2 className="either-or">{navLink}</h2>
                </form>
                    <div className="errors">
                        {this.renderErrors()}
                    </div>
            </div>
        );
    }

}

export default SessionForm; 