import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CheckoutForm({ setDone, setEmail }) {
    const { cart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Namn är obligatoriskt";
        if (!emailInput.includes("@")) newErrors.email = "Ogiltig e‑postadress";
        if (!address.trim()) newErrors.address = "Adress är obligatorisk";

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validation = validate();
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
            setEmail(emailInput); // skickar mejlen till CheckoutPage
            setDone(true);        // visar tack-sidan
        }
    }

    if (cart.length === 0) return null;

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <h3>Kassa</h3>

            <label>
                Namn
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ditt namn"
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </label>

            <label>
                E‑post
                <input
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="din@mail.se"
                />
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </label>

            <label>
                Adress
                <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Gatuadress"
                />
                {errors.address && <p style={{ color: "red" }}>{errors.address}</p>}
            </label>

            <button type="submit">Slutför köp</button>
        </form>
    );
}
