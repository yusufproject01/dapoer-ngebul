"use client";

import { useEffect, useState } from "react";
import { fetchMenusWithFormat } from "@/repositories/menu.repository";
import MenuType from "@/types/menu.types";
import { getAllMenu } from "@/services/menu.services";

export function useMenu() {
  const [menus, setMenus] = useState<MenuType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMenus() {
      try {
        // const data = await fetchMenusWithFormat();
        // setMenus(data);
        const data = await getAllMenu();
        setMenus(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadMenus();
  }, []);

  return { menus, loading };
}
