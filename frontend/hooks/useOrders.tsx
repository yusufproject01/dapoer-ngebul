"use client";

import { useEffect, useState } from "react";
import UsersType from "@/types/usersType";
import { getAllUsers } from "@/services/users.services";
import OrderType from "@/types/order.type";
import { getAllOrder } from "@/services/orders.services";

export function useOrders() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadOrders() {
      try {
        const data = await getAllOrder();
        setOrders(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadOrders();
  }, []);

  return { orders, loading };
}
