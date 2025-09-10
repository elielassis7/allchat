import { useEffect, useState } from "react";
import api from "../../lib/axios";
import type { ContentItem } from "../../types";

export function Content() {
  const [items, setItems] = useState<ContentItem[]>([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    try {
      // GET /admin/content
      const { data } = await api.get<ContentItem[]>("/admin/content");
      setItems(data);
    } catch {
      setItems([{ id: 1, title: "Primeiro post" }]);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const addItem = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    try {
      // POST /admin/content -> retorna item criado
      const { data } = await api.post<ContentItem>("/admin/content", { title });
      setItems((arr) => [...arr, data]);
      setTitle("");
    } catch {
      // fallback local
      setItems((arr) => [...arr, { id: Date.now(), title }]);
      setTitle("");
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Conteúdo</h2>

      <form onSubmit={addItem} className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título do conteúdo"
          className="flex-1 rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 outline-none focus:border-blue-500"
        />
        <button className="rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2">
          Adicionar
        </button>
      </form>

      <ul className="grid gap-2 mt-4">
        {items.map((it) => (
          <li
            key={it.id}
            className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/40 p-3"
          >
            <span>{it.title}</span>
            <div className="flex gap-2">
              <button className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800">
                Editar
              </button>
              <button className="rounded-lg bg-red-600 hover:bg-red-500 px-3 py-1.5">
                Excluir
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
