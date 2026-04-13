import { useLocation, useParams } from "wouter";
import { ArrowLeft, ExternalLink, Clock, Trophy, Users, Calendar } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

type Competition = {
  slug: string;
  name: string;
  organizer: string;
  type: string;
  duration: string;
  prize: string;
  date: string;
  status: string;
  color: string;
  badgeEmoji: string;
  registerUrl: string;
  about: string;
  highlights: string[];
  eligibility: string;
  tracks?: string[];
  tips: string[];
};

const competitions: Competition[] = [
  {
    slug: "hackachhino",
    name: "Hackachhino",
    organizer: "Bennett University",
    type: "24-Hour Hackathon",
    duration: "24 Hours",
    prize: "₹1,00,000+",
    date: "May 2025",
    status: "upcoming",
    color: "linear-gradient(135deg,#e8711a,#c0392b)",
    badgeEmoji: "☕",
    registerUrl: "https://hackachhino.bennettedu.in",
    about:
      "Hackachhino is Bennett University's flagship 24-hour hackathon — an adrenaline-fueled innovation marathon where students from all disciplines come together to build, brew, and hack. Inspired by the energy of your morning coffee, Hackachhino challenges you to stay sharp, think fast, and ship a working product in just one day. With a prize pool of over ₹1,00,000 and mentors from top tech companies, it's the biggest student-run hackathon on campus.",
    highlights: [
      "₹1,00,000+ prize pool across multiple categories",
      "Mentorship sessions with engineers from top companies",
      "Free food, caffeine, and Wi-Fi for 24 hours",
      "On-the-spot recruitment by sponsor companies",
      "Special prizes for best beginner team and best UI/UX",
      "Hardware kits provided for IoT-track participants",
    ],
    eligibility: "Open to all current Bennett University students. Teams of 2–4 members. At least one student per team must be from a non-CS background (for interdisciplinary tracks).",
    tracks: ["Web & App Development", "AI / Machine Learning", "IoT & Hardware", "Open Innovation", "Social Impact"],
    tips: [
      "Register early — spots fill up fast, especially after the theme announcement",
      "Form your team before the event; don't rely on solo walk-ins",
      "Practice presenting your idea in 3 minutes — the demo round is short",
      "Bring a working MVP, not slides — judges value shipping over perfection",
      "Use Figma for mockups during the first 4 hours, then start building",
    ],
  },
  {
    slug: "smart-india-hackathon",
    name: "Smart India Hackathon",
    organizer: "Ministry of Education, Govt. of India",
    type: "National Hackathon",
    duration: "36 Hours",
    prize: "₹1,00,000 per team",
    date: "Aug 2025",
    status: "upcoming",
    color: "linear-gradient(135deg,#2980b9,#16527a)",
    badgeEmoji: "🇮🇳",
    registerUrl: "https://sih.gov.in",
    about:
      "Smart India Hackathon (SIH) is India's biggest national-level hackathon organized by the Government of India under the Ministry of Education. It is held across hundreds of nodal centres across the country. Student teams solve real-world problem statements provided by central government ministries, PSUs, and industries. Winning at SIH is one of the most prestigious achievements in a student's engineering career.",
    highlights: [
      "National-level recognition and government certificates",
      "₹1,00,000 prize per winning team per problem statement",
      "Problem statements from real government ministries and industries",
      "All-expenses-paid trip to the nodal centre",
      "Winning teams often get internship and job fast-tracks",
      "Both hardware and software editions available",
    ],
    eligibility: "Open to all engineering/technology students currently enrolled in recognized Indian colleges. Teams of exactly 6 members + 1 faculty mentor.",
    tracks: ["Agriculture", "Finance", "Health & Wellness", "Smart Education", "Disaster Management", "Miscellaneous"],
    tips: [
      "Read all problem statements before choosing — pick one you actually understand",
      "A diverse team (frontend, backend, ML, domain expert) wins more consistently",
      "Internal college rounds are competitive — prepare a solid prototype",
      "Study previous SIH winners on YouTube for presentation style",
      "Government judges value simplicity and real-world applicability over flashy UI",
    ],
  },
  {
    slug: "google-summer-of-code",
    name: "Google Summer of Code",
    organizer: "Google",
    type: "Open Source Stipend Program",
    duration: "12 weeks (Standard) / 22 weeks (Extended)",
    prize: "$3,000 – $6,600 stipend",
    date: "Applications: Feb–Mar 2025",
    status: "upcoming",
    color: "linear-gradient(135deg,#4285F4,#34A853)",
    badgeEmoji: "🌐",
    registerUrl: "https://summerofcode.withgoogle.com",
    about:
      "Google Summer of Code (GSoC) is a global online program where students work with open source organizations under the mentorship of experienced developers. It is not a hackathon — it is a structured 3-month paid internship-style program where you contribute to real open source projects used by millions of people worldwide. GSoC on your resume is a significant credibility signal to any tech company globally.",
    highlights: [
      "Paid stipend of $3,000–$6,600 depending on country and project size",
      "Work directly with maintainers of top open source projects",
      "Google certificate and public record of your contribution",
      "Gateway to FAANG internships and full-time roles",
      "Projects span ML, compilers, web, mobile, DevTools, and more",
      "Remote work — can be done from your college room",
    ],
    eligibility:
      "Must be 18+ years old and enrolled as a student (undergrad, postgrad, or bootcamp) at the time of application. Must not have been a GSoC participant more than twice previously.",
    tracks: ["Any open source project organization accepted by Google"],
    tips: [
      "Start contributing to your target organization 3–4 months before applications open",
      "Pick an org with active maintainers and a beginner-friendly codebase",
      "Your proposal is everything — be specific about deliverables and timelines",
      "Look at accepted proposals from previous years on GitHub",
      "Get feedback on your proposal draft from the org's community before submitting",
    ],
  },
  {
    slug: "icpc",
    name: "ICPC — International Collegiate Programming Contest",
    organizer: "ICPC Foundation",
    type: "Competitive Programming Contest",
    duration: "5 Hours (Regional) + Onsite Rounds",
    prize: "Global recognition, awards, and industry attention",
    date: "Oct–Nov 2025 (Regionals)",
    status: "upcoming",
    color: "linear-gradient(135deg,#7f52ff,#4a2e80)",
    badgeEmoji: "🏆",
    registerUrl: "https://icpc.global",
    about:
      "The ICPC is the oldest, largest, and most prestigious programming contest in the world — often called the Olympics of competitive programming. Teams of 3 compete to solve algorithmic problems under time pressure. Bennett University students compete in the Asia West Regional. Reaching ICPC regionals or placing well is one of the strongest signals of algorithmic problem-solving ability for any software engineering role.",
    highlights: [
      "Most prestigious CP contest globally — recognized by every major tech company",
      "Regionals held across India; top teams advance to World Finals",
      "Solving even 3–4 problems in regionals is a strong resume bullet",
      "Free participation (sponsored by contest organizers)",
      "Team of 3 — only 1 computer allowed, encourages strategy & communication",
      "World Finals winners receive large cash prizes and global fame",
    ],
    eligibility:
      "Must be a full-time undergraduate student under 24 years old. Each team has 3 members from the same university. Limited attempts per student across career.",
    tips: [
      "Start solving on Codeforces now — aim for Codeforces rating 1600+ before ICPC",
      "Practice ICPC-style team rounds on past problems from icpc.kattis.com",
      "Master: graphs, DP, segment trees, number theory, and geometry",
      "In the contest, split problem-reading so all 3 members read different problems",
      "One member should always be coding while others think — the single-PC constraint is key",
    ],
  },
];

export default function CompetitionDetail() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { user } = useAuth();

  const isBennettUser = user && user.email.endsWith("@bennett.edu.in");

  if (!user || !isBennettUser) {
    navigate("/competitions");
    return null;
  }

  const comp = competitions.find((c) => c.slug === params.slug);

  if (!comp) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "linear-gradient(135deg,#2e3f52,#1e2d3d)" }}>
        <p className="text-white text-xl font-bold mb-4">Competition not found</p>
        <button onClick={() => navigate("/competitions")} className="text-white/50 underline text-sm hover:text-white">
          ← Back to competitions
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}>
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button
          onClick={() => navigate("/competitions")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Competitions
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg truncate">{comp.name}</h1>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10 pb-20">
        {/* Hero */}
        <div
          className="flex flex-col items-center text-center p-8 rounded-3xl mb-8"
          style={{ background: comp.color }}
        >
          <div className="text-5xl mb-4">{comp.badgeEmoji}</div>
          <h2 className="text-white text-2xl font-black mb-1">{comp.name}</h2>
          <p className="text-white/75 text-sm mb-5">{comp.organizer}</p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {[
              { icon: Clock, label: "Duration", value: comp.duration },
              { icon: Trophy, label: "Prize", value: comp.prize },
              { icon: Calendar, label: "Date", value: comp.date },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center" style={{ background: "rgba(0,0,0,0.18)", borderRadius: 12, padding: "10px 16px" }}>
                <s.icon size={14} className="text-white/60 mb-1" />
                <p className="text-white text-sm font-bold">{s.value}</p>
                <p className="text-white/55 text-[10px]">{s.label}</p>
              </div>
            ))}
          </div>

          <a
            href={comp.registerUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white font-bold text-sm hover:bg-white/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
            style={{ color: "#1e2d3d" }}
          >
            <ExternalLink size={14} />
            Register Now
          </a>
        </div>

        {/* About */}
        <section className="mb-6">
          <h3 className="text-white font-bold text-base mb-3">About this Competition</h3>
          <p className="text-white/65 text-sm leading-relaxed">{comp.about}</p>
        </section>

        {/* Highlights */}
        <section className="mb-6">
          <h3 className="text-white font-bold text-base mb-3">Highlights</h3>
          <div className="flex flex-col gap-2">
            {comp.highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3.5 rounded-xl"
                style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white/60 mt-0.5" style={{ background: "rgba(255,255,255,0.10)" }}>
                  {i + 1}
                </span>
                <p className="text-white/70 text-sm">{h}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tracks */}
        {comp.tracks && (
          <section className="mb-6">
            <h3 className="text-white font-bold text-base mb-3">Tracks / Domains</h3>
            <div className="flex flex-wrap gap-2">
              {comp.tracks.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1.5 rounded-xl text-xs text-white/70 font-medium"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Eligibility */}
        <section className="mb-6">
          <h3 className="text-white font-bold text-base mb-3">
            <Users size={14} className="inline mr-1.5 text-white/50" />
            Eligibility
          </h3>
          <p className="text-white/65 text-sm leading-relaxed">{comp.eligibility}</p>
        </section>

        {/* Tips */}
        <section>
          <h3 className="text-white font-bold text-base mb-3">Tips to Succeed</h3>
          <div className="flex flex-col gap-2">
            {comp.tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-emerald-400 text-sm mt-0.5 flex-shrink-0">✓</span>
                <p className="text-white/65 text-sm">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
