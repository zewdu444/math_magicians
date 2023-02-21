import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const calculatorHandler = (e) => {
    setState((state) => (calculate(state, e.target.textContent)));
  };
  const { total, operation, next } = state;
  return (
    <div className="grid_container">
      <div className="col-one">
        <h4>Lets do some math!</h4>
      </div>

      <div className="col-two">
        <section className="calulator">
          <div className="number-input">
            {total}
            {operation}
            {next}
          </div>
          <div className="calc-button-holder">
            <button type="button" className="calc-button" onClick={calculatorHandler}>AC</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>+/-</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>%</button>
            <button type="button" className="calc-button orange" onClick={calculatorHandler}>&divide;</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>7</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>8</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>9</button>
            <button type="button" className="calc-button orange" onClick={calculatorHandler}>x</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>4</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>5</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>6</button>
            <button type="button" className="calc-button orange" onClick={calculatorHandler}>-</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>1</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>2</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>3</button>
            <button type="button" className="calc-button orange" onClick={calculatorHandler}>+</button>
            <button type="button" className="calc-button span-2" onClick={calculatorHandler}>0</button>
            <button type="button" className="calc-button" onClick={calculatorHandler}>.</button>
            <button type="button" className="calc-button orange" onClick={calculatorHandler}>=</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Calculator;
