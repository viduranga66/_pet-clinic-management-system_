import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import RegisterPage from './pages/RegisterPage';
import ClinicRegistrationPage from './pages/ClinicRegistrationPage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import AdminClinicRequestsPage from './pages/AdminClinicRequestsPage';
import AdminApprovedClinicsPage from './pages/AdminApprovedClinicsPage';
import AdminPetOwnersPage from './pages/AdminPetOwnersPage';
import AdminProfilePage from './pages/AdminProfilePage';
import PetOwnerDashboard from './pages/PetOwnerDashboard';
import OwnerQuestionsPage from './pages/OwnerQuestionsPage';
import OwnerPetsPage from './pages/OwnerPetsPage';
import ClinicDashboard from './pages/ClinicDashboard';
import ClinicQuestionsPage from './pages/ClinicQuestionsPage';
import ClinicProfilePage from './pages/ClinicProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/clinic-registration" element={<ClinicRegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/clinic-requests" element={<AdminClinicRequestsPage />} />
        <Route path="/admin/clinics" element={<AdminApprovedClinicsPage />} />
        <Route path="/admin/users" element={<AdminPetOwnersPage />} />
        <Route path="/admin/profile" element={<AdminProfilePage />} />
        <Route path="/owner/dashboard" element={<PetOwnerDashboard />} />
        <Route path="/owner/questions" element={<OwnerQuestionsPage />} />
        <Route path="/owner/pets" element={<OwnerPetsPage />} />
        <Route path="/clinic/dashboard" element={<ClinicDashboard />} />
        <Route path="/clinic/questions" element={<ClinicQuestionsPage />} />
        <Route path="/clinic/profile" element={<ClinicProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;
