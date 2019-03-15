import React from 'react'; 
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
import { logout } from '../../actions/session_actions';
import { withRouter } from "react-router";


class Navbar extends React.Component {
    constructor(props) {
        super(props); 

        this.userLogout = this.userLogout.bind(this);

        console.log('%cLooking for a software developer, check my portfolio to see if I am a good fit for your company', "color: blue; font-size:15px;");
        console.log('%chttps://zacksyed.github.io/Portfolio-Page/', "font-size:20px;")    
    }

    userLogout(e) {
        e.preventDefault();
        this.props.logout();
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


          const accountPage = (
                <div className='button-to-dash'>
                    <Link to='/dashboard' className='btn to-dash-link'>Home</Link>
                </div>
          )

          const userHere = (
               <div className="dropdown">
                   <button className="btn dropdown-btn" >{user.username}</button>
                        <ul className='drop-options'>
                            <li><Link to="/account" className='drop-option'> Your Account</Link></li>
                            <li><Link to="/groups/new" className='drop-option'> Create a group</Link></li>
                            <li><Link to="" className='drop-option' onClick={this.userLogout}> Log out</Link></li>
                        </ul>
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
                        {this.props.location.pathname === '/account' ? accountPage : null}
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