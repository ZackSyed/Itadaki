import React from 'react';
import { Link } from 'react-router-dom';

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
        <Link className="btn-large" to="/signup">
        <h3 className="signup-line">Get started now</h3>
        <p className="signup-line2">(it's free!)</p>
        </Link>
    </div>


</div>
)

export default splash; 