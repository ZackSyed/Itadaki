import React from 'react';
import { Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import LoginContainer from './session/login_container';
import SignupContainer from './session/signup_container';
import Navbar from './navbar/navbar';
import Splash from './splash/splash';

const App = () => (
    <div>    
        <Navbar />
       
        <Splash />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
    </div>
);

export default App; 