import { FaShoppingCart, FaTruck, FaBan, FaDollarSign, FaArrowUp, FaArrowDown, FaDownload } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; 

export default function Dashboard() {
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

            {/* Grid Statistik dengan Trend Badge */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FaShoppingCart />} title="75" subtitle="Total Orders" color="hijau" trend="+4%" up />
                <StatCard icon={<FaTruck />} title="175" subtitle="Total Delivered" color="biru" trend="+12%" up />
                <StatCard icon={<FaBan />} title="40" subtitle="Total Canceled" color="merah" trend="-2%" />
                <StatCard icon={<FaDollarSign />} title="Rp.128" subtitle="Total Revenue" color="kuning" trend="+8%" up />
            </div>

            {/* Tabel Recent Orders */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-garis/50">
                <h3 className="text-xl font-bold mb-6">Recent Orders</h3>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="text-teks-samping border-b border-garis">
                            <tr>
                                <th className="pb-4">Order ID</th>
                                <th className="pb-4">Food Name</th>
                                <th className="pb-4">Amount</th>
                                <th className="pb-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-garis">
                            {recentOrders.map((order, i) => (
                                <tr key={i} className="hover:bg-latar/50 transition-colors">
                                    <td className="py-4 font-bold">{order.id}</td>
                                    <td className="py-4">{order.name}</td>
                                    <td className="py-4">{order.amount}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                            order.status === "Delivered" ? "bg-green-100 text-hijau" : 
                                            order.status === "Pending" ? "bg-yellow-100 text-kuning" : "bg-red-100 text-merah"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// Komponen Pembantu StatCard tetap sama
function StatCard({ icon, title, subtitle, color, trend, up }) {
    const colorMap = {
        hijau: "bg-green-100/50 text-hijau",
        biru: "bg-blue-100/50 text-biru",
        merah: "bg-red-100/50 text-merah",
        kuning: "bg-yellow-100/50 text-kuning",
    };

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-garis/50 relative overflow-hidden group">
            <div className={`absolute top-0 right-0 w-1 h-full bg-${color === 'hijau' ? 'green-500' : color === 'biru' ? 'blue-500' : color === 'merah' ? 'red-500' : 'yellow-500'}`} />
            <div className="flex items-center gap-5">
                <div className={`${colorMap[color]} p-4 rounded-2xl text-3xl group-hover:scale-110 transition-transform`}>{icon}</div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-teks">{title}</span>
                    <span className="text-sm font-medium text-teks-samping">{subtitle}</span>
                    <div className={`flex items-center gap-1 text-[10px] mt-1 font-bold ${up ? 'text-hijau' : 'text-merah'}`}>
                        {up ? <FaArrowUp /> : <FaArrowDown />} {trend} <span className="text-teks-samping font-normal">(30 days)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}