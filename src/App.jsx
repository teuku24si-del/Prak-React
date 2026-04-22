import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import Dashboard from './pages/dashboard';
import './assets/tailwind.css';
import { Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';
import Error400 from './pages/Error400';
import Error401 from './pages/Error401';
import Error403 from './pages/Error403';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex min-h-screen bg-latar">
         
         {/* 1. Sidebar di sisi kiri */}
         <Sidebar />
   
         {/* 2. Area Konten di sisi kanan */}
        <div className="flex-1 p-4">
    <Header />
    
    <Routes>
    <Route path="/" element={<Dashboard/>} />
    <Route path="/orders" element={<Orders/>} />
    <Route path="/customers" element={<Customers/>} />
    
    {/* Sesuaikan path agar sama dengan yang dipanggil Sidebar */}
    <Route path="/Error400" element={<Error400 />} />
    <Route path="/Error401" element={<Error401 />} />
    <Route path="/Error403" element={<Error403 />} />
    
    {/* Pastikan wildcard '*' selalu berada di paling bawah */}
    <Route path="*" element={<NotFound />} />
</Routes>
           
         </div>
       </div>
  )
}

export default App
