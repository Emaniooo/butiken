import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>{product.price} kr</p>

      <Link to={`/product/${product.id}`}>Visa mer</Link>
    </div>
  );
}
