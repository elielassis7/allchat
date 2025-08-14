import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("admin@site.com");
  const [password, setPassword] = useState("admin123");
  const [error, setError] = useState("");

  const from = (location.state as any)?.from?.pathname || "/admin";

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    const res = await login(email, password);
    if (res.ok) navigate(from, { replace: true });
    else setError(res.error || "Falha ao entrar");
  };

  return (
    <div className="min-h-screen grid place-items-center bg-slate-950 text-slate-100 px-6">
      <form
        onSubmit={onSubmit}
        className="w-full max-w-md bg-slate-900/60 border border-slate-700 rounded-xl p-6 shadow-xl space-y-4"
      >
        <h1 className="text-2xl font-bold">Entrar</h1>

        <div className="space-y-1">
          <label className="text-sm text-slate-400">Email</label>
          <input
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@site.com"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-slate-400">Senha</label>
          <input
            type="password"
            className="w-full rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 outline-none focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="sua senha"
            required
          />
        </div>

        {error && <div className="text-red-400 text-sm">{error}</div>}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-blue-600 hover:bg-blue-500 transition-colors px-4 py-2 font-medium"
        >
          {loading ? "Entrando..." : "Entrar"}
        </button>
      </form>
    </div>
  );
}
