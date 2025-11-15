import Image from "next/image";
import { poppins } from "../Typography";

export default function AboutSection() {
  return (
    <section
      className={`${poppins.className} w-full pt-20 pb-14 px-6 md:px-16 bg-white flex flex-col md:flex-row items-center justify-between gap-12`}
    >
      {/* Bagian Teks */}
      <div className="flex-1 text-gray-800">
        <h2 className="text-3xl md:text-4xl text-leafGreen mb-6">
          Tentang Dapoer Ngebul
        </h2>
        <p className="mb-4 leading-relaxed">
          Dapoer Ngebul adalah usaha kuliner rumahan yang berawal dari kecintaan
          kami terhadap masakan Indonesia yang autentik dan penuh cita rasa.
        </p>
        <p className="mb-4 leading-relaxed">
          Setiap hidangan dibuat dengan bahan-bahan segar pilihan dan resep
          turun-temurun yang telah kami sempurnakan. Kami percaya bahwa masakan
          rumahan membawa kehangatan dan kenangan yang tak tergantikan.
        </p>
        <p className="leading-relaxed">
          Dari dapur rumah kami di Cirebon, kami melayani pesanan harian, paket
          menu, hingga catering untuk acara spesial Anda. Mari rasakan
          kehangatan masakan rumah di setiap suapan!
        </p>
      </div>

      {/* Bagian Gambar */}
      <div className="flex-1">
        <div className="relative w-full h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/Dapur/dapur-01.png"
            alt="Dapoer Ngebul Kitchen"
            fill
            className="object-cover object-[center_60%]"
            priority
          />
        </div>
      </div>
    </section>
  );
}
