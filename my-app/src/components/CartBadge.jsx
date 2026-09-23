import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CartBadge() {
    const { cart } = useContext(CartContext);

    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    return (
    <Link to="/checkout" className="cart-badge">
        🛒
    <span className="cart-count">{count}</span>
    </Link>
    );
}
