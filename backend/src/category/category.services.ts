import CategoryType from "../types/categoryType";
import {
  createCategory,
  deleteCategory,
  getCategoryById,
  getCategoryDatas,
  updateCategory,
} from "./category.repository";

// Function to get all category data and services
export const getAllCategoryServices = async () => {
  const responseDatas = await getCategoryDatas();
  return responseDatas;
};

// Function to get a specific category by ID
export const getCategoryByIdServices = async (id: number) => {
  const responseDatas = await getCategoryById(id);
  return responseDatas;
};

// Function to create a new category
export const createCategoryServices = async (categoryType: CategoryType) => {
  const responseDatas = await createCategory(categoryType);
  return responseDatas;
};

// Function to update a category by ID
export const updateCategoryServices = async (
  id: number,
  categoryType: CategoryType
) => {
  const responseDatas = await updateCategory(id, categoryType);
  return responseDatas;
};

// Function to delete a category by ID
export const deleteCategoryServices = async (id: number) => {
  const responseDatas = await deleteCategory(id);
  return responseDatas;
};
