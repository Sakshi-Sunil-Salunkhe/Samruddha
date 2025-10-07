import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CattleProfile() {
  const { id } = useParams();
  const [cattle, setCattle] = useState({});
  const [sensor, setSensor] = useState({});

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/cattle/${id}`).then(res => setCattle(res.data));
    axios.get(`${process.env.REACT_APP_API_URL}/api/sensors/${id}`).then(res => setSensor(res.data));
  }, [id]);

  return (
    <div>
      <h2>Cattle Profile</h2>
      <div>Cattle ID: {cattle.cattleId}</div>
      <div>Breed: {cattle.breed}</div>
      <div>Age: {cattle.age}</div>
      <h3>Sensor Data</h3>
      <div>Temperature: {sensor.temperature}°C</div>
      <div>Humidity: {sensor.humidity}%</div>
      <div>Threat Detected: {sensor.threat}</div>
      {cattle.healthStatus === 'critical' && (
        <div>
          <strong>Health Issue Detected! Please consult a vet.</strong>
          <a href="/vet">Consult Vet</a>
        </div>
      )}
    </div>
  );
}