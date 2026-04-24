import {
  Bot,
  BrainCircuit,
  Code2,
  Cpu,
  Database,
  HardDrive,
  LayoutDashboard,
  Network,
  Shield,
  SquareTerminal,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SimpleIcon } from "simple-icons";
import {
  siAndroidstudio,
  siCisco,
  siClaude,
  siCss,
  siCursor,
  siDart,
  siDocker,
  siFastapi,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGoogle,
  siHtml5,
  siJavascript,
  siNextdotjs,
  siOllama,
  siPython,
  siReact,
  siSqlite,
  siTailwindcss,
  siTypescript,
} from "simple-icons";

type BrandVisual = {
  kind: "brand";
  icon: SimpleIcon;
};

type FallbackVisual = {
  kind: "fallback";
  icon: LucideIcon;
  color: string;
  background: string;
  border: string;
};

type SkillVisual = BrandVisual | FallbackVisual;

const fallbackVisuals: Record<string, SkillVisual[]> = {
  SQL: [
    {
      kind: "fallback",
      icon: Database,
      color: "#2563eb",
      background: "rgba(37, 99, 235, 0.12)",
      border: "rgba(37, 99, 235, 0.22)",
    },
  ],
  Java: [
    {
      kind: "fallback",
      icon: Code2,
      color: "#ea580c",
      background: "rgba(234, 88, 12, 0.12)",
      border: "rgba(234, 88, 12, 0.22)",
    },
  ],
  "Firebase Auth": [{ kind: "brand", icon: siFirebase }],
  Firestore: [{ kind: "brand", icon: siFirebase }],
  "Networking Fundamentals": [
    {
      kind: "fallback",
      icon: Network,
      color: "#0f766e",
      background: "rgba(15, 118, 110, 0.12)",
      border: "rgba(15, 118, 110, 0.22)",
    },
  ],
  Troubleshooting: [
    {
      kind: "fallback",
      icon: Wrench,
      color: "#b45309",
      background: "rgba(180, 83, 9, 0.12)",
      border: "rgba(180, 83, 9, 0.22)",
    },
  ],
  Suricata: [
    {
      kind: "fallback",
      icon: Shield,
      color: "#dc2626",
      background: "rgba(220, 38, 38, 0.12)",
      border: "rgba(220, 38, 38, 0.22)",
    },
  ],
  "EVE Log Workflows": [
    {
      kind: "fallback",
      icon: SquareTerminal,
      color: "#0891b2",
      background: "rgba(8, 145, 178, 0.12)",
      border: "rgba(8, 145, 178, 0.22)",
    },
  ],
  "Incident Dashboards": [
    {
      kind: "fallback",
      icon: LayoutDashboard,
      color: "#7c3aed",
      background: "rgba(124, 58, 237, 0.12)",
      border: "rgba(124, 58, 237, 0.22)",
    },
  ],
  "Desktop Automation": [
    {
      kind: "fallback",
      icon: Bot,
      color: "#2563eb",
      background: "rgba(37, 99, 235, 0.12)",
      border: "rgba(37, 99, 235, 0.22)",
    },
  ],
  Tkinter: [{ kind: "brand", icon: siPython }],
  PyAutoGUI: [
    {
      kind: "fallback",
      icon: Bot,
      color: "#0f766e",
      background: "rgba(15, 118, 110, 0.12)",
      border: "rgba(15, 118, 110, 0.22)",
    },
  ],
  "Local-first Design": [
    {
      kind: "fallback",
      icon: HardDrive,
      color: "#4f46e5",
      background: "rgba(79, 70, 229, 0.12)",
      border: "rgba(79, 70, 229, 0.22)",
    },
  ],
  "SQL Modeling": [
    {
      kind: "fallback",
      icon: Database,
      color: "#2563eb",
      background: "rgba(37, 99, 235, 0.12)",
      border: "rgba(37, 99, 235, 0.22)",
    },
  ],
  "GPT Models": [
    {
      kind: "fallback",
      icon: BrainCircuit,
      color: "#10a37f",
      background: "rgba(16, 163, 127, 0.12)",
      border: "rgba(16, 163, 127, 0.22)",
    },
  ],
  Gemini: [{ kind: "brand", icon: siGoogle }],
  "xAI Tools": [
    {
      kind: "fallback",
      icon: BrainCircuit,
      color: "#1f2937",
      background: "rgba(31, 41, 55, 0.1)",
      border: "rgba(31, 41, 55, 0.18)",
    },
  ],
  vLLM: [
    {
      kind: "fallback",
      icon: Cpu,
      color: "#7c3aed",
      background: "rgba(124, 58, 237, 0.12)",
      border: "rgba(124, 58, 237, 0.22)",
    },
  ],
  "Git / GitHub": [
    { kind: "brand", icon: siGit },
    { kind: "brand", icon: siGithub },
  ],
  "VS Code": [
    {
      kind: "fallback",
      icon: Code2,
      color: "#007acc",
      background: "rgba(0, 122, 204, 0.12)",
      border: "rgba(0, 122, 204, 0.22)",
    },
  ],
};

const brandVisuals: Record<string, SkillVisual[]> = {
  TypeScript: [{ kind: "brand", icon: siTypescript }],
  Python: [{ kind: "brand", icon: siPython }],
  JavaScript: [{ kind: "brand", icon: siJavascript }],
  Dart: [{ kind: "brand", icon: siDart }],
  "Next.js": [{ kind: "brand", icon: siNextdotjs }],
  React: [{ kind: "brand", icon: siReact }],
  "Tailwind CSS": [{ kind: "brand", icon: siTailwindcss }],
  "HTML/CSS": [
    { kind: "brand", icon: siHtml5 },
    { kind: "brand", icon: siCss },
  ],
  Flutter: [{ kind: "brand", icon: siFlutter }],
  FastAPI: [{ kind: "brand", icon: siFastapi }],
  Firebase: [{ kind: "brand", icon: siFirebase }],
  "Cisco Switching": [{ kind: "brand", icon: siCisco }],
  Docker: [{ kind: "brand", icon: siDocker }],
  SQLite: [{ kind: "brand", icon: siSqlite }],
  Claude: [{ kind: "brand", icon: siClaude }],
  Ollama: [{ kind: "brand", icon: siOllama }],
  Cursor: [{ kind: "brand", icon: siCursor }],
  "Android Studio": [{ kind: "brand", icon: siAndroidstudio }],
};

function getSkillVisuals(name: string) {
  return brandVisuals[name] ?? fallbackVisuals[name] ?? [{ kind: "fallback", icon: Code2, color: "#4b5563", background: "rgba(75, 85, 99, 0.1)", border: "rgba(75, 85, 99, 0.16)" }];
}

function getBrandColor(icon: SimpleIcon) {
  const hex = `#${icon.hex}`;

  if (icon.hex.toLowerCase() === "000000" || icon.hex.toLowerCase() === "ffffff") {
    return {
      color: "var(--text)",
      background: "var(--surfaceSoft)",
      border: "var(--line)",
    };
  }

  return {
    color: hex,
    background: `${hex}14`,
    border: `${hex}30`,
  };
}

function SkillBrandIcon({ icon }: { icon: SimpleIcon }) {
  const styles = getBrandColor(icon);

  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border"
      style={{ color: styles.color, backgroundColor: styles.background, borderColor: styles.border }}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        <path d={icon.path} />
      </svg>
    </span>
  );
}

function SkillFallbackIcon({ icon: Icon, color, background, border }: FallbackVisual) {
  return (
    <span
      aria-hidden="true"
      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border"
      style={{ color, backgroundColor: background, borderColor: border }}
    >
      <Icon className="h-4 w-4" />
    </span>
  );
}

export function SkillIconStack({ name }: { name: string }) {
  const visuals = getSkillVisuals(name);

  return (
    <div className="flex items-center">
      {visuals.map((visual, index) => (
        <div
          key={`${name}-${index}`}
          className={index > 0 ? "-ml-2 rounded-2xl bg-panel p-0.5" : ""}
        >
          {visual.kind === "brand" ? (
            <SkillBrandIcon icon={visual.icon} />
          ) : (
            <SkillFallbackIcon
              kind={visual.kind}
              icon={visual.icon}
              color={visual.color}
              background={visual.background}
              border={visual.border}
            />
          )}
        </div>
      ))}
    </div>
  );
}
