import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
    const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);
    
return (
    <div className="cart-item">
        <p>{item.title}</p>
        <p>{item.price} kr</p>

        <div className="quantity-controls">
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => increaseQuantity(item.id)}>+</button>
        </div>

        <button onClick={() => removeFromCart(item.id)}>Ta bort</button>
    </div>
    );
}
