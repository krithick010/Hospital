import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AppointmentForm = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    patientName: '',
    date: '',
    time: '',
    doctor: '',
  });
  const [loggedIn, setLoggedIn] = useState(true); // Assume user is logged in for now
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch upcoming appointments
    axios.get('http://localhost:3001/appointments')
      .then((response) => setAppointments(response.data))
      .catch((error) => console.error('Error fetching appointments:', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAppointment({ ...newAppointment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!loggedIn) {
      alert('Please log in to book an appointment.');
      return;
    }

    // Post new appointment
    axios.post('http://localhost:3001/appointments', newAppointment)
      .then((response) => {
        setAppointments([...appointments, response.data]);
        alert('Appointment booked successfully!');
        setNewAppointment({ patientName: '', date: '', time: '', doctor: '' });
      })
      .catch((error) => console.error('Error booking appointment:', error));
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>

      {/* Appointment Form */}
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label className="block text-gray-700">Patient Name</label>
          <input
            type="text"
            name="patientName"
            value={newAppointment.patientName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Date</label>
          <input
            type="date"
            name="date"
            value={newAppointment.date}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Time</label>
          <input
            type="time"
            name="time"
            value={newAppointment.time}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Doctor</label>
          <input
            type="text"
            name="doctor"
            value={newAppointment.doctor}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Book Appointment
        </button>
      </form>

      {/* Display Upcoming Appointments */}
      <h3 className="text-xl font-bold mb-4">Upcoming Appointments</h3>
      {appointments.length > 0 ? (
        <table className="w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr>
              <th className="px-4 py-2">Patient</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Time</th>
              <th className="px-4 py-2">Doctor</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment.id} className="border-t">
                <td className="px-4 py-2">{appointment.patientName}</td>
                <td className="px-4 py-2 text-blue-600">{appointment.date}</td>
                <td className="px-4 py-2 text-blue-600">{appointment.time}</td>
                <td className="px-4 py-2">{appointment.doctor}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No upcoming appointments</p>
      )}
    </div>
  );
};

export default AppointmentForm;
