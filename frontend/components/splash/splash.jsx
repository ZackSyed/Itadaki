import React from 'react';
import { push } from 'react-router-redux';

const splash = () => (
<div className="masthead">
    <h1 className="tagline">
        <img className="small-img" src={window.flavicon}/>
        Split expenses with friends
    </h1>

    <div className='longer-tagline'>
        <strong>Share</strong> bills and IOUs.
        <strong> Make sure</strong> everyone gets paid back.
        <strong> Totally free</strong> for web, iphone, and Android.
    </div>

    <div className="main-images">
        <span className="images">
            <img className="splash-img" src={window.splash1}/>
            <img className="splash-small-img" src={window.splash2}/>
        </span>
    </div>

    <div className="signup-container">
        <button className="btn signup" onClick={push('/signup')}>Sign Up</button>
    </div>


</div>
)

export default splash; 