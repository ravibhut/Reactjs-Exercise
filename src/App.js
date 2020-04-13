import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import A1 from './execise/task3/Parent'

import ComponentC from './execise/compC';
import { userProvider, UserProvider } from './execise/userContx';

class App extends Component {
  constructor(){
    super()
    this.state={time:new Date()}
  }

  currentTime()
  {
    this.setState({
      time: new Date()
    })
  }
  componentWillMount()
  {
    setInterval(()=>this.currentTime(),1000)
  }

  render(){
    return(
      <div>
      <span class="time">
        <div>
          Time { this.state.time.toLocaleTimeString([], { hour12: true}) }  
        </div>
        <div>
          Date { this.state.time.toLocaleDateString() }
        </div>
      </span>
      <div>
      <UserProvider value="Rapidops">

      <ComponentC />
      </UserProvider>
        <A1></A1>
      </div>
      </div>
    )
  }
}

export default App;



