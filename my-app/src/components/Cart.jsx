import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cart, clearCart } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <aside className="cart">
        <h2>Varukorg</h2>

        {cart.map((item) => (
            <CartItem key={item.id} item={item} />
        ))}

        <h3>Total: {total} kr</h3>

        <button onClick={clearCart}>Töm varukorgen</button>

        <Link to="/">
            <button>Fortsätt handla</button>
        </Link>
        </aside>
    );
}
