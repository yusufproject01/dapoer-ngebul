import prisma from "../db/prisma";
import OrderType from "../types/orderType";

// Function to get all order
export const getAllOrder = async () => {
  try {
    const responseDatas = await prisma.order.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
            phone: true,
            address: true,
          },
        },
        orderItems: {
          include: {
            // order: true,
            menuItem: {
              select: {
                name: true,
                price: true,
                category: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
        payments: true,
      },
      // orderBy: {
      //   createdAt: "desc",
      // },
    });
    return responseDatas;
  } catch (error) {
    console.error("From Repository : Gagal menampilkan order! ", error);
    throw error;
  }
};

// Function to get a specific order by ID
export const getOrderById = async (id: number) => {
  try {
    const responseDatas = await prisma.order.findUnique({
      where: { id },
      include: {
        user: true,
        orderItems: {
          include: {
            menuItem: true,
          },
        },
      },
    });
    return responseDatas;
  } catch (error) {
    console.error("From Repository : Gagal menampilkan order! ", error);
    throw error;
  }
};

// Function untuk membuat order baru (beserta orderItems & payment)
export const createOrder = async (orderType: OrderType) => {
  try {
    const newOrder = await prisma.order.create({
      data: {
        userId: orderType.userId,
        totalPrice: orderType.totalPrice!,
        status: orderType.status || "pending",
        orderItems: {
          create: orderType.items.map((item) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
        payments: {
          create: {
            userId: orderType.userId,
            amount: orderType.totalPrice!,
          },
        },
      },
      include: {
        orderItems: true,
        payments: true,
      },
    });

    return newOrder;
  } catch (error) {
    console.error("Gagal membuat order dan payment:", error);
    throw error;
  }
};

// Function to update a order by ID
export const updateOrder = async (id: number, orderType: OrderType) => {
  try {
    const responseDatas = await prisma.order.update({
      where: { id },
      data: { status: orderType.status },
    });
    return responseDatas;
  } catch (error) {
    console.error("From Repository : Gagal update order! ", error);
    throw error;
  }
};

// Function to delete a order by ID
// export const deleteOrder = async (id: number) => {
//   try {
//     const responseDatas = await prisma.order.delete({ where: { id } });
//     return responseDatas;
//   } catch (error) {
//     console.error("From Repository : Gagal delete order! ", error);
//     throw error;
//   }
// };
