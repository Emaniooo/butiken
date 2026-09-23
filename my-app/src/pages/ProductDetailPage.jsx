import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export default function ProductDetailPage({ setFilter }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p>Laddar…</p>;

  return (
    <div className="product-detail">

      <div className="breadcrumb">
        <span
          onClick={() => {
            setFilter(null);
            navigate("/");
          }}
        >
          Hem
        </span>
        <span> / </span>
        <span
          onClick={() => {
            setFilter(product.category);
            navigate("/");
          }}
        >
          {product.category === "men's clothing" && "Herr"}
          {product.category === "women's clothing" && "Dam"}
          {product.category === "jewelery" && "Accessoarer"}
          {product.category === "electronics" && "Teknik"}
        </span>
        <span> / </span>
        <span className="current">{product.title}</span>
      </div>

      <h1>{product.title}</h1>

      <img src={product.image} alt={product.title} />

      <p>{product.description}</p>

      <p className="price">{product.price} kr</p>

      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Tillbaka
      </button>

      <button className="add-btn" onClick={() => addToCart(product)}>
        Lägg i varukorg
      </button>
    </div>
  );
}
