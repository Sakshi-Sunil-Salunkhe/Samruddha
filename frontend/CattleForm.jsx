import React, { useState } from 'react';
import axios from 'axios';

export default function CattleForm({ farmerId }) {
  const [cattleId, setCattleId] = useState('');
  const [breed, setBreed] = useState('');
  const [age, setAge] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post(`${process.env.REACT_APP_API_URL}/api/cattle`, {
      farmerId,
      cattleId,
      age,
      breed
    });
    window.location.href = '/dashboard';
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register New Cattle</h2>
      <input value={cattleId} onChange={e => setCattleId(e.target.value)} placeholder="Cattle ID" required />
      <input value={breed} onChange={e => setBreed(e.target.value)} placeholder="Breed" required />
      <input value={age} onChange={e => setAge(e.target.value)} placeholder="Age" required />
      <button type="submit">Register</button>
    </form>
  );
}
