import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const onLogout = () => {
    logout();
    navigate("/login");
  };

  const linkBase =
    "px-3 py-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/40";
  const linkActive = "bg-blue-600 text-white hover:bg-blue-500";

  return (
    <div className="min-h-screen grid md:grid-cols-[240px_1fr] bg-slate-950 text-slate-100">
      <aside className="border-b md:border-b-0 md:border-r border-slate-800 p-4 sticky top-0 h-full">
        <div className="font-extrabold tracking-wide mb-4">Admin</div>
        <nav className="grid gap-2">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/admin/content"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Conteúdo
          </NavLink>
          <NavLink
            to="/admin/users"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Usuários
          </NavLink>
          <NavLink
            to="/admin/settings"
            className={({ isActive }) => `${linkBase} ${isActive ? linkActive : ""}`}
          >
            Configurações
          </NavLink>
        </nav>
      </aside>

      <main className="grid grid-rows-[64px_1fr]">
        <header className="flex items-center justify-between px-4 border-b border-slate-800 bg-slate-900/40">
          <div className="grid">
            <span className="font-semibold">{user?.name}</span>
            <small className="text-slate-400">{user?.role}</small>
          </div>
          <button
            onClick={onLogout}
            className="rounded-lg border border-slate-700 px-3 py-1.5 hover:bg-slate-800"
          >
            Sair
          </button>
        </header>
        <section className="p-4 space-y-4">
          <Outlet />
        </section>
      </main>
    </div>
  );
}
