import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Dashboard({ farmerId }) {
  const [cattleList, setCattleList] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/cattle/${farmerId}`).then(res => {
      setCattleList(res.data);
    });
  }, [farmerId]);

  return (
    <div>
      <h2>Your Cattle</h2>
      <ul>
        {cattleList.map(cattle => (
          <li key={cattle.id}>
            {cattle.cattleId} - {cattle.breed} - Age: {cattle.age}
            <a href={`/cattle/${cattle.id}`}>View</a>
          </li>
        ))}
      </ul>
      <a href="/cattle/new">Register New Cattle</a>
    </div>
  );
}