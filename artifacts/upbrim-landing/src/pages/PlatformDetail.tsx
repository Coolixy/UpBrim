import { useLocation, useRoute } from "wouter";
import { ArrowLeft, CheckCircle, ExternalLink } from "lucide-react";

const platformData: Record<string, {
  name: string;
  tagline: string;
  url: string;
  color: string;
  bg: string;
  logo: React.ReactNode;
  intro: string;
  whyItMatters: string;
  steps: { title: string; description: string }[];
  tips: string[];
  badge: string;
}> = {
  linkedin: {
    name: "LinkedIn",
    tagline: "Your Professional Identity Online",
    url: "https://linkedin.com",
    color: "#0A66C2",
    bg: "#e8f0fa",
    badge: "Networking & Career",
    logo: (
      <svg viewBox="0 0 24 24" fill="#0A66C2" className="w-10 h-10">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    intro:
      "LinkedIn is the world's largest professional networking platform with over 1 billion members. For a college fresher, it's the single most important tool for landing internships, building industry connections, and making yourself visible to recruiters before you even graduate.",
    whyItMatters:
      "Recruiters actively search LinkedIn for candidates. A strong profile means you get found — not just when you apply, but before you even think of applying. Many internships and entry-level jobs are filled through LinkedIn connections alone.",
    steps: [
      {
        title: "Build a complete profile",
        description:
          "Add a professional photo, a headline that says more than just 'Student' (e.g., 'CS Fresher | Interested in Backend Dev & Open Source'), a concise about section, your education, and any projects, certifications, or volunteering you've done.",
      },
      {
        title: "Connect strategically",
        description:
          "Start with classmates, professors, and family. Then reach out to alumni from your college who are working in roles you're interested in. Personalize every connection request with a short note explaining why you want to connect.",
      },
      {
        title: "Engage with content",
        description:
          "Follow companies, industry leaders, and domains you care about. Like, comment, and share posts thoughtfully. Commenting with a genuine insight on a senior engineer's post is one of the fastest ways to get noticed.",
      },
      {
        title: "Post your own work",
        description:
          "Share your projects, learning journeys, hackathon experiences, and certifications. Even a short post about what you built in a weekend project positions you as someone who is actively growing.",
      },
      {
        title: "Use it to apply for internships",
        description:
          "LinkedIn's 'Easy Apply' makes it simple to apply to internships. Filter by 'Entry Level', 'Internship', and your location or 'Remote'. Apply consistently — aim for 5–10 applications a week.",
      },
    ],
    tips: [
      "Turn on 'Open to Work' privately — only recruiters can see it, not your connections.",
      "Ask a professor or senior for a LinkedIn recommendation — it adds huge credibility.",
      "Join LinkedIn groups relevant to your field to find community and job posts.",
      "Follow the companies you want to intern at and engage with their posts.",
      "Use the 'Alumni' tool to find people from your college working at target companies.",
    ],
  },
  twitter: {
    name: "Twitter / X",
    tagline: "Where Tech Conversations Happen",
    url: "https://twitter.com",
    color: "#1a1a1a",
    bg: "#e7e7e7",
    badge: "Learning & Thought Leadership",
    logo: (
      <svg viewBox="0 0 24 24" fill="#000000" className="w-10 h-10">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    intro:
      "Twitter (now X) is where the global tech community lives in real time. Engineers, founders, researchers, and open-source contributors share ideas, debates, opportunities, and early-stage knowledge here before it reaches any other platform. For a fresher, it's a free front-row seat to some of the smartest conversations in tech.",
    whyItMatters:
      "Twitter is where trends start. Opportunities shared here — jobs, hackathons, open-source projects, research calls — often reach a smaller, more engaged audience than LinkedIn. Getting in early gives you an edge.",
    steps: [
      {
        title: "Set up a focused profile",
        description:
          "Use your real name, a clear photo, and a bio that lists what you're learning and interested in (e.g., 'CS Fresher | Learning systems programming | Open to collab'). Add a link to your GitHub or LinkedIn.",
      },
      {
        title: "Follow the right people",
        description:
          "Search for engineers and founders in your domain — backend dev, ML, design, web3 — and follow the ones who post quality content. Great starter lists: @levelsio, @swyx, @simonw, @karpathy, and engineers at companies you admire.",
      },
      {
        title: "Build a learning feed",
        description:
          "Use Twitter Lists to organize accounts by topic (e.g., 'ML researchers', 'Open source maintainers'). This makes your feed signal-dense instead of noisy.",
      },
      {
        title: "Reply publicly and thoughtfully",
        description:
          "Replying to a popular developer's tweet with a genuine question or observation puts your name in front of their entire audience. Don't spam — one good reply beats ten shallow ones.",
      },
      {
        title: "Share what you're learning",
        description:
          "Tweet about what you're building, bugs you fixed, things that surprised you. Learning in public is one of the most effective ways to attract mentors, collaborators, and even recruiters.",
      },
    ],
    tips: [
      "Use '#buildinpublic' when sharing your projects — it's a large, supportive community.",
      "Follow hashtags like #100DaysOfCode to find peers on the same journey.",
      "Twitter Spaces (audio rooms) are great for listening to live tech discussions.",
      "Avoid hot takes and controversy — keep your account professional and curiosity-driven.",
      "Bookmark tweets with resources; Twitter's bookmark feature is an underrated learning archive.",
    ],
  },
  leetcode: {
    name: "LeetCode",
    tagline: "The Gateway to Tech Interviews",
    url: "https://leetcode.com",
    color: "#FFA116",
    bg: "#fff7e6",
    badge: "DSA & Interview Prep",
    logo: (
      <svg viewBox="0 0 24 24" fill="#FFA116" className="w-10 h-10">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
    intro:
      "LeetCode is the most widely-used platform for Data Structures & Algorithms (DSA) practice. Nearly every major tech company — Google, Amazon, Microsoft, Meta — uses LeetCode-style coding questions in their technical interviews. Starting early as a fresher gives you a massive head start.",
    whyItMatters:
      "Technical interviews are the bottleneck to getting into top tech companies. LeetCode is the most direct way to prepare. Consistent practice here directly translates to better interview performance and more job offers.",
    steps: [
      {
        title: "Start with the Blind 75 list",
        description:
          "The 'Blind 75' is a curated list of 75 must-know LeetCode problems that cover the most common interview patterns. Start here rather than random problems. You can find it pinned in the LeetCode discuss forum.",
      },
      {
        title: "Master patterns, not just solutions",
        description:
          "Focus on understanding why a solution works, not memorizing it. Learn patterns like sliding window, two pointers, BFS/DFS, dynamic programming, and binary search. One understood pattern helps you solve dozens of problems.",
      },
      {
        title: "Start with Easy, build up to Medium",
        description:
          "Easy problems build your foundational fluency. Once you can solve Easy problems comfortably, move to Mediums — these are the bread and butter of FAANG interviews. Hard problems are a bonus, not a requirement for most roles.",
      },
      {
        title: "Participate in weekly contests",
        description:
          "LeetCode runs free weekly and biweekly contests. Competing trains you to solve under time pressure, which mirrors real interview conditions. Your rating is also visible on your profile.",
      },
      {
        title: "Review your mistakes systematically",
        description:
          "Keep a 'mistake journal' — note every problem you got wrong, the pattern you missed, and the correct approach. Review these notes weekly. Repetition turns weak spots into strengths.",
      },
    ],
    tips: [
      "Use the 'Company' filter to see which problems are most asked at your target company.",
      "Aim for 1–2 problems a day consistently — better than cramming 20 the night before an interview.",
      "Read other people's solutions after you solve (or fail) a problem — you'll see cleaner approaches.",
      "Join the LeetCode Discuss forum; it's full of high-quality explanations from experienced developers.",
      "Track your streak — consistency over 90+ days is where real skill improvement happens.",
    ],
  },
  codechef: {
    name: "CodeChef",
    tagline: "Compete, Improve, and Get Ranked Globally",
    url: "https://codechef.com",
    color: "#5B4638",
    bg: "#f3ede8",
    badge: "Competitive Programming",
    logo: (
      <svg viewBox="0 0 24 24" fill="#5B4638" className="w-10 h-10">
        <path d="M11.257.004C5.227.255.117 5.24.003 11.272c-.117 6.216 4.808 11.382 10.99 11.724 6.384.353 11.724-4.762 11.724-11.076C22.717 5.51 17.558-.254 11.257.004zM7.316 14.29c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L3.63 13.42l-.01-.01a3.81 3.81 0 0 1 0-5.37c.37-.37.87-.56 1.37-.56s1 .19 1.38.56l.01.01 1.18 1.18a.997.997 0 0 1-1.41 1.41l-1.17-1.17a1.808 1.808 0 0 0-2.55 2.55l2.28 2.28zm8.88 1.41c-.39.39-1.02.39-1.41 0l-2.28-2.28-2.27 2.27c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41l2.28-2.28-2.28-2.28a.997.997 0 0 1 1.41-1.41l2.27 2.28 1.18-1.18c.37-.37.87-.56 1.38-.56s1 .19 1.37.56a3.81 3.81 0 0 1 0 5.37l-.01.01-2.28 2.27c-.39.39-1.02.39-1.41 0l-.01-.01 1.18-1.18c.71-.71.71-1.84 0-2.55-.71-.71-1.84-.71-2.55 0l-1.17 1.17a.997.997 0 0 1-1.41-1.41l2.27-2.27-2.27-2.27a.997.997 0 0 1 1.41-1.41l2.27 2.27 1.18-1.18.01-.01c.37-.37.87-.56 1.37-.56s1 .19 1.38.56a3.81 3.81 0 0 1 0 5.37l-2.28 2.28z" />
      </svg>
    ),
    intro:
      "CodeChef is one of India's most popular competitive programming platforms, with millions of participants and monthly coding contests. It's a community-driven platform that rewards consistency and problem-solving speed. For freshers in India especially, a high CodeChef rating is a strong signal on your resume.",
    whyItMatters:
      "Many Indian tech companies and startups look at CodeChef ratings when shortlisting candidates. It also builds algorithmic thinking, which helps across all technical interviews — not just competitive programming rounds.",
    steps: [
      {
        title: "Create your profile and understand ratings",
        description:
          "CodeChef uses a star-rating system (1★ to 7★). Your rating rises with each contest you participate in. Even starting as 1★ and reaching 3★ (1600+ rating) is a solid milestone to put on your resume as a fresher.",
      },
      {
        title: "Start with the Practice section",
        description:
          "Before jumping into contests, solve beginner and easy problems in the Practice section. Get comfortable with I/O handling, basic data structures (arrays, strings, maps), and time complexity analysis.",
      },
      {
        title: "Participate in Long Challenges",
        description:
          "CodeChef's Long Challenges (10-day contests) are perfect for freshers — you have time to research, look up approaches, and learn while competing. These build your depth unlike timed contests.",
      },
      {
        title: "Move to Cook-Offs and Lunchtime",
        description:
          "Once comfortable, join Cook-Offs (2.5 hours) and Lunchtime (3 hours) contests. These are shorter and more interview-like in their pressure and speed requirements.",
      },
      {
        title: "Study editorial solutions",
        description:
          "After every contest, read the official editorials for problems you couldn't solve. Understanding the intended approach — including the mathematical insight — is where the real learning happens.",
      },
    ],
    tips: [
      "Your CodeChef handle appears on your profile — keep it professional (your name or a clean alias).",
      "The CodeChef discuss forum is excellent for getting hints without full spoilers.",
      "Practice in C++ or Java — they have the fastest I/O performance for competitive programming.",
      "Track your contest history and set a goal: participate in at least 10 rated contests in your first year.",
      "CodeChef also has a CCDSAP certification program that is recognized by several companies.",
    ],
  },
};

export default function PlatformDetail() {
  const [, navigate] = useLocation();
  const [, params] = useRoute("/platforms/:slug");
  const slug = params?.slug ?? "";
  const data = platformData[slug];

  if (!data) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
      >
        <p className="text-white text-xl font-bold">Platform not found</p>
        <button onClick={() => navigate("/platforms")} className="mt-4 text-white/60 hover:text-white text-sm underline">
          Back to Platforms
        </button>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button
          onClick={() => navigate("/platforms")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Platforms
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg">{data.name}</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 pb-20">
        {/* Hero */}
        <div
          className="flex items-center gap-5 p-6 rounded-2xl mb-8"
          style={{
            background: "rgba(255,255,255,0.07)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
            style={{ background: data.bg }}
          >
            {data.logo}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <h2 className="text-white text-2xl font-bold">{data.name}</h2>
              <span
                className="text-xs px-2.5 py-1 rounded-full font-medium"
                style={{ background: data.color + "25", color: data.color === "#1a1a1a" ? "#ccc" : data.color }}
              >
                {data.badge}
              </span>
            </div>
            <p className="text-white/50 text-sm mb-3">{data.tagline}</p>
            <a
              href={data.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg transition-all hover:opacity-90"
              style={{ background: data.color === "#1a1a1a" ? "#333" : data.color, color: "#fff" }}
            >
              Visit {data.name}
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Intro */}
        <section className="mb-8">
          <p className="text-white/75 text-base leading-relaxed">{data.intro}</p>
        </section>

        {/* Why it matters */}
        <section className="mb-8">
          <div
            className="p-5 rounded-xl"
            style={{ background: data.color === "#1a1a1a" ? "rgba(255,255,255,0.05)" : data.color + "18", border: `1px solid ${data.color}30` }}
          >
            <h3
              className="text-sm font-semibold mb-2"
              style={{ color: data.color === "#1a1a1a" ? "#ccc" : data.color }}
            >
              Why it matters for freshers
            </h3>
            <p className="text-white/70 text-sm leading-relaxed">{data.whyItMatters}</p>
          </div>
        </section>

        {/* Steps */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-lg mb-5">How to get started — step by step</h3>
          <div className="flex flex-col gap-4">
            {data.steps.map((step, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ background: data.color === "#1a1a1a" ? "#444" : data.color + "cc" }}
                >
                  {i + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-1">{step.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section>
          <h3 className="text-white font-bold text-lg mb-5">Pro tips</h3>
          <div className="flex flex-col gap-3">
            {data.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle
                  size={16}
                  className="flex-shrink-0 mt-0.5"
                  style={{ color: data.color === "#1a1a1a" ? "#888" : data.color }}
                />
                <p className="text-white/65 text-sm leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
