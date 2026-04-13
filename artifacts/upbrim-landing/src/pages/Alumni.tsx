import { useLocation } from "wouter";
import { ArrowLeft, Briefcase, GraduationCap, Lock, ChevronRight } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

function nameToSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

const alumni = [
  { name: "Aryan Sharma", company: "Google", role: "Software Engineer", duration: "2020–2024", batch: "B.Tech CSE" },
  { name: "Priya Mehta", company: "Microsoft", role: "Product Manager", duration: "2020–2024", batch: "B.Tech CSE" },
  { name: "Karan Verma", company: "Amazon", role: "SDE-II", duration: "2019–2023", batch: "B.Tech CSE" },
  { name: "Neha Agarwal", company: "Deloitte", role: "Data Analyst", duration: "2019–2023", batch: "B.Tech ECE" },
  { name: "Rohan Gupta", company: "Flipkart", role: "Backend Engineer", duration: "2021–2025", batch: "B.Tech CSE" },
  { name: "Sneha Singh", company: "Adobe", role: "UX Designer", duration: "2021–2025", batch: "B.Tech IT" },
  { name: "Aditya Kapoor", company: "Infosys", role: "Systems Analyst", duration: "2020–2024", batch: "B.Tech ECE" },
  { name: "Tanvi Rao", company: "Salesforce", role: "Frontend Developer", duration: "2021–2025", batch: "B.Tech CSE" },
  { name: "Vivek Pandey", company: "Wipro", role: "Cloud Engineer", duration: "2019–2023", batch: "B.Tech IT" },
  { name: "Isha Jain", company: "Paytm", role: "ML Engineer", duration: "2020–2024", batch: "B.Tech CSE" },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

const avatarColors = [
  "linear-gradient(135deg,#4a8fa8,#2e6080)",
  "linear-gradient(135deg,#7b5ea7,#4a2e80)",
  "linear-gradient(135deg,#4a8f6a,#2e6040)",
  "linear-gradient(135deg,#a8734a,#804e2e)",
  "linear-gradient(135deg,#a84a6a,#802e4a)",
  "linear-gradient(135deg,#4a6aa8,#2e4a80)",
  "linear-gradient(135deg,#8fa84a,#6a802e)",
  "linear-gradient(135deg,#a84a4a,#802e2e)",
  "linear-gradient(135deg,#4aa8a8,#2e7a80)",
  "linear-gradient(135deg,#8a4aa8,#602e80)",
];

function AccessDenied() {
  const [, navigate] = useLocation();
  const { user } = useAuth();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      <div
        className="flex flex-col items-center text-center max-w-sm p-10 rounded-3xl"
        style={{
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.12)",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{ background: "rgba(239,68,68,0.15)", border: "1px solid rgba(239,68,68,0.3)" }}
        >
          <Lock size={28} className="text-red-400" />
        </div>
        <h2 className="text-white text-xl font-bold mb-2">Bennett Members Only</h2>
        <p className="text-white/55 text-sm leading-relaxed mb-6">
          {user
            ? "The Alumni page is only accessible to users with a @bennett.edu.in email address."
            : "Please log in with your Bennett University email (@bennett.edu.in) to access this page."}
        </p>
        <div className="flex flex-col gap-3 w-full">
          {!user && (
            <button
              onClick={() => navigate("/login")}
              className="w-full py-3 rounded-xl bg-white text-[#2e3f52] text-sm font-semibold hover:bg-white/90 transition-all"
            >
              Login with Bennett Email
            </button>
          )}
          <button
            onClick={() => navigate("/")}
            className="w-full py-3 rounded-xl text-white/70 hover:text-white text-sm transition-colors"
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Alumni() {
  const [, navigate] = useLocation();
  const { user } = useAuth();

  // Access guard — only @bennett.edu.in emails
  const isBennettUser = user?.email?.toLowerCase().endsWith("@bennett.edu.in");
  if (!isBennettUser) {
    return <AccessDenied />;
  }

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
        <h1 className="text-white font-bold text-lg">Alumni</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 pb-20">
        {/* College hero section */}
        <div
          className="flex flex-col items-center text-center py-10 px-6 rounded-3xl mb-10"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.10)",
          }}
        >
          {/* College logo */}
          <div className="mb-5">
            <img
              src="/bennett-logo.png"
              alt="Bennett University"
              className="h-24 object-contain drop-shadow-lg"
            />
          </div>

          <h2 className="text-white text-2xl font-bold mb-1">Bennett University</h2>
          <p className="text-white/40 text-sm mb-5 tracking-wide uppercase">Greater Noida, Uttar Pradesh</p>

          <p className="text-white/65 text-sm leading-relaxed max-w-2xl">
            Bennett University, established in 2016 under the Times of India Group, is a premier private university
            located in Greater Noida, India. Renowned for its industry-first curriculum and strong placement
            record, Bennett offers programs in engineering, law, media, and management. The university fosters
            entrepreneurship, research, and innovation through its dedicated centers and collaborations with
            global tech giants. Its vibrant campus life, strong alumni network, and emphasis on practical
            learning have made it one of North India's fastest-growing universities.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-7">
            {[
              { icon: GraduationCap, label: "Est. 2016" },
              { icon: Briefcase, label: "500+ Hiring Partners" },
              { icon: GraduationCap, label: "10,000+ Students" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white/70 text-xs"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
              >
                <item.icon size={14} className="text-white/40" />
                {item.label}
              </div>
            ))}
          </div>
        </div>

        {/* Alumni section */}
        <div className="mb-6">
          <h3 className="text-white text-xl font-bold mb-1">Alumni Spotlight</h3>
          <p className="text-white/45 text-sm">Graduates from the past 5 years making an impact.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {alumni.map((person, i) => (
            <button
              key={person.name}
              onClick={() => navigate(`/alumni/${nameToSlug(person.name)}`)}
              className="flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] hover:brightness-110 text-left group"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              {/* Avatar */}
              <div
                className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center text-base font-bold text-white shadow"
                style={{ background: avatarColors[i % avatarColors.length] }}
              >
                {getInitials(person.name)}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-white font-semibold text-sm truncate">{person.name}</p>
                  <ChevronRight size={14} className="text-white/30 group-hover:text-white/70 flex-shrink-0 transition-colors" />
                </div>
                <p className="text-white/60 text-xs truncate">
                  {person.role} · {person.company}
                </p>
                <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full text-white/60"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {person.batch}
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full text-white/60"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
                  >
                    {person.duration}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
