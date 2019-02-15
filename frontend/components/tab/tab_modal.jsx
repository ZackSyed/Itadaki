import React from 'react'; 

class TabModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            groupName: '',
            tabName: '', 
            total: 0.00,

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createTab(this.state); 
        this.setState({
            groupName: "",
            tabName: "",
            total: ""
        });
    }

    fillForm(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }


    render() {
        return (
            <div className="create-tab">
                <span>Add a Bill <button onClick={this.props.closeModal} className="tab-closer">X</button></span>
                    <form onSubmit={this.handleSubmit} className='tab-create-form'>    
                    <input  className='tab-create-group-name' onChange={this.fillForm('groupName')} type="text" value={this.state.groupName} placeholder=' group name' />
                            <img className="tab-create-img" src={window.tab}/>
               
                            <br/>
                            <input  className='tab-create-name' onChange={this.fillForm('tabName')} type="text" value={this.state.tabName} placeholder='Enter a description'/>
                            <br/>

                            <br/>
                            <input  className="tab-create-total" onChange={this.fillForm('total')} type="integer" value={this.state.total} />
                            <br/>
                    </form>
            </div>
        )
    }
}

export default TabModal; 