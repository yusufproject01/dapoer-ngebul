import MenuType from "../types/menuType";
import {
  createMenu,
  deleteMenu,
  getAllMenu,
  getMenuById,
  updateMenu,
} from "./menu.repository";

// Function to get all menu data and services
export const getAllMenuServices = async () => {
  const responseDatas = await getAllMenu();
  return responseDatas;
};

// Function to get a specific menu by ID
export const getMenuByIdServices = async (id: number) => {
  const responseDatas = await getMenuById(id);
  return responseDatas;
};

// Function to create a new menu
export const createMenuServices = async (menuType: MenuType) => {
  const responseDatas = await createMenu(menuType);
  return responseDatas;
};

// Function to update a menu by ID
export const updateMenuServices = async (id: number, menuType: MenuType) => {
  const responseDatas = await updateMenu(id, menuType);
  return responseDatas;
};

// Function to delete a menu by ID
export const deleteMenuServices = async (id: number) => {
  const responseDatas = await deleteMenu(id);
  return responseDatas;
};
