import prisma from "../db/prisma";
import CategoryType from "../types/categoryType";

// Function to get all category
export const getCategoryDatas = async () => {
  const responseDatas = await prisma.category.findMany();
  return responseDatas;
};

// Function to get a specific category by ID
export const getCategoryById = async (id: number) => {
  const responseDatas = await prisma.category.findUnique({ where: { id } });
  return responseDatas;
};

// Function to create a category
export const createCategory = async (categoryType: CategoryType) => {
  const responseDatas = await prisma.category.create({
    data: {
      name: categoryType.name,
    },
  });
  return responseDatas;
};

// Function to update a category by ID
export const updateCategory = async (
  id: number,
  categoryType: CategoryType
) => {
  const responseDatas = await prisma.category.update({
    where: { id },
    data: {
      name: categoryType.name,
    },
  });
  return responseDatas;
};

// Function to delete a category by ID
export const deleteCategory = async (id: number) => {
  const responseDatas = await prisma.category.delete({ where: { id } });
  return responseDatas;
};
