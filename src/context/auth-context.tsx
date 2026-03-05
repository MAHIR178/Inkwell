import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

type User = { email: string };

type UserRecord = {
  email: string;     // stored lowercase
  password: string;  // DEMO ONLY
};

type AuthContextValue = {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string) => void; // no auto-login
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_USER = "inkwell_user_v1";
const STORAGE_USERS = "inkwell_users_v1";

function validateEmail(emailRaw: string): { ok: boolean; message?: string } {
  const email = emailRaw.trim();
  if (!email) return { ok: false, message: "Email is required." };
  if (email.length > 254) return { ok: false, message: "Email is too long." };

  const at = email.indexOf("@");
  if (at <= 0 || at !== email.lastIndexOf("@"))
    return { ok: false, message: "Email must contain exactly one '@'." };

  const local = email.slice(0, at);
  const domain = email.slice(at + 1);

  if (local.length > 64) return { ok: false, message: "Email local-part is too long." };
  if (!domain) return { ok: false, message: "Email domain is missing." };
  if (local.startsWith(".") || local.endsWith("."))
    return { ok: false, message: "Email local-part can't start/end with '.'." };
  if (email.includes("..")) return { ok: false, message: "Email can't contain consecutive dots." };
  if (!domain.includes(".")) return { ok: false, message: "Email domain must contain a '.'." };

  const basicPattern =
    /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)+$/;
  if (!basicPattern.test(email)) return { ok: false, message: "Email format is invalid." };

  return { ok: true };
}

function validatePassword(pw: string): { ok: boolean; message?: string } {
  if (!pw?.trim()) return { ok: false, message: "Password is required." };
  if (pw.length < 6) return { ok: false, message: "Password must be at least 6 characters." };
  return { ok: true };
}

function loadUsers(): UserRecord[] {
  try {
    const raw = localStorage.getItem(STORAGE_USERS);
    if (!raw) return [];
    const arr = JSON.parse(raw) as UserRecord[];
    if (!Array.isArray(arr)) return [];
    return arr
      .filter((u) => u && typeof u.email === "string" && typeof u.password === "string")
      .map((u) => ({ email: u.email.toLowerCase().trim(), password: u.password }));
  } catch {
    return [];
  }
}

function saveUsers(users: UserRecord[]) {
  localStorage.setItem(STORAGE_USERS, JSON.stringify(users));
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [users, setUsers] = useState<UserRecord[]>([]);

  useEffect(() => {
    setUsers(loadUsers());
    try {
      const raw = localStorage.getItem(STORAGE_USER);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {}
  }, []);

  const persistUser = (u: User | null) => {
    setUser(u);
    try {
      if (u) localStorage.setItem(STORAGE_USER, JSON.stringify(u));
      else localStorage.removeItem(STORAGE_USER);
    } catch {}
  };

  const value = useMemo<AuthContextValue>(() => {
    return {
      user,

      login: (emailRaw: string, password: string) => {
        const email = emailRaw.trim().toLowerCase();

        const ev = validateEmail(email);
        if (!ev.ok) throw new Error(ev.message || "Invalid email.");

        const pv = validatePassword(password);
        if (!pv.ok) throw new Error(pv.message || "Invalid password.");

        const found = users.find((u) => u.email === email);
        if (!found) throw new Error("No account found. Please create an account first.");
        if (found.password !== password) throw new Error("Incorrect password.");

        persistUser({ email });
      },

      // ✅ creates account only
      signup: (emailRaw: string, password: string) => {
        const email = emailRaw.trim().toLowerCase();

        const ev = validateEmail(email);
        if (!ev.ok) throw new Error(ev.message || "Invalid email.");

        const pv = validatePassword(password);
        if (!pv.ok) throw new Error(pv.message || "Invalid password.");

        const exists = users.some((u) => u.email === email);
        if (exists) throw new Error("This email is already registered. Please log in.");

        const updated = [...users, { email, password }];
        setUsers(updated);
        saveUsers(updated);

        // ❌ no auto login
      },

      logout: () => persistUser(null),
    };
  }, [user, users]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider />");
  return ctx;
}