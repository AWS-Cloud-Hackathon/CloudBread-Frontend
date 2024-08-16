import React, { useState } from 'react';
import './EventLog.css';

interface EventLogItem {
  id: number;
  vehicleInfo: string;
  time: string;
  location: string;
  description: string;
}

// 예시 데이터
const initialEventLogData: EventLogItem[] = [
  { id: 1, vehicleInfo: '차량 1: 흰색 SUV', time: '2024-08-01 10:00', location: '서울시 강남구', description: '과속' },
  { id: 2, vehicleInfo: '차량 2: 검은색 세단', time: '2024-08-02 11:30', location: '서울시 중구', description: '사고' },
  { id: 3, vehicleInfo: '차량 3: 회색 트럭', time: '2024-08-03 14:00', location: '서울시 서초구', description: '신호 위반' },
  // 추가 데이터
];

const EventLog: React.FC = () => {
  const [eventLogData, setEventLogData] = useState(initialEventLogData);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortType, setSortType] = useState<'time' | 'vehicleInfo'>('time');

  const handleSearch = () => {
    const filteredData = initialEventLogData.filter((event) =>
      event.vehicleInfo.includes(searchQuery) ||
      event.location.includes(searchQuery) ||
      event.description.includes(searchQuery)
    );
    setEventLogData(filteredData);
  };

  const handleSort = (sortKey: 'time' | 'vehicleInfo') => {
    const sortedData = [...eventLogData].sort((a, b) => {
      if (a[sortKey] < b[sortKey]) return -1;
      if (a[sortKey] > b[sortKey]) return 1;
      return 0;
    });
    setSortType(sortKey);
    setEventLogData(sortedData);
  };

  return (
    <div className="event-log-container">
      <div className="search-sort-bar">
        <input
          type="text"
          placeholder="차량 정보, 위치, 설명으로 검색"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
        <div className="sort-options">
          <button onClick={() => handleSort('time')} className={sortType === 'time' ? 'active' : ''}>
            시간순 정렬
          </button>
          <button onClick={() => handleSort('vehicleInfo')} className={sortType === 'vehicleInfo' ? 'active' : ''}>
            차량 정보순 정렬
          </button>
        </div>
      </div>
      <ul className="event-log-list">
        {eventLogData.map((event) => (
          <li key={event.id} className="event-log-item">
            <strong>차량 정보:</strong> {event.vehicleInfo} <br />
            <strong>시간:</strong> {event.time} <br />
            <strong>위치:</strong> {event.location} <br />
            <strong>설명:</strong> {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventLog;