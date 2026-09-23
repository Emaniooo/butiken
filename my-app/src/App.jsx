import { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import StorePage from "./pages/StorePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage";
import CartBadge from "./components/CartBadge";

export default function App() {
  const [filter, setFilter] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (value) => filter === value;

  // Stäng meny
  const closeMenu = () => {
    const menu = document.querySelector(".nav-links");
    if (menu) menu.classList.remove("open");
  };

  useEffect(() => {
    if (location.pathname === "/checkout") {
      setFilter(null);
    }
  }, [location.pathname]);

  return (
    <div>
      <header className="navbar">

        <Link
          to="/"
          className="nav-logo"
          onClick={() => {
            setFilter(null);
            navigate("/");
            closeMenu();
          }}
        >
          Klädbutiken
        </Link>

        <div
          className="hamburger"
          onClick={() => {
            document.querySelector(".nav-links").classList.toggle("open");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className="nav-links">
          <button
            className={isActive("women's clothing") ? "nav-btn active" : "nav-btn"}
            onClick={() => {
              setFilter("women's clothing");
              navigate("/");
              closeMenu();
            }}
          >
            Dam
          </button>

          <button
            className={isActive("men's clothing") ? "nav-btn active" : "nav-btn"}
            onClick={() => {
              setFilter("men's clothing");
              navigate("/");
              closeMenu();
            }}
          >
            Herr
          </button>

          <button
            className={isActive("jewelery") ? "nav-btn active" : "nav-btn"}
            onClick={() => {
              setFilter("jewelery");
              navigate("/");
              closeMenu();
            }}
          >
            Accessoarer
          </button>

          <button
            className={isActive("electronics") ? "nav-btn active" : "nav-btn"}
            onClick={() => {
              setFilter("electronics");
              navigate("/");
              closeMenu();
            }}
          >
            Teknik
          </button>
        </nav>

        <CartBadge />
      </header>

      <Routes>
        <Route
          path="/product/:id"
          element={<ProductDetailPage setFilter={setFilter} />}
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/" element={<StorePage filter={filter} />} />
      </Routes>
    </div>
  );
}
