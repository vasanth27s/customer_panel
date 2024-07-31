import React, { useState } from 'react';
import './LevelIncomePage.css'; // Import the CSS file

const LevelIncomePage = () => {
  const [isTransferInfoVisible, setTransferInfoVisible] = useState(false);
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [conditionText, setConditionText] = useState('');
  const [balanceCoins] = useState(1000); // Example balance

  const showTransferInfo = () => {
    setTransferInfoVisible(!isTransferInfoVisible);
  };

  const viewLevelInfo = (level) => {
    alert(`Viewing information for level ${level}.`);
  };

  const checkEligibility = (level, minimumFCTC, requiredReferrals) => {
    const directReferrals = prompt(`Enter number of direct referrals for level ${level}`);

    if (balanceCoins >= minimumFCTC && directReferrals >= requiredReferrals) {
      window.location.href = "withdraw.html"; // Redirect to the withdraw page
    } else {
      let conditions = `To withdraw from ${level} Level, you need:\n`;
      conditions += `- Minimum ${minimumFCTC} FCTC in your wallet.\n`;
      conditions += `- At least ${requiredReferrals} Direct Referrals.`;

      setConditionText(conditions);
      setPopupVisible(true);
    }
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (
    <div className="container">
      <img src="fctc.png" alt="Logo" className="logo" />
      <h1>Level Income Page</h1>

      <div className="section">
        <p><span id="balance-coins">{balanceCoins}</span></p>
        <button className="btn" onClick={showTransferInfo}>Transfer</button>
        {isTransferInfoVisible && (
          <div id="transfer-info" className="transfer-info">
            <table>
              <thead>
                <tr>
                  <th>Level</th>
                  <th>Minimum FCTC</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1st Level</td>
                  <td>10,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(1, 10000, 2)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(1)}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>2nd Level</td>
                  <td>30,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(2, 30000, 3)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(2)}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>3rd Level</td>
                  <td>50,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(3, 50000, 4)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(3)}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>4th Level</td>
                  <td>75,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(4, 75000, 5)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(4)}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>5th Level</td>
                  <td>1,50,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(5, 150000, 6)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(5)}>View</button>
                  </td>
                </tr>
                <tr>
                  <td>6th Level</td>
                  <td>3,00,000 FCTC</td>
                  <td>
                    <button className="withdraw-btn" onClick={() => checkEligibility(6, 300000, 7)}>Transfer Wallet</button>
                    <button className="view-btn" onClick={() => viewLevelInfo(6)}>View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>

      {isPopupVisible && (
        <>
          <div className="overlay"></div>
          <div className="popup">
            <h2>Conditions Not Met</h2>
            <p>{conditionText}</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LevelIncomePage;
