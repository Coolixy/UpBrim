import { useLocation } from "wouter";
import { ArrowLeft, Lock, Trophy, ChevronRight, Calendar } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const competitions = [
  {
    slug: "hackachhino",
    name: "Hackachhino",
    organizer: "Bennett University",
    type: "Hackathon",
    duration: "24 Hours",
    prize: "₹1,00,000+",
    status: "upcoming",
    date: "May 2025",
    tagline: "Build. Brew. Hack. The biggest hackathon at Bennett.",
    color: "linear-gradient(135deg,#e8711a,#c0392b)",
    badgeEmoji: "☕",
  },
  {
    slug: "smart-india-hackathon",
    name: "Smart India Hackathon",
    organizer: "Govt. of India",
    type: "National Hackathon",
    duration: "36 Hours",
    prize: "₹1,00,000",
    status: "upcoming",
    date: "Aug 2025",
    tagline: "Solve real problems for India at the national stage.",
    color: "linear-gradient(135deg,#2980b9,#16527a)",
    badgeEmoji: "🇮🇳",
  },
  {
    slug: "google-summer-of-code",
    name: "Google Summer of Code",
    organizer: "Google",
    type: "Open Source Program",
    duration: "3 Months",
    prize: "$3,000 – $6,600",
    status: "upcoming",
    date: "Feb–Mar 2025 (Apply)",
    tagline: "Contribute to open source and get paid by Google.",
    color: "linear-gradient(135deg,#4285F4,#34A853)",
    badgeEmoji: "🌐",
  },
  {
    slug: "icpc",
    name: "ICPC",
    organizer: "ICPC Foundation",
    type: "Competitive Programming",
    duration: "5 Hours",
    prize: "Awards + Global Recognition",
    status: "upcoming",
    date: "Oct–Nov 2025",
    tagline: "The Olympics of competitive programming. Qualify from regionals.",
    color: "linear-gradient(135deg,#7f52ff,#4a2e80)",
    badgeEmoji: "🏆",
  },
];

const statusColors: Record<string, string> = {
  upcoming: "rgba(52,211,153,0.15)",
  ongoing: "rgba(251,191,36,0.15)",
  past: "rgba(100,100,120,0.15)",
};
const statusTextColors: Record<string, string> = {
  upcoming: "#34d399",
  ongoing: "#fbbf24",
  past: "#9ca3af",
};

export default function Competitions() {
  const [, navigate] = useLocation();
  const { user } = useAuth();

  const isBennettUser = user && user.email.endsWith("@bennett.edu.in");

  if (!user) {
    return (
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
      >
        <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Home
          </button>
          <div className="h-4 w-px bg-white/20" />
          <h1 className="text-white font-bold text-lg">Competitions</h1>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6" style={{ background: "rgba(255,255,255,0.07)" }}>
            <Lock size={32} className="text-white/40" />
          </div>
          <h2 className="text-white text-xl font-bold mb-2">Sign in to continue</h2>
          <p className="text-white/50 text-sm mb-8 max-w-xs">
            You need a Bennett University account to access the Competitions section.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="px-7 py-3 rounded-xl bg-white text-[#2e3f52] font-semibold text-sm hover:bg-white/90 transition-all"
          >
            Sign in
          </button>
        </div>
      </div>
    );
  }

  if (!isBennettUser) {
    return (
      <div
        className="min-h-screen flex flex-col"
        style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
      >
        <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
          <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm">
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            Home
          </button>
          <div className="h-4 w-px bg-white/20" />
          <h1 className="text-white font-bold text-lg">Competitions</h1>
        </header>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="w-20 h-20 rounded-3xl flex items-center justify-center mb-6" style={{ background: "rgba(255,255,255,0.07)" }}>
            <Lock size={32} className="text-white/40" />
          </div>
          <h2 className="text-white text-xl font-bold mb-2">Bennett Members Only</h2>
          <p className="text-white/50 text-sm mb-2 max-w-xs">
            This section is exclusive to students with a <span className="text-white/80 font-medium">@bennett.edu.in</span> email address.
          </p>
          <p className="text-white/30 text-xs">You're signed in as <span className="text-white/50">{user.email}</span></p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button onClick={() => navigate("/")} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm">
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Home
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg">Competitions</h1>
        <span className="ml-auto text-xs px-2 py-0.5 rounded-full text-emerald-400" style={{ background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)" }}>
          Bennett Access
        </span>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 pb-20">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Upcoming Competitions</h2>
          <p className="text-white/50 text-sm">
            Hackathons, open source programs, and coding contests worth your time.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {competitions.map((comp) => (
            <button
              key={comp.slug}
              onClick={() => navigate(`/competitions/${comp.slug}`)}
              className="w-full flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.01] hover:brightness-110 text-left group"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
            >
              {/* Badge */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                style={{ background: comp.color }}
              >
                {comp.badgeEmoji}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <p className="text-white font-semibold text-base truncate">{comp.name}</p>
                  <ChevronRight size={14} className="text-white/30 group-hover:text-white/70 flex-shrink-0 transition-colors" />
                </div>
                <p className="text-white/50 text-xs mb-2">{comp.tagline}</p>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: statusColors[comp.status], color: statusTextColors[comp.status] }}
                  >
                    {comp.status.charAt(0).toUpperCase() + comp.status.slice(1)}
                  </span>
                  <span className="text-white/40 text-xs flex items-center gap-1">
                    <Calendar size={10} />
                    {comp.date}
                  </span>
                  <span className="text-white/40 text-xs">·</span>
                  <span className="text-white/55 text-xs font-medium">{comp.prize}</span>
                  <span className="text-white/40 text-xs">·</span>
                  <span className="text-white/40 text-xs">{comp.duration}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-10 p-5 rounded-2xl text-center" style={{ background: "rgba(255,255,255,0.04)", border: "1px dashed rgba(255,255,255,0.10)" }}>
          <Trophy size={20} className="text-white/30 mx-auto mb-2" />
          <p className="text-white/40 text-xs">More competitions added regularly. Have one to suggest? <button onClick={() => navigate("/contact")} className="text-white/60 underline hover:text-white transition-colors">Contact us.</button></p>
        </div>
      </main>
    </div>
  );
}
