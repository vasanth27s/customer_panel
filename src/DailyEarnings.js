import React, { useState } from 'react';
import './DailyEarnings.css'; // Import the CSS file

const DailyEarnings = () => {
  const [earnings, setEarnings] = useState('$0.00');

  // Function to generate a random earnings amount
  const getRandomEarnings = () => {
    return (Math.random() * 100).toFixed(2);
  };

  const updateEarnings = () => {
    setEarnings(`$${getRandomEarnings()}`);
  };

  return (
    <div className="container">
      <h1>Daily Earnings</h1>
      <div className="earnings">
        <p>Total Earnings Today:</p>
        <p id="earningsAmount">{earnings}</p>
      </div>
      <button id="updateButton" onClick={updateEarnings}>Update Earnings</button>
    </div>
  );
};

export default DailyEarnings;
