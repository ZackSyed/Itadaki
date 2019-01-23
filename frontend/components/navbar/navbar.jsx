import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router";


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
        let { user, location: { pathname } } = this.props; 
        // render user loggedIn menu. 
            let className; 
            if (pathname === '/signup') {
               className = 'navbar disappear';
            } else {
               className = 'navbar present';
            }


          const userHere = (
               <>
               <li ><button className="dropdown-user-menu" >{user.username}
               <b className="carrot"></b></button></li>

               <li>
                   <button className="session-button logout" onClick={this.handleClick}>Log out</button>
               </li>
               </>
          )

         // render login / signup buttons  
          const noUser = (
            <>
                <li>
                <Link className="session-button logger" to="/login">Log in </Link>
                </li>
                <li >
                <Link className="session-button signer" to="/signup"> Sign up</Link>
                </li>
            </>
          )
     


        return (
            <header className={className}>
                <div className="flex-container">
                    <h1 id="app-name">Itadaki</h1>
                    <ul className="navbuttons">
                        {user.id ? userHere : noUser }
                    </ul>
                </div>
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


export default withRouter(connect(msp, mdp)(Navbar)); 