import React, { useState } from 'react';
import './TotalEarningsDashboard.css'; // Import the CSS file

const TotalEarningsDashboard = () => {
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

  const toggleHistory = () => {
    setIsHistoryVisible(!isHistoryVisible);
  };

  return (
    <div>
      <header>
        <h1>Total Earnings Dashboard</h1>
      </header>
      <div className="container">
        <div className="section">
          <h2>Total Earnings Summary</h2>
          <p><strong>Total Earnings:</strong> $[Total Amount]</p>
        </div>

        <div className="section">
          <h2>Combined Earnings Breakdown</h2>
          <p><strong>Staking Bonus:</strong> $[Staking Bonus Amount]</p>
          <p><strong>Introducer Reward:</strong> $[Introducer Reward Amount]</p>
          <p><strong>Community Reward:</strong> $[Community Reward Amount]</p>
        </div>

        <div className="section">
          <h2>Detailed Combined Earnings History</h2>
          <span className="show-history" onClick={toggleHistory}>
            {isHistoryVisible ? 'Hide History' : 'Show History'}
          </span>
          {isHistoryVisible && (
            <div id="history">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Amount ($)</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>2024-07-01</td>
                    <td>Staking Bonus</td>
                    <td>$[Amount]</td>
                    <td>Bonus from staking in July 2024.</td>
                  </tr>
                  <tr>
                    <td>2024-07-10</td>
                    <td>Introducer Reward</td>
                    <td>$[Amount]</td>
                    <td>Referral reward for user sign-up.</td>
                  </tr>
                  <tr>
                    <td>2024-07-15</td>
                    <td>Community Reward</td>
                    <td>$[Amount]</td>
                    <td>Participation reward from community events.</td>
                  </tr>
                  {/* Add more rows as needed */}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="section">
          <h2>Actions & Next Steps</h2>
          <a href="#" className="btn">View Detailed Report</a>
          <a href="#" className="btn">Manage Staking</a>
          <a href="#" className="btn">Invite More Users</a>
          <a href="#" className="btn">Engage with Community</a>
        </div>

        <div className="section">
          <h2>Support</h2>
          <p>
            If you have any questions or need assistance, please contact our support team at{' '}
            <a href="mailto:support@example.com">support@example.com</a> or visit our{' '}
            <a href="#">Help Center</a>.
          </p>
        </div>

        <div className="section">
          <h2>Disclaimer</h2>
          <p>
            The total earnings shown are subject to change based on platform policies and updates. For the most accurate information, please refer to the detailed reports provided.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalEarningsDashboard;
