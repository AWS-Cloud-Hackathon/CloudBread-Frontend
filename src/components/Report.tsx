import React, { useState } from 'react';
import axios from 'axios';
import './Report.css';

const ReportPage: React.FC = () => {
  const [location, setLocation] = useState<{
    latitude: number | null;
    longitude: number | null;
    address: string;
  }>({
    latitude: null,
    longitude: null,
    address: '',
  });

  const [selectedReportType, setSelectedReportType] = useState<string>('사고');
  const [customReport, setCustomReport] = useState<string>('');

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        // 위도와 경도 설정
        setLocation({ latitude, longitude, address: '' });

        // Nominatim API를 사용하여 도로명 주소를 가져오기
        try {
          const response = await axios.get(`https://nominatim.openstreetmap.org/reverse`, {
            params: {
              lat: latitude,
              lon: longitude,
              format: 'json',
            },
          });

          const address = response.data.display_name;
          setLocation({ latitude, longitude, address });
        } catch (error) {
          console.error('Error fetching address:', error);
        }
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  const handleReportTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedReportType(event.target.value);
    if (event.target.value !== '기타') {
      setCustomReport(''); // 기타가 아닐 경우 입력 필드를 초기화
    }
  };

  return (
    <div className="report-container">
      <h1>차량 신고</h1>
      <div className="section">
        <button className="get-location-btn" onClick={handleGetLocation}>
          위치 가져오기
        </button>
        {location.latitude && location.longitude && (
          <p>
            <strong>위치 정보:</strong> 위도: {location.latitude}, 경도: {location.longitude}
          </p>
        )}
        {location.address && (
          <p><strong>도로명 주소:</strong> {location.address}</p>
        )}
      </div>

      <div className="section">
        <h2>사진 및 동영상 등록</h2>
        <input type="file" />
      </div>

      <div className="section">
        <h2>신고 내용</h2>
        <select value={selectedReportType} onChange={handleReportTypeChange}>
          <option value="사고">사고</option>
          <option value="과속">과속</option>
          <option value="신호 위반">신호 위반</option>
          <option value="주차 금지">주차 금지</option>
          <option value="기타">기타</option>
        </select>
        {selectedReportType === '기타' && (
          <input
            type="text"
            placeholder="기타 내용을 입력해 주세요."
            value={customReport}
            onChange={(e) => setCustomReport(e.target.value)}
          />
        )}
      </div>

      <button className="submit-btn">신고하기</button>
    </div>
  );
};

export default ReportPage;
