import React from "react";
import Button from "./Button";

const ButtonPanel = ({ onButtonClick, onClear, onDelete, onEqual, onMemory }) => {
  const buttons = [
    ["AC", "DEL", "(", ")"],
    ["7", "8", "9", "/"],
    ["4", "5", "6", "*"],
    ["1", "2", "3", "-"],
    ["0", ".", "^", "+"],
    ["sin", "cos", "tan", "sqrt"],
    ["log", "ln", "pi", "="],
    ["M+", "M-", "MR", "Deg/Rad"]
  ];

  return (
    <div className="buttons">
      {buttons.flat().map((btn, index) => {
        if (btn === "AC") return <Button key={index} value={btn} onClick={onClear} className="btn-ac" />;
        if (btn === "DEL") return <Button key={index} value={btn} onClick={onDelete} className="btn-del" />;
        if (btn === "=") return <Button key={index} value={btn} onClick={onEqual} className="btn-equal" />;
        if (["M+", "M-", "MR", "Deg/Rad"].includes(btn))
          return <Button key={index} value={btn} onClick={onMemory} className="btn-mem" />;
        return <Button key={index} value={btn} onClick={onButtonClick} />;
      })}
    </div>
  );
};

export default ButtonPanel;
