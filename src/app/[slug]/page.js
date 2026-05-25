"use client";
import npcs from "@/data/npcs_stardewvalley.json";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PageNpc({ params }) {
    const { slug } = useParams();
    const npc = npcs.find((npc) => npc.slug === slug);
    return (
        <div className="bg-[url(/img/bg.png)] bg-center h-[100vh] bg-no-repeat bg-cover ">
            <Link
                href="/"
                className="absolute top-2 left-2 text-2xl bg-yellow p-3 text-orange2 font-stardewValleyIngane border-2 border-orange2 w-fit hover:bg-yellow/50"
            >
                Voltar
            </Link>
            <main className="h-full flex flex-col justify-center items-center ">
                <div className="items-center m-2 max-w-[1000px] flex flex-col justify-center border-2 border-orange2 text-center bg-yellow p-3 text-orange2 font-stardewValleyIngane">
                    <h1 className="text-5xl font-bold mb-2">{npc.nome}</h1>
                    <p className="text-2xl">{npc.descricao}</p>
                </div>
            </main>
        </div>
    );
}