import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';

const vehicleData = [
  { id: 1, position: [37.5658, 126.9792], info: '차량 1: 상세 정보', time: '2024-08-01 10:00', description: '과속 사건' },
  { id: 2, position: [37.5765, 126.9880], info: '차량 2: 상세 정보', time: '2024-08-03 11:00', description: '사고 다발지역' },
  { id: 3, position: [37.5865, 126.9980], info: '차량 3: 상세 정보', time: '2024-08-04 12:00', description: '사고 다발지역' },
];

const getCustomIcon = (description: string) => {
  let iconUrl = '/icons/default_icon.png'; 

  if (description.includes('사고 다발지역')) {
    iconUrl = '/icons/accident_icon.png';
  } else if (description.includes('과속 사건')) {
    iconUrl = '/icons/speeding_icon.png';
  } else if (description.includes('주차 위반')) {
    iconUrl = '/icons/parking_violation_icon.png';
  }

  console.log('Icon URL:', iconUrl);

  return new L.Icon({
    iconUrl,
    iconSize: [50, 20],
    iconAnchor: [25, 20],
  });
};

const SetViewOnLoad: React.FC<{ coords: L.LatLngExpression, zoom: number }> = ({ coords, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(coords, zoom);
  }, [map, coords, zoom]);
  return null;
};

const MapView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(vehicleData);

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setFilteredData(vehicleData);
    } else {
      const queryLowerCase = searchQuery.toLowerCase();
      setFilteredData(
        vehicleData.filter((vehicle) =>
          vehicle.info.toLowerCase().includes(queryLowerCase) ||
          vehicle.description.toLowerCase().includes(queryLowerCase) ||
          vehicle.time.includes(queryLowerCase)
        )
      );
    }
  };

  return (
    <div className="map-view-container">
      <div className="map-view-header">
        <div className="search-bar">
          <input
            type="text"
            placeholder="차량 정보, 시간 또는 설명으로 검색"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch()} 
          />
          <button onClick={handleSearch}>검색</button>
        </div>
      </div>
      <div className="map-view-content">
        <div className="map-view-map">
          <MapContainer style={{ height: "80vh", width: "100%" }}>
            <SetViewOnLoad coords={filteredData[0].position as L.LatLngExpression} zoom={13} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {filteredData.map((vehicle) => (
              <Marker
                key={vehicle.id}
                position={vehicle.position as L.LatLngExpression}
                icon={getCustomIcon(vehicle.description) as any}
              />
            ))}
          </MapContainer>
        </div>
        <div className="map-view-sidebar">
          <h2>검색 결과</h2>
          <ul className="map-view-results">
            {filteredData.map((vehicle) => (
              <li key={vehicle.id}>
                <strong>{vehicle.info}</strong>
                <p>{vehicle.time}</p>
                <p>{vehicle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MapView;