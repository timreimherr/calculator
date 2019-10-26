import React from 'react';
import './App.css';
import NumberButton from './Components/NumberButton';
import OperatorButton from './Components/OperatorButton';
import Display from './Components/Display';
import * as math from 'mathjs';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      input: "",
      hasCalculated: false
     };
  }

  enterInput = val => {
    if ((val === "÷" && this.state.input === "") ||
    (val === "x" && this.state.input === "") ||
    (val === "+" && this.state.input === "") ||
    (val === "-" && this.state.input === "") ||
    (val === "." && this.state.input === ".")){
      return;
    }
    if ((this.state.hasCalculated && val !== "÷") ||
    (this.state.hasCalculated && val !== "÷") ||
    (this.state.hasCalculated && val !== "÷") ||
    (this.state.hasCalculated && val !== "÷")){
      return;
    }
    this.setState({ input: this.state.input + val});
  }
  
  enterClear = val => {
    this.setState({ input: "", hasCalculated: false});
  }

  backSpace = val => {
    if (this.state.hasCalculated){
      this.setState({ input: "", hasCalculated: false})
    }
    else{
      let currentInput = this.state.input;
      let newInput = currentInput.slice(0, -1);
      this.setState({input: newInput });  
    }
  }

  enterEqual = val => {
    let currentInput = this.state.input;
    if (this.state.input !== "") {
      if (currentInput.includes("÷")){
        currentInput = currentInput.replace("÷", "/");
        this.setState({ input: math.evaluate(currentInput), hasCalculated: true});
      } else if (currentInput.includes("x")){
        currentInput = currentInput.replace("x", "*");
        this.setState({ input: math.evaluate(currentInput), hasCalculated: true});
      }
      else{
        this.setState({ input: math.evaluate(currentInput), hasCalculated: true});
      }
    }
  }

  render() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <Display input={this.state.input}></Display>
        <div className="row">
          <OperatorButton handleClick={this.enterClear}>Clear</OperatorButton>
          <OperatorButton handleClick={this.backSpace}>Back Space</OperatorButton>
        </div>
        <div className="row">
          <NumberButton handleClick={this.enterInput}>7</NumberButton>
          <NumberButton handleClick={this.enterInput}>8</NumberButton>
          <NumberButton handleClick={this.enterInput}>9</NumberButton>
          <OperatorButton handleClick={this.enterInput}>÷</OperatorButton>
        </div>
        <div className="row">
          <NumberButton handleClick={this.enterInput}>4</NumberButton>
          <NumberButton handleClick={this.enterInput}>5</NumberButton>
          <NumberButton handleClick={this.enterInput}>6</NumberButton>
          <OperatorButton handleClick={this.enterInput}>x</OperatorButton>
        </div>
        <div className="row">
          <NumberButton handleClick={this.enterInput}>1</NumberButton>
          <NumberButton handleClick={this.enterInput}>2</NumberButton>
          <NumberButton handleClick={this.enterInput}>3</NumberButton>
          <OperatorButton handleClick={this.enterInput}>-</OperatorButton>
        </div>
        <div className="row">
          <OperatorButton handleClick={this.enterInput}>.</OperatorButton>
          <NumberButton handleClick={this.enterInput}>0</NumberButton>
          <OperatorButton handleClick={this.enterInput}>+</OperatorButton>
          <OperatorButton handleClick={this.enterEqual}>=</OperatorButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
