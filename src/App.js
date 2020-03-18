import React, {Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, NavLink, Redirect} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User = (params) => {
return (<h1>Welcome User {params.username}</h1>)
}

class App extends Component{
  state = {
    loggedIn:false
  }

  loginHandle = () => {
    this.setState( prevState => ({
      loggedIn: !prevState.loggedIn
    }))
   }

  render(){
    return (
      <Router>
          <div className="App">
               
              <ul>
                  <li>
                     <NavLink to="/" exact activeStyle={
                       {color:'red'}
                     }> Home</NavLink>
                  </li>
                  <li>
                     <NavLink to="/about" exact activeStyle={
                       {color:'red'}
                     }> About</NavLink>
                  </li>
                  <li>
                     <NavLink to="/user/john" exact activeStyle={
                       {color:'red'}
                     }> User John</NavLink>
                  </li>
                  <li>
                    <NavLink to="/user/devian" exact activeStyle={
                       {color:'red'}
                     }> User Devian</NavLink>
                  </li>
              </ul>

              <input type="button"  value={this.state.loggedIn ? 'log out' : 'log in'} onClick={this.loginHandle.bind(this)} />

              <Route path="/" exact  strict render={
                () => {
                  return ( 
                    <h1>Welcome Home</h1>
                  )
                }
              } />


              <Route path="/about" exact strict render={
                () => {
                  return ( 
                    <h1>Welcome About</h1>
                  )
                }
              } />

              <Route path="/user/:username" exact strict 
                  render={({match}) => (this.state.loggedIn ? (<User username={match.params.username}/>) : (<Redirect to="/" />)
                    )}
              />


          </div>
      </Router>
    )
  }
}

export default App;
