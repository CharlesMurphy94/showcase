import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state = {
            userInput: '',
            palindrome: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(event){
        this.setState({userInput: event.target.value});
    }

    handleClick(){
        var backwards = [];
        var original = this.state.userInput.split('');
        for (var i=original.length-1; i>=0; i--){
            backwards.push(original[i]);
        }
        console.log(backwards);
        console.log(original)
        this.setState(backwards.join('') === original.join('') ? {palindrome: 'true'} : {palindrome: 'false'})
    }
    render(){
        return (
            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>
                <input className="inputLine" placeholder="try a word" onChange={this.handleChange}></input>
                <button className="confirmationButton" onClick={this.handleClick}>Check Palindrome</button>
                <span className="resultsBox">{this.state.palindrome}</span>


            </div>

        );
    }
}

export default Palindrome;