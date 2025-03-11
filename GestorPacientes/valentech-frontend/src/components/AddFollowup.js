import React, { useState, useEffect } from 'react';
import api from '../api/api';

const formatDateForInput = (date) => {
  const d = new Date(date);
  const pad = (n) => (n < 10 ? '0' + n : n);

  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())}T${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}Z`;
};

const AddFollowup = () => {
  const [followup, setFollowup] = useState({
    id: 0,
    patientId: 0,
    note: '',
    date: formatDateForInput(new Date().toISOString()), // Inicializamos con la fecha en UTC
  });

  const [patients, setPatients] = useState([]);
  const [selectedPatientId, setSelectedPatientId] = useState('');
  const [showMessage, setShowMessage] = useState(false); // Estado para controlar la visibilidad del mensaje
   // Estado para el mensaje de confirmación
  const [errorMessage, setErrorMessage] = useState(''); // Estado para el mensaje de error

  useEffect(() => {
    // Obtener la lista de pacientes desde el backend
    const fetchPatients = async () => {
      try {
        const response = await api.get('/Patients');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFollowup({
      ...followup,
      [name]: value,
    });
  };

  const handlePatientChange = (e) => {
    setSelectedPatientId(e.target.value);
    setFollowup({
      ...followup,
      patientId: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convertir la fecha a UTC antes de enviarla
      const updatedFollowup = {
        ...followup,
        date: new Date(followup.date).toISOString(), // Convertimos la fecha a formato ISO UTC
      };
      const response = await api.post('/Followups', updatedFollowup);
      console.log('Followup added:', response.data);
      setShowMessage(true); // Mostrar el mensaje
      setErrorMessage(''); // Limpiar mensaje de error si se graba correctamente
      setFollowup({
        id: 0,
        patientId: 0,
        note: '',
        date: formatDateForInput(new Date().toISOString()), // Reiniciar la fecha en UTC
      });
      setSelectedPatientId('');
      // Limpiar mensaje de confirmación después de un tiempo
      setTimeout(() => setShowMessage(false), 3000);
    } catch (error) {
      console.error('Error adding followup:', error);
      setErrorMessage(`Error al grabar el seguimiento: ${error.message}`);
      // Limpiar mensaje de error después de un tiempo
      setTimeout(() => setErrorMessage(''), 3000);
    }
  };

  return (
    <div>
      <h2>Añadir Seguimiento</h2>
      
      {errorMessage && <p className="error">{errorMessage}</p>} {/* Mostrar mensaje de error */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre del Paciente:</label>
          <select
            name="patientId"
            value={selectedPatientId}
            onChange={handlePatientChange}
          >
            <option value="">Selecciona un paciente</option>
            {patients.map((patient) => (
              <option key={patient.id} value={patient.id}>
                {patient.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Nota:</label>
          <input
            type="text"
            name="note"
            value={followup.note}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Fecha:</label>
          <input
            type="datetime-local"
            name="date"
            value={followup.date}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Añadir Seguimiento</button>
        {showMessage && <div className="floating-message">Se guardó el seguimiento correctamente.</div>}
      </form>
    </div>
  );
};

export default AddFollowup;
