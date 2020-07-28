import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';

const User = ({match}) => {
  return (<h1>Welcome {match.params.uname}</h1>)
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ul>
            <li><NavLink to="/" exact activeStyle={{color:'green'}}>Home</NavLink></li>
            <li><NavLink to="/about" exact activeStyle={{color:'green'}}>About</NavLink></li>
            <li><NavLink to="/user/Peter" exact activeStyle={{color:'green'}}>User Peter</NavLink></li>
            <li><NavLink to="/user/John" exact activeStyle={{color:'green'}}>User John</NavLink></li>
          </ul>
          <Route path="/" exact render={() => {return (<h1>Welcome To Home</h1>)}} />
          <Route path="/about"exact strict render={() => {return (<h1>Welcome To About</h1>)}} />
          <Route path="/user/:uname" exact  component={User} />
        </div>
      </Router>
    );
  }
}

export default App;
