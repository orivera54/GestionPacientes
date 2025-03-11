import React, { useEffect, useState } from 'react';
import api from '../api/api';
import FollowupList from './FollowupList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    api.get('/Patients')
      .then(response => setPatients(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2><FontAwesomeIcon icon="list-alt" /> Lista de Pacientes</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <span><strong>{patient.name}</strong> - {patient.disease}</span>
            <FollowupList patientId={patient.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
