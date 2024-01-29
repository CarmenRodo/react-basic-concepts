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
    const countriesMutable = [...this.state.countries];

    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    countriesMutable[idx].gold += 1;

    this.setState({ countries:countriesMutable });
  }
  DecrementGold = (countryId) => {
    const updatedCountries = this.state.countries.map((country) => {
      if (country.id === countryId) {
        return { ...country, gold: country.gold - 1 };
      }
      return country
    });
    this.setState({countries: updatedCountries})
  }
  render() {
    return ( 
      <div className="App">
        { this.state.countries.map( country => 
        <Country 
        key={ country.id}
        id={ country.id }
        onIncremnt={ this.IncrementGold}
        onDecremnt={ this.DecrementGold}
        name={country.name}
        gold={ country.gold}
         />)}
      </div>
     );
  }
}
 
export default App;
