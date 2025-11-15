"use client";

import { useCartStore } from "@/lib/store/CartStore";
import { useState } from "react";

export default function OrderPage() {
  const cart = useCartStore((state: any) => state.cart);
  const [address, setAddress] = useState("");

  const total = cart.reduce((sum: number, i: any) => sum + i.price * i.qty, 0);

  const sendToWhatsapp = () => {
    const adminNumber = process.env.NEXT_PUBLIC_WA_NUMBER;

    let message = `Halo Admin, saya ingin memesan:%0A%0A`;

    cart.forEach((item: any) => {
      message += `- ${item.qty}x ${item.name} = Rp ${(
        item.price * item.qty
      ).toLocaleString()}%0A`;
    });

    message += `%0ATotal: Rp ${total.toLocaleString()}%0AAlamat: ${address}`;
    message += `%0A%0AMohon konfirmasi ketersediaannya ya!`;

    window.open(`https://wa.me/${adminNumber}?text=${message}`, "_blank");
  };

  return (
    <main className="min-h-screen w-full bg-[#faf8f3] px-6 pb-36 pt-10">
      <h1 className="text-3xl font-bold mb-6 text-leafGreen">
        Ringkasan Pesanan
      </h1>

      {/* Jika Keranjang Kosong */}
      {cart.length === 0 && (
        <p className="text-center text-gray-600 mt-10">
          Keranjang masih kosong.
        </p>
      )}

      {/* List Pesanan */}
      <div className="space-y-4 mb-10">
        {cart.map((item: any) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-xl shadow-md border border-gray-100"
          >
            <div>
              <p className="font-semibold text-gray-800">{item.name}</p>
              <p className="text-sm text-gray-500">Qty: {item.qty}</p>
            </div>

            <p className="font-bold text-orangeAccent">
              Rp {(item.qty * item.price).toLocaleString()}
            </p>
          </div>
        ))}
      </div>

      {/* Input Alamat */}
      <h2 className="text-xl font-bold mb-3 text-gray-800">
        Alamat Pengantaran
      </h2>

      <textarea
        placeholder="Masukkan alamat lengkap…"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full p-4 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-orangeAccent h-32 bg-white"
      />

      {/* Sticky Bottom Checkout Card */}
      <div className="fixed bottom-0 left-0 w-full bg-white shadow-xl p-5 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <p className="text-lg font-semibold text-gray-700">Total</p>
          <p className="text-2xl font-bold text-orangeAccent">
            Rp {total.toLocaleString()}
          </p>
        </div>

        <button
          disabled={!address}
          onClick={sendToWhatsapp}
          className={`w-full py-4 rounded-xl text-white font-semibold text-lg transition ${
            address ? "bg-orangeAccent" : "bg-gray-400"
          }`}
        >
          Pesan via WhatsApp
        </button>
      </div>
    </main>
  );
}
