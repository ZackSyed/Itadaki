import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
    constructor(props) {
        super(props); 

    this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.logout();
    }
    

    render() {
        let { user } = this.props; 
        debugger
        // render user loggedIn menu. 
          const userHere = (
               <>
               <li><button className="dropdown-user-menu" >{user.username}
               <b className="carrot"></b></button></li>

               <li>
                   <button className="session-buttons" onClick={this.handleClick}>Log out</button>
               </li>
               </>
          )

         // render login / signup buttons  
          const noUser = (
            <li >
            <Link className="session-buttons" to="/login">Log in </Link>
             or
            <Link className="session-buttons" to="/signup"> Sign up</Link>
            </li>
          )
     


        return (
            <header className="navbar">
                <h1 id="app-name">Itadaki</h1>
                <ul>
                    {user.id ? userHere : noUser }
                </ul>
            </header>
        )
    }
}

const msp = ({ session, entities }) => {
    let user = {}; 
    if (session.id) {
        user = entities.users[session.id];
    }
    return {
        user
    }
}

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
})


export default connect(msp, mdp)(Navbar); 