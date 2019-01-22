import { Redirect, Route, withRouter } from 'react-router-dom';
import React from 'react';
import { connect } from 'react-redux';

const msp = state => ({
     loggedIn: Boolean(state.session.id)
});


// change redirect after finishing user show || activity page. 
const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? ( <Redirect to="/" /> 
        ) : ( 
            <Component {...props} /> 
        )
    )} />
);

export const AuthRoute = withRouter(connect(msp)(Auth));