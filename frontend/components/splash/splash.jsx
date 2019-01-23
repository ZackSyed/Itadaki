import React from 'react';

const splash = () => (
<div className="masthead">
    <h1 className="tagline">
        <img className="small-img" src={window.flavicon}/>
        Split expenses with friends
    </h1>

    <div className="main-images">
        <span className="images">
            <img className="splash-img" src={window.splash1}/>
            <img className="splash-small-img" src={window.splash2}/>
        </span>
    </div>


</div>
)

export default splash; 