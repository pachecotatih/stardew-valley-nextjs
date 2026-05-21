import npcs from "@/data/npcs_stardewvalley.json";

export default function PageNpc({ params }) {
    const {slug} = params;
    const npc = npcs.find((npc) => npc.slug === slug);
    return (
        <div className="flex items-center justify-center h-screen">
            <main className="text-center">
                <h1 className="text-4xl font-bold mb-2">
                    {npc.nome}
                </h1>
                <p>{npc.descricao}</p>
            </main>
        </div>
    );
}