import React, { useState, useEffect } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import HistoryPanel from "./components/HistoryPanel";
import { calculate } from "./utils/calulate";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);
  const [memory, setMemory] = useState(0);
  const [trigMode, setTrigMode] = useState("RAD"); // RAD or DEG

  const handleButtonClick = (value) => {
    if (value === "pi") setInput((prev) => prev + Math.PI.toFixed(5));
    else if (["sin","cos","tan","log","ln","sqrt"].includes(value))
      setInput((prev) => prev + value + "(");
    else setInput((prev) => prev + value);
  };

  const handleClear = () => setInput("");
  const handleDelete = () => setInput((prev) => prev.slice(0, -1));
  const handleEqual = () => {
    const result = calculate(input, trigMode);
    setHistory([{ expression: input, result }, ...history]);
    setInput(result);
  };

  const handleMemory = (value) => {
    if (value === "M+") setMemory((prev) => prev + parseFloat(input || 0));
    else if (value === "M-") setMemory((prev) => prev - parseFloat(input || 0));
    else if (value === "MR") setInput((prev) => prev + memory.toString());
    else if (value === "Deg/Rad") setTrigMode(trigMode === "RAD" ? "DEG" : "RAD");
  };

  const handleHistoryClick = (expr) => {
    setInput(expr);
  };

  const handleKeyDown = (e) => {
    const { key } = e;
    if ((key >= "0" && key <= "9") || "+-*/.^()".includes(key)) setInput((prev) => prev + key);
    else if (key === "Enter") handleEqual();
    else if (key === "Backspace") handleDelete();
    else if (key === "Escape") handleClear();
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [input, history]);

  const theme = "cartoon";

  return (
    <div className={`calculator-container ${theme}`}>
      <div className="calculator">
        <Display value={input} />
        <ButtonPanel
          onButtonClick={handleButtonClick}
          onClear={handleClear}
          onDelete={handleDelete}
          onEqual={handleEqual}
          onMemory={handleMemory}
        />
      </div>
      <HistoryPanel history={history} onHistoryClick={handleHistoryClick} />
    </div>
  );
};

export default App;
