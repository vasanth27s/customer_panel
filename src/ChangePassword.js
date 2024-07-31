import React, { useState } from 'react';
import './ChangePassword.css'; // Import the CSS file for styling

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('New passwords do not match.');
      return;
    }

    // Perform password change logic here
    // Since we're not using Firebase, this is just a placeholder
    setMessage('Password changed successfully.');
  };

  return (
    <div className="container">
      <h2>Change Password</h2>
      <form id="change-password-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="current-password">Current Password</label>
          <input
            type="password"
            id="current-password"
            name="current-password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            name="new-password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Change Password</button>
        <div className="message">{message}</div>
      </form>
    </div>
  );
};

export default ChangePassword;
