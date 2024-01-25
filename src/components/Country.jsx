import React, {Component} from "react";

class Country extends Component {
    state = {
        name: this.props.name,
        gold: this.props.gold,
    }
    handleIncrement = () => {
        this.setState(
            {gold: this.state.gold + 1}
        );
    }
    render(){
        console.log(this.props);
        return (
            <div>
                <div className="CountryName" > {this.state.name}</div>
                <div>Gold Medals: {this.state.gold} 
                <button variant="contained" className="incrementButton" onClick={ () => this.props.onIncremnt(this.props.id)}> + </button>
                </div>
            </div>
        )
    }
}

export default Country