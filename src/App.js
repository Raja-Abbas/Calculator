import React, { useState } from 'react';
import './App.css';

function App() {
  // Initialize state for the calculator input
  const [input, setInput] = useState('');

  // Function to handle button clicks
  const handleButtonClick = (buttonText) => {
    if (buttonText === '=') {
      try {
        // Evaluate the input and set the result
        setInput(eval(input));
      } catch (error) {
        // Handle errors, e.g., divide by zero
        setInput('Error');
      }
    } else if (buttonText === 'AC') {
      // Clear the input
      setInput('');
    } else if (buttonText === 'DEL') {
      // Delete the last character
      setInput(input.slice(0, -1));
    } else {
      // Append the clicked button's text to the input
      setInput(input + buttonText);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="calculator">
          <input type="text" id="inputBox" value={input} placeholder="0" readOnly />
          <div>
            {/* Add click event handlers for buttons */}
            <button className="button operator" onClick={() => handleButtonClick('AC')}>AC</button>
            <button className="button operator" onClick={() => handleButtonClick('DEL')}>DEL</button>
            <button className="button operator" onClick={() => handleButtonClick('%')}>%</button>
            <button className="button operator" onClick={() => handleButtonClick('/')}>/</button>
          </div>
          <div>
            <button className="button" onClick={() => handleButtonClick('7')}>7</button>
            <button className="button" onClick={() => handleButtonClick('8')}>8</button>
            <button className="button" onClick={() => handleButtonClick('9')}>9</button>
            <button className="button operator" onClick={() => handleButtonClick('*')}>*</button>
          </div>
          <div>
            <button className="button" onClick={() => handleButtonClick('4')}>4</button>
            <button className="button" onClick={() => handleButtonClick('5')}>5</button>
            <button className="button" onClick={() => handleButtonClick('6')}>6</button>
            <button className="button operator" onClick={() => handleButtonClick('-')}>-</button>
          </div>
          <div>
            <button className="button" onClick={() => handleButtonClick('1')}>1</button>
            <button className="button" onClick={() => handleButtonClick('2')}>2</button>
            <button className="button" onClick={() => handleButtonClick('3')}>3</button>
            <button className="button operator" onClick={() => handleButtonClick('+')}>+</button>
          </div>
          <div>
            <button className="button" onClick={() => handleButtonClick('00')}>00</button>
            <button className="button" onClick={() => handleButtonClick('0')}>0</button>
            <button className="button" onClick={() => handleButtonClick('.')}>.</button>
            <button className="button equalBtn" onClick={() => handleButtonClick('=')}>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
