import React, { useState } from 'react';
import './DailyCommunityReward.css'; // Import the CSS file

const DailyCommunityReward = () => {
  const [dailyEarnings, setDailyEarnings] = useState('');
  const [earningsList, setEarningsList] = useState([]);

  const updateEarnings = () => {
    // Get the daily earnings from the input
    const earnings = parseFloat(dailyEarnings);
    
    // Check if the input is valid
    if (isNaN(earnings) || earnings < 0) {
      alert('Please enter a valid amount of earnings.');
      return;
    }
    
    // Get today's date
    const today = new Date();
    const dateStr = today.toISOString().split('T')[0]; // Format date as YYYY-MM-DD

    // Create a new earnings entry
    const newEarnings = { date: dateStr, earnings: earnings.toFixed(2) };

    // Add the new earnings to the list
    setEarningsList([...earningsList, newEarnings]);

    // Clear the input field
    setDailyEarnings('');
  };

  return (
    <div className="container">
      <h1>Daily Community Reward</h1>
      <div className="input-group">
        <label htmlFor="dailyEarnings">Enter Daily Earnings:</label>
        <input
          type="number"
          id="dailyEarnings"
          value={dailyEarnings}
          onChange={(e) => setDailyEarnings(e.target.value)}
          placeholder="Enter earnings in tokens"
        />
      </div>
      <button className="button" onClick={updateEarnings}>Update Earnings</button>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Earnings</th>
          </tr>
        </thead>
        <tbody>
          {earningsList.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.earnings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DailyCommunityReward;
