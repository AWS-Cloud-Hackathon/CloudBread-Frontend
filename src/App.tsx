import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import MapView from './components/MapView';
import EventLog from './components/EventLog';
import Settings from './components/Settings';
import Report from './components/Report';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/map" element={<MapView />} />
        <Route path="/event-log" element={<EventLog />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
};

export default App;
