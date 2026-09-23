import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate(); 
  
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />

      <h3>{product.title}</h3>
      <p>{product.price} kr</p>

      <div className="product-actions">
        <button onClick={() => navigate(`/product/${product.id}`)}>
          Visa detaljer
        </button>

        <button onClick={() => addToCart(product)}>
          Lägg i varukorgen
        </button>
      </div>
    </div>
  );
}
