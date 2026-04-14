import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; 

export default function Dashboard() {
    return (
        <div id="dashboard-container" className="flex flex-col gap-8 p-2">
            {/* Judul Halaman */}
            <PageHeader /> 

            {/* Grid Container untuk Statistik */}
            <div id="dashboard-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                
                {/* Total Orders */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 border border-garis/50">
                    <div className="bg-green-100/50 text-hijau p-4 rounded-2xl text-3xl">
                        <FaShoppingCart />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-teks">75</span>
                        <span className="text-sm font-medium text-teks-samping">Total Orders</span>
                    </div>
                </div>

                {/* Total Delivered */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 border border-garis/50">
                    <div className="bg-blue-100/50 text-biru p-4 rounded-2xl text-3xl">
                        <FaTruck />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-teks">175</span>
                        <span className="text-sm font-medium text-teks-samping">Total Delivered</span>
                    </div>
                </div>

                {/* Total Canceled */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 border border-garis/50">
                    <div className="bg-red-100/50 text-merah p-4 rounded-2xl text-3xl">
                        <FaBan />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-teks">40</span>
                        <span className="text-sm font-medium text-teks-samping">Total Canceled</span>
                    </div>
                </div>

                {/* Total Revenue */}
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 border border-garis/50">
                    <div className="bg-yellow-100/50 text-kuning p-4 rounded-2xl text-3xl">
                        <FaDollarSign />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-teks">Rp.128</span>
                        <span className="text-sm font-medium text-teks-samping">Total Revenue</span>
                    </div>
                </div>

            </div>

           
        </div>
    );
}