// Repository:  react-basic-concepts
// Author:      Rodolfo Carmen
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';


class App extends Component {
  render() { 
    return ( 
      <div className="App">
        <Country />
      </div>
     );
  }
}
 
export default App;
