import React from 'react';
import PatientList from './PatientList';
import AddPatient from './AddPatient';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';



library.add(faUserPlus, faListAlt);

const App = () => {
  return (
    <div className="App">
      <h1>Gestión de Pacientes</h1>
      <AddPatient />
      <PatientList />
    </div>
  );
};

export default App;