import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { Search, Menu, X, Home, Monitor, Users, Mail, Info, LogOut, ChevronDown, Code2, Trophy } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Platforms", icon: Monitor, href: "/platforms" },
  { label: "Languages", icon: Code2, href: "/languages" },
  { label: "Competitions", icon: Trophy, href: "/competitions" },
  { label: "Alumni", icon: Users, href: "/alumni" },
  { label: "Contact Us", icon: Mail, href: "/contact" },
  { label: "About Us", icon: Info, href: "/about" },
];

const PLATFORM_SLUGS = ["linkedin", "twitter", "leetcode", "codechef"];

export default function Landing() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [profileOpen, setProfileOpen] = useState(false);
  const [, navigate] = useLocation();
  const { user, logout } = useAuth();
  const profileRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    if (val.trim().length > 0) {
      const q = val.toLowerCase();
      const matches = PLATFORM_SLUGS.filter((s) => s.includes(q));
      setSearchResults(matches);
    } else {
      setSearchResults([]);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      navigate(`/platforms/${searchResults[0]}`);
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const initials = user ? user.name.charAt(0).toUpperCase() : "";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      <div className="absolute inset-0 bg-black/10" />

      {/* Sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 overlay-fade"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 z-50 flex flex-col ${
          sidebarOpen ? "sidebar-enter" : "sidebar-exit pointer-events-none"
        }`}
        style={{
          background: "rgba(30, 45, 60, 0.97)",
          backdropFilter: "blur(16px)",
          borderRight: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <div>
            <h2 className="text-white text-xl font-bold tracking-tight">upBrim</h2>
            <p className="text-white/50 text-xs mt-0.5">......escape FOMO with a click.....</p>
          </div>
          <button
            onClick={closeSidebar}
            className="text-white/60 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                closeSidebar();
                navigate(item.href);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all text-left w-full group"
            >
              <item.icon size={18} className="text-white/50 group-hover:text-white/90 transition-colors" />
              <span className="font-medium text-sm">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="px-6 py-5 border-t border-white/10">
          <p className="text-white/30 text-xs text-center">© 2026 upBrim</p>
        </div>
      </aside>

      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Top navigation bar */}
        <header className="flex items-center gap-3 px-6 py-4">
          {/* Hamburger */}
          <button
            onClick={openSidebar}
            className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl border border-[#2e3f52] bg-[#2e3f52]/90 hover:bg-[#3a4e63] text-white transition-all hover:scale-105 shadow"
            aria-label="Open navigation menu"
          >
            <Menu size={20} />
          </button>

          {/* Search bar */}
          <form onSubmit={handleSearch} className="flex-1 relative">
            <div className="relative flex items-center">
              <Search size={16} className="absolute left-3.5 text-white/70 pointer-events-none" />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search platforms, events..."
                className="w-full pl-10 pr-24 py-2.5 rounded-xl text-white placeholder-white/60 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
                style={{
                  background: "rgba(30, 45, 60, 0.88)",
                  border: "1px solid rgba(255,255,255,0.18)",
                  backdropFilter: "blur(8px)",
                }}
              />
              <button
                type="submit"
                className="absolute right-2 px-3 py-1.5 rounded-lg bg-[#4a6880] hover:bg-[#5a7890] text-white text-xs font-medium transition-all border border-white/10"
              >
                Search
              </button>
            </div>

            {/* Search dropdown */}
            {searchResults.length > 0 && (
              <div
                className="absolute top-full left-0 right-0 mt-1 rounded-xl overflow-hidden z-50 shadow-2xl"
                style={{
                  background: "rgba(25, 38, 52, 0.97)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                {searchResults.map((slug) => (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => {
                      navigate(`/platforms/${slug}`);
                      setSearchQuery("");
                      setSearchResults([]);
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-left text-white/90 hover:bg-white/10 transition-colors text-sm capitalize"
                  >
                    <Search size={14} className="text-white/40" />
                    {slug.charAt(0).toUpperCase() + slug.slice(1)}
                  </button>
                ))}
              </div>
            )}
          </form>

          {/* Auth area */}
          {user ? (
            /* Logged-in profile widget */
            <div ref={profileRef} className="relative flex-shrink-0">
              <button
                onClick={() => setProfileOpen((v) => !v)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-[#2e3f52]/90 hover:bg-[#3a4e63] border border-white/15 transition-all hover:scale-105 shadow"
              >
                {/* Avatar circle */}
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #4a8fa8, #2e6080)" }}
                >
                  {initials}
                </div>
                <span className="text-white text-sm font-medium">{user.name}</span>
                <ChevronDown
                  size={14}
                  className={`text-white/60 transition-transform ${profileOpen ? "rotate-180" : ""}`}
                />
              </button>

              {/* Dropdown */}
              {profileOpen && (
                <div
                  className="absolute right-0 top-full mt-2 w-52 rounded-2xl overflow-hidden z-50 shadow-2xl"
                  style={{
                    background: "rgba(22, 35, 47, 0.98)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    backdropFilter: "blur(16px)",
                  }}
                >
                  {/* User info header */}
                  <div className="px-4 py-3.5 border-b border-white/10 flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                      style={{ background: "linear-gradient(135deg, #4a8fa8, #2e6080)" }}
                    >
                      {initials}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white text-sm font-semibold truncate">{user.name}</p>
                      <p className="text-white/40 text-xs truncate">{user.email}</p>
                    </div>
                  </div>

                  {/* Log out */}
                  <button
                    onClick={() => {
                      setProfileOpen(false);
                      logout();
                    }}
                    className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
                  >
                    <LogOut size={15} />
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            /* Logged-out buttons */
            <>
              <button
                onClick={() => navigate("/login")}
                className="flex-shrink-0 px-4 py-2.5 rounded-xl text-white text-sm font-medium border border-white/20 bg-[#2e3f52]/80 hover:bg-[#3a4e63] transition-all hover:scale-105 shadow"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="flex-shrink-0 px-4 py-2.5 rounded-xl text-sm font-semibold bg-white text-[#2e4057] hover:bg-white/90 transition-all hover:scale-105 shadow-lg"
              >
                Sign Up
              </button>
            </>
          )}
        </header>

        <div className="flex-1" />
      </div>
    </div>
  );
}
