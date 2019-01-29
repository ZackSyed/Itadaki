import React from 'react';


class AddFriend extends React.Component {
    constructor(props){
        super(props);

    }

    render(){


        return (
            <div className="add-friend">
                <button className="add-friend-x" onClick={this.props.closeModal}> X</button>
                <div className="by-email">
                </div> 
                <div className="by-username">

                </div>
            </div>
        )
    }
}

export default AddFriend;