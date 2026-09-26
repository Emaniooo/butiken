import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartItem({ item }) {
const { increaseQuantity, decreaseQuantity, removeFromCart } =
useContext(CartContext);

return (
<div className="cart-item">
<div className="cart-info">
    <p className="cart-title">{item.title}</p>
    <p className="cart-price">{item.price} kr</p>
</div>

<div className="cart-controls">
    <button onClick={() => decreaseQuantity(item.id)}>-</button>
    <span>{item.quantity}</span>
    <button onClick={() => increaseQuantity(item.id)}>+</button>
</div>

<button className="remove-btn" onClick={() => removeFromCart(item.id)}>
    Ta bort
</button>
</div>
);
}
