// Menu Repository
import { getAllMenu } from "@/services/menu.services";
import MenuType from "@/types/menu.types";

export async function fetchMenusWithFormat() {
  const menus = await getAllMenu();

  return menus.map((m: any) => ({
    ...m,
    formattedPrice: `Rp ${m.price.toLocaleString("id-ID")}`,
  }));
}
