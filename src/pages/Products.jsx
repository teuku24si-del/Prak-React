import { Link } from "react-router-dom";
import products from "../data/Product.json";

export default function Products() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full border border-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 border">ID</th>
              <th className="px-4 py-3 border">Title</th>
              <th className="px-4 py-3 border">Code</th>
              <th className="px-4 py-3 border">Category</th>
              <th className="px-4 py-3 border">Brand</th>
              <th className="px-4 py-3 border">Price</th>
              <th className="px-4 py-3 border">Stock</th>
            </tr>
          </thead>

        <tbody>
  {products.map((product) => (
    <tr key={product.id} className="text-center hover:bg-gray-50">
      {/* ID */}
      <td className="px-4 py-2 border">
        {product.id}
      </td>

      {/* TITLE */}
      <td className="px-4 py-2 border">
        <Link
          to={`/products/${product.id}`}
          className="text-emerald-500 hover:text-emerald-700"
        >
          {product.title}
        </Link>
      </td>

      {/* CODE */}
      <td className="px-4 py-2 border">
        {product.code}
      </td>

      {/* CATEGORY */}
      <td className="px-4 py-2 border">
        {product.category}
      </td>

      {/* BRAND */}
      <td className="px-4 py-2 border">
        {product.brand}
      </td>

      {/* PRICE */}
      <td className="px-4 py-2 border">
        Rp {product.price.toLocaleString("id-ID")}
      </td>

      {/* STOCK */}
      <td className="px-4 py-2 border">
        {product.stock}
      </td>
    </tr>
  ))}
</tbody>
        </table>
      </div>
    </div>
  );
}
