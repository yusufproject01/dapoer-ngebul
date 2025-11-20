"use client";
import Link from "next/link";
import { useCartStore } from "@/lib/store/CartStore";
import { FaShoppingBag } from "react-icons/fa";

export default function CartButton() {
  const cart = useCartStore((state: any) => state.cart);
  const totalQty = cart.reduce((sum: number, item: any) => sum + item.qty, 0);

  return (
    <Link
      href="/menu/order"
      className="fixed bottom-6 right-6 bg-leafGreen text-white p-4 rounded-full shadow-lg z-20"
    >
      <div className="relative">
        <FaShoppingBag size={28} />
        {/* {cart.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            {cart.length}
          </span>
        )} */}
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-white w-5 h-5 flex items-center justify-center rounded-full">
            {totalQty}
          </span>
        )}
      </div>
    </Link>
  );
}
