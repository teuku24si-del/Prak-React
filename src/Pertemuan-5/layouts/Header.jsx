import { FaBell, FaSearch } from "react-icons/fa";
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    return (
        <div id="header-container" className="flex justify-between items-center bg-white px-8 py-4 border-b border-garis">
            
            {/* Search Bar (Sisi Kiri) */}
            <div id="search-bar" className="relative w-1/3">
                <input
                    id="search-input"
                    type="text"
                    placeholder="Search here..."
                    className="w-full bg-latar border-none rounded-xl py-2 px-4 pl-10 focus:ring-1 focus:ring-hijau transition-all"
                />
                <FaSearch id="search-icon" className="absolute left-3 top-3 text-teks-samping" />
            </div>

            {/* Icon & Profile Section (Sisi Kanan) */}
            <div id="icons-container" className="flex items-center gap-6">
                
                {/* Icons Group */}
                <div className="flex gap-4">
                    <div id="notification-icon" className="relative bg-blue-50 p-2 rounded-full text-biru cursor-pointer">
                        <FaBell />
                        <span id="notification-badge" className="absolute -top-1 -right-1 bg-biru text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full border-2 border-white">
                            50
                        </span>
                    </div>
                    <div id="chart-icon" className="bg-blue-50 p-2 rounded-full cursor-pointer">
                        <FcAreaChart />
                    </div>
                    <div id="settings-icon" className="bg-red-50 p-2 rounded-full text-merah cursor-pointer">
                        <SlSettings />
                    </div>
                </div>

                {/* Profile Section */}
                <div id="profile-container" className="flex items-center gap-3 border-l border-garis pl-6">
                    <span id="profile-text" className="text-sm text-teks">
                        Hello, <b className="text-teks">Fikri Muhaffizh</b>
                    </span>
                    <div className="relative">
                        <img
                            id="profile-avatar"
                            src="https://avatar.iran.liara.run/public/28"
                            className="w-10 h-10 rounded-full object-cover border-2 border-garis"
                            alt="avatar"
                        />
                        {/* Dot menu kecil di sebelah avatar sesuai gambar */}
                        <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-teks-samping cursor-pointer px-1">
                            ⋮
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}