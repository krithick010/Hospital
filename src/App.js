import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';  
import Header from './components/Header';
import Video from './components/Video';
import RegistrationForm from './Registration';
import AppointmentForm from './components/AppointmentForm'; // Ensure correct path
import Nav from './components/Navbar';

const AppContent = () => {
  const location = useLocation();
  const isRegistrationPage = location.pathname === '/registration';
  const isRecordsPage = location.pathname === '/records';
  const showHeaderAndVideo = !isRegistrationPage && !isRecordsPage;

  return (
    <div>
      {showHeaderAndVideo && <Header />}
      {isRecordsPage && <Nav />} {/* Render Nav only on the Records page */}
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/appointment" element={<AppointmentForm />} /> {/* Route for AppointmentForm */}
      </Routes>
      {showHeaderAndVideo && <Video />}
    </div>
  );
};

function App() {
  return (
    <AppContent />
  );
}

export default App;
