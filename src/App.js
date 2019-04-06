import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import PoliticsController from './components/PoliticsController';
import TechController from './components/TechController';
import MemesController from './components/MemesController';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
      <div className="App">

        <header>
          <Header id="siteTitle"/>
        </header>

        <Router>
          <div id="contentController">

            <nav>
              <ul id="navList">
                <li><Link to="/">Political Schemes</Link></li>
                <li><Link to="/memes">Memes</Link></li>
                <li><Link to="/dreams/">Dreams</Link></li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact component={PoliticsController} />
              <Route path="/dreams/" component={TechController} />
              <Route path="/memes/" component={MemesController} />
            </Switch>

          </div>
        </Router>

        <footer>
          <Footer />
        </ footer>

      </div>
    );
  }


export default App;
