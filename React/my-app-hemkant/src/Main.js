import React, { Component } from "react";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect,
    HashRouter
  } from "react-router-dom";
  import Home from "../src/Home";
  import Stuff from "../src/Stuff";
  import Contact from "../src/Contact";

  class Main extends Component {
    render() {
      return (
        <Router>
          <div>
            <h1>Simple SPA</h1>
            <ul className="header">
                
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/stuff">Stuff</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Route path="/" component={Home}/>
              <Route path="/stuff" component={Stuff}/>
              <Route path="/contact" component={Contact}/>
            </div>
          </div>
        </Router>
      );
    }
  }
 
export default Main;