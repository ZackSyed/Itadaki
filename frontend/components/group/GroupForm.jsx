import React from 'react';
import { Link } from 'react-router-dom';

class GroupForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            group_name: "",
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault(); 
        this.props.processForm(this.state); 
        this.setState = {
            group_name: "",
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


    render() {

        return (
            <div className="add-new-group">
             <Link to="/"><img className="group-img" src={window.flavicon}/></Link>

             <div className="errors">
                 {this.renderErrors()}
             </div>
            <form onSubmit={this.handleSubmit} className="group-form">
                <h2 className="group-form-header">START A NEW GROUP</h2>

                <label className="group-tag">My group shall be called...
                <br/>
                <input className="group-name-field" onChange={this.fillForm('group_name')} type="text" value={this.state.group_name}/>
                </label>
                <br/>
                
                <input className="btn bgroup-submit" type="submit" value="Save"/>
            </form>
            </div>
        );
    }

}

export default GroupForm; 