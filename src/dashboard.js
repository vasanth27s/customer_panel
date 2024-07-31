import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine, faCoins, faDollarSign, faFileInvoiceDollar, faSignOutAlt,
  faUser, faUserCheck, faUserPlus, faUsers, faUserTimes, faWallet
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleWalletButtonClick = () => {
    navigate('/withdraw');
  };

  const handleStakedCoinsClick = () => {
    navigate('/Stakedcoin');
  };

  const handleStakingBonusClick = () => {
    navigate('/stakingBonus');
  };

  const handleDailyStakingBonusClick = () => {
    navigate('/dailyStakingBonus');
  };

  const handleIntroducerRewardClick = () => {
    navigate('/IntroducerReward');
  };

  const handleDailyIntroducerRewardClick = () => {
    navigate('/dailyIntroducerReward');
  };

  const handleLevelIncomepageClick = () => {
    navigate('/LevelIncomepage');
  };

  const handleDailyCommunityRewardClick = () => {
    navigate('/LevelIncomepage');
  };

  const handleDailyEarningsClick = () => {
    navigate('/DailyEarnings');
  };

  const handleTotalEarningsDashboardClick = () => {
    navigate('/TotalEarningsDashboard');
  };

  const handleComingSoonClick = () => {
    navigate('/ComingSoon');
  };

  const handleProfileInfoClick = () => {
    navigate('/userinfo');
  };
  const handleKycFormClick = () => {
    navigate('/KycForm');
  };
  const handleChangePasswordClick = () => {
    navigate('/ChangePassword');
  };
  const handleDepositClick = () => {
    navigate('/Deposit');
  };
  const handleReferralProgramClick = () => {
    navigate('/ReferralProgram');
  };
  const handleReportsClick = () => {
    navigate('/Reports');
  };
  const handleLogin = () => {
    navigate('/Login');
  };

  return (
    <div className="container">
      <nav className="sidebar">
        <div className="logo">DASHBOARD</div>
        <ul className="navigation">
          <li className="profile">
            <FontAwesomeIcon icon={faUser} /> Profile
            <div className="dropdown-content">
              <a onClick={handleProfileInfoClick}>Info</a>
              <a onClick={handleKycFormClick}>KYC</a>
              <a onClick={handleChangePasswordClick}>Change Password</a>
            </div>
          </li>
          <li className="staking">
            <FontAwesomeIcon icon={faCoins} /> Staking
            <div className="dropdown-content">
              <a onClick={handleStakingBonusClick}>Staking</a>
              <p>*My Staking*</p>
            </div>
          </li>
          <li className="deposit">
            <FontAwesomeIcon icon={faWallet} /> Wallet
            <div className="dropdown-content">
              <a onClick={handleWalletButtonClick}>Withdraw</a>
              <a onClick={handleDepositClick}>Deposit</a>
            </div>
          </li>
          <li className="team">
            <FontAwesomeIcon icon={faUsers} /> Team
            <div className="dropdown-content">
              <a onClick={handleReferralProgramClick}>Referral</a>
              <a onClick={handleLevelIncomepageClick}>Level</a>
            </div>
          </li>
          <li className="report">
            <FontAwesomeIcon icon={faChartLine} /> Report
            <div className="dropdown-content">
              <a onClick={handleReportsClick}>Reports</a>
            </div>
          </li>
          <li>
            <FontAwesomeIcon icon={faSignOutAlt} /> <a onClick={handleLogin}>Logout</a>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <div className="user-info">
            <span className="user-id">FCTC</span>
            <span className="user-name">TOKEN</span>
          </div>
          <div className="wallet-info">
            <span className="wallet-balance">W-Wallet - 0.00 USD</span>
          </div>
          <div className="display-mode">
            <button className="dark-mode active"></button>
            <button className="light-mode"></button>
          </div>
        </header>
        <section className="dashboard">
          <div className="card card1">
            <FontAwesomeIcon icon={faUsers} />
            <h2>FCTC WALLET</h2>
            <h3>4000</h3>
            <button id="walletButton" className="wallet-button" onClick={handleWalletButtonClick}>Withdraw</button>
          </div>
          <div className="card card2" onClick={handleStakedCoinsClick}>
            <FontAwesomeIcon icon={faUserPlus} />
            <h2>STAKED COINS</h2>
          </div>
          <div className="card card3" onClick={handleStakingBonusClick}>
            <FontAwesomeIcon icon={faUserCheck} />
            <h2>STAKING BONUS</h2>
          </div>
          <div className="card card4" onClick={handleDailyStakingBonusClick}>
            <FontAwesomeIcon icon={faWallet} />
            <h2>Daily Staking Bonus</h2>
          </div>
          <div className="card card5" onClick={handleIntroducerRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>INTRODUCER REWARD</h2>
          </div>
          <div className="card card6" onClick={handleDailyIntroducerRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>DAILY INTRODUCER REWARD</h2>
          </div>
          <div className="card card7" onClick={handleLevelIncomepageClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Level Income Page</h2>
          </div>
          <div className="card card8" onClick={handleDailyCommunityRewardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Daily Community Reward</h2>
          </div>
          <div className="card card9" onClick={handleDailyEarningsClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Daily Earnings</h2>
          </div>
          <div className="card card10" onClick={handleTotalEarningsDashboardClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>Total Earnings</h2>
          </div>
          <div className="card card11">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
            <h2>FCTC in Koinpark Exchange</h2>
            <div className="button-container">
              <a href="https://www.koinpark.com/trade/FCTC-INR" target="_blank" rel="noopener noreferrer">FCTC/INR</a>
              <a href="https://www.koinpark.com/trade/FCTC-USDT" target="_blank" rel="noopener noreferrer">FCTC/USDT</a>
            </div>
          </div>
          <a href="https://bscscan.com/token/0x8B8E4C825B2deb7aE5fC4614A0e151bB981D3Cbe" className="card card12" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faDollarSign} />
            <h2>FCTC Bep 20 Contract</h2>
          </a>
          <div className="card card13" onClick={handleComingSoonClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>ADD USDT WALLET</h2>
          </div>
          <div className="card card14" onClick={handleComingSoonClick}>
            <FontAwesomeIcon icon={faUserTimes} />
            <h2>ADD BND WALLET</h2>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
