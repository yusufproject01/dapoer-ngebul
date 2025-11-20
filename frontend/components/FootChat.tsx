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
        <div className="flex flex-col">
          <h1 className="sm:text-2xl text-xl text-center text-leafGreen">
            {Title}
          </h1>
          <p className="sm:text-xl text-sm text-center text-slate-600">
            {Description}
          </p>
        </div>
        <button
          onClick={handleClick}
          className="sm:text-base text-sm py-2 sm:px-4 px-6 bg-leafGreen text-white rounded-full"
        >
          {TextBtn}
        </button>
      </div>
    </section>
  );
}
