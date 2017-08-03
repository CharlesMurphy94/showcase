import React, { Component } from 'react';

class FilterString extends Component {
    constructor(){
        super();
        this.state = {
          unFilteredArray: ["Bears ", "Beats ", "Battlestar Galactica "],
          userInput: "",
          filteredArray: []

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleButton = this.handleButton.bind(this);
    }

    handleChange(event){
        this.setState({userInput: event.target.value});
    }

    handleButton(event){
        console.log('clicked!')
        let og = this.state.unFilteredArray;
        let search = this.state.userInput;
        let found = [];
        for (let i=0;i<og.length;i++){
            if (og[i].toLowerCase().includes(search)){
                found.push(og[i]);
                console.log(found)
            }
        }
        this.setState({
            filteredArray: found
        });
    }

    render(){
        return (
            <div className="puzzleBox filterStringPB">
              <h4>Filter String</h4>
              <span className="puzzleText">Locations:{this.state.unFilteredArray}</span>
              <input className="inputLine" type="text" placeholder="Enter Search Term" value={ this.state.userInput } onChange={ this.handleChange }></input>
              <button className="confirmationButton" onClick={ this. handleButton}>Search</button>
              <span className="resultsBox filterStringRB"> Matches: {this.state.filteredArray}</span>
            </div>

        );
    }
}

export default FilterString;
