import { FaUserPlus, FaUsers, FaUserCheck, FaUserSlash, FaCrown, FaArrowUp, FaArrowDown } from "react-icons/fa";
import PageHeader from "../components/PageHeader"; 

export default function Customers() {
    // Latihan 3: Data JSON 30 baris
    const customerData = Array.from({ length: 30 }, (_, i) => ({
        id: `CUST-${1001 + i}`,
        name: ["Budi Santoso", "Siti Aminah", "Rian Hidayat", "Dewi Lestari", "Fikri Muhaffizh"][i % 5],
        email: `user${i}@example.com`,
        phone: `0812-3456-78${i.toString().padStart(2, '0')}`,
        loyalty: i % 3 === 0 ? "Gold" : i % 3 === 1 ? "Silver" : "Bronze"
    }));

    return (
        <div id="customers-container" className="flex flex-col gap-8 p-2">
            <PageHeader title="Customer Management" breadcrumb={["Home", "Data", "Customers"]}>
                <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-all text-sm font-medium">
                    <FaUserPlus /> Add Customer
                </button>
            </PageHeader>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard icon={<FaUsers />} title="1,250" subtitle="Total Customers" color="biru" trend="+12%" up />
                <StatCard icon={<FaUserCheck />} title="840" subtitle="Active Now" color="hijau" trend="+5%" up />
                <StatCard icon={<FaCrown />} title="120" subtitle="Gold Members" color="kuning" trend="+2%" up />
                <StatCard icon={<FaUserSlash />} title="14" subtitle="Churn Rate" color="merah" trend="-1%" />
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-garis/50">
                <h3 className="text-xl font-bold mb-6">Customer Directory</h3>
                <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
                    <table className="w-full text-left">
                        <thead className="text-teks-samping border-b border-garis sticky top-0 bg-white">
                            <tr>
                                <th className="pb-4">Customer ID</th>
                                <th className="pb-4">Name</th>
                                <th className="pb-4">Email</th>
                                <th className="pb-4">Phone</th>
                                <th className="pb-4">Loyalty</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-garis">
                            {customerData.map((cust, i) => (
                                <tr key={i} className="hover:bg-latar/50 transition-colors">
                                    <td className="py-4 font-bold text-hijau">{cust.id}</td>
                                    <td className="py-4 font-medium">{cust.name}</td>
                                    <td className="py-4 text-sm">{cust.email}</td>
                                    <td className="py-4 text-sm">{cust.phone}</td>
                                    <td className="py-4">
                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                                            cust.loyalty === "Gold" ? "bg-yellow-100 text-yellow-600" : 
                                            cust.loyalty === "Silver" ? "bg-gray-100 text-gray-500" : "bg-orange-100 text-orange-600"
                                        }`}>
                                            {cust.loyalty}
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