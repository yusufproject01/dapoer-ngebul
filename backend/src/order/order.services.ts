import prisma from "../db/prisma";
import OrderType from "../types/orderType";
import {
  createOrder,
  // deleteOrder,
  getAllOrder,
  getOrderById,
  updateOrder,
} from "./order.repository";

// Function to get all order data and services
export const getAllOrderServices = async () => {
  try {
    const responseDatas = await getAllOrder();
    return responseDatas;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function to get a specific order by ID
export const getOrderByIdServices = async (id: number) => {
  try {
    const responseDatas = await getOrderById(id);
    return responseDatas;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

// Function untuk membuat order baru (beserta orderItems dan payment)
// export const createOrderServices = async (orderType: OrderType) => {
//   try {
//     // Hitung total harga order
//     const totalPrice = orderType.items.reduce(
//       (acc, item) => acc + item.price * item.quantity,
//       0
//     );

//     // Buat order + orderItems + payment secara bersamaan (nested create)
//     const newOrder = await prisma.order.create({
//       data: {
//         userId: orderType.userId,
//         totalPrice,
//         status: "pending", // bisa kamu ubah nanti setelah payment sukses
//         orderItems: {
//           create: orderType.items.map((item) => ({
//             menuItemId: item.menuItemId,
//             quantity: item.quantity,
//             price: item.price,
//           })),
//         },
//         payments: {
//           create: {
//             userId: orderType.userId,
//             amount: totalPrice,
//           },
//         },
//       },
//       include: {
//         orderItems: true,
//         payments: true,
//       },
//     });

//     return newOrder;
//   } catch (error) {
//     console.error("Gagal membuat order dan payment:", error);
//     throw error;
//   }
// };
// order.service.ts
export const createOrderServices = async (orderType: OrderType) => {
  try {
    // 1️⃣ Ambil semua menu item dari DB berdasarkan ID yang dikirim
    const menuItems = await prisma.menuItem.findMany({
      where: {
        id: { in: orderType.items.map((item) => item.menuItemId) },
      },
      select: { id: true, price: true },
    });

    // 2️⃣ Buat map harga menu yang diambil dari DB
    const priceMap = new Map(menuItems.map((m) => [m.id, m.price]));

    // 3️⃣ Buat data orderItems dengan harga dari DB
    const orderItemsData = orderType.items.map((item) => {
      const price = priceMap.get(item.menuItemId);
      if (!price) {
        throw new Error(
          `Harga untuk menuItemId ${item.menuItemId} tidak ditemukan.`
        );
      }
      return {
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price,
      };
    });

    // 4️⃣ Hitung total harga
    const totalPrice = orderItemsData.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );

    // 5️⃣ Siapkan data lengkap untuk dikirim ke repository
    const newOrderData: OrderType = {
      ...orderType,
      totalPrice,
      status: "pending",
      items: orderItemsData,
    };

    // 6️⃣ Panggil repository untuk membuat order ke DB
    const newOrder = await createOrder(newOrderData);

    return newOrder;
  } catch (error) {
    console.error("Gagal membuat order dan payment:", error);
    throw error;
  }
};

// Function to update a order by ID
export const updateOrderServices = async (id: number, orderType: OrderType) => {
  const responseDatas = await updateOrder(id, orderType);
  return responseDatas;
};

// Function to delete a menu by ID
// export const deleteOrderServices = async (id: number) => {
//   const responseDatas = await deleteOrder(id);
//   return responseDatas;
// };
