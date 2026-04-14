import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './pages/dashboard';
import './assets/tailwind.css';

function App() {
  return (
    // Container utama dengan warna latar belakang dari @theme tailwind.css kamu
    <div className="flex min-h-screen bg-latar">
      
      {/* 1. Sidebar di sisi kiri */}
      <Sidebar />

      {/* 2. Area Konten di sisi kanan */}
      <div className="flex-1 flex flex-col">
        
        {/* Header di bagian atas */}
        <Header />

        {/* Konten Halaman (Dashboard) */}
        <main className="p-6">
          <Dashboard />
        </main>
        
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);