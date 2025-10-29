export default function ProductCard({ product, onSelect }) {
  return (
    <div className="bg-white rounded-xl shadow p-4 hover:scale-105 transition">
      {product.image && (
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-contain mb-3"
        />
      )}
      <h3 className="text-lg font-bold text-emerald">{product.name}</h3>
      <p className="text-sm text-gray-700">{product.type}</p>
      <p className="mt-2 text-sm">💰 ₹{product.price.toLocaleString()}</p>
      <p className="mt-1 text-sm">⭐ {product.rating} / 5 &nbsp;|&nbsp; 🔥 {product.popularity}%</p>
      <button
        onClick={() => onSelect(product)}
        className="mt-3 px-4 py-2 bg-emerald text-white rounded shadow hover:bg-parrot transition"
      >
        Add to Package
      </button>
    </div>
  );
}
