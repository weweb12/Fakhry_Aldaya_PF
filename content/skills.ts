export type SkillStrength = "strongest" | "project-backed" | "supporting";

export type SkillItem = {
  name: string;
  strength: SkillStrength;
  context: string;
};

export type SkillGroup = {
  title: string;
  description: string;
  items: SkillItem[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Engineering",
    description: "The languages and habits I rely on most across product builds and technical tooling.",
    items: [
      { name: "TypeScript", strength: "strongest", context: "Primary language for frontend product work and structured UI systems." },
      { name: "Python", strength: "strongest", context: "Used for automation tooling, scripting, and backend-oriented experimentation." },
      { name: "JavaScript", strength: "project-backed", context: "Supports web interfaces, prototypes, and browser-side tooling." },
      { name: "SQL", strength: "project-backed", context: "Applied when shaping lightweight persistence and query-oriented data flows." },
      { name: "Java", strength: "supporting", context: "Academic and systems foundation." },
      { name: "Dart", strength: "project-backed", context: "Used in Flutter for mobile product work." },
    ],
  },
  {
    title: "Frontend",
    description: "Interfaces built to make technical products feel clear, deliberate, and usable.",
    items: [
      { name: "Next.js", strength: "strongest", context: "Frontend architecture for flagship portfolio and dashboard-style product work." },
      { name: "React", strength: "strongest", context: "Component-based UI work with a focus on hierarchy and practical clarity." },
      { name: "Tailwind CSS", strength: "project-backed", context: "Used to build polished, maintainable design systems quickly." },
      { name: "HTML/CSS", strength: "project-backed", context: "Foundation for structured layouts, responsive behavior, and interaction detail." },
      { name: "Flutter", strength: "project-backed", context: "Mobile interface work for AU Facilities." },
    ],
  },
  {
    title: "Backend / APIs",
    description: "Lightweight backend patterns and service logic that support real product behavior.",
    items: [
      { name: "FastAPI", strength: "project-backed", context: "Used for application logic and event intake direction in NetSentinel." },
      { name: "Firebase", strength: "project-backed", context: "Application backend for AU Facilities request and approval flow." },
      { name: "Firebase Auth", strength: "supporting", context: "Familiarity from building secure user-oriented flows." },
      { name: "Firestore", strength: "project-backed", context: "Document-oriented storage for mobile workflow state." },
    ],
  },
  {
    title: "Security & Networking",
    description: "The foundation that shapes how I think about trust, traffic, and visibility in software.",
    items: [
      { name: "Networking Fundamentals", strength: "strongest", context: "Academic and internship grounding in traffic flow, segmentation, and structure." },
      { name: "Cisco Switching", strength: "project-backed", context: "Hands-on internship lab exposure." },
      { name: "Troubleshooting", strength: "strongest", context: "Useful across network behavior, product bugs, and workflow issues." },
      { name: "Suricata", strength: "project-backed", context: "Security event source direction for NetSentinel." },
      { name: "EVE Log Workflows", strength: "project-backed", context: "Part of thinking through event flow and alert visibility." },
      { name: "Incident Dashboards", strength: "project-backed", context: "Operator-facing workflow design explored through NetSentinel." },
    ],
  },
  {
    title: "Automation",
    description: "Tools that reduce repeated work and package useful behavior into something people can actually reuse.",
    items: [
      { name: "Desktop Automation", strength: "strongest", context: "A core interest area backed by a packaged Python desktop utility." },
      { name: "Tkinter", strength: "project-backed", context: "Used to turn automation into a usable desktop product." },
      { name: "PyAutoGUI", strength: "project-backed", context: "Powering repeatable action flows in desktop automation work." },
      { name: "Local-first Design", strength: "project-backed", context: "Useful for private, practical tools that should work without service overhead." },
      { name: "Docker", strength: "supporting", context: "Familiarity with development and packaging workflows." },
    ],
  },
  {
    title: "Databases",
    description: "Simple, fit-for-purpose data layers chosen to match the project and deployment reality.",
    items: [
      { name: "SQLite", strength: "project-backed", context: "Used for lightweight persistence in NetSentinel direction." },
      { name: "Firestore", strength: "project-backed", context: "Used in AU Facilities as part of the product backend." },
      { name: "SQL Modeling", strength: "supporting", context: "Comfortable shaping small data structures around practical needs." },
    ],
  },
  {
    title: "AI / LLM Tools",
    description: "Tools I explore for workflow leverage, product concepts, and structured prompt generation.",
    items: [
      { name: "GPT Models", strength: "strongest", context: "Used actively for workflow thinking, prompting, and product exploration." },
      { name: "Claude", strength: "project-backed", context: "Part of comparative prompting and tool evaluation." },
      { name: "Gemini", strength: "supporting", context: "General familiarity for model comparison." },
      { name: "xAI Tools", strength: "supporting", context: "Exploratory familiarity with multi-model workflows." },
      { name: "Ollama", strength: "project-backed", context: "Interest in local model workflows and practical experimentation." },
      { name: "vLLM", strength: "supporting", context: "Awareness of local and hosted inference workflow direction." },
    ],
  },
  {
    title: "Developer Workflow Tools",
    description: "The everyday tools that support iteration, code quality, and shipping.",
    items: [
      { name: "Git / GitHub", strength: "strongest", context: "Core to version control, documentation, and project communication." },
      { name: "VS Code", strength: "strongest", context: "Primary development environment." },
      { name: "Cursor", strength: "project-backed", context: "Used for AI-assisted development workflows." },
      { name: "Android Studio", strength: "project-backed", context: "Part of Flutter-based product development." },
    ],
  },
];
