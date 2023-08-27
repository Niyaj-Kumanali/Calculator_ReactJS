import './App.css';
import React, { useState, useEffect } from 'react';
import ResultComponent from './components/ResultComponent';
import KeyPadComponent from './components/KeyPadComponent';


export default function App() {
  const [result, setResult] = useState("");

  const handleKeyPress = event => {
    const keyPressed = event.key;

    if (keyPressed === "=" || keyPressed === "Enter") {
      event.preventDefault();
      document.activeElement.blur();
      calculate();
    } else if (keyPressed === "Escape") {
      reset();
    } else if (keyPressed === "Backspace") {
      backspace();
    } else if ("0123456789+-*/.()".includes(keyPressed)) {
      setResult(prevResult => prevResult + keyPressed);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  const onClick = button => {
    if (button === "=") {
      calculate();
    } else if (button === "C") {
      reset();
    } else if (button === "CE") {
      backspace();
    } else {
      setResult(prevResult => prevResult + button);
    }
  };

  const calculate = () => {
    try {
      let checkResult = result.replace('--', '+');
      setResult((eval(checkResult) || "") + "");
    } catch (e) {
      setResult("error");
    }
  };



  const reset = () => {
    setResult("");
  };

  const backspace = () => {
    setResult(prevResult => prevResult.slice(0, -1));
  };

  return (
    <div>
      <div className="calculator-body">
        <h1>Simple Calculator</h1>
        <ResultComponent result={result} />
        <KeyPadComponent onClick={onClick} />
      </div>
    </div>
  );
}
