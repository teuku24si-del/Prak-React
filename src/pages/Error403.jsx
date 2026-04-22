import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa"; // Ikon Perisai untuk Forbidden

export default function Error403() {
    return (
        <div id="error-403-container" className="p-6 min-h-[80vh] flex flex-col">
            <PageHeader title="Error 403" breadcrumb={["Home", "Error", "403"]} />
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                    <div className="text-[150px] font-black text-hijau/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
                        403
                    </div>
                    <FaUserShield className="text-9xl text-hijau drop-shadow-lg relative z-10" />
                </div>

                <h2 className="text-4xl font-extrabold text-teks mb-2">
                    Terlarang! (Forbidden)
                </h2>

                <p className="max-w-md text-teks-samping mb-8">
                    Anda sudah masuk, namun Anda tidak memiliki hak akses (Role) yang cukup untuk melihat konten di halaman ini. 
                    Hubungi Admin jika ini adalah sebuah kesalahan.
                </p>

                <Link 
                    to="/" 
                    className="bg-hijau text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-hijau/30 hover:scale-105 transition-transform"
                >
                    Kembali ke Dashboard
                </Link>

                <div className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest">
                    Sedap. Modern Admin Dashboard System
                </div>
            </div>
        </div>
    );
}