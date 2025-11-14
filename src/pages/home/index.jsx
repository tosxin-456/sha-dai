import React, { useEffect, useState } from "react";
import personasData from "../../utils/personas.json";
import PersonaCard from "../../components/PersonaCard";
import ProductCard from "../../components/ProductCard";
import CartDrawer from "../../components/CartDrawer";
import { motion } from "framer-motion";

export default function App() {
  const [selected, setSelected] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (selected) {
      const g = selected.accentGradient;
      document.documentElement.style.setProperty("--accent", selected.color);
      document.documentElement.style.setProperty("--bg-start", g[0]);
      document.documentElement.style.setProperty("--bg-end", g[1]);
    } else {
      document.documentElement.style.setProperty("--accent", "#6B1B6A");
      document.documentElement.style.setProperty("--bg-start", "#ffffff");
      document.documentElement.style.setProperty("--bg-end", "#f7f7f7");
    }
  }, [selected]);

  function handleAddToCart(label, variant = "Women", price = "₦3,500") {
    setCartItems((s) => [...s, { label, variant, price }]);
    setCartOpen(true);
  }

  function handleCheckout() {
    // Placeholder for payment integrations (Paystack / Flutterwave)
    alert(
      "Checkout flow stub — integrate Paystack / Flutterwave backend here."
    );
  }

  return (
    <div className="min-h-screen p-6 transition-accent">
      <header className="max-w-6xl mx-auto mb-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Perfume Persona Capsule Shop</h1>
          <div>
            <button
              onClick={() => setCartOpen(true)}
              className="px-4 py-2 rounded-lg bg-black text-white"
            >
              Open Cart ({cartItems.length})
            </button>
          </div>
        </div>
      </header>
      <main className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8">
        <section className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {personasData.personas.map((p) => (
              <PersonaCard
                key={p.name}
                persona={p}
                isSelected={selected?.name === p.name}
                onSelect={(persona) => setSelected(persona)}
              />
            ))}
          </div>
        </section>

        <aside className="lg:col-span-1">
          <motion.div
            layout
            className="sticky top-6 bg-white p-6 rounded-3xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">Your Capsule</h3>

            {!selected ? (
              <p className="text-sm opacity-70">
                Select a persona to reveal your capsule.
              </p>
            ) : (
              <div className="space-y-4">
                <p className="text-sm opacity-80">{selected.whyItFits}</p>

                {Object.entries(selected.topCapsuleMatches).map(([k, v]) => (
                  <ProductCard
                    key={k}
                    label={v}
                    onAdd={() => handleAddToCart(v, k)}
                  />
                ))}
                <div className="mt-3 flex gap-2">
                  <button
                    onClick={() =>
                      alert("Quick Buy stub — open checkout modal")
                    }
                    className="flex-1 py-2 rounded-lg border border-[var(--accent)] text-[var(--accent)]"
                  >
                    Quick Buy
                  </button>

                  <button
                    onClick={() => alert("Open full product sheets — stub")}
                    className="flex-1 py-2 rounded-lg bg-[var(--accent)] text-white"
                  >
                    View Full
                  </button>
                </div>
              </div>
            )}
          </motion.div>

          <motion.div layout className="mt-6 bg-white p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-3">Scent Filters</h4>
            <div className="flex gap-2 flex-wrap">
              {["Oud", "Fresh", "Sweet", "Spicy", "Floral", "Woody"].map(
                (s) => (
                  <button
                    key={s}
                    className="px-3 py-1 rounded-full bg-gray-100 text-sm"
                  >
                    {s}
                  </button>
                )
              )}
            </div>
          </motion.div>
        </aside>
      </main>

      <CartDrawer
        open={cartOpen}
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <footer className="max-w-6xl mx-auto mt-12 text-center text-sm opacity-70">
        Built with ❤️ — ask me to export as ZIP or TypeScript variant
      </footer>
    </div>
  );
}
