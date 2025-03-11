import React, { useState } from 'react';
import api from '../api/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './AddPatient.css';

const AddPatient = () => {
  const [patient, setPatient] = useState({
    id: 0,
    name: '',
    email: '',
    contactNumber: '',
    disease: ''
  });

  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('/Patients', patient)
      .then(response => {
        console.log('Paciente agregado:', response.data);
        setShowMessage(true); // Mostrar el mensaje
        setTimeout(() => setShowMessage(false), 3000); // Ocultar el mensaje después de 3 segundos
      })
      .catch(error => console.error(error));
    }

  return (
    <div>
      <h2><FontAwesomeIcon icon="user-plus" /> Agregar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={patient.name} onChange={handleChange} placeholder="Nombre" required />
        <input type="email" name="email" value={patient.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="contactNumber" value={patient.contactNumber} onChange={handleChange} placeholder="Número de Contacto" required />
        <input type="text" name="disease" value={patient.disease} onChange={handleChange} placeholder="Enfermedad" required />
        <button type="submit">Agregar</button>
        {showMessage && <div className="floating-message">Se guardó el paciente correctamente.</div>}
      </form>
    </div>
  );
};

export default AddPatient;
