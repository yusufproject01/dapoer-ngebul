import { BiAward, BiHeart, BiUser } from "react-icons/bi";
import { CgLock } from "react-icons/cg";

export const values = [
  {
    icon: <BiHeart size={40} className="text-white" />,
    title: "Dibuat dengan Cinta",
    desc: "Setiap hidangan dibuat dengan penuh perhatian seperti memasak untuk keluarga sendiri",
  },
  {
    icon: <BiAward size={40} className="text-white" />,
    title: "Kualitas Terjaga",
    desc: "Menggunakan bahan-bahan segar pilihan dan standar kebersihan yang ketat",
  },
  {
    icon: <BiUser size={40} className="text-white" />,
    title: "Melayani dengan Hati",
    desc: "Kepuasan pelanggan adalah prioritas utama dalam setiap pesanan",
  },
  {
    icon: <CgLock size={40} className="text-white" />,
    title: "Tepat Waktu",
    desc: "Komitmen kami untuk selalu mengantarkan pesanan tepat waktu dan fresh",
  },
];
