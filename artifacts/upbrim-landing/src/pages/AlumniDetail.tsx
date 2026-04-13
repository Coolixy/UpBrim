import { useLocation, useRoute } from "wouter";
import { ArrowLeft, Phone, Mail, Linkedin, Twitter, Github, Clock, Quote } from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

const alumniData: Record<string, {
  name: string;
  company: string;
  role: string;
  duration: string;
  batch: string;
  color: string;
  phone: string;
  availability: string;
  email: string;
  linkedin: string;
  twitter: string;
  github: string;
  quote: string;
  journey: string;
  achievements: string[];
  codingJourney: string;
}> = {
  "aryan-sharma": {
    name: "Aryan Sharma",
    company: "Google",
    role: "Software Engineer",
    duration: "2020–2024",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#4a8fa8,#2e6080)",
    phone: "+91 98100 11234",
    availability: "Weekends, 10 AM – 1 PM IST",
    email: "aryan.sharma@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Start before you feel ready. The best time to build was yesterday, the second best time is today.",
    codingJourney: "Aryan started coding in his very first semester with C++, initially struggling with pointers and data structures like most freshers. He joined the college's coding club in Semester 2 and religiously solved LeetCode problems every morning before class. By Semester 4, he had cleared his first internship interview at a Noida startup and spent the summer working on real backend systems. In his third year he shifted focus to system design and competitive programming, reaching LeetCode Expert and achieving a 4-star rating on CodeChef.",
    achievements: [
      "Winner, Bennett University Hackathon 2022",
      "LeetCode Expert (top 3% globally)",
      "Google Summer of Code (GSoC) 2023 contributor",
      "Published research paper on distributed caching at IEEE ICICT",
      "Campus placement: Google SWE via on-campus drive",
    ],
  },
  "priya-mehta": {
    name: "Priya Mehta",
    company: "Microsoft",
    role: "Product Manager",
    duration: "2020–2024",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#7b5ea7,#4a2e80)",
    phone: "+91 98200 22345",
    availability: "Monday & Wednesday, 7 PM – 9 PM IST",
    email: "priya.mehta@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Technical skills open doors. Communication and empathy determine how far you go inside.",
    codingJourney: "Priya came into Bennett with no prior coding background. Her first semester was rough — she almost dropped CSE. But a senior mentor at the college's Women in Tech cell helped her rebuild her confidence. She started with Python, built small automation scripts, and gradually moved into web development. By her second year she combined her tech skills with a passion for user experience, completing two product internships — one at a fintech startup and one at a mid-sized SaaS company. Her dual strength in code and communication made her a standout candidate for PM roles.",
    achievements: [
      "Founded Bennett's Women in Tech chapter with 300+ members",
      "2× internship at product-focused startups",
      "Best Final Year Project Award, CSE Dept. 2024",
      "Microsoft PM via off-campus referral",
      "Speaker at TEDxBennettUniversity 2023",
    ],
  },
  "karan-verma": {
    name: "Karan Verma",
    company: "Amazon",
    role: "SDE-II",
    duration: "2019–2023",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#4a8f6a,#2e6040)",
    phone: "+91 99100 33456",
    availability: "Saturday, 11 AM – 2 PM IST",
    email: "karan.verma@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Consistency beats talent. I was never the smartest in the room — I was just the one who kept showing up.",
    codingJourney: "Karan's coding journey began with a failed attempt at a coding competition in Semester 1 — he scored 0. That embarrassment was the turning point. He committed to solving 2 DSA problems every single day for the next 18 months. He built a public GitHub streak that became a point of pride. By third year he had cleared Amazon's SDE-I interview, joining as an intern. His performance led to a Pre-Placement Offer (PPO), and within a year of joining full-time he was promoted to SDE-II.",
    achievements: [
      "900+ day GitHub contribution streak",
      "Amazon SDE Internship → Full-time PPO",
      "LeetCode: 1800+ rating, 500+ problems solved",
      "Open source contributor to Apache Kafka clients",
      "Mentored 30+ juniors who cleared FAANG interviews",
    ],
  },
  "neha-agarwal": {
    name: "Neha Agarwal",
    company: "Deloitte",
    role: "Data Analyst",
    duration: "2019–2023",
    batch: "B.Tech ECE",
    color: "linear-gradient(135deg,#a8734a,#804e2e)",
    phone: "+91 98300 44567",
    availability: "Tuesdays, 6 PM – 8 PM IST",
    email: "neha.agarwal@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Data tells stories. Your job is to learn how to listen.",
    codingJourney: "Neha's path was unconventional — an ECE student who fell in love with data. A data science elective in Semester 3 changed her trajectory. She taught herself Python, pandas, and SQL through free online courses during lockdown, built a personal dashboard analyzing COVID-19 trends, and posted it on LinkedIn where it went viral within the college community. That post led to her first internship at a data consultancy. At Deloitte she now handles analytics for enterprise clients across three sectors.",
    achievements: [
      "Kaggle Competitions Expert (top 8% globally)",
      "Built college's first student-run data analytics cell",
      "Interned at 2 analytics firms before graduating",
      "IBM Data Science Professional Certificate",
      "Awarded Best Capstone Project, ECE 2023",
    ],
  },
  "rohan-gupta": {
    name: "Rohan Gupta",
    company: "Flipkart",
    role: "Backend Engineer",
    duration: "2021–2025",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#a84a6a,#802e4a)",
    phone: "+91 99200 55678",
    availability: "Sundays, 3 PM – 5 PM IST",
    email: "rohan.gupta@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Build things people actually use. Ship fast, iterate faster.",
    codingJourney: "Rohan shipped his first side project — a hostel room-swapping app — in Semester 2. It became so popular within Bennett that the college administration noticed. That credibility opened doors to hackathons, where he won twice. He interned at two early-stage startups in Semesters 5 and 6, each time working on high-scale backend systems. His internship at Flipkart converted into a full-time offer, where he now works on the supply chain microservices team.",
    achievements: [
      "Winner, Smart India Hackathon 2023",
      "Built an app used by 400+ Bennett students",
      "2× startup internship in backend systems",
      "Flipkart internship → Full-time PPO",
      "AWS Certified Developer – Associate",
    ],
  },
  "sneha-singh": {
    name: "Sneha Singh",
    company: "Adobe",
    role: "UX Designer",
    duration: "2021–2025",
    batch: "B.Tech IT",
    color: "linear-gradient(135deg,#4a6aa8,#2e4a80)",
    phone: "+91 98400 66789",
    availability: "Weekends, 12 PM – 3 PM IST",
    email: "sneha.singh@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Good design is invisible. Great design makes you feel understood.",
    codingJourney: "Sneha combined her IT degree with self-taught UI/UX skills. She spent her first year mastering Figma and design systems, contributing redesigns to open-source projects on GitHub. By Semester 4 she had a strong portfolio of 10+ case studies. Her internship at a product agency led directly to Adobe's competitive design residency program, where her work on Adobe Express's mobile onboarding was shipped to millions of users.",
    achievements: [
      "Adobe Design Residency 2024 (1 of 15 selected across India)",
      "Redesigned Bennett University's official app UI",
      "10,000+ Behance followers",
      "Winner, Microsoft Design Challenge 2023",
      "Google UX Design Certificate",
    ],
  },
  "aditya-kapoor": {
    name: "Aditya Kapoor",
    company: "Infosys",
    role: "Systems Analyst",
    duration: "2020–2024",
    batch: "B.Tech ECE",
    color: "linear-gradient(135deg,#8fa84a,#6a802e)",
    phone: "+91 99300 77890",
    availability: "Fridays, 7 PM – 9 PM IST",
    email: "aditya.kapoor@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Never underestimate the power of reading documentation. That's where the real answers are.",
    codingJourney: "Aditya was an ECE student who discovered embedded systems and IoT in his second year. He built a smart home automation prototype for his lab project that won at a state-level innovation fair. Transitioning into software, he picked up Java and cloud computing in his third year, earning multiple certifications. His systematic approach and documentation skills made him stand out at Infosys, where he progressed quickly from a support role to systems analyst.",
    achievements: [
      "1st place, State-level IoT Innovation Fair 2022",
      "AWS Solutions Architect Associate certified",
      "Microsoft Azure Fundamentals certified",
      "Infosys Insta Award (2× winner, first year)",
      "IEEE student branch head, Bennett 2023",
    ],
  },
  "tanvi-rao": {
    name: "Tanvi Rao",
    company: "Salesforce",
    role: "Frontend Developer",
    duration: "2021–2025",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#4aa8a8,#2e7a80)",
    phone: "+91 98500 88901",
    availability: "Thursdays, 8 PM – 10 PM IST",
    email: "tanvi.rao@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "The frontend is where your code meets real people. Treat every pixel with care.",
    codingJourney: "Tanvi fell in love with web development after building her college society's website in Semester 1. She went deep into React and modern CSS, building and publishing three portfolio projects by Semester 3. She became a frequent contributor to open-source UI libraries and won a frontend track at HackWithInfy. Her strong portfolio and GitHub presence led to Salesforce reaching out to her directly via LinkedIn — she never had to apply.",
    achievements: [
      "HackWithInfy Frontend Track winner 2023",
      "500+ GitHub stars across personal projects",
      "Contributed to React ecosystem open-source libs",
      "Salesforce Lightning Web Components certified",
      "Built Bennett University's tech fest website used by 5,000+ visitors",
    ],
  },
  "vivek-pandey": {
    name: "Vivek Pandey",
    company: "Wipro",
    role: "Cloud Engineer",
    duration: "2019–2023",
    batch: "B.Tech IT",
    color: "linear-gradient(135deg,#a84a4a,#802e2e)",
    phone: "+91 99400 99012",
    availability: "Saturday & Sunday, 10 AM – 12 PM IST",
    email: "vivek.pandey@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Cloud is the future. Learn it before your company asks you to.",
    codingJourney: "Vivek started as a curious tinkerer who set up his own home lab with Raspberry Pi and old laptops. That hardware mindset naturally led him to cloud infrastructure. He earned his first AWS certification in Semester 3 and began freelancing on cloud migration projects while still in college. His practical cloud skills were rare among fresh graduates, making him an immediate asset at Wipro where he was deployed on client projects from week one.",
    achievements: [
      "AWS Solutions Architect Professional certified",
      "3× AWS certification holder",
      "Freelanced on 5 cloud migration projects while in college",
      "Wipro Velocity Track (fast-track promotion program)",
      "College Cloud Computing Club founder",
    ],
  },
  "isha-jain": {
    name: "Isha Jain",
    company: "Paytm",
    role: "ML Engineer",
    duration: "2020–2024",
    batch: "B.Tech CSE",
    color: "linear-gradient(135deg,#8a4aa8,#602e80)",
    phone: "+91 98600 10123",
    availability: "Wednesdays, 6 PM – 8 PM IST",
    email: "isha.jain@alumni.bennett.edu.in",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    github: "https://github.com",
    quote: "Machine learning is not magic — it's math, data, and patience. Anyone can learn it.",
    codingJourney: "Isha discovered machine learning through Andrew Ng's Coursera course during her first summer break. She was hooked. She built increasingly complex ML projects each semester — from image classifiers to NLP chatbots — sharing all her work publicly on GitHub and Kaggle. By Semester 5 she had presented a fraud detection model at an internal Paytm tech talk as part of a college collaboration. That talk led directly to her placement offer.",
    achievements: [
      "Kaggle Notebook Expert with 3 gold medals",
      "Published ML project featured on Towards Data Science",
      "Presented at Paytm Internal AI Summit 2023",
      "DeepLearning.AI Specialization completed",
      "Best B.Tech Thesis, CSE Dept. 2024 — 'Fraud Detection using Graph Neural Networks'",
    ],
  },
};

const slugMap: Record<string, string> = {
  "aryan-sharma": "Aryan Sharma",
  "priya-mehta": "Priya Mehta",
  "karan-verma": "Karan Verma",
  "neha-agarwal": "Neha Agarwal",
  "rohan-gupta": "Rohan Gupta",
  "sneha-singh": "Sneha Singh",
  "aditya-kapoor": "Aditya Kapoor",
  "tanvi-rao": "Tanvi Rao",
  "vivek-pandey": "Vivek Pandey",
  "isha-jain": "Isha Jain",
};

export function nameToSlug(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function AlumniDetail() {
  const [, navigate] = useLocation();
  const [, params] = useRoute("/alumni/:slug");
  const { user } = useAuth();
  const slug = params?.slug ?? "";
  const data = alumniData[slug];

  const isBennettUser = user?.email?.toLowerCase().endsWith("@bennett.edu.in");
  if (!isBennettUser) {
    navigate("/alumni");
    return null;
  }

  if (!data) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
      >
        <p className="text-white text-xl font-bold mb-4">Alumni not found</p>
        <button onClick={() => navigate("/alumni")} className="text-white/60 hover:text-white text-sm underline">
          Back to Alumni
        </button>
      </div>
    );
  }

  const initials = data.name.split(" ").map((n) => n[0]).join("").toUpperCase();

  return (
    <div
      className="min-h-screen"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      {/* Header */}
      <header className="flex items-center gap-4 px-6 py-5 border-b border-white/10">
        <button
          onClick={() => navigate("/alumni")}
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
          Alumni
        </button>
        <div className="h-4 w-px bg-white/20" />
        <h1 className="text-white font-bold text-lg">{data.name}</h1>
      </header>

      <main className="max-w-3xl mx-auto px-6 py-10 pb-20">
        {/* Hero card */}
        <div
          className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-3xl mb-8"
          style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
        >
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 shadow-lg"
            style={{ background: data.color }}
          >
            {initials}
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-white text-2xl font-bold mb-1">{data.name}</h2>
            <p className="text-white/60 text-sm mb-3">{data.role} · {data.company}</p>
            <div className="flex flex-wrap justify-center sm:justify-start gap-2">
              <span className="text-xs px-2.5 py-1 rounded-full text-white/60" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {data.batch}
              </span>
              <span className="text-xs px-2.5 py-1 rounded-full text-white/60" style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)" }}>
                {data.duration}
              </span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div
          className="relative p-6 rounded-2xl mb-8"
          style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.09)" }}
        >
          <Quote size={28} className="text-white/20 mb-3" />
          <p className="text-white/80 text-base italic leading-relaxed">"{data.quote}"</p>
          <p className="text-white/40 text-xs mt-3">— {data.name}</p>
        </div>

        {/* Coding Journey */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-lg mb-4">Coding & College Journey</h3>
          <div
            className="p-5 rounded-2xl"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p className="text-white/70 text-sm leading-relaxed">{data.codingJourney}</p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-8">
          <h3 className="text-white font-bold text-lg mb-4">Achievements</h3>
          <div className="flex flex-col gap-3">
            {data.achievements.map((ach, i) => (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5"
                  style={{ background: data.color }}
                >
                  {i + 1}
                </div>
                <p className="text-white/70 text-sm leading-relaxed">{ach}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & Socials */}
        <section>
          <h3 className="text-white font-bold text-lg mb-4">Get in Touch</h3>
          <div
            className="p-5 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4"
            style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Phone */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Phone size={15} className="text-white/60" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Phone</p>
                <p className="text-white text-sm font-medium">{data.phone}</p>
                <div className="flex items-center gap-1 mt-1">
                  <Clock size={11} className="text-white/35" />
                  <p className="text-white/40 text-xs">{data.availability}</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(255,255,255,0.08)" }}>
                <Mail size={15} className="text-white/60" />
              </div>
              <div>
                <p className="text-white/40 text-xs mb-0.5">Email</p>
                <a href={`mailto:${data.email}`} className="text-white text-sm font-medium hover:text-white/70 transition-colors break-all">
                  {data.email}
                </a>
              </div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex gap-3 mt-4">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white transition-all hover:scale-105"
              style={{ background: "#0A66C233", border: "1px solid #0A66C255" }}
            >
              <Linkedin size={15} />
              LinkedIn
            </a>
            <a
              href={data.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Twitter size={15} />
              Twitter
            </a>
            <a
              href={data.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-white/80 hover:text-white transition-all hover:scale-105"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              <Github size={15} />
              GitHub
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
