import { useEffect, useState } from "react";
import api from "../../lib/axios";
import type { UserRecord } from "../../types";

export default function Users() {
  const [users, setUsers] = useState<UserRecord[]>([]);

  useEffect(() => {
    (async () => {
      try {
        // GET /admin/users
        const { data } = await api.get<UserRecord[]>("/admin/users");
        setUsers(data);
      } catch {
        setUsers([
          { id: 1, name: "Alice", email: "alice@site.com" },
          { id: 2, name: "Bob", email: "bob@site.com" },
        ]);
      }
    })();
  }, []);

  return (
    <>
      <h2 className="text-xl font-semibold">Usuários</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-800">
        <table className="min-w-full text-sm">
          <thead className="bg-slate-900/60">
            <tr className="text-left">
              <th className="px-4 py-3 border-b border-slate-800">Nome</th>
              <th className="px-4 py-3 border-b border-slate-800">Email</th>
              <th className="px-4 py-3 border-b border-slate-800">Ações</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} className="border-b border-slate-800">
                <td className="px-4 py-3">{u.name}</td>
                <td className="px-4 py-3">{u.email}</td>
                <td className="px-4 py-3">
                  <div className="flex gap-2">
                    <button className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800">
                      Editar
                    </button>
                    <button className="rounded-lg bg-red-600 hover:bg-red-500 px-3 py-1.5">
                      Remover
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {users.length === 0 && (
              <tr>
                <td className="px-4 py-6 text-slate-400" colSpan={3}>
                  Nenhum usuário encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
