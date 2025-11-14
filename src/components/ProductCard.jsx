import React from "react";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";

export default function ProductCard({ label, price = "₦3,500", onAdd }) {
  return (
    <motion.div layout className="bg-white rounded-xl p-4 shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-sm font-medium">{label}</div>
          <div className="text-xs opacity-70">50ml</div>
        </div>
        <div className="text-sm font-semibold">{price}</div>
      </div>

      <button
        onClick={onAdd}
        className="mt-3 w-full py-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-600 text-white flex items-center justify-center gap-2"
      >
        <ShoppingCart size={16} /> Add to cart
      </button>
    </motion.div>
  );
}
