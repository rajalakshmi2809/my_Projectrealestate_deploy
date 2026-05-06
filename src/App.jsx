
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import MainLayout from './components/layout/MainLayout';

import Dashboard from './pages/Dashboard/Dashboard';
import Properties from './pages/Properties/Properties';
import PropertyDetails from './pages/Properties/PropertyDetails';
import Tenants from './pages/Tenants/Tenants';
import Maintenance from './pages/Maintenance/Maintenance';
import Financials from './pages/Financials/Financials';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import AddProperty from "./pages/Addproperty/Addproperty";

const App = () => {
  return (
    <>

    <BrowserRouter>

      <Routes>

        {/* First Page → Login */}
        <Route path="/" element={<Login />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<MainLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="properties" element={<Properties />} />
          <Route path="properties/:id" element={<PropertyDetails />} />
          <Route path="tenants" element={<Tenants />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="financials" element={<Financials />} />
          <Route 
  path="/dashboard/add-property" 
  element={<AddProperty />} 
/>

        </Route>

      </Routes>

    </BrowserRouter>

  
    </>
    
  
  );
};

export default App;