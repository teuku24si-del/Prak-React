import { FaFileInvoice, FaBox, FaClock, FaCheckCircle, FaTimesCircle, FaArrowUp, FaArrowDown } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; 

export default function Orders() {
    // Latihan 3: Data JSON 30 baris
    const orderData = Array.from({ length: 30 }, (_, i) => ({
        id: `#ORD-${5000 + i}`,
        customerName: ["Andi Wijaya", "Siska Pratama", "Rudi Tabuti", "Maya Sari", "Fikri Muhaffizh"][i % 5],
        status: i % 3 === 0 ? "Completed" : i % 3 === 1 ? "Pending" : "Cancelled",
        totalPrice: `Rp.${(Math.random() * 500000 + 50000).toLocaleString('id-ID')}`,
        orderDate: `2026-04-${(i % 23 + 1).toString().padStart(2, '0')}`
    }));

    return (
        <div id="orders-container" className="flex flex-col gap-8 p-2">
            <PageHeader title="Sales Orders" breadcrumb={["Home", "Shop", "Orders"]}>
                <button className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-all text-sm font-medium">
                    <FaFileInvoice /> Export PDF
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FaBox />} title="320" subtitle="Total Orders" color="biru" trend="+18%" up />
                <StatCard icon={<FaClock />} title="45" subtitle="Pending" color="kuning" trend="+2%" up />
                <StatCard icon={<FaCheckCircle />} title="260" subtitle="Completed" color="hijau" trend="+12%" up />
                <StatCard icon={<FaTimesCircle />} title="15" subtitle="Cancelled" color="merah" trend="-5%" />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-garis/50">
                <h3 className="text-xl font-bold mb-6">Order History</h3>
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="w-full text-left">
                        <thead className="text-teks-samping border-b border-garis sticky top-0 bg-white">
                            <tr>
                                <th className="pb-4">Order ID</th>
                                <th className="pb-4">Customer</th>
                                <th className="pb-4">Status</th>
                                <th className="pb-4">Total Price</th>
                                <th className="pb-4">Date</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-garis">
                            {orderData.map((order, i) => (
                                <tr key={i} className="hover:bg-latar/50 transition-colors">
                                    <td className="py-4 font-bold">{order.id}</td>
                                    <td className="py-4 font-medium">{order.customerName}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${
                                            order.status === "Completed" ? "bg-green-100 text-hijau" : 
                                            order.status === "Pending" ? "bg-yellow-100 text-yellow-600" : "bg-red-100 text-merah"
                                        }`}>
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className="py-4 font-bold text-teks">{order.totalPrice}</td>
                                    <td className="py-4 text-sm text-teks-samping">{order.orderDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

// StatCard helper function tetap sama
function StatCard({ icon, title, subtitle, color, trend, up }) {
    const colorMap = {
        hijau: "bg-green-100/50 text-hijau",
        biru: "bg-blue-100/50 text-biru",
        merah: "bg-red-100/50 text-merah",
        kuning: "bg-yellow-100/50 text-kuning",
    };
    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-garis/50 relative overflow-hidden group">
            <div className="flex items-center gap-5">
                <div className={`${colorMap[color]} p-4 rounded-2xl text-3xl`}>{icon}</div>
                <div className="flex flex-col">
                    <span className="text-3xl font-bold text-teks">{title}</span>
                    <span className="text-sm font-medium text-teks-samping">{subtitle}</span>
                    <div className={`flex items-center gap-1 text-[10px] mt-1 font-bold ${up ? 'text-hijau' : 'text-merah'}`}>
                        {up ? <FaArrowUp /> : <FaArrowDown />} {trend}
                    </div>
                </div>
            </div>
        </div>
    );
}