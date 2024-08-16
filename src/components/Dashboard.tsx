import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* 실시간 카메라 피드 섹션 */}
      <div className="panel camera-feed">
        <h2>Live Camera Feed</h2>
        <div className="video-container">
          <video src="path/to/live-feed.mp4" controls autoPlay muted></video>
          {/* src에 실시간 스트림 URL 또는 비디오 파일 경로 */}
        </div>
      </div>

      {/* 알림 패널 */}
      <div className="panel notification-panel">
        <h2>Notifications</h2>
        <ul>
          <li>Notification 1: Description of the event</li>
          <li>Notification 2: Description of the event</li>
          <li>Notification 3: Description of the event</li>
          {/* 추가 알림 항목 */}
        </ul>
      </div>

      {/* 통계 섹션 */}
      <div className="panel stats-section">
        <h2>Statistics</h2>
        <div className="stats">
          <div className="stat">
            <p className="stat-title">Total Visits</p>
            <p className="stat-value">1,234</p>
          </div>
          <div className="stat">
            <p className="stat-title">Current Users</p>
            <p className="stat-value">56</p>
          </div>
          <div className="stat">
            <p className="stat-title">Alerts Triggered</p>
            <p className="stat-value">12</p>
          </div>
          {/* 추가 통계 항목 */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
