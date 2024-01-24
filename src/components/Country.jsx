import React, {Component} from "react";

class Country extends Component {
    state = {
        name: "United States",
        gold: 0
    }
    handleIncrement = () => {
        this.setState(
            {gold: this.state.gold + 1}
        );
    }
    render(){
        return (
            <div>
                <div className="CountryName" > {this.state.name}</div>
                <div>Gold Medals: {this.state.gold} 
                <button variant="contained" className="incrementButton" onClick={ this.handleIncrement}> + </button>
                </div>
            </div>
        )
    }
}

export default Country