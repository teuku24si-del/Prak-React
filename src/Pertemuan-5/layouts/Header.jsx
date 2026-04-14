import { useState } from "react"; // Tambahkan useState
import { FaBell, FaSearch, FaTimes } from "react-icons/fa"; // Tambahkan FaTimes
import { FcAreaChart } from "react-icons/fc";
import { SlSettings } from "react-icons/sl";

export default function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <div id="header-container" className="flex justify-between items-center bg-white px-8 py-4 border-b border-garis sticky top-0 z-10">
            {/* Search Bar */}
            <div id="search-bar" className="relative w-1/3">
                <input
                    onClick={() => setIsSearchOpen(true)} // Trigger Modal
                    readOnly // Membuat input utama hanya sebagai trigger
                    type="text"
                    placeholder="Click to search..."
                    className="w-full bg-latar border-none rounded-xl py-2 px-4 pl-10 cursor-pointer hover:ring-1 hover:ring-hijau transition-all"
                />
                <FaSearch className="absolute left-3 top-3 text-teks-samping" />
            </div>

            {/* MODAL SEARCH IMPROVISASI */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex justify-center items-start pt-20">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl p-6 animate-in fade-in zoom-in duration-200">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg">Search Everything</h3>
                            <button onClick={() => setIsSearchOpen(false)} className="text-merah p-2 hover:bg-red-50 rounded-full">
                                <FaTimes />
                            </button>
                        </div>
                        <input autoFocus type="text" placeholder="Type menu, customers, or orders..." className="w-full p-4 bg-latar rounded-xl border-2 border-hijau outline-none" />
                        <div className="mt-4 text-xs text-teks-samping italic">Recent searches: "Chicken Burger", "Order #1234"</div>
                    </div>
                </div>
            )}

            {/* Sisi Kanan (Tetap sama) */}
            <div className="flex items-center gap-6">
                <div className="flex gap-4">
                    <div className="relative bg-blue-50 p-2 rounded-full text-biru cursor-pointer hover:scale-110 transition-transform">
                        <FaBell />
                        <span className="absolute -top-1 -right-1 bg-biru text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">50</span>
                    </div>
                    <div className="bg-blue-50 p-2 rounded-full cursor-pointer hover:scale-110 transition-transform"><FcAreaChart /></div>
                    <div className="bg-red-50 p-2 rounded-full text-merah cursor-pointer hover:scale-110 transition-transform"><SlSettings /></div>
                </div>
                <div className="flex items-center gap-3 border-l border-garis pl-6">
                    <span className="text-sm text-teks">Hello, <b className="text-teks">Fikri Muhaffizh</b></span>
                    <img src="https://avatar.iran.liara.run/public/28" className="w-10 h-10 rounded-full border-2 border-garis shadow-sm" alt="avatar" />
                </div>
            </div>
        </div>
    );
}