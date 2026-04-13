import { useLocation } from "wouter";
import { ArrowLeft, Users, TrendingUp, Award, Handshake } from "lucide-react";

const stats = [
  { icon: Users, value: "1,200+", label: "Freshers Guided" },
  { icon: TrendingUp, value: "340+", label: "Placed or Interning" },
  { icon: Handshake, value: "180+", label: "Referrals from Seniors" },
  { icon: Award, value: "60+", label: "Alumni Mentors" },
];

const team = [
  {
    name: "Saatvik Sharma",
    role: "Co-founder & Developer",
    color: "linear-gradient(135deg,#4a8fa8,#2e6080)",
    bio: "2nd year CSE student at Bennett University. Passionate about full-stack development and building products that solve real problems around him.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
  {
    name: "Bharat Kumar",
    role: "Co-founder & Designer",
    color: "linear-gradient(135deg,#7b5ea7,#4a2e80)",
    bio: "2nd year CSE student at Bennett University. Interested in UI/UX design and community building, driven by a desire to make college life less overwhelming for juniors.",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
  },
];

export default function About() {
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
        <h1 className="text-white font-bold text-lg">About Us</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-12 pb-20">

        {/* Our Story */}
        <section className="mb-14">
          <div
            className="relative overflow-hidden p-8 rounded-3xl"
            style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.10)" }}
          >
            {/* Decorative circles */}
            <div className="absolute top-[-40px] right-[-40px] w-40 h-40 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #4a8fa8, transparent)" }} />
            <div className="absolute bottom-[-30px] left-[-30px] w-32 h-32 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #7b5ea7, transparent)" }} />

            <div className="relative z-10">
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 text-white/70" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}>
                Our Story
              </span>

              <h2 className="text-white text-2xl font-bold mb-5 leading-snug">
                We were the freshers who had no one to turn to.
              </h2>

              <div className="flex flex-col gap-4 text-white/65 text-sm leading-relaxed">
                <p>
                  We are Saatvik and Bharat — two second-year students at Bennett University who remember vividly what our first few weeks of college felt like. Overwhelming. Confusing. Lonely, even. We had a thousand questions and no clear answers.
                </p>
                <p>
                  Where do I start learning to code? Which platforms actually matter? How do seniors get internships so early? Who can I reach out to for guidance? These aren't complicated questions — but when you're a fresher, they feel impossible to answer alone.
                </p>
                <p>
                  We watched dozens of our batchmates struggle the same way — talented people who fell behind simply because they didn't know where to begin. The information was out there, scattered across YouTube videos, Reddit threads, and Discord servers, but no one had put it together for students like us, at a college like ours.
                </p>
                <p>
                  So we built <span className="text-white font-semibold">upBrim</span>. A single place where a fresher at Bennett can understand what platforms to use, how alumni navigated their journey, and who to reach out to for guidance. We wanted to be the seniors we wished we had.
                </p>
                <p className="text-white/80 font-medium">
                  Escape FOMO with a click — because no one should feel left behind just because they didn't know where to look.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-14">
          <h3 className="text-white text-xl font-bold mb-6">Our Impact So Far</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center py-6 px-3 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <stat.icon size={18} className="text-white/60" />
                </div>
                <p className="text-white text-2xl font-bold mb-1">{stat.value}</p>
                <p className="text-white/45 text-xs leading-tight">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mission */}
        <section className="mb-14">
          <div
            className="p-6 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3 className="text-white font-bold text-base mb-3">Our Mission</h3>
            <p className="text-white/65 text-sm leading-relaxed">
              upBrim exists to bridge the gap between freshers and the knowledge they need to thrive in college. We connect students with alumni who've been through the journey, surface the platforms and resources that actually matter, and build a community where no one feels lost or alone in their first year. We believe every student deserves a fair start — regardless of their school background, city, or connections.
            </p>
          </div>
        </section>

        {/* Meet the Team */}
        <section>
          <h3 className="text-white text-xl font-bold mb-2">Meet the Team</h3>
          <p className="text-white/45 text-sm mb-6">Two students, one idea, zero mentors to start with — now we are the mentors.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {team.map((member) => {
              const initials = member.name.split(" ").map((n) => n[0]).join("").toUpperCase();
              return (
                <div
                  key={member.name}
                  className="flex flex-col p-6 rounded-2xl"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
                >
                  {/* Avatar */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white mb-4 shadow"
                    style={{ background: member.color }}
                  >
                    {initials}
                  </div>

                  <h4 className="text-white font-bold text-base mb-0.5">{member.name}</h4>
                  <p className="text-white/45 text-xs mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>

                  {/* Socials */}
                  <div className="flex gap-2 mt-auto">
                    {[
                      { label: "LinkedIn", href: member.linkedin, color: "#0A66C2" },
                      { label: "Twitter", href: member.twitter },
                      { label: "GitHub", href: member.github },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-1.5 rounded-lg text-xs font-medium text-white/60 hover:text-white transition-all"
                        style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                      >
                        {s.label}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
