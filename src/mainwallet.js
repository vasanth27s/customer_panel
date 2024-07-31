import React from 'react';
import './main.css';

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <img src="fctc.png" alt="Logo" className="logo" />
      </header>
      <div className="withdrawal-container">
        <h1 className="title">Withdraw FCTC</h1>
        <p className="minimum-withdraw">Minimum withdraw: 2000 FCTC</p>
        <form className="withdrawal-form">
          <label>
            Amount (FCTC):
            <input type="number" name="amount" placeholder="Enter amount" />
          </label>
          <label>
            Currency:
            <select name="currency">
              <option value="USDT">USDT</option>
              {/* Add more options if needed */}
            </select>
          </label>
          <label>
            Withdrawal Address:
            <input type="text" name="address" placeholder="Enter withdrawal address" />
          </label>
          <button type="submit" className="confirm-button">Confirm Withdrawal</button>
        </form>
      </div>
    </div>
  );
};

export default App;
