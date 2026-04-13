import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

const platforms = [
  {
    slug: "linkedin",
    name: "LinkedIn",
    description: "Build your professional network and discover career opportunities.",
    color: "#0A66C2",
    bg: "#e8f0fa",
    logo: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-10 h-10">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    slug: "twitter",
    name: "Twitter / X",
    description: "Follow industry leaders, share ideas, and stay updated with tech trends.",
    color: "#000000",
    bg: "#e7e7e7",
    logo: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-10 h-10">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    slug: "leetcode",
    name: "LeetCode",
    description: "Sharpen your coding skills with real interview problems and contests.",
    color: "#FFA116",
    bg: "#fff7e6",
    logo: (
      <svg viewBox="0 0 24 24" fill="#FFA116" className="w-10 h-10">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    slug: "codechef",
    name: "CodeChef",
    description: "Compete in coding challenges and climb global programming leaderboards.",
    color: "#5B4638",
    bg: "#f3ede8",
    logo: (
      <svg viewBox="0 0 24 24" fill="#5B4638" className="w-10 h-10">
        <path d="M11.257.004C5.227.255.117 5.24.003 11.272c-.117 6.216 4.808 11.382 10.99 11.724 6.384.353 11.724-4.762 11.724-11.076C22.717 5.51 17.558-.254 11.257.004zM7.316 14.29c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L3.63 13.42l-.01-.01a3.81 3.81 0 0 1 0-5.37c.37-.37.87-.56 1.37-.56s1 .19 1.38.56l.01.01 1.18 1.18a.997.997 0 0 1-1.41 1.41l-1.17-1.17a1.808 1.808 0 0 0-2.55 2.55l2.28 2.28zm8.88 1.41c-.39.39-1.02.39-1.41 0l-2.28-2.28-2.27 2.27c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l2.28-2.28-2.28-2.28a.997.997 0 0 1 1.41-1.41l2.27 2.28 1.18-1.18c.37-.37.87-.56 1.38-.56s1 .19 1.37.56a3.81 3.81 0 0 1 0 5.37l-.01.01-2.28 2.27c-.39.39-1.02.39-1.41 0l-.01-.01 1.18-1.18c.71-.71.71-1.84 0-2.55-.71-.71-1.84-.71-2.55 0l-1.17 1.17a.997.997 0 0 1-1.41-1.41l2.27-2.27-2.27-2.27a.997.997 0 0 1 1.41-1.41l2.27 2.27 1.18-1.18.01-.01c.37-.37.87-.56 1.37-.56s1 .19 1.38.56a3.81 3.81 0 0 1 0 5.37l-2.28 2.28z" />
      </svg>
    ),
  },
];

export default function Platforms() {
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
        <h1 className="text-white font-bold text-lg">Platforms</h1>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-10">
          <h2 className="text-white text-2xl font-bold mb-2">Explore Platforms</h2>
          <p className="text-white/50 text-sm">
            Click on a platform to learn how to get started as a college fresher.
          </p>
        </div>

        {/* Platform widget grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {platforms.map((p) => (
            <button
              key={p.slug}
              onClick={() => navigate(`/platforms/${p.slug}`)}
              className="flex items-start gap-4 p-5 rounded-2xl text-left transition-all hover:scale-[1.02] hover:brightness-110 active:scale-[0.99] group"
              style={{
                background: "rgba(255,255,255,0.07)",
                border: "1px solid rgba(255,255,255,0.10)",
                backdropFilter: "blur(8px)",
              }}
            >
              {/* Logo box */}
              <div
                className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center shadow"
                style={{ background: p.bg }}
              >
                {p.logo}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-white font-semibold text-base">{p.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ background: p.color + "22", color: p.color === "#000000" ? "#ccc" : p.color }}
                  >
                    Platform
                  </span>
                </div>
                <p className="text-white/55 text-sm leading-relaxed">{p.description}</p>
                <span className="text-xs text-white/30 group-hover:text-white/60 transition-colors mt-2 inline-block">
                  Tap to learn more →
                </span>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
