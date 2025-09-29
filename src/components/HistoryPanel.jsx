import React from "react";
import "./HistoryPanel.css";

const HistoryPanel = ({ history, onHistoryClick }) => {
  return (
    <div className="history-panel">
      <h3>History</h3>
      <ul>
        {history.map((item, index) => (
          <li key={index}>
            <span onClick={() => onHistoryClick(item.expression)}>
              {item.expression} = {item.result}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPanel;
