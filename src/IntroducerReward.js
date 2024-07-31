import React, { useState, useEffect } from 'react';
import './IntroducerReward.css'; // Import the CSS file

const DailyIntroducerReward = () => {
  const [dailyBonus, setDailyBonus] = useState('Loading...');

  // Function to calculate staking bonus
  const calculateStakingBonus = (days, initialAmount) => {
    const dailyBonusRates = {
      200: 0.0010, // 0.10% daily
      400: 0.0020, // 0.20% daily
      800: 0.0025, // 0.25% daily
      1200: 0.0030 // 0.30% daily
    };
    const dailyBonusRate = dailyBonusRates[days];
    if (dailyBonusRate === undefined) {
      throw new Error("Invalid number of days. Supported values are 200, 400, 800, or 1200.");
    }

    let finalAmount = initialAmount;
    for (let i = 0; i < days; i++) {
      finalAmount += finalAmount * dailyBonusRate;
    }
    return finalAmount;
  };

  // Function to fetch and display staking bonus
  const displayDailyBonus = (days, initialAmount) => {
    try {
      const bonus = calculateStakingBonus(days, initialAmount);
      setDailyBonus(`${bonus.toFixed(2)} FCTC Tokens`);
    } catch (error) {
      console.error(error);
      setDailyBonus('Error loading data');
    }
  };

  useEffect(() => {
    // Example usage: change the days and initial amount as needed
    const daysStaked = 400; // Example value: 200, 400, 800, 1200
    const initialAmount = 1000.0; // Example initial amount
    displayDailyBonus(daysStaked, initialAmount);
  }, []);

  return (
    <div className="overlay">
      <div className="container">
        <h1>Daily Introducer Reward</h1>
        <div className="info-container">
          <div className="info-box">
            <h2>Daily Staking Bonus</h2>
            <p>{dailyBonus}</p> {/* Display the dynamic data */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyIntroducerReward;
