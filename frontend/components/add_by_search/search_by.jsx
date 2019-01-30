import React from 'react';

class SearchBy extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            field: "",
            body: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createFriend(this.state);
        this.setState = {
            field: "",
            body: ""
        };
    }

    fillForm(field){
        return e => {
            this.setState({ [field]: e.target.value });
        }; 
    }

    render() {
        return (
            <div className="Search-me">
                <h1><img className="inv-img" src={window.flavicon}/>Invite friends</h1>
                <div>
                    <form onSubmit={this.handleSubmit(e)}>
                        <input className="inv-user-field"  onChange={this.fillForm('field')} type="text" value={`To: ${this.props.top}`}/>

                        <input className="inv-message" onChange={this.fillForm('body')} type="text-area" value="Include an optional message"/>

                        <input className="btn inv-friends-btn" type="submit" value="Send invites and add friends" />
                    </form>
                </div>
            </div>
        )
    }
}

export default SearchBy; 