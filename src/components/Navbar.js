import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
    
        return (
            <div>
            <nav className="navbar fixed-top navbar-expand-lg br3 bw1 ba b-blue  navbar-light " style={{backgroundImage:"radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )"}}>
  <Link className="navbar-brand" to="/">DailyNews</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto flex items-center">
      
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/general"}>General</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/entertainment"}>Entertainment</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/business"}>Business</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/health"}>Health</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/science"}>Science</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/sports"}>Sports</Link></li>
        <li className="nav-item">  <Link className="i mx-1 black" to={process.env.PUBLIC_URL +"/technology"}>Technology</Link></li>
        {/* link to tag links the button with different categories of news......value in "to" is matched
         with exact path in route tag in app.js */}
    </ul>
   
  </div>
</nav>
        </div>
        )
    
}

export default Navbar
