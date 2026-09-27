import { useState, useContext, useEffect } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Cart from "../components/cart";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function CheckoutPage() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const { clearCart } = useContext(CartContext);

  useEffect(() => {
    if (done) {
      clearCart();
    }
  }, [done, clearCart]);

  if (done) {
    return (
      <div className="thank-you">
        <h2>Tack för ditt köp!</h2>
        <p>Din order är på väg.</p>
        <p>En bekräftelse har skickats till: <strong>{email}</strong></p>

        <Link to="/">
          <button className="back-home-btn">Gå tillbaka till startsidan</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="store-layout">
      <CheckoutForm setDone={setDone} setEmail={setEmail} />
      <Cart />
    </div>
  );
}
