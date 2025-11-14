import React from "react";
import { motion } from "framer-motion";

export default function CartDrawer({ open, items, onClose, onCheckout }) {
  return (
    <motion.aside
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed right-0 top-0 h-full w-full md:w-[420px] bg-white shadow-2xl p-6 z-50"
      aria-hidden={!open}
    >
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold">Your Cart</h4>
        <button onClick={onClose} className="text-sm opacity-70">
          Close
        </button>
      </div>

      <div className="mt-6 space-y-4">
        {items.length === 0 ? (
          <div className="text-sm opacity-70">Your cart is empty</div>
        ) : (
          items.map((it, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="font-medium">{it.label}</div>
                <div className="text-xs opacity-70">{it.variant}</div>
              </div>
              <div className="text-sm">{it.price}</div>
            </div>
          ))
        )}
      </div>

      <div className="mt-6">
        <button
          onClick={onCheckout}
          className="w-full py-3 rounded-xl bg-black text-white font-semibold"
        >
          Checkout
        </button>
      </div>
    </motion.aside>
  );
}
