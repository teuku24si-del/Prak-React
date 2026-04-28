import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function MainLayouts() {
  return (
    <div className="flex min-h-screen bg-latar">
      {/* 1. Sidebar di sisi kiri */}
      <Sidebar />

      {/* 2. Area Konten di sisi kanan */}
      <div className="flex-1 p-4">
        <Header />

        <Outlet /> 
      </div>
    </div>
  );
}
