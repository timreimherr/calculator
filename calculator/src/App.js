import React from 'react';
import './App.css';
import NumberButton from './Components/NumberButton';
import OperatorButton from './Components/OperatorButton';
import Display from './Components/Display';



class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { input: "" };
  }

  enterInput = val => {
    this.setState({ input: this.state.input + val });
  }

  render() {
  return (
    <div className="App">
      <div className="calculator-wrapper">
        <Display input={this.state.input}></Display>
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
          <OperatorButton>+</OperatorButton>
        </div>
        <div className="row">
          <OperatorButton handleClick={this.enterInput}>.</OperatorButton>
          <NumberButton handleClick={this.enterInput}>0</NumberButton>
          <OperatorButton handleClick={this.enterInput}>+</OperatorButton>
          <OperatorButton>=</OperatorButton>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
