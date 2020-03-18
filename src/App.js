import React, {Component } from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route'

const User = ({match}) => {
return (<h1>Welcome User {match.params.username}</h1>)
}

class App extends Component{
  render(){
    return (
      <Router>
          <div className="App">
              <Route path="/" exact  strict render={
                () => {
                  return ( 
                    <h1>Welcome Home</h1>
                  )
                }
              } />


              <Route path="/about/" exact strict render={
                () => {
                  return ( 
                    <h1>Welcome About</h1>
                  )
                }
              } />

              <Route path="/user/:username" exact strict component={User} />


          </div>
      </Router>
    )
  }
}

export default App;
