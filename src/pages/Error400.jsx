import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

export default function Error400() {
    return (
        <div id="error-400-container" className="p-6 min-h-[80vh] flex flex-col">
            {/* Header tetap konsisten */}
            <PageHeader title="Error 400" breadcrumb={["Home", "Error", "400"]} />
            
            <div className="flex-1 flex flex-col items-center justify-center text-center">
                {/* 1. Bagian Gambar Error (Bisa diganti tag <img> jika ada file assets) */}
                <div className="relative mb-8">
                    <div className="text-[150px] font-black text-hijau/10 absolute -top-20 left-1/2 -translate-x-1/2 select-none">
                        400
                    </div>
                    <FaExclamationTriangle className="text-9xl text-hijau drop-shadow-lg relative z-10" />
                </div>

                {/* 2. Nomor Error & Judul */}
                <h2 className="text-4xl font-extrabold text-teks mb-2">
                    Waduh! Bad Request.
                </h2>

                {/* 3. Deskripsi Error */}
                <p className="max-w-md text-teks-samping mb-8">
                    Maaf, permintaan yang Anda kirimkan tidak dapat dipahami oleh server. 
                    Pastikan URL atau data yang Anda masukkan sudah benar dan coba lagi.
                </p>

                {/* 4. Tombol Aksi Kembali */}
                <Link 
                    to="/" 
                    className="bg-hijau text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-hijau/30 hover:scale-105 transition-transform"
                >
                    Kembali ke Dashboard
                </Link>

                {/* Tambahan dekorasi kecil di bawah */}
                <div className="mt-12 text-[10px] text-gray-300 uppercase tracking-widest">
                    Sedap. Modern Admin Dashboard System
                </div>
            </div>
        </div>
    );
}