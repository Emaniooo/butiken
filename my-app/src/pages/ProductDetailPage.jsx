import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <h2>Laddar produkt...</h2>;
  if (error) return <h2>Kunde inte hämta produkten.</h2>;
  if (!product) return <h2>Produkten hittades inte.</h2>;

  return (
    <div className="product-detail">

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <Link to="/">Hem</Link> / 
        <span className="current">{product.title}</span>
      </div>

      <img src={product.image} alt={product.title} />

      <h2>{product.title}</h2>
      <p>{product.price} kr</p>

      <button className="add-btn">
        Lägg i varukorg
      </button>

      <button className="back-btn" onClick={() => history.back()}>
        Tillbaka
      </button>
    </div>
  );
}
