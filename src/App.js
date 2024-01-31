// Repository:  react-basic-concepts
// Author:      Rodolfo Carmen
// Version:     1.xx
import React, { Component } from 'react';
import './App.css';
import Country from './components/Country';


class App extends Component {
  state = {
    countries: [
      { id: 1, name: 'United States', gold: 2, silver: 1, bronze: 1 },
      { id: 2, name: 'China', gold: 3, silver: 1, bronze: 1 },
      { id: 3, name: 'Germany', gold: 0, silver: 1, bronze: 1 },
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
  IncrementSilver = (countryId) => {
    const countriesMutable = [...this.state.countries];

    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    countriesMutable[idx].silver += 1;

    this.setState({ countries:countriesMutable });
  }
  DecrementSilver = (countryId) => {
    const updatedCountries = this.state.countries.map((country) => {
      if (country.id === countryId) {
        return { ...country, silver: country.silver - 1 };
      }
      return country
    });
    this.setState({countries: updatedCountries})
  }
  IncrementBronze = (countryId) => {
    const countriesMutable = [...this.state.countries];

    const idx = countriesMutable.findIndex((c) => c.id === countryId);

    countriesMutable[idx].bronze += 1;

    this.setState({ countries:countriesMutable });
  }
  DecrementBronze = (countryId) => {
    const updatedCountries = this.state.countries.map((country) => {
      if (country.id === countryId) {
        return { ...country, bronze: country.bronze - 1 };
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
        onGoldIncremnt={ this.IncrementGold}
        onGoldDecremnt={ this.DecrementGold}
        onSilverIncremnt={ this.IncrementSilver}
        onSilverDecremnt={ this.DecrementSilver}
        onBronzeIncremnt={ this.IncrementBronze}
        onBronzeDecremnt={ this.DecrementBronze}
        name={country.name}
        gold={ country.gold}
        silver={ country.silver}
        bronze={ country.bronze}
         />)}
      </div>
     );
  }
}
 
export default App;
