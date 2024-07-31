import React, { useState, useEffect, useCallback } from 'react';
import './DailyStakingBonus.css';

const DailyStakingBonus = () => {
  const [bonus, setBonus] = useState('Loading...');

  const fetchDailyStakingBonus = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const bonusValue = (Math.random() * 100).toFixed(2);
        resolve(bonusValue);
      }, 1000);
    });
  };

  const updateBonus = useCallback(async () => {
    try {
      const bonus = await fetchDailyStakingBonus();
      setBonus(`$${bonus}`);
    } catch (error) {
      setBonus('Error loading bonus');
    }
  }, []); // useCallback to prevent recreation on each render

  useEffect(() => {
    updateBonus();
  }, [updateBonus]);

  return (
    <div className="container">
      <div className="card">
        <h1>Daily Staking Bonus</h1>
        <div id="bonus" className="bonus-value">{bonus}</div>
      </div>
    </div>
  );
};

export default DailyStakingBonus;
