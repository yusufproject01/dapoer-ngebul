export default function useToWhatsApp() {
  const phone = process.env.NEXT_PUBLIC_WA_NUMBER; // ganti nomor admin
  const message = encodeURIComponent(
    "Halo Admin, saya ingin memesan makanan custom dari Dapoer Ngebul. Tolong konfirmasi ketersediaannya ya!"
  );
  return [phone, message];
}
