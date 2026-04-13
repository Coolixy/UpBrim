import { useLocation } from "wouter";
import { ArrowLeft } from "lucide-react";

interface PlaceholderProps {
  title: string;
}

export default function Placeholder({ title }: PlaceholderProps) {
  const [, navigate] = useLocation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "linear-gradient(135deg, #2e3f52 0%, #1e2d3d 60%, #16232f 100%)" }}
    >
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-white/50 hover:text-white/90 text-sm transition-colors mb-8 group"
      >
        <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
        Back to home
      </button>
      <h1 className="text-white text-4xl font-bold mb-3">{title}</h1>
      <p className="text-white/40 text-sm">Coming soon</p>
    </div>
  );
}
