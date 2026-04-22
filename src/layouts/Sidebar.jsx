import { Link, NavLink } from "react-router-dom";

export default function Sidebar() {
        const menuClass = ({ isActive }) =>
        `flex cursor-pointer items-center rounded-xl p-4  space-x-2
        ${isActive ? 
            "text-hijau bg-green-200 font-extrabold" : 
            "text-gray-600 hover:text-hijau hover:bg-green-200 hover:font-extrabold"
        }`
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
                    <li>
                    <NavLink 
                    to="/"
                    className={menuClass}>
                        Dashboard
                    </NavLink>
                    </li>

                    <li>
                    <NavLink 
                    to="/Orders"
                    className={menuClass}>
                        Orders
                    </NavLink>
                    </li>

                    <li>
                    <NavLink 
                    to="/Customers"
                    className={menuClass}>
                        Customers
                    </NavLink>
                    </li>

                     <li><NavLink to="/Error400" className={menuClass}>Error 400</NavLink></li>

                    <li><NavLink to="/Error401" className={menuClass}>Error 401</NavLink></li>

                    <li><NavLink to="/Error403" className={menuClass}>Error 403</NavLink></li>
    
        

                    
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