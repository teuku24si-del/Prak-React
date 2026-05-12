import React, { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
const Dashboard = React.lazy(() => import("./pages/dashboard"))
import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const Error400 = React.lazy(() => import("./pages/Error400"));
const Error401 = React.lazy(() => import("./pages/Error401"));
const Error403 = React.lazy(() => import("./pages/Error403"));
const MainLayouts = React.lazy(() => import("./layouts/MainLayouts"));
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"));
const Login = React.lazy(() => import("./pages/Auth/Login"));
const Register = React.lazy(() => import("./pages/Auth/Register"));
const Forgot = React.lazy(() => import("./pages/Auth/Forgot"));

function App() {
  const [count, setCount] = useState(0);

  return (
    	 <Suspense fallback={<Loading />}>
    <Routes>

      {/* Main Layout */}
      <Route element={<MainLayouts />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        <Route path="/Error400" element={<Error400 />} />
        <Route path="/Error401" element={<Error401 />} />
        <Route path="/Error403" element={<Error403 />} />
      </Route>

      {/* Auth Layout */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />

    </Routes>
  </Suspense>
  );
}

export default App;
