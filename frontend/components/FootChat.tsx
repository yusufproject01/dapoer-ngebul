import useToWhatsApp from "@/hooks/useToWA";

export default function FootChat({
  Title,
  Description,
  TextBtn,
}: {
  Title: string;
  Description: string;
  TextBtn: string;
}) {
  const [phone, message] = useToWhatsApp();

  // handle button
  const handleClick = () => {
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
  };
  return (
    <section className="w-full px-6 my-8">
      <div className="w-full bg-white rounded-xl shadow-md py-10 flex flex-col items-center justify-center gap-y-4">
        <h1 className="text-2xl text-leafGreen">{Title}</h1>
        <p className="text-xl text-slate-600">{Description}</p>
        <button
          onClick={handleClick}
          className="py-2 px-4 bg-leafGreen text-white rounded-full"
        >
          {TextBtn}
        </button>
      </div>
    </section>
  );
}
