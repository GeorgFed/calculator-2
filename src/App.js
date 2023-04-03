import React, { Component } from 'react';
import './style.css';

import CalculatorBodyComponent from './components/Calculator';

class App extends Component {
  state = {
    result: ""
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    }

    else if (button === "Clear") {
      this.reset();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  };

  calculate = () => {
    var checkResult = ''
    if (this.state.result.includes('--') || this.state.result.includes('++')) {
      while (this.state.result.includes('--')|| this.state.result.includes('++'))  {
        console.log(this.state.result);
        this.state.result = this.state.result.replace('--', '+')
        this.state.result = this.state.result.replace('++', '+')
      }
    }
    checkResult = this.state.result;

    try {
      this.setState({
        result: (eval(checkResult) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  render() {
    return (
        <CalculatorBodyComponent result={this.state.result} onClick={this.onClick} />
    );
  }
}

export default App;
