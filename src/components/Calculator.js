import React, { Component } from 'react';
import './Calculator.css';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <section className="calulator">
          <input type="text" className="number-input" defaultValue="0" />
          <div className="calc-button-holder">
            <button type="button" className="calc-button">AC</button>
            <button type="button" className="calc-button">+/-</button>
            <button type="button" className="calc-button">%</button>
            <button type="button" className="calc-button orange">&divide;</button>
            <button type="button" className="calc-button">7</button>
            <button type="button" className="calc-button">8</button>
            <button type="button" className="calc-button">9</button>
            <button type="button" className="calc-button orange">x</button>
            <button type="button" className="calc-button">4</button>
            <button type="button" className="calc-button">5</button>
            <button type="button" className="calc-button">6</button>
            <button type="button" className="calc-button orange">-</button>
            <button type="button" className="calc-button">1</button>
            <button type="button" className="calc-button">2</button>
            <button type="button" className="calc-button">3</button>
            <button type="button" className="calc-button orange">+</button>
            <button type="button" className="calc-button span-2">0</button>
            <button type="button" className="calc-button">.</button>
            <button type="button" className="calc-button orange">=</button>
          </div>
        </section>
      </div>
    );
  }
}
