import CheckoutForm from "../components/CheckoutForm";
import Cart from "../components/cart";

export default function CheckoutPage() {
  return (
    <div className="store-layout">
      <CheckoutForm />
      <Cart />
    </div>
  );
}
