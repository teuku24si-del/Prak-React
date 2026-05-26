import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown, FaDownload } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; 

export default function FiturXyz() {
    // Data dummy untuk improvisasi tabel
    const recentOrders = [
        { id: "#0012", name: "Chicken Curry", amount: "Rp.45.000", status: "Delivered" },
        { id: "#0013", name: "Rice Bowl", amount: "Rp.35.000", status: "Pending" },
        { id: "#0014", name: "Orange Juice", amount: "Rp.15.000", status: "Canceled" },
    ];

    return (
        <div id="dashboard-container" className="flex flex-col gap-8 p-2">
            {/* PEMANGGILAN KOMPONEN PAGEHEADER SESUAI LATIHAN */}
            <PageHeader 
                title="Dashboard Overview" 
                breadcrumb={["Home", "Analytics", "Dashboard"]}
            >
                {/* Ini dikirim sebagai 'children' ke sisi kanan PageHeader */}
                <button className="flex items-center gap-2 bg-hijau text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all shadow-sm text-sm font-medium">
                    <FaDownload /> Download Report
                </button>
            </PageHeader>

           </div>
    );
}