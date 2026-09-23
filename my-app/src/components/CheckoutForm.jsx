    import { useState, useContext } from "react";
    import { CartContext } from "../context/CartContext";

    export default function CheckoutForm() {
    const { cart } = useContext(CartContext);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState("");

    function validate() {
        const newErrors = {};

        if (!name.trim()) newErrors.name = "Namn är obligatoriskt";
        if (!email.includes("@")) newErrors.email = "Ogiltig e‑postadress";
        if (!address.trim()) newErrors.address = "Adress är obligatorisk";

        return newErrors;
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validation = validate();
        setErrors(validation);

        if (Object.keys(validation).length === 0) {
        setSuccess("Beställning skickad! Tack för ditt köp.");
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

        {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
    );
    }
