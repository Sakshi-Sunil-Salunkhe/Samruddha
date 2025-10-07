import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LanguageSelector from './components/LanguageSelector';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import CattleForm from './components/CattleForm';
import CattleProfile from './components/CattleProfile';
import VetConsultation from './components/VetConsultation';

function App() {
  const [language, setLanguage] = useState(null);
  const [token, setToken] = useState('');
  const [farmerId, setFarmerId] = useState(null);

  if (!language) return <LanguageSelector onSelect={setLanguage} />;
  if (!token || !farmerId) return <AdminLogin setToken={setToken} setFarmerId={setFarmerId} />;

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard farmerId={farmerId} />} />
        <Route path="/cattle/new" element={<CattleForm farmerId={farmerId} />} />
        <Route path="/cattle/:id" element={<CattleProfile />} />
        <Route path="/vet" element={<VetConsultation farmerId={farmerId} />} />
        <Route path="/" element={<Dashboard farmerId={farmerId} />} />
      </Routes>
    </Router>
  );
}

export default App;