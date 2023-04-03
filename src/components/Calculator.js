import React, { Component } from 'react';
import Result from './Result';
import Keyboard from './Keyboard';

class Calculator extends Component {
    render() {
        return (
            <table className="calculator">
                <tbody>
                <Result result={this.props.result} onClick={this.props.onClick} />
                <Keyboard onClick={this.props.onClick} />
                </tbody>
            </table>
        )
    }
}

export default Calculator;
