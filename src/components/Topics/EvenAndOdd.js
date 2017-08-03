import React, { Component } from 'react';

class EvenAndOdd extends Component {

    constructor(){
        super();
        this.state = {
            headerText: "Even and Odd",
            oddStr: "",
            evenStr: "",
            value: "1,2,3,4",
        }
        this.handleChange = this.handleChange.bind(this);
        this.splitString = this.splitString.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    splitString (){
        let arr = this.state.value.split(",");
        let oddArr = [];
        let evenArr = [];
        for (let i=0;i<arr.length;i++){
            if (arr[i]%2 === 0) {
                evenArr.push(arr[i]);
            }
            else oddArr.push(arr[i]);
        }
        this.setState({
            oddStr: oddArr,
            evenStr: evenArr
        });
    }

    render(){
        return (
            <div className="puzzleBox evenAndOddPB">
                <h4>{ this.state.headerText }</h4>
                <input className="inputLine" type="text" value={ this.state.value } onChange={this.handleChange} ></input>
                <button className="confirmationButton" onClick={ () => this.splitString(this.state.value) }>Split Up!</button>
                <span className="resultsBox">{ "Odd Numbers: " + this.state.oddStr  + "  "}  </span>
                <span className="resultsBox">{ "Even Numbers: " + this.state.evenStr + " "}</span>
            </div>

        );
    }
}

export default EvenAndOdd;