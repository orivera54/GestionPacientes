import React, { useEffect, useState } from 'react';
import api from '../api/api';

const FollowupList = ({ patientId }) => {
  const [followups, setFollowups] = useState([]);

  useEffect(() => {
    api.get(`/Followups/${patientId}`)
      .then(response => setFollowups(response.data))
      .catch(error => console.error(error));
  }, [patientId]);

  return (
    <div>
      <h3>Seguimientos</h3>
      <ul>
        {followups.map(followup => (
          <li key={followup.id}>
            {followup.note} - {new Date(followup.date).toLocaleDateString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FollowupList;
