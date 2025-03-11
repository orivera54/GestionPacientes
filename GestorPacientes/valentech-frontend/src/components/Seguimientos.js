import React from 'react';
import AddFollowup from './AddFollowup';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserPlus, faListAlt } from '@fortawesome/free-solid-svg-icons';



library.add(faUserPlus, faListAlt);

const App = () => {
  return (
    <div className="App">
      <h1>Gestión de Seguimiento</h1>
      <AddFollowup />
    </div>
  );
};

export default App;