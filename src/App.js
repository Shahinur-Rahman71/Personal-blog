import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './mycomponent/Header';
import Hero from './mycomponent/Hero';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Contact from './containers/Contact';
import Post from './containers/Post';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <Header/>
          <Hero/>

          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/post/:slug" component={Post}/>
          </Switch>
          

        </div>
      </Router>
      
    );
  }
}

export default App;
