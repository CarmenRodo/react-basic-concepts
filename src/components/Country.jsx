import React, {Component} from "react";

class Country extends Component {
    state = {
        name: this.props.name,
        gold: this.props.gold,
        silver: this.props.silver,
        bronze: this.props.bronze
    }
    render(){
        // console.log(this.props);
        return (
            <div>
                <div className="CountryName" > {this.props.name}</div>
                <div>Gold Medals: {this.props.gold} 
                <button variant="contained" className="incrementButton" onClick={ () => this.props.onGoldIncremnt(this.props.id)}> + </button>
                {this.props.gold > 0 
                ? <button variant="contained" className="decrementButton" onClick={ () => this.props.onGoldDecremnt(this.props.id)}> - </button>
                : <button disabled variant="contained" className="decrementButton" onClick={ () => this.props.onGoldDecremnt(this.props.id)}> - </button>
                }  
                </div>
                <div>Silver Medals: {this.props.silver} 
                <button variant="contained" className="incrementButton" onClick={ () => this.props.onSilverIncremnt(this.props.id)}> + </button>
                {this.props.silver > 0 
                ? <button variant="contained" className="decrementButton" onClick={ () => this.props.onSilverDecremnt(this.props.id)}> - </button>
                : <button disabled variant="contained" className="decrementButton" onClick={ () => this.props.onSilverDecremnt(this.props.id)}> - </button>
                }  
                </div>
                <div>Bronze Medals: {this.props.bronze} 
                <button variant="contained" className="incrementButton" onClick={ () => this.props.onBronzeIncremnt(this.props.id)}> + </button>
                {this.props.bronze > 0 
                ? <button variant="contained" className="decrementButton" onClick={ () => this.props.onBronzeDecremnt(this.props.id)}> - </button>
                : <button disabled variant="contained" className="decrementButton" onClick={ () => this.props.onBronzeDecremnt(this.props.id)}> - </button>
                }  
                </div>
                <hr/>
            </div>
        )
    }
}

export default Country