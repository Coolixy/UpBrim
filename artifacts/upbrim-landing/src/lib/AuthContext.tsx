import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { getSession, login as authLogin, logout as authLogout, signup as authSignup, type User } from "./auth";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => { ok: boolean; error?: string };
  signup: (name: string, email: string, password: string) => { ok: boolean; error?: string };
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => getSession());

  const login = useCallback((email: string, password: string) => {
    const result = authLogin(email, password);
    if (result) {
      setUser(result);
      return { ok: true };
    }
    return { ok: false, error: "Incorrect email or password." };
  }, []);

  const signup = useCallback((name: string, email: string, password: string) => {
    const result = authSignup(name, email, password);
    if (result.ok) {
      setUser({ name, email });
    }
    return result;
  }, []);

  const logout = useCallback(() => {
    authLogout();
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
