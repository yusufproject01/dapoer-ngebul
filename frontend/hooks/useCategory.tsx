"use client";

import { useEffect, useState } from "react";
import { getAllCategory } from "@/services/category.services";
import CategoryType from "@/types/category.type";

export function useCategory() {
  const [category, setCategory] = useState<CategoryType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCategory() {
      try {
        const data = await getAllCategory();
        setCategory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadCategory();
  }, []);

  return { category, loading };
}
