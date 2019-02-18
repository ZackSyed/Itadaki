import React from 'react'; 

class TabModal extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            group_name: '',
            name: '', 
            total: 0.00,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        debugger
        this.props.createTab(this.state); 
        this.setState({
            group_name: "",
            name: "",
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
                <div className="tab-create-header">
                <span className='tab-create-header-tag'>Add a Bill </span>
                <button onClick={this.props.closeModal} className="tab-closer">X</button>
                </div>
                    <form onSubmit={this.handleSubmit} className='tab-create-form'> 
                            <div className='tab-create-img-holder'>
                                <img className="tab-create-img" src={window.tab}/>
                            </div>
                            
                            <div className='tab-create-field-holder'>
                                <br/>   
                                <input  className='tab-create-group-name' onChange={this.fillForm('group_name')} type="text" value={this.state.groupName} placeholder='Enter group name' />
                                <br/>
                                
                
                                <br/>
                                <input  className='tab-create-name' onChange={this.fillForm('name')} type="text" value={this.state.tabName} placeholder='Enter a description'/>
                                <br/>

                                <br/>
                                <input  className="tab-create-total" onChange={this.fillForm('total')} type="integer" value={this.state.total} />
                                <br/>
                            </div>

                            <div className='tab-create-btn-holder'>
                                <button onClick={this.props.closeModal} className="btn tab-create-close">Close</button>
                                <input type="submit" className='btn tab-create-save' value='save' />
                            </div>
                    </form>
            </div>
        )
    }
}

export default TabModal; 