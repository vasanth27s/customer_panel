import React, { useState } from 'react';
import './DailyIntroducerReward.css';

const DailyIntroducerReward = () => {
  const [stakeAmount, setStakeAmount] = useState('');
  const [reward, setReward] = useState(null);
  const [dailyEarnings, setDailyEarnings] = useState(0);

  const calculateReward = () => {
    const amount = parseFloat(stakeAmount);
    if (isNaN(amount) || amount <= 0) {
      setReward('Please enter a valid amount.');
      return;
    }
    const calculatedReward = (amount * 0.05).toFixed(2);
    setDailyEarnings((prev) => (prev + parseFloat(calculatedReward)).toFixed(2));
    setReward(`Introducer Reward: ${calculatedReward} tokens`);
  };

  return (
    <div className="container">
      <h1>Daily Introducer Reward</h1>
      <div className="input-group">
        <label htmlFor="stakeAmount">Enter Amount Staked:</label>
        <input
          type="number"
          id="stakeAmount"
          placeholder="Enter amount in tokens"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
        />
      </div>
      <button className="button" onClick={calculateReward}>Calculate Reward</button>
      {reward && <div className="result">{reward}</div>}
      {dailyEarnings > 0 && (
        <div className="daily-earnings">
          Total Daily Earnings: {dailyEarnings} tokens
        </div>
      )}
    </div>
  );
};

export default DailyIntroducerReward;
