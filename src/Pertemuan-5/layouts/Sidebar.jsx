export default function Sidebar() {
    return (
        <div id="sidebar" className="w-64 min-h-screen bg-white p-6 flex flex-col justify-between border-r border-garis">
            <div>
                {/* Logo */}
                <div id="sidebar-logo" className="mb-10">
                    <h1 className="text-3xl font-bold text-teks">
                        Sedap<span className="text-hijau">.</span>
                    </h1>
                    <p className="text-xs text-teks-samping">Modern Admin Dashboard</p>
                </div>

                {/* List Menu */}
                <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-hijau bg-green-50 p-3 rounded-lg font-semibold">
                        Dashboard
                    </li>
                    <li className="flex items-center gap-3 text-teks-samping p-3 hover:text-hijau cursor-pointer">
                        Orders
                    </li>
                    <li className="flex items-center gap-3 text-teks-samping p-3 hover:text-hijau cursor-pointer">
                        Customers
                    </li>
                </ul>
            </div>

            {/* Footer Card Hijau sesuai Gambar 2 */}
            <div className="bg-hijau p-4 rounded-2xl text-white text-center relative mt-10">
                <p className="text-xs mb-3">Please organize your menus through button below!</p>
                <button className="bg-white text-teks px-4 py-2 rounded-lg text-xs font-bold shadow-md">
                    + Add Menus
                </button>
            </div>
        </div>
    );
}