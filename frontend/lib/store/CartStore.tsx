import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],

  addToCart: (item: any) =>
    set((state: any) => {
      const exist = state.cart.find((i: any) => i.id === item.id);

      if (exist) {
        return {
          cart: state.cart.map((i: any) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }

      return { cart: [...state.cart, { ...item, qty: 1 }] };
    }),

  removeFromCart: (id: number) =>
    set((state: any) => ({
      cart: state.cart.filter((i: any) => i.id !== id),
    })),

  clearCart: () => set({ cart: [] }),
}));
