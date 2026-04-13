import { useState } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Send, CheckCircle, Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const [, navigate] = useLocation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

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
        <h1 className="text-white font-bold text-lg">Contact Us</h1>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12 pb-20">
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold mb-2">Get in Touch</h2>
          <p className="text-white/50 text-sm">
            Have a question, suggestion, or want to collaborate? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {[
              {
                icon: Mail,
                label: "Email us",
                value: "upbrim@bennett.edu.in",
                sub: "We reply within 24 hours",
              },
              {
                icon: MapPin,
                label: "Find us",
                value: "Bennett University",
                sub: "Greater Noida, UP, India",
              },
              {
                icon: MessageSquare,
                label: "Response time",
                value: "Under 24 hours",
                sub: "During college terms",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-start gap-4 p-4 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                >
                  <item.icon size={17} className="text-white/60" />
                </div>
                <div>
                  <p className="text-white/40 text-xs mb-0.5">{item.label}</p>
                  <p className="text-white text-sm font-medium">{item.value}</p>
                  <p className="text-white/35 text-xs mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="flex flex-col items-center justify-center text-center h-full py-16 rounded-2xl"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                <CheckCircle size={48} className="text-emerald-400 mb-4" />
                <h3 className="text-white text-lg font-bold mb-2">Message Sent!</h3>
                <p className="text-white/55 text-sm max-w-xs">
                  Thanks for reaching out, {form.name.split(" ")[0]}. We'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="mt-6 text-white/50 hover:text-white text-sm underline transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl flex flex-col gap-5"
                style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.09)" }}
              >
                {/* Name */}
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Rahul Verma"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white/60 text-xs font-medium mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us what's on your mind..."
                    className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 text-sm outline-none transition-all focus:ring-2 focus:ring-white/20 resize-none"
                    style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.10)" }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-white text-[#2e3f52] font-semibold text-sm hover:bg-white/90 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
