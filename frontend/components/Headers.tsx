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
      className={`${poppins.className} w-full h-56 gap-y-6 bg-leafGreen flex flex-col items-center justify-center`}
    >
      <h1 className="text-5xl text-white">{Title}</h1>
      <p className="text-xl text-white">{Description}</p>
    </section>
  );
}
