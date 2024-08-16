import React, { useState } from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [profileName, setProfileName] = useState('');
  const [email, setEmail] = useState('');

  const handleNotificationsChange = () => {
    setNotificationsEnabled(!notificationsEnabled);
  };

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div className="settings-container">
      <div className="settings-section">
        <h2>사용자 설정</h2>
        <div className="form-group">
          <label htmlFor="profileName">이름</label>
          <input
            type="text"
            id="profileName"
            value={profileName}
            onChange={handleNameChange}
            placeholder="이름을 입력하세요" // placeholder 추가
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="이메일을 입력하세요" // placeholder 추가
          />
        </div>
      </div>

      <div className="settings-section">
        <h2>알림 설정</h2>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={notificationsEnabled}
              onChange={handleNotificationsChange}
            />
            알림 활성화
          </label>
        </div>
      </div>

      <div className="settings-section">
        <h2>디스플레이 옵션</h2>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={darkMode}
              onChange={handleDarkModeChange}
            />
            라이트 모드 사용
          </label>
        </div>
      </div>
    </div>
  );
};

export default Settings;