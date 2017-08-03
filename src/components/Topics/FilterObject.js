import React, { Component } from 'react';

class FilterObject extends Component {
    constructor(){
        super();
        this.state = {
            headerText: "Filter Object",
            unFilteredArray: [
                {make: "ford", model: "focus"},
                {make: "porsche", model: "911"},
                {make: "nissan", model: "gtr"}
            ],
            userInput: '',
            filteredArray: [],
        }
        this.handleChange = this.handleChange.bind(this);
        this.filterArray = this.filterArray.bind(this);
    }

    handleChange(event) {this.setState({userInput: event.target.value})};
    
    filterArray(prop) {
        var original = this.state.unFilteredArray;
        var filtered = [];
        
        for (var i=0;i<original.length;i++){
            if (original[i].hasOwnProperty(prop)) {
                filtered.push(original[i]);
            }
        }
        this.setState({
            filteredArray: filtered
        });

    }


    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>    { this.state.headerText }</h4>
                <span   className="puzzleText"> Cars: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
                <input  className="inputLine" type="text" placeholder="enter a property" value={ this.state.UserInput } onChange={ this.handleChange }></input>
                <button className="confirmationButton" onClick={ () => this.filterArray(this.state.userInput) }> Filter </button>
                <span   className="resultsBox filterObjectRB">{JSON.stringify(this.state.filteredArray, null, 10)}</span>
            </div>

        );
    }
}

export default FilterObject;