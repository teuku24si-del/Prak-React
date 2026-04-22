import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa"; // Ikon Gembok untuk Unauthorized

export default function Error401() {
    return (
        <div id="error-401-container" className="p-6 min-h-[80vh] flex flex-col">
            <PageHeader title="Error 401" breadcrumb={["Home", "Error", "401"]} />
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                <div className="relative mb-8">
                    <div className="text-[150px] font-black text-hijau/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
                        401
                    </div>
                    <FaLock className="text-9xl text-hijau drop-shadow-lg relative z-10" />
                </div>

                <h2 className="text-4xl font-extrabold text-teks mb-2">
                    Akses Ditolak!
                </h2>

                <p className="max-w-md text-teks-samping mb-8">
                    Sepertinya Anda belum login atau tidak memiliki izin untuk mengakses halaman ini. 
                    Silakan masuk kembali dengan akun Anda.
                </p>

                <Link 
                    to="/" 
                    className="bg-hijau text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-hijau/30 hover:scale-105 transition-transform"
                >
                    Login / Dashboard
                </Link>

                <div className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest">
                    Sedap. Modern Admin Dashboard System
                </div>
            </div>
        </div>
    );
}