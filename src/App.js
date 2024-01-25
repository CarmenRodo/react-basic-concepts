// Repository:  react-basic-concepts
// Author:      Rodolfo Carmen
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';


class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2 },
      { id: 2, name: 'China', gold: 3 },
      { id: 3, name: 'Germany', gold: 0 },
    ]    
  }
  IncrementGold = (countryId) => {
    
    console.log(`IncrementGold: ${countryId}` );
  }
  render() { 
    return ( 
      <div className="App">
        { this.state.countries.map( country => 
        <Country 
        key={ country.id}
        id={ country.id }
        onIncremnt={ this.IncrementGold}
        name={country.name}
        gold={ country.gold}
         />)}
      </div>
     );
  }
}
 
export default App;
