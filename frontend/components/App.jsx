import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';
import Footer from './footer/footer';
import Dashboard from '../components/dashboard/dashboard';
import UserAccountContainer from '../components/user/user_account_container'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret);

const App = () => (
    <div>    
        <Navbar />
       
        <div className="under-nav"> 
        <Route exact path='/' component={Splash}/>
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <ProtectedRoute path="/dashboard" component={Dashboard} />
        <ProtectedRoute path="/account" component={UserAccountContainer} />
        </div>

        <div className="below-component">
            <Footer />
        </div>
    </div>
);

export default App; 