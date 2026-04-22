export default function PageHeader({ title, breadcrumb, children }) {
    return (
        <div id="pageheader-container" className="flex justify-between items-end mb-4">
            <div id="pageheader-left" className="flex flex-col gap-1">
                {/* 1. Menggunakan props title */}
                <h1 id="page-title" className="text-3xl font-bold text-teks">
                    {title}
                </h1>
                
                {/* 2. Menggunakan props breadcrumb (Logic untuk menangani String atau Array) */}
                <div id="breadcrumb-links" className="flex items-center gap-2 text-sm text-teks-samping">
                    {Array.isArray(breadcrumb) ? (
                        breadcrumb.map((item, index) => (
                            <div key={index} className="flex items-center gap-2">
                                <span className="hover:text-hijau cursor-pointer transition-colors">
                                    {item}
                                </span>
                                {index < breadcrumb.length - 1 && (
                                    <span className="text-gray-300">/</span>
                                )}
                            </div>
                        ))
                    ) : (
                        // Jika breadcrumb hanya string biasa
                        <span>{breadcrumb}</span>
                    )}
                </div>
            </div>

            {/* 3. Menggunakan props children untuk konten fleksibel di sisi kanan */}
            <div id="action-button">
                {children}
            </div>
        </div>
    );
}