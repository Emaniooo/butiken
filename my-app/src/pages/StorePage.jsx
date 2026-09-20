import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function StorePage({ filter }) {
const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => setProducts(data))
    .catch(() => {
        setProducts([]); 
    });
}, []);

const filteredProducts = filter
    ? products.filter(p => p.category === filter)
    : products;

    if (filteredProducts.length === 0) {
    return (
    <div className="empty-state">
        <h2>Inga produkter hittades</h2>
        <p>Prova att ändra kategori eller ta bort filtret.</p>
    </div>
    );
}

return (
    <div className="store-layout">
    <div className="grid">
        {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
        ))}
    </div>
    </div>
    );
}
