import npcs from "@/data/npcs_stardewvalley.json";
import Link from "next/link";
import HeaderComponent from "@/shared/components/header";

export default function Home() {
  return (
    <div className="bg-[url(/img/bg.png)] h-[100vh] bg-no-repeat bg-center bg-cover flex flex-col justify-center">
      {<HeaderComponent />}
      <main>
        <ul className="gap-4 w-full flex flex-wrap mx-auto max-w-[1000px] justify-center">
          {npcs.map((npc) => (
            <li
              key={npc.slug}
              className="text-3xl text-center bg-yellow p-3 text-orange2 font-stardewValleyIngane border-2 border-orange2 hover:bg-yellow/50 cursor-pointer"
            >
              <Link href={`/${npc.slug}`}>{npc.nome}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
