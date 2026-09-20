import { useEffect, useState } from "react";

export default function useProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then(res => {
        if (!res.ok) throw new Error("API-fel");
        return res.json();
    })
    .then(data => setProducts(data))
    .catch(err => setError(err.message))
    .finally(() => setLoading(false));
}, []);

return { products, loading, error };
}
