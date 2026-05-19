// src/pages/Components.jsx
import React from "react";

// ==========================================
// 1. IMPORT SEMUA KOMPONEN DARI FOLDER COMPONENTS
// ==========================================
import Container from "../components/Container";
import Button from "../components/Button";
import Avatar from "../components/Avatar";
import Badge from "../components/Badge";
import Footer from "../components/Footer";
import Card from "../components/Card"; 
import ProductCard from "../components/ProductCard"; 
import Table from "../components/Table"; // <-- Tambahkan import Table di sini

// Sub-komponen pembantu halaman
function PageHeader({ title }) {
  return (
    <div className="mb-6">
      <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
      <p className="text-sm text-gray-500 mt-1">Dashboard / Order List</p>
    </div>
  );
}

// ==========================================
// 2. HALAMAN UTAMA
// ==========================================
export default function Components() {
  
  // --- DI SINI TEMPAT TERBAIK UNTUK MELETAKKAN DATA DARI MODUL ---
  const headers = [
    "No",
    "Nama Produk",
    "Kategori",
    "Harga",
    "Aksi"
  ];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000"
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000"
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000"
    }
  ];
  // -------------------------------------------------------------

  return (
    <Container className="bg-gray-100">
      <PageHeader title="Components" />

      {/* Baris Tombol */}
      <div className="flex gap-2 mt-4">
        <Button type="success">Simpan</Button>
        <Button type="danger">Hapus</Button>
      </div>

      {/* Baris Avatar */}
      <div className="flex gap-2 mt-4">
        <Avatar name="Budi" />
        <Avatar name="Siti" />
      </div>

      {/* Baris Badge */}
      <div className="flex gap-2 mt-4">
        <Badge type="success">Success</Badge>
        <Badge type="danger">Danger</Badge>
        <Badge type="warning">Warning</Badge>
      </div>

      {/* Bagian Card Biasa */}
      <div className="mt-6">
        <Card>
          <h2 className="text-xl font-bold mb-2">Judul Card</h2>
          <p className="text-gray-600">Ini adalah isi dari card.</p>
        </Card>
      </div>

      {/* Bagian ProductCard */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <ProductCard 
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dengan desain nyaman dan ringan untuk olahraga."
        />
        <ProductCard 
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
        />
      </div>

      {/* 3. BAGIAN TABLE - DITERAPKAN MENGIKUTI STRUKTUR GAMBAR 2 */}
      <div className="mt-8 bg-white p-4 rounded-xl shadow-sm">
        <Table headers={headers}>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-3">{index + 1}</td>
              <td className="border px-4 py-3">{product.name}</td>
              <td className="border px-4 py-3">{product.category}</td>
              <td className="border px-4 py-3">{product.price}</td>
              <td className="border px-4 py-3">
                <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      {/* Terapkan Footer */}
      <Footer />
      
    </Container>
  );
}