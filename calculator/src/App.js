import React from 'react';
import './App.css';
import NumberButton from './Components/NumberButton';
import OperatorButton from './Components/OperatorButton';
import Display from './Components/Display';
import * as math from 'mathjs';
import fire from './fire';
import EquationDisplay from './Components/EquationDisplay';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { 
      input: "",
      hasCalculated: false,
      equations: []
     };
  }

  componentDidMount(){
    let equationsRef = fire.database().ref('equations').orderByKey().limitToLast(10);
    equationsRef.on('child_added', snapshot => {
      // let equation = { text: snapshot.val(), id: snapshot.key };
      this.setState({ equations: equationsRef.orderByKey().limitToLast(10)});
    })
  }

  enterInput = val => {
    
    if ((val === "÷" && this.state.input === "") ||
    (val === "x" && this.state.input === "") ||
    (val === "+" && this.state.input === "") ||
    (val === "-" && this.state.input === "") ||
    (val === "." && this.state.input === ".")){
      return;
    } else if ((this.state.hasCalculated && val === "9") ||
    (this.state.hasCalculated && val === "8") ||
    (this.state.hasCalculated && val === "7") ||
    (this.state.hasCalculated && val === "6") ||
    (this.state.hasCalculated && val === "5") ||
    (this.state.hasCalculated && val === "4") ||
    (this.state.hasCalculated && val === "3") ||
    (this.state.hasCalculated && val === "2") ||
    (this.state.hasCalculated && val === "1") ||
    (this.state.hasCalculated && val === "0")
    ){
      return;
    }
    else {
    this.setState({ input: this.state.input + val, hasCalculated: false});
    }
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

    if (this.state.input !== "") {
      let currentInput = this.state.input;
      let evalResult;
      let equation;

      if (currentInput.includes("÷")) {
        currentInput = currentInput.replace("÷", "/");
      } else if (currentInput.includes("x")){
        currentInput = currentInput.replace("x", "*");
      }
      evalResult = math.evaluate(currentInput);
      equation = currentInput + " = " + evalResult;

      fire.database().ref('equations').push(equation);
      this.setState({ input: evalResult, hasCalculated: true});
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
        <div className="row">
          <EquationDisplay equations={this.state.equations}></EquationDisplay>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
