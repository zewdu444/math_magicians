import React, { Component } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };
  }

  calculatorHandler =(e) => {
    this.setState((state) => (calculate(state, e.target.textContent)));
    return this;
  }

  render() {
    const {
      total, next, operation,
    } = this.state;
    return (
      <div className="container">
        <section className="calulator">
          <div className="number-input">
            {total}
            {operation}
            {next}
          </div>
          <div className="calc-button-holder">
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>AC</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>+/-</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>%</button>
            <button type="button" className="calc-button orange" onClick={this.calculatorHandler}>&divide;</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>7</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>8</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>9</button>
            <button type="button" className="calc-button orange" onClick={this.calculatorHandler}>x</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>4</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>5</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>6</button>
            <button type="button" className="calc-button orange" onClick={this.calculatorHandler}>-</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>1</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>2</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>3</button>
            <button type="button" className="calc-button orange" onClick={this.calculatorHandler}>+</button>
            <button type="button" className="calc-button span-2" onClick={this.calculatorHandler}>0</button>
            <button type="button" className="calc-button" onClick={this.calculatorHandler}>.</button>
            <button type="button" className="calc-button orange" onClick={this.calculatorHandler}>=</button>
          </div>
        </section>
      </div>
    );
  }
}
