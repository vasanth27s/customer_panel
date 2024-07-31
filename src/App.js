import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './dashboard';
import MainWallet from './mainwallet';
import StakedCoins from './StackedCoins';
import StakingCards from './StakingBonus';
import DailyIntroducerReward from './DailyIntroducerReward';
import IntroducerReward from './IntroducerReward';
import DailyStakingBonus from './DailyStakingBonus';
import './dashboard';
import LevelIncomePage from './LevelIncomePage';
import DailyCommunityReward from'./DailyCommunityReward';
import DailyEarnings from'./DailyEarnings';
import TotalEarningsDashboard from './TotalEarningsDashboard';
import ComingSoon from './ComingSoon';
import UserInfo from './UserInfo';
import KycForm from './KycForm';
import ChangePassword from './ChangePassword';
import Deposit from './Deposit';
import ReferralProgram from './ReferralProgram';
import Reports from './Reports';
import Login from './Login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/withdraw" element={<MainWallet />} />
        <Route path="/Stakedcoin" element={<StakedCoins />} />
        <Route path="/stakingBonus" element={<StakingCards />} />
        <Route path="/dailyStakingBonus" element={<DailyStakingBonus />} />
        <Route path="/dailyIntroducerReward" element={<DailyIntroducerReward />} />
        <Route path="/IntroducerReward" element={<IntroducerReward />} />
        <Route path="/LevelIncomePage" element={<LevelIncomePage />} />
        <Route path="/DailyCommunityReward" element={<DailyCommunityReward />} />
        <Route path="/DailyEarnings" element={<DailyEarnings />} />
        <Route path="/TotalEarningsDashboard" element={<TotalEarningsDashboard/>} />
        <Route path="/ComingSoon" element={<ComingSoon/>} />
        <Route path="/userinfo" element={<UserInfo />} />
        <Route path="/KycForm" element={<KycForm/>} />
        <Route path="/ChangePassword" element={<ChangePassword/>} />
        <Route path="/Deposit" element={<Deposit/>} />
        <Route path="/ReferralProgram" element={<ReferralProgram/>} />
        <Route path="/Reports" element={<Reports/>} />
        <Route path="/Login" element={<Login/>} />
        {/* <Route path="/Register" component={Register} /> */}
      </Routes>
    </Router>
  );
};

export default App;
