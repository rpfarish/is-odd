import { useState } from "react";
import "./App.css";

function App() {
  const [inputNumber, setInputNumber] = useState(0);
  const [result, setResult] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [displayNumber, setDisplayNumber] = useState<number>(0);

  const isOdd = (num: number): string => {
    return num % 2 === 1 ? "odd" : "even";
  };

  const handleCheck = () => {
    const newNumber = isOdd(inputNumber);
    setResult(newNumber);
    setShowResult(true);
    setDisplayNumber(inputNumber);
  };
  const handleInputEnter = (e: any) => {
    if (e.key === "Enter") handleCheck();
    console.log(e);
  };

  return (
    <>
      <div className="app-container">
        <div className="card">
          <h1>Is It Odd?</h1>
          <div className="input-group">
            <input
              type="form"
              id="num-input"
              name="num-input"
              className="num-input"
              value={inputNumber}
              onChange={(e) => {
                setInputNumber(parseInt(e.target.value) || 0);
              }}
              onKeyDown={handleInputEnter}
            />
            <button className="check-button" onClick={handleCheck}>
              Check!
            </button>
          </div>

          {result && (
            <div className={`result ${showResult ? "show" : "hide"}`}>
              <p>
                The number <span className="input-value">{displayNumber}</span>{" "}
                is:
              </p>
              <span className={`result-value ${result}`}>{result}</span>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
