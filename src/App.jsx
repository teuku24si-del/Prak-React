import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Dashboard from "./pages/dashboard";
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import NotFound from "./pages/NotFound";
import Error400 from "./pages/Error400";
import Error401 from "./pages/Error401";
import Error403 from "./pages/Error403";
import MainLayouts from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Forgot from "./pages/Auth/Forgot";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />

        {/* Sesuaikan path agar sama dengan yang dipanggil Sidebar */}
        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error403" element={<Error403 />} />

        {/* Pastikan wildcard '*' selalu berada di paling bawah */}
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>
    </Routes>
  );
}

export default App;
