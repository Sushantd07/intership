import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/admin/Layout';
import Dashboard from '../components/admin/Dashboard';
import ComplaintEditor from '../components/admin/ComplaintEditor';
import CompanyManager from '../components/admin/CompanyManager';
import CategoryManager from '../components/admin/CategoryManager';

function AdminPanel() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/complaint-editor" element={<ComplaintEditor />} />
        <Route path="/companies" element={<CompanyManager />} />
        <Route path="/categories" element={<CategoryManager />} />
      </Routes>
    </Layout>
  );
}

export default AdminPanel; 