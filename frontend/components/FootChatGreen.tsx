import useToWhatsApp from "@/hooks/useToWA";
import { poppins } from "./Typography";

export default function FootChatGreen({
  Title,
  Description,
  TextBtn,
}: {
  Title: string;
  Description: string;
  TextBtn: string;
}) {
  const [phone, message] = useToWhatsApp();

  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };

  return (
    <section
      className={`${poppins.className} w-full gap-y-6 text-white py-16 bg-leafGreen flex flex-col items-center justify-center`}
    >
      <h1 className="text-4xl">{Title}</h1>
      <p className="text-lg">{Description}</p>

      <button
        onClick={handleClick}
        className="py-4 px-6 text-lg bg-white text-leafGreen rounded-xl hover:bg-gray-100 transition"
      >
        {TextBtn}
      </button>
    </section>
  );
}
