"use client";
import npcs from "@/data/npcs_stardewvalley.json";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function PageNpc({ params }) {
    const { slug } = useParams();
    const npc = npcs.find((npc) => npc.slug === slug);
    return (
        <div className="bg-[url(/img/bg.png)]  flex flex-col bg-center h-[100vh] bg-no-repeat bg-cover font-stardewValleyIngane ">
            <Link
                href="/"
                className="absolute top-2 left-2 text-2xl bg-yellow p-3 text-orange2 font-stardewValleyIngane border-2 border-orange2 w-fit hover:bg-yellow/50"
            >
                Voltar
            </Link>
            <main className="h-full flex flex-col justify-center items-center m-2">
                <div className="items-center my-2 max-w-[1000px] w-full flex flex-col justify-center border-2 border-orange2 text-center bg-yellow p-3 text-orange2 ">
                    <h1 className="text-5xl font-bold mb-2">{npc.nome}</h1>
                    <p className="text-2xl">{npc.descricao}</p>
                    <div className="flex justify-around  w-full mt-4 flex-wrap">
                        <div className="mb-2">
                            <h2 className="text-4xl font-bold mb-2 text-orange1">
                                Familia
                            </h2>
                            {
                                npc.familia.length === 0 ? <p className="text-2xl">Não possui</p> :
                                    <ul className="gap-2 w-full flex flex-wrap mx-auto max-w-[200px] justify-center">
                                        {npc.familia.map((familia, index) => (
                                            <li
                                                key={familia}
                                                className="text-2xl"
                                            >
                                                {familia}
                                                {index < npc.familia.length - 2 && ', '}

                                                {index === npc.familia.length - 2 &&
                                                    npc.familia.length > 1 &&
                                                    ' e '}
                                            </li>
                                        ))}
                                    </ul>
                            }

                        </div>
                        {
                            npc.aniversario && npc.aniversario.dia && npc.aniversario.estacao && <div className="">
                                <h2 className="text-4xl font-bold mb-2 text-orange1">
                                    Aniversário
                                </h2>
                                <p className="text-2xl">
                                    {npc.aniversario.dia} de {npc.aniversario.estacao}
                                </p>


                            </div>
                        }
                        <div>
                            <h2 className="text-4xl font-bold mb-2 text-orange1">
                                Pode casar?
                            </h2>
                            <p className="text-2xl">{npc.casavel ? "Sim" : "Não"}</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2 bg-yellow  w-full p-3 text-orange2 items-center m-2 max-w-[1000px] flex flex-col justify-center border-2 border-orange2">
                    <h2 className="text-4xl font-bold mb-2 text-orange1">Presentes Amados</h2>
                    <ul className="gap-4 w-full flex flex-wrap mx-auto max-w-[1000px] justify-center">
                        {npc.presentesAmados.map((presente) => (
                            <li
                                key={presente}
                                className="text-2xl border-2 border-orange2 p-3"
                            >
                                {presente}
                            </li>
                        ))}
                    </ul>
                </div>
            </main>
        </div>
    );
}