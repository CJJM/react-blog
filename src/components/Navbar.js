
import React, { Component } from 'react';
import { Router, Route, Link}  from "react-router";

function Memes() {
  console.log("Memes section");
  return;
}

function Dreams() {
  console.log("Dreams section");
  return;
}

function Political() {
  console.log("Political section");
  return;
}

class Navbar extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul class="navbar">
              <li><Link to="/">Memes</Link></li>
              <li><Link to="/dreams/">Dreams</Link></li>
              <li><Link to="/schemes/">Political Schemes</Link></li>
            </ul>
          </nav>
          <Route path="/" exact component={Memes} />
          <Route path="/dreams/" component={Dreams} />
          <Route path="/schemes/" component={Political} />


        </div>
      </Router>
    )
  };
}

export default Navbar;
