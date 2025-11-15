"use client";

import { getAllOrder } from "@/services/orders.services";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await getAllOrder();
        setOrders(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchOrders();
  }, []);

  return (
    <main className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Daftar Order</h1>

      {orders.length === 0 ? (
        <p>Tidak ada order</p>
      ) : (
        <div className="w-full h-full grid grid-cols-3 gap-5">
          {orders.map((o) => (
            <div
              key={o.id}
              className="bg-white border rounded-lg shadow p-4 space-y-1 hover:cursor-pointer hover:brightness-95"
            >
              <h2 className="text-lg font-semibold">
                Order #{o.id} —{" "}
                <span
                  className={
                    o.status === "completed"
                      ? "text-green-600 font-bold"
                      : "text-yellow-700 font-bold"
                  }
                >
                  {o.status}
                </span>
              </h2>
              <p>
                Name: {o.user?.name} ({o.user?.email})
              </p>
              <p>Phone: {o.user?.phone} </p>
              <p>Tanggal: {new Date(o.orderDate).toLocaleString()}</p>
              <div className="border-t pt-2 mt-2">
                <h3 className="font-medium">Daftar Item:</h3>
                {o.orderItems?.map((i: any) => (
                  <div key={i.id} className="ml-4 text-sm">
                    • {i.menuItem?.name ?? `Menu ID ${i.menuItemId}`} —{" "}
                    {i.quantity}x (Rp {i.price.toLocaleString("id-ID")})
                  </div>
                ))}
              </div>

              <div className="border-t pt-2 mt-2">
                <h3 className="font-medium">Pembayaran:</h3>
                {o.payments?.length > 0 ? (
                  o.payments.map((p: any) => (
                    <p key={o.id}>
                      Total Harga: Rp {o.totalPrice.toLocaleString("id-ID")}
                    </p>
                  ))
                ) : (
                  <p className="ml-4 text-sm text-slate-500">Belum dibayar</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
