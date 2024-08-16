import React from 'react';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      {/* 실시간 카메라 피드 섹션 */}
      <div className="panel camera-feed">
        <h2>Live Camera Feed</h2>
        <div className="video-container">
          <video src="/videos/교통사고.mp4" controls autoPlay muted></video>
          <video src="/videos/교통사고1.mp4" controls autoPlay muted></video>
          <video src="/videos/교통사고2.mp4" controls autoPlay muted></video>
        </div>
      </div>

      {/* 알림 패널 */}
      <div className="panel notification-panel">
        <h2>Notifications</h2>
        <ul>
          <li>
            <strong>과속으로 인한 사고:</strong> 차량이 과속하다가 갑작스러운 제동으로 인해 앞차와 충돌하였습니다. <br/>
            <br/>
            위치: 부산시 해운대구. <br/>
            <small>2024-08-01 10:00</small>
          </li>
          <br/>
          <li>
            <strong>골목길 사고:</strong> 좁은 골목길에서 빠르게 진입하던 차량이 튀어나오는 차와 충돌하였습니다. <br/>
            <br/>
            위치: 서울시 종로구. <br/>
            <small>2024-08-03 11:00</small>
          </li>
          <br/>
          <li>
            <strong>고속도로 후방 충돌:</strong> 고속도로에서 뒷차가 앞차와의 안전거리를 확보하지 못해 추돌 사고가 발생했습니다. <br/>
            <br/>
            위치: 경기도 성남시. <br/>
            <small>2024-08-04 12:00</small>
          </li>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
