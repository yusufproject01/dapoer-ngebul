import prisma from "../db/prisma";
import MenuType from "../types/menuType";

// Function to get all menu
export const getAllMenu = async () => {
  const responseDatas = await prisma.menuItem.findMany();
  return responseDatas;
};

// Function to get a specific menu by ID
export const getMenuById = async (id: number) => {
  const responseDatas = await prisma.menuItem.findUnique({ where: { id } });
  return responseDatas;
};

// Function to create a menu
export const createMenu = async (menuType: MenuType) => {
  try {
    const responseDatas = await prisma.menuItem.create({
      data: {
        name: menuType.name,
        price: menuType.price,
        categoryId: menuType.categoryId,
      },
    });
    return responseDatas;
  } catch (error) {
    console.error("Gagal membuat menu:", error);
    throw error;
  }
};

// Function to update a menu by ID
export const updateMenu = async (id: number, menuType: MenuType) => {
  try {
    const responseDatas = await prisma.menuItem.update({
      where: { id },
      data: {
        name: menuType.name,
        price: menuType.price,
      },
    });
    return responseDatas;
  } catch (error) {
    console.error("Gagal memperbarui menu:", error);
    throw error;
  }
};

// Function to delete a menu by ID
export const deleteMenu = async (id: number) => {
  const responseDatas = await prisma.menuItem.delete({ where: { id } });
  return responseDatas;
};
