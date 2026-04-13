import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Eye, EyeOff, AlertCircle } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

interface LoginProps {
  initialMode?: "login" | "signup";
}

export default function Login({ initialMode = "login" }: LoginProps) {
  const [, navigate] = useLocation();
  const { user, login, signup } = useAuth();
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "", name: "" });

  // Already logged in — redirect home
  if (user) {
    navigate("/");
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (isLogin) {
      const result = login(form.email, form.password);
      if (result.ok) {
        navigate("/");
      } else {
        setError(result.error ?? "Login failed.");
      }
    } else {
      if (!form.name.trim()) {
        setError("Please enter your name.");
        return;
      }
      if (form.password.length < 6) {
        setError("Password must be at least 6 characters.");
        return;
      }
      const result = signup(form.name.trim(), form.email, form.password);
      if (result.ok) {
        navigate("/");
      } else {
        setError(result.error ?? "Sign-up failed.");
      }
    }
  };

  const switchMode = (toLogin: boolean) => {
    setIsLogin(toLogin);
    setError("");
    setForm({ email: "", password: "", name: "" });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute top-[-80px] right-[-80px] w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #5a8fa8, transparent)" }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-64 h-64 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #7aafc4, transparent)" }}
      />

      {/* Card */}
      <div
        className="relative z-10 w-full max-w-md mx-4 rounded-3xl overflow-hidden"
        style={{
          background: "rgba(255,255,255,0.07)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 32px 64px rgba(0,0,0,0.4)",
        }}
      >
        {/* Back button */}
        <div className="px-8 pt-6">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-white/50 hover:text-white/90 text-sm transition-colors group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Back to home
          </button>
        </div>

        {/* Logo */}
        <div className="text-center pt-6 pb-2">
          <h1 className="text-white text-3xl font-bold tracking-tight">upBrim</h1>
          <p className="text-white/40 text-xs mt-1">......escape FOMO with a click.....</p>
        </div>

        {/* Tab switcher */}
        <div className="flex mx-8 mt-6 p-1 rounded-xl" style={{ background: "rgba(255,255,255,0.08)" }}>
          <button
            onClick={() => switchMode(true)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              isLogin ? "bg-white text-[#2e3f52] shadow-lg" : "text-white/60 hover:text-white"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => switchMode(false)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${
              !isLogin ? "bg-white text-[#2e3f52] shadow-lg" : "text-white/60 hover:text-white"
            }`}
          >
            Sign Up
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-8 py-6 flex flex-col gap-4">
          {!isLogin && (
            <div>
              <label className="block text-white/70 text-xs font-medium mb-2">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                required={!isLogin}
                className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
            </div>
          )}

          <div>
            <label className="block text-white/70 text-xs font-medium mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="you@example.com"
              required
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            />
          </div>

          <div>
            <label className="block text-white/70 text-xs font-medium mb-2">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 pr-12 rounded-xl text-white placeholder-white/30 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/80 transition-colors"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {isLogin && (
            <div className="text-right -mt-1">
              <button type="button" className="text-white/50 hover:text-white/90 text-xs transition-colors">
                Forgot password?
              </button>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl text-red-300 text-sm"
              style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.25)" }}
            >
              <AlertCircle size={15} className="flex-shrink-0" />
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3.5 rounded-xl bg-white text-[#2e3f52] font-semibold text-sm hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg mt-1"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <div className="pb-8 text-center">
          <p className="text-white/40 text-xs">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={() => switchMode(!isLogin)}
              className="text-white/70 hover:text-white underline transition-colors"
            >
              {isLogin ? "Sign up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
