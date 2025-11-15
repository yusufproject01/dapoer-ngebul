"use client";

import { foodMenu, MenuItem, paketMenu } from "@/lib/Datas/Menu";
import { useCartStore } from "@/lib/store/CartStore";
import { useState } from "react";

export default function useMenuPageHook() {
  const addToCart = useCartStore((state: any) => state.addToCart);

  // 1) Definisikan daftar kategori sebagai 'const' sehingga TypeScript tahu nilainya tetap
  const categories = ["Makanan Satuan", "Menu Paket", "Minuman"] as const;
  type Category = (typeof categories)[number];

  // 2) State activeCategory beri tipe Category
  const [activeCategory, setActiveCategory] =
    useState<Category>("Makanan Satuan");

  // 3) Definisikan categoryData sebagai Record<Category, MenuItem[]>
  //    (untuk sementara semua kategori pakai foodMenu)
  const categoryData: Record<Category, MenuItem[]> = {
    "Makanan Satuan": foodMenu,
    "Menu Paket": paketMenu,
    Minuman: foodMenu,
  };
  return [
    addToCart,
    categories,
    activeCategory,
    setActiveCategory,
    categoryData,
  ];
}
