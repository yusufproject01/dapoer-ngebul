// lib/Datas/Menu.ts

export interface MenuItem {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  popular?: boolean;
}

export const foodMenu: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Goreng Special",
    price: 20000,
    image: "/Menu/nasi-goreng.png",
    description: "Nasi goreng dengan daging, telur, dan sayuran segar",
    popular: true,
  },
  {
    id: 2,
    name: "Rendang Daging Sapi",
    price: 25000,
    image: "/Menu/rendang.png",
    description: "Rendang daging sapi empuk dengan bumbu tradisional",
    popular: true,
  },
  {
    id: 3,
    name: "Sate Ayam Madura",
    price: 22000,
    image: "/Menu/sate-ayam-madura.png",
    description: "10 tusuk sate ayam dengan bumbu kacang khas",
    popular: true,
  },
  {
    id: 4,
    name: "Soto Ayam Kuning",
    price: 20000,
    image: "/Menu/soto-ayam-kuning.png",
    description: "Soto ayam hangat dengan kuah kuning gurih",
    popular: false,
  },
];
export const paketMenu: MenuItem[] = [
  {
    id: 1,
    name: "Nasi Goreng Paket",
    price: 20000,
    image: "/Menu/nasi-goreng.png",
    description: "Nasi goreng dengan daging, telur, dan sayuran segar",
    popular: false,
  },
  {
    id: 2,
    name: "Rendang Daging Sapi",
    price: 25000,
    image: "/Menu/nasi-goreng.png",
    description: "Rendang daging sapi empuk dengan bumbu tradisional",
    popular: false,
  },
  {
    id: 3,
    name: "Sate Ayam Madura",
    price: 22000,
    image: "/Menu/nasi-goreng.png",
    description: "10 tusuk sate ayam dengan bumbu kacang khas",
    popular: false,
  },
  {
    id: 4,
    name: "Empal Gentong",
    price: 20000,
    image: "/Menu/soto-ayam-kuning.png",
    description: "Empal Gentong hangat dengan kuah kuning ngaldu",
    popular: true,
  },
];
