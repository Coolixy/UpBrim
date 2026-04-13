export interface User {
  name: string;
  email: string;
}

const USERS_KEY = "upbrim_users";
const SESSION_KEY = "upbrim_session";

const HARDCODED_USERS: Array<{ name: string; email: string; password: string }> = [
  { name: "Saatvik", email: "saatvik@bennett.edu.in", password: "saatvik123" },
];

function getStoredUsers(): Array<{ name: string; email: string; password: string }> {
  try {
    const raw = localStorage.getItem(USERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveUser(user: { name: string; email: string; password: string }) {
  const users = getStoredUsers();
  users.push(user);
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function login(email: string, password: string): User | null {
  const allUsers = [...HARDCODED_USERS, ...getStoredUsers()];
  const match = allUsers.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );
  if (!match) return null;
  const user: User = { name: match.name, email: match.email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return user;
}

export function signup(name: string, email: string, password: string): { ok: boolean; error?: string } {
  const allUsers = [...HARDCODED_USERS, ...getStoredUsers()];
  const exists = allUsers.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (exists) return { ok: false, error: "An account with this email already exists." };
  saveUser({ name, email, password });
  const user: User = { name, email };
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
  return { ok: true };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession(): User | null {
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
