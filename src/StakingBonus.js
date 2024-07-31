// src/StakingCards.js

import React from 'react';
import './StakingBonus.css';

const StakingCards = () => {
  const stakingPlans = [
    { days: 200, bonus: '0.10%', image: 'C:/Users/mohan/sample-app/src/fctc.png' },
    { days: 400, bonus: '0.20%', image: 'C:/Users/mohan/sample-app/src/fctc.png' },
    { days: 800, bonus: '0.25%', image: 'C:/Users/mohan/sample-app/src/fctc.png' },
    { days: 1200, bonus: '0.30%', image: 'C:/Users/mohan/sample-app/src/fctc.png' },
  ];

  return (
    <div className="staking-cards-container">
      <h1 className="title">FCTCTOKEN</h1>
      <div className="cards-wrapper">
        {stakingPlans.map((plan, index) => (
          <div key={index} className="staking-card">
            <img src={plan.image} alt={`Plan ${index + 1}`} className="staking-image" />
            <p>{plan.days} Days Staking</p>
            <p>Staking Bonus {plan.bonus} Daily</p>
            <button className="stake-button">Stake Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StakingCards;
