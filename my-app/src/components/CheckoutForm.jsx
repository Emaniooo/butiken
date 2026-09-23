    import { useState } from "react";

    export default function CheckoutForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        address: ""
    });

    const [errors, setErrors] = useState({});

    function validate() {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Namn är obligatoriskt";
        if (!form.email.includes("@")) newErrors.email = "Ogiltig e‑post";
        if (form.address.length < 5) newErrors.address = "Adress är för kort";

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (!validate()) return;

        alert("Beställning skickad!");
    }

    function handleChange(e) {
        setForm(prev => ({
        ...prev,
        [e.target.name]: e.target.value
        }));
    }

    return (
        <form className="checkout-form" onSubmit={handleSubmit}>
        <label>
            Namn
            <input
            name="name"
            value={form.name}
            onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
        </label>

        <label>
            E‑post
            <input
            name="email"
            value={form.email}
            onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
        </label>

        <label>
            Adress
            <input
            name="address"
            value={form.address}
            onChange={handleChange}
            />
            {errors.address && <p className="error">{errors.address}</p>}
        </label>

        <button type="submit">Slutför köp</button>
        </form>
    );
    }
