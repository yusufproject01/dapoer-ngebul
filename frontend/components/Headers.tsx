import { poppins } from "./Typography";

export default function Headers({
  Title,
  Description,
}: {
  Title: string;
  Description: string;
}) {
  return (
    <section
      className={`${poppins.className} sm:pt-20 pt-20 sm:pb-0 pb-7 sm:px-0 px-4 w-full sm:h-56 h-auto sm:gap-y-6 gap-y-2 bg-leafGreen flex flex-col items-center justify-center`}
    >
      <h1 className="sm:text-5xl text-2xl text-white text-center">{Title}</h1>
      <p className="sm:text-xl text-sm text-white text-center">{Description}</p>
    </section>
  );
}
