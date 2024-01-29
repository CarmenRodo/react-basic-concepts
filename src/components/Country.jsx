import React, {Component} from "react";

class Country extends Component {
    state = {
        name: this.props.name,
        gold: this.props.gold,
    }
    render(){
        // console.log(this.props);
        return (
            <div>
                <div className="CountryName" > {this.props.name}</div>
                <div>Gold Medals: {this.props.gold} 
                <button variant="contained" className="incrementButton" onClick={ () => this.props.onIncremnt(this.props.id)}> + </button>
                {this.props.gold > 0 
                ? <button variant="contained" className="decrementButton" onClick={ () => this.props.onDecremnt(this.props.id)}> - </button>
                : <button disabled variant="contained" className="decrementButton" onClick={ () => this.props.onDecremnt(this.props.id)}> - </button>
                }  
                </div>
                <hr/>
            </div>
        )
    }
}

export default Country