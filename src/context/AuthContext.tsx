import { createContext, useContext, useMemo, useState } from "react";
import api from "../lib/axios";
import type { AuthResponse, User } from "../types";

type AuthContextType = {
  user: User | null;
  token: string | null;
  loading: boolean;
  authenticated: boolean;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<User | null>(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Endpoint PHP esperado: POST /login
      const { data } = await api.post<AuthResponse>("/login", { email, password });
      setToken(data.token);
      setUser(data.user);
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      return { ok: true };
    } catch (e: any) {
      // mock opcional para desenvolvimento
      if (email === "admin@site.com" && password === "admin123") {
        const mockUser: User = { name: "Admin", email, role: "admin" };
        setToken("dev-token");
        setUser(mockUser);
        localStorage.setItem("token", "dev-token");
        localStorage.setItem("user", JSON.stringify(mockUser));
        return { ok: true };
      }
      const msg = e?.response?.data?.message || "Falha na autenticação";
      return { ok: false, error: msg };
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = useMemo(
    () => ({
      user,
      token,
      loading,
      authenticated: Boolean(token),
      login,
      logout,
    }),
    [user, token, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth deve ser usado dentro de AuthProvider");
  return ctx;
}
