import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: ''
  });
  const [patients, setPatients] = useState([]);

  const navigate = useNavigate();  // Initialize useNavigate

  // Handling form inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Fetching data from JSON server (GET)
  useEffect(() => {
    axios.get('http://localhost:5000/patients')
      .then((response) => {
        setPatients(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  // Handling form submission (POST)
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/patients', formData)
      .then((response) => {
        console.log('Patient registered:', response.data);
        setPatients([...patients, response.data]);
        setFormData({ name: '', age: '', contact: '' });
      })
      .catch((error) => {
        console.error('There was an error registering the patient!', error);
      });
  };

  // Handle navigation to another page
  const goToAnotherPage = () => {
    navigate('/another-page');
  };

  return (
    <div className="bg-[url('https://img.freepik.com/premium-photo/abstract-blur-hospital-medical-clinic-interior-background-generative-ai_874904-42483.jpg')] bg-cover bg-center min-h-screen flex items-center justify-center"
    >
    <div className="max-w-md mx-auto mt-10 p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">Patient Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact"
          value={formData.contact}
          onChange={handleChange}
          required
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Register
        </button>
      </form>

      <button
        onClick={goToAnotherPage}
        className="w-full bg-green-500 text-white py-2 mt-4 rounded-lg hover:bg-green-600 transition duration-300"
      >
        Login
      </button>
    </div>
    </div>
  );
};

export default RegistrationForm;

