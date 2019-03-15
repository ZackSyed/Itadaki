import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { openModal } from '../../actions/modal_actions';
import { withRouter } from "react-router";


class Navbar extends React.Component {
    constructor(props) {
        super(props); 

        console.log('%cLooking for a software developer, check my portfolio to see if I am a good fit for your company', "color: blue; font-size:15px;");
        console.log('%chttps://zacksyed.github.io/Portfolio-Page/', "font-size:20px;")    
    }

    render() {
        let { user, location: { pathname } } = this.props; 
        // render user loggedIn menu. 
            let className; 
            if (pathname === '/signup') {
               className = 'navbar disappear';
            } else if (pathname === '/groups/new') {
               className = 'navbar disappear';
            } else {
                className = 'navbar present';
            }

          const userHere = (
               <div className="dropdown-menu">
                   <button className="btn dropdown" onClick={this.props.openModal}>{user.username}</button>
               </div>
          )

         // render login / signup buttons  
          const noUser = (
            <>
                <li>
                    <Link className="btn btn-l" to="/login">Log in </Link>
                </li>
                <li >
                    <Link className="btn btn-s" to="/signup"> Sign up</Link>
                </li>
            </>
          )
     


        return (
            <header className={className}>
                <div className="flex-container">
                <Link to="/dashboard" className="link-to-dash"><h1>
                        <ul className="letters">
                            <li>I</li>
                            <li>T</li>
                            <li>A</li>
                            <li>D</li>
                            <li>A</li>
                            <li>K</li>
                            <li>I</li>
                        </ul>  
                    </h1></Link>
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
    openModal: () => dispatch(openModal('menu')),
})


export default withRouter(connect(msp, mdp)(Navbar));