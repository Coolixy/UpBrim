import { useLocation } from "wouter";
import { ArrowLeft, ChevronRight } from "lucide-react";

const languages = [
  {
    slug: "cpp",
    name: "C++",
    tagline: "Power of C with Object-Oriented Programming",
    bestFor: "Competitive programming, game engines, systems software, embedded",
    gradient: "linear-gradient(135deg,#e8711a,#c0392b)",
    badge: "C++",
    badgeText: "#fff",
  },
  {
    slug: "python",
    name: "Python",
    tagline: "Simple syntax, infinite possibilities",
    bestFor: "Data science, AI/ML, automation, web backend, scripting",
    gradient: "linear-gradient(135deg,#3776ab,#ffd340)",
    badge: "Py",
    badgeText: "#fff",
  },
  {
    slug: "java",
    name: "Java",
    tagline: "Write once, run anywhere",
    bestFor: "Enterprise software, Android development, Spring Boot APIs",
    gradient: "linear-gradient(135deg,#f89820,#e05d2e)",
    badge: "☕",
    badgeText: "#fff",
  },
  {
    slug: "javascript",
    name: "JavaScript",
    tagline: "The language of the web — frontend and backend",
    bestFor: "Web apps, React, Node.js backends, mobile with React Native",
    gradient: "linear-gradient(135deg,#f7df1e,#e8a020)",
    badge: "JS",
    badgeText: "#222",
  },
  {
    slug: "typescript",
    name: "TypeScript",
    tagline: "JavaScript with superpowers — static typing at scale",
    bestFor: "Large React apps, robust APIs, Angular, enterprise frontend",
    gradient: "linear-gradient(135deg,#3178c6,#1a5fa8)",
    badge: "TS",
    badgeText: "#fff",
  },
  {
    slug: "rust",
    name: "Rust",
    tagline: "Blazingly fast and memory-safe by design",
    bestFor: "Systems programming, WebAssembly, CLI tools, safety-critical software",
    gradient: "linear-gradient(135deg,#ce4a00,#7c2900)",
    badge: "🦀",
    badgeText: "#fff",
  },
  {
    slug: "go",
    name: "Go",
    tagline: "Simple, fast, and built for modern cloud infrastructure",
    bestFor: "Microservices, backend APIs, DevOps tools, cloud infrastructure",
    gradient: "linear-gradient(135deg,#00acd7,#007d9c)",
    badge: "Go",
    badgeText: "#fff",
  },
  {
    slug: "kotlin",
    name: "Kotlin",
    tagline: "Modern, concise, and the official Android language",
    bestFor: "Android development, Spring Boot, Kotlin Multiplatform",
    gradient: "linear-gradient(135deg,#7f52ff,#e44857)",
    badge: "Kt",
    badgeText: "#fff",
  },
];

export default function Languages() {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Home
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg">Languages</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 pb-20">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Programming Languages</h2>
          <p className="text-white/50 text-sm">
            Pick a language, learn it deeply, and build things that matter. Click any card to see a full guide.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {languages.map((lang) => (
            <button
              key={lang.slug}
              onClick={() => navigate(`/languages/${lang.slug}`)}
              className="flex items-center gap-4 p-5 rounded-2xl transition-all hover:scale-[1.02] hover:brightness-110 text-left group"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {/* Icon badge */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-black shadow-lg"
                style={{ background: lang.gradient, color: lang.badgeText, fontFamily: "monospace" }}
              >
                {lang.badge}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white font-semibold text-base">{lang.name}</p>
                  <ChevronRight size={14} className="text-white/30 group-hover:text-white/70 flex-shrink-0 transition-colors" />
                </div>
                <p className="text-white/50 text-xs mt-0.5 leading-snug">{lang.tagline}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {lang.bestFor.split(",").slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full text-white/55"
                      style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
