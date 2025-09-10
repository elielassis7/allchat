import { useEffect, useState } from "react";
import api from "../../lib/axios";
import type { SiteSettings } from "../../types";

export function Settings() {
  const [form, setForm] = useState<SiteSettings>({
    siteName: "Meu Site",
    tagline: "Mais um site incrível",
    theme: "light",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        // GET /admin/settings
        const { data } = await api.get<SiteSettings>("/admin/settings");
        setForm(data);
      } catch {
        // mantém defaults
      }
    })();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value } as SiteSettings));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(false);
    try {
      // PUT /admin/settings
      await api.put("/admin/settings", form);
      setSaved(true);
    } catch {
      setSaved(false);
      alert("Falha ao salvar configurações");
    }
  };

  return (
    <>
      <h2 className="text-xl font-semibold">Configurações</h2>
      <form onSubmit={onSubmit} className="grid gap-3 max-w-xl rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <label className="text-sm text-slate-400">Nome do site</label>
        <input
          name="siteName"
          value={form.siteName}
          onChange={onChange}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 focus:border-blue-500 outline-none"
        />

        <label className="text-sm text-slate-400">Slogan</label>
        <input
          name="tagline"
          value={form.tagline}
          onChange={onChange}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 focus:border-blue-500 outline-none"
        />

        <label className="text-sm text-slate-400">Tema</label>
        <select
          name="theme"
          value={form.theme}
          onChange={onChange}
          className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 focus:border-blue-500 outline-none"
        >
          <option value="light">Claro</option>
          <option value="dark">Escuro</option>
        </select>

        <div className="flex items-center gap-3">
          <button type="submit" className="rounded-lg bg-blue-600 hover:bg-blue-500 px-4 py-2">
            Salvar
          </button>
          {saved && <span className="text-emerald-400 text-sm">Configurações salvas!</span>}
        </div>
      </form>
    </>
  );
}
