import React from "react";
import "./gloable.css"
var App=()=>{
    return(
        
      <div>
        <h1 id="bb">facebook</h1>
        <div className="main">
          <div id="eh">
          <h1 id="a">Log in to Facebook</h1>

          </div>
        <input type="email" name="email" className="cc" placeholder="Email Address or Phone"/><br /><br />
        <input type="password" name="password" className="cc" placeholder="Password"/><br /><br />
        <button className="cc">Login</button>
      </div>
      </div>
    )
}
export default App