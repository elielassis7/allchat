import { useEffect, useState } from "react";
import api from "../../lib/axios";
import type { Stats } from "../../types";

function StatCard({ title, value }: { title: string; value: string | number }) {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
      <div className="text-slate-400 text-sm">{title}</div>
      <div className="text-2xl font-bold">{value}</div>
    </div>
  );
}

export function Dashboard() {
  const [stats, setStats] = useState<Stats>({ users: 0, posts: 0, visits: 0, conversions: 0 });

  useEffect(() => {
    (async () => {
      try {
        // GET /admin/stats -> { users, posts, visits, conversions }
        const { data } = await api.get<Stats>("/admin/stats");
        setStats(data);
      } catch {
        // mock fallback
        setStats({ users: 128, posts: 42, visits: 5780, conversions: 73 });
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard title="Usuários" value={stats.users} />
        <StatCard title="Posts" value={stats.posts} />
        <StatCard title="Visitas" value={stats.visits} />
        <StatCard title="Conversões" value={`${stats.conversions}%`} />
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
        <h3 className="font-semibold mb-1">Resumo</h3>
        <p className="text-slate-300">
          Conecte este painel aos seus endpoints em PHP para visualizar métricas reais.
        </p>
      </div>
    </>
  );
}
