export default function PageHeader() {
    return (
        <div id="pageheader-container" className="flex justify-between items-end mb-4">
            <div id="pageheader-left" className="flex flex-col gap-1">
                {/* Judul Dashboard yang besar dan tegas */}
                <h1 id="page-title" className="text-3xl font-bold text-teks">
                    Dashboard
                </h1>
                
                {/* Breadcrumb dengan warna yang lebih soft */}
                <div id="breadcrumb-links" className="flex items-center gap-2 text-sm text-teks-samping">
                    <span id="breadcrumb-home" className="hover:text-hijau cursor-pointer transition-colors">Home</span>
                    <span id="breadcrumb-separator" className="text-gray-300">/</span>
                    <span id="breadcrumb-current">Home Detail</span>
                    <span id="breadcrumb-separator" className="text-gray-300">/</span>
                    <span id="breadcrumb-current" className="text-teks">Home Very Detail</span>
                </div>
            </div>

            {/* Tombol Aksi di sisi kanan (Opsional, jika di Gambar 2 tidak ada bisa dikosongkan) */}
            <div id="action-button">
                {/* Kamu bisa menambahkan tombol di sini jika diperlukan sesuai modul */}
            </div>
        </div>
    );
}