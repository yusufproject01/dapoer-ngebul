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
      className={`${poppins.className} w-full sm:px-0 px-4 sm:gap-y-6 gap-y-4 text-white sm:py-16 py-12 bg-leafGreen flex flex-col items-center justify-center`}
    >
      <div className="w-full flex flex-col">
        <h1 className="sm:text-5xl text-2xl text-center">{Title}</h1>
        <p className="sm:text-xl text-sm text-center">{Description}</p>
      </div>
      <button
        onClick={handleClick}
        className="py-4 px-6 sm:text-lg text-sm bg-white text-leafGreen rounded-xl hover:bg-gray-100 transition"
      >
        {TextBtn}
      </button>
    </section>
  );
}
