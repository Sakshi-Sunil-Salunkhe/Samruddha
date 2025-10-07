import React from 'react';
import axios from 'axios';

export default function VetConsultation({ farmerId }) {
  const handleConsult = async () => {
    await axios.post(`${process.env.REACT_APP_API_URL}/api/vet/consult`, { farmerId });
    alert('Consultation requested! Vet will contact you soon.');
  };

  return (
    <div>
      <h2>Consult Vet</h2>
      <button onClick={handleConsult}>Request Consultation</button>
    </div>
  );
}