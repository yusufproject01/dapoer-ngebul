// lib/Text/ToWhatsApp.ts

export const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER || "6281234567890";

export interface OrderItem {
  id: number;
  name: string;
  qty: number;
}

export function generateOrderMessage(orders: OrderItem[]) {
  if (!orders.length) return "Halo, saya ingin memesan makanan.";

  const header = "Halo, saya ingin memesan makanan:\n\n";

  const list = orders.map((item) => `• ${item.name} x ${item.qty}`).join("\n");

  const footer = "\n\nTolong konfirmasi ketersediaannya ya!";

  return `${header}${list}${footer}`;
}

export function generateWaLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
