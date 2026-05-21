import Image from "next/image";
import npcs from "@/data/npcs_stardewvalley.json";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-2">
          Stardew Valley - Personagens
        </h1>
        <ul className="gap-4 w-full">
        {npcs.map((npc) => (
          <li key={npc.slug} className="hover:text-blue-500">
            <Link href={`/${npc.slug}`}>
              {npc.nome}
            </Link>
          </li>
        ))}
      </ul>
      </main>
    </div>
  );
}
