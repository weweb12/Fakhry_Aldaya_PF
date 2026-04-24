export type MediaItem = {
  kind: "image" | "video";
  title: string;
  caption: string;
  src?: string;
  poster?: string;
};

export type Project = {
  slug: string;
  name: string;
  category: string;
  status: string;
  timeframe: string;
  featured?: boolean;
  websiteUrl?: string;
  presentationMode?: boolean;
  isVideoShowcase?: boolean;
  mobileMedia?: MediaItem[];
  summary: string;
  positioning: string;
  whyItMatters: string;
  problem: string[];
  build: string[];
  architecture: string[];
  decisions: string[];
  challenges: string[];
  result: string[];
  techStack: string[];
  tags: string[];
  metrics: Array<{ label: string; value: string }>;
  media: MediaItem[];
};

export const projects: Project[] = [
  {
    slug: "netsentinel",
    name: "NetSentinel",
    category: "Security Monitoring Platform",
    status: "In progress",
    timeframe: "Ongoing product exploration",
    featured: true,
    websiteUrl: "https://red-stinkbug-212544.hostingersite.com/",
    summary:
      "A security monitoring platform exploration built around event flow, alert handling, and operator visibility rather than passive log viewing.",
    positioning:
      "NetSentinel is the strongest expression of my interest in secure systems and product-minded engineering. It treats monitoring as an operator workflow problem, not just a data display problem.",
    whyItMatters:
      "It shows how I think across frontend structure, backend flow, security telemetry, and the actual decisions an operator needs to make during triage.",
    problem: [
      "Raw security events are noisy and difficult to act on when they arrive as disconnected logs with no workflow framing.",
      "Security tools lose value when the interface makes it hard to see priority, context, and next action.",
      "Local or small-team environments still need useful monitoring patterns, but not every setup needs enterprise-heavy complexity.",
    ],
    build: [
      "A Next.js frontend shaped around incident visibility, alert state, and operator-facing structure.",
      "A FastAPI backend direction for event intake, transformation, and application logic.",
      "SQLite persistence to support a local-first, practical monitoring setup.",
      "A Suricata integration path using EVE log forwarding so telemetry can move into the platform workflow cleanly.",
    ],
    architecture: [
      "Suricata generates EVE events that are forwarded into the backend pipeline.",
      "FastAPI receives and normalizes events before storing state in SQLite.",
      "The frontend prioritizes dashboards, alert review, and incident-oriented navigation instead of dumping raw output.",
      "The project is intentionally local-first so experimentation stays lightweight, fast, and realistic for smaller environments.",
    ],
    decisions: [
      "Kept the product local-first to reduce deployment overhead and focus on operator workflow quality first.",
      "Chose lightweight persistence because this stage is about product clarity and event flow, not infrastructure complexity for its own sake.",
      "Centered the interface around incidents and alerts so the UI reflects decisions, not just data ingestion.",
      "Framed Suricata integration as a practical signal source that supports realistic monitoring direction.",
    ],
    challenges: [
      "Balancing technical credibility with interface clarity is harder than just showing charts and tables.",
      "Security workflows need enough structure to feel dependable without turning the product into a cluttered analyst console.",
      "The product is still evolving, so the architecture has to stay flexible while preserving a clear point of view.",
    ],
    result: [
      "NetSentinel is an evolving flagship build that best represents my direction in secure systems, operator visibility, and practical product engineering.",
      "The current state demonstrates technical depth across the stack and a clear product narrative for where the platform is going next.",
      "The next direction includes richer alert handling, better investigation views, and deeper workflow support around incidents.",
    ],
    techStack: ["Next.js", "TypeScript", "FastAPI", "SQLite", "Suricata", "EVE log workflows"],
    tags: ["Secure systems", "Operator UX", "Monitoring", "Local-first"],
    metrics: [
      { label: "Focus", value: "Operator visibility" },
      { label: "Stack shape", value: "Frontend + API + telemetry" },
      { label: "Direction", value: "Local-first monitoring" },
    ],
    media: [
      {
        kind: "image",
        title: "Operational security workspace",
        caption: "Clear monitoring, practical response, and client-ready visibility in one serious security workspace.",
        src: "/assets/projects/netsentinel/netsentinel-1.png",
      },
      {
        kind: "image",
        title: "Alert workflow",
        caption: "Triage detections with severity, status, and event-type filters before escalation.",
        src: "/assets/projects/netsentinel/netsentinel-2.png",
      },
      {
        kind: "image",
        title: "From telemetry to visibility",
        caption: "A concise view of how NetSentinel keeps the monitoring story connected from source coverage through response.",
        src: "/assets/projects/netsentinel/netsentinel-3.png",
      },
    ],
  },

  {
    slug: "au-facilities",
    name: "AU Facilities",
    category: "Graduation Project",
    status: "Completed",
    timeframe: "University project",
    presentationMode: true,
    summary:
      "A mobile system for secure university document requests, approvals, PDF generation, and QR verification.",
    positioning:
      "AU Facilities is a trust-focused product, not just a school app. It solves a real administrative workflow where legitimacy, approval state, and convenience all matter.",
    whyItMatters:
      "This project shows that I care about practical software systems with real users, clear approval logic, and a visible trust layer.",
    problem: [
      "Document request workflows can be slow, manual, and unclear for students and administrators.",
      "Institutions need a smoother request pipeline without weakening trust in the generated documents.",
      "Verification should be easy for the people reviewing the final output, not hidden behind manual checks.",
    ],
    build: [
      "A Flutter mobile application for request submission, status tracking, and user-facing workflow clarity.",
      "Firebase-backed request and approval handling to manage operational state.",
      "PDF generation after approval to produce a usable final document.",
      "QR verification flow that helps reinforce authenticity and confidence in issued files.",
    ],
    architecture: [
      "Students submit requests through the mobile interface.",
      "Administrative review updates status and determines approval or rejection.",
      "Approved documents trigger PDF generation and verification support.",
      "QR verification adds a trust layer to the resulting document lifecycle.",
    ],
    decisions: [
      "Presented the system as a workflow product instead of a simple CRUD-style student project.",
      "Used QR verification because trust was part of the core problem, not an optional extra.",
      "Designed the experience to help both requesters and reviewers understand state clearly.",
    ],
    challenges: [
      "Balancing ease of use with approval control and verification needs.",
      "Keeping the mobile flow simple while still reflecting document status accurately.",
      "Ensuring the trust story stayed visible in the way the product was explained.",
    ],
    result: [
      "AU Facilities became a strong graduation project because it solved a real process problem with a clear security and trust angle.",
      "It demonstrates product thinking, mobile execution, and an interest in systems that support institutional clarity.",
    ],
    techStack: ["Flutter", "Dart", "Firebase", "PDF generation", "QR verification"],
    tags: ["Mobile product", "Verification", "Workflow design"],
    metrics: [
      { label: "Primary value", value: "Trusted document flow" },
      { label: "Platform", value: "Mobile-first" },
      { label: "User lens", value: "Students + reviewers" },
    ],
    media: [
      {
        kind: "image",
        title: "Project Introduction",
        caption: "What is AU Facilities and what is our goal to solve.",
        src: "/assets/projects/au-facilities/slide-1.png",
      },
      {
        kind: "image",
        title: "The Problem",
        caption: "Why this system was needed and the measurable impact.",
        src: "/assets/projects/au-facilities/slide-2.png",
      },
      {
        kind: "image",
        title: "Title & Members",
        caption: "Secure University Document Request & Verification System.",
        src: "/assets/projects/au-facilities/slide-3.png",
      },
      {
        kind: "image",
        title: "System Architecture Overview",
        caption: "Components and Data Flow mappings for the application.",
        src: "/assets/projects/au-facilities/slide-4.png",
      },
      {
        kind: "image",
        title: "The Solution Overview",
        caption: "Cryptographic seal, PDF hashing, QR codes, and verification logic.",
        src: "/assets/projects/au-facilities/slide-5.png",
      },
      {
        kind: "image",
        title: "Architecture Flow Diagram",
        caption: "Data flow interactions between components.",
        src: "/assets/projects/au-facilities/slide-6.png",
      },
      {
        kind: "image",
        title: "Document Request Structure",
        caption: "Source of truth payload stored in Firestore.",
        src: "/assets/projects/au-facilities/slide-7.png",
      },
      {
        kind: "image",
        title: "Authentication System",
        caption: "Identity linking and secure access protocols.",
        src: "/assets/projects/au-facilities/slide-8.png",
      },
      {
        kind: "image",
        title: "User Profile Structure",
        caption: "Metadata mappings bound to the user profile schema.",
        src: "/assets/projects/au-facilities/slide-9.png",
      },
      {
        kind: "image",
        title: "PDF Base64 Explained",
        caption: "Why Base64 encoding is used with Firestore.",
        src: "/assets/projects/au-facilities/slide-10.png",
      },
      {
        kind: "image",
        title: "PDF Generation (Python)",
        caption: "Data ingestion, drawing, byte saving, and hashing logic.",
        src: "/assets/projects/au-facilities/slide-11.png",
      },
      {
        kind: "image",
        title: "How the PDF Is Sent",
        caption: "Secure network sequence from Python generation to Flutter App.",
        src: "/assets/projects/au-facilities/slide-12.png",
      },
      {
        kind: "image",
        title: "Understanding SHA-256",
        caption: "Deterministic hashing, avalanche effects, and data integrity.",
        src: "/assets/projects/au-facilities/slide-13.png",
      },
      {
        kind: "image",
        title: "SHA-256 Workflow",
        caption: "Comparing the stored hash against the QR code read.",
        src: "/assets/projects/au-facilities/slide-14.png",
      },
      {
        kind: "image",
        title: "QR Code Design",
        caption: "Encoding the request ID and hash safely into the matrix.",
        src: "/assets/projects/au-facilities/slide-15.png",
      },
      {
        kind: "image",
        title: "Verification Webpage Logic",
        caption: "Validating the integrity of the document via Javascript.",
        src: "/assets/projects/au-facilities/slide-16.png",
      },
      {
        kind: "image",
        title: "Upload Verification Limitations",
        caption: "Understanding digital vs physical detection vectors.",
        src: "/assets/projects/au-facilities/slide-17.png",
      },
      {
        kind: "image",
        title: "Security Threat Analysis",
        caption: "Outlining potential exploits and their countermeasures.",
        src: "/assets/projects/au-facilities/slide-18.png",
      },
      {
        kind: "image",
        title: "Tamper Detection Workflow",
        caption: "Real-time mitigation of invalid or tampered records.",
        src: "/assets/projects/au-facilities/slide-19.png",
      },
      {
        kind: "image",
        title: "Complete System Overview",
        caption: "Tech stack summary bridging Python, Firebase, and Flutter.",
        src: "/assets/projects/au-facilities/slide-20.png",
      },
      {
        kind: "image",
        title: "QR Reuse Attack Response",
        caption: "Mitigating forgery attempts through visual and digital checks.",
        src: "/assets/projects/au-facilities/slide-21.png",
      },
      {
        kind: "image",
        title: "UI & UX Design",
        caption: "Design principles prioritizing usability and logical navigation.",
        src: "/assets/projects/au-facilities/slide-22.png",
      },
      {
        kind: "image",
        title: "Fake PDF Creation Flow",
        caption: "Detecting pure fabrications via central database indexing.",
        src: "/assets/projects/au-facilities/slide-23.png",
      },
      {
        kind: "image",
        title: "Conclusion",
        caption: "A trusted, professional, and cryptographic solution for university documents.",
        src: "/assets/projects/au-facilities/slide-24.png",
      },
    ],
    mobileMedia: [
      {
        kind: "image",
        title: "Login Screen",
        caption: "Secure mobile login interface for students.",
        src: "/assets/projects/au-facilities/mobile-1.png",
      },
      {
        kind: "image",
        title: "Main Dashboard",
        caption: "Quick access portal to all university e-services.",
        src: "/assets/projects/au-facilities/mobile-2.png",
      },
      {
        kind: "image",
        title: "Student Profile",
        caption: "Academic details inherently bound to requests.",
        src: "/assets/projects/au-facilities/mobile-3.png",
      },
    ],
  },
  {
    slug: "desktop-automation-system",
    name: "Desktop Automation System",
    category: "Productivity / Automation Tool",
    status: "Usable prototype",
    timeframe: "Packaged utility direction",
    summary:
      "A desktop automation utility built for repeatable actions, recorded mouse flows, quick workflows, and packaged usability.",
    positioning:
      "This project turns automation from a one-off script into a more usable desktop tool with controls, repeatability, and persistence.",
    whyItMatters:
      "It reflects my interest in practical software that saves time and respects the reality of repetitive computer work.",
    problem: [
      "Many desktop automation ideas stay trapped in throwaway scripts that are hard to configure and harder to reuse.",
      "Users need control over repeat counts, intervals, and recorded actions without editing source code every time.",
      "A useful automation tool needs setup clarity, not just low-level control.",
    ],
    build: [
      "A Python desktop utility using Tkinter for a clear control panel.",
      "PyAutoGUI-powered repeatable action flows for interaction automation.",
      "Recorded mouse patterns, interval controls, repetition settings, and reusable workflow structure.",
      "Packaged usability thinking so the tool feels closer to a product than a script.",
    ],
    architecture: [
      "The Tkinter interface manages user settings and action flow choices.",
      "PyAutoGUI performs the actual repeatable interaction behavior.",
      "Configuration persistence allows quick reuse for common desktop tasks.",
      "The design keeps the focus on workflow speed while staying understandable for repeated use.",
    ],
    decisions: [
      "Built a GUI because usability matters when automation is meant to be reused.",
      "Focused on repeatable workflows rather than a narrow single-action script.",
      "Structured the tool around control and packaging direction so it could be used practically.",
    ],
    challenges: [
      "Automation tools need enough safety and clarity that users understand what will happen before they run them.",
      "Desktop interaction timing can be sensitive, so the experience needs clear controls and reasonable defaults.",
    ],
    result: [
      "The project demonstrates practical tooling instincts and a strong bias toward real workflow value.",
      "It shows that I care about packaging and usability, not only whether the automation technically works.",
    ],
    techStack: ["Python", "Tkinter", "PyAutoGUI", "JSON settings"],
    tags: ["Automation", "Desktop tooling", "Workflow utility"],
    metrics: [
      { label: "Core value", value: "Repeatable actions" },
      { label: "Interface", value: "Desktop control panel" },
      { label: "Mindset", value: "Tool over script" },
    ],
    media: [],
  },
  {
    slug: "prompt-forge",
    name: "Prompt Forge",
    category: "Product / Prompt-building Tool",
    status: "Concept",
    timeframe: "Structured product exploration",
    isVideoShowcase: true,
    summary:
      "A web tool concept that guides users through structured multi-step selections to generate stronger website and app prompts.",
    positioning:
      "Prompt Forge is less about novelty and more about reducing vague input. The product direction focuses on guided UX, better structure, and clearer defaults.",
    whyItMatters:
      "It highlights product thinking, information design, and the idea that prompt quality can be improved through workflow design rather than a blank text box.",
    problem: [
      "Many users know the outcome they want but struggle to write precise, structured prompts.",
      "Blank-page prompting often leads to weak inputs, missed constraints, and inconsistent output quality.",
      "A guided product can turn prompt creation into a clearer decision flow.",
    ],
    build: [
      "A multi-step web product concept that narrows user choices into useful structured output.",
      "A flow built around project type, style, technical requirements, constraints, and delivery goals.",
      "A secure-by-default mindset that encourages clarity around permissions, architecture, and realistic scope.",
    ],
    architecture: [
      "Users move through guided steps instead of typing into an empty field immediately.",
      "Selections are composed into a stronger final prompt structure.",
      "The system emphasizes practical requirements and implementation clarity, not just aesthetic direction.",
    ],
    decisions: [
      "Made the prompt-building flow structured because the value comes from decision scaffolding.",
      "Treated secure-by-default thinking as part of product guidance, not an afterthought.",
      "Focused on practical output quality for builders, not generic AI novelty.",
    ],
    challenges: [
      "The experience has to be guided enough to help, but not so rigid that it feels restrictive.",
      "Good defaults matter because they quietly shape the quality of the generated prompt.",
    ],
    result: [
      "Prompt Forge represents the product side of my work: helping users produce better technical outcomes through better workflow design.",
      "It is a strong example of translating process friction into a product concept with clear value.",
    ],
    techStack: ["Next.js concept", "Structured UX flow", "Prompt generation logic"],
    tags: ["Product design", "Prompt tooling", "UX structure"],
    metrics: [
      { label: "User problem", value: "Prompt ambiguity" },
      { label: "Product angle", value: "Guided flow" },
      { label: "Mindset", value: "Secure by default" },
    ],
    media: [
      {
        kind: "video",
        title: "Prompt Forge Workflow",
        caption: "End-to-end user experience and product walkthrough.",
        src: "/assets/projects/prompt-forge/prompt-forge-demo.mp4",
      },
    ],
  },
  {
    slug: "chatgpt-sub-branch-chat",
    name: "ChatGPT Sub-Branch Chat",
    category: "Browser Extension Concept / Prototype",
    status: "Prototype",
    timeframe: "Workflow tooling exploration",
    summary:
      "A browser extension concept for temporary branch-style conversations without relying on API usage.",
    positioning:
      "This concept rethinks chat workflow as a branching problem. It is a tool idea for exploring alternatives cleanly without losing parent context.",
    whyItMatters:
      "It shows product imagination grounded in realistic constraints, especially around browser-side behavior and non-API workflow design.",
    problem: [
      "Linear chat threads make it awkward to test alternate ideas without losing clean context.",
      "Users often want to branch reasoning temporarily, compare directions, and return without clutter.",
      "Many solutions assume APIs, when the workflow issue can sometimes be addressed at the interface level.",
    ],
    build: [
      "A browser extension concept for side-thread or branch-style conversations.",
      "A workflow that preserves parent context while allowing temporary exploration paths.",
      "A prototype direction built around browser-side behavior rather than official API dependence.",
    ],
    architecture: [
      "The extension layers a branching interaction model on top of an existing chat experience.",
      "Temporary branches can be opened, explored, and dismissed without replacing the main thread.",
      "The idea stays grounded in interface behavior and workflow support rather than unsupported backend claims.",
    ],
    decisions: [
      "Avoided API dependence because the core value was branch workflow, not platform integration complexity.",
      "Framed the concept around temporary context and exploration hygiene rather than novelty.",
      "Kept the idea compliance-aware by avoiding misleading claims about official support.",
    ],
    challenges: [
      "The UX has to feel useful without overwhelming the main thread experience.",
      "Workflow concepts built around third-party interfaces need careful positioning and practical boundaries.",
    ],
    result: [
      "The project shows creative product reasoning, browser tooling instincts, and a clear understanding of a real user friction point.",
      "It is a useful example of how I approach workflow design for tools people already use daily.",
    ],
    techStack: ["Browser extension concept", "Client-side UX", "Workflow design"],
    tags: ["Extension concept", "Branch workflow", "Reasoning tools"],
    metrics: [
      { label: "Core idea", value: "Temporary branches" },
      { label: "Constraint", value: "No API reliance" },
      { label: "Value", value: "Cleaner exploration" },
    ],
    media: [
      {
        kind: "image",
        title: "Branch Control Initial State",
        caption: "Capturing a source chat and preparing temporary context without polluting history.",
        src: "/assets/projects/chatgpt-sub-branch-chat/branch-1.png",
      },
      {
        kind: "image",
        title: "Branch Handoff",
        caption: "Clear manual fallback instructions when automated context injection is unavialable.",
        src: "/assets/projects/chatgpt-sub-branch-chat/branch-2.png",
      },
    ],
  },
];

export const featuredProjects = projects.filter((project) => project.featured).concat(
  projects.filter((project) => !project.featured).slice(0, 2),
);

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
