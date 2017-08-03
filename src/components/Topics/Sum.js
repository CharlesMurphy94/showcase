import React, { Component } from 'react';

class Sum extends Component {
    constructor(){
        super();
        this.state ={
            num1: '',
            num2: '',
            sum: 0,
        }
        this.handleChange1=this.handleChange1.bind(this)
        this.handleChange2=this.handleChange2.bind(this)
        this.add=this.add.bind(this)
    }

    handleChange1(e){
        this.setState({num1:e.target.value})
    }
    handleChange2(e){
        this.setState({num2:e.target.value})
    }
    add(){
        var total = Number(this.state.num1) + Number(this.state.num2);
        this.setState({sum: total})
    }
    render(){
        return (
            <div className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input className="inputLine" placeholder="number1" onChange={this.handleChange1}></input>
                <input className="inputLine" placeholder="number1" onChange={this.handleChange2}></input>
                <button className="confirmationButton" onClick={this.add}>Equals</button>
                <span className="resultsBox">{this.state.sum}</span>
            </div>
        );
    }
}

export default Sum;