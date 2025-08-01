import { Oswald } from "next/font/google";

const sourceSans3 = Oswald({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export default function Title({ title }: { title: string }) {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-6xl">.</h1>
        <h1 className="text-6xl">.</h1>
      </div>
      <hr />
      <h1 className={`text-6xl font-bold my-4 ${sourceSans3.className}`}>
        {title}
      </h1>
      <hr />
      <div className="flex justify-between items-center">
        <h1 className="text-6xl" style={{ transform: "rotate(180deg)" }}>.</h1>
        <h1 className="text-6xl" style={{ transform: "rotate(180deg)" }}>.</h1>
      </div>
    </div>
  );
}
