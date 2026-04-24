export const siteConfig = {
  name: "Fakhry Aldaya",
  role: "Junior developer focused on secure systems, automation tooling, and product-minded technical builds.",
  location: "Ajman, UAE",
  email: "fakhryn.aldaya@gmail.com",
  github: "https://github.com/weweb12",
  cv: {
    label: "Download CV",
    href: "/resume/Fakhry-Aldaya-CV.pdf",
    available: true,
  },
  hero: {
    eyebrow: "Secure Systems • Automation • Technical Product Work",
    title: "I build practical software systems that make complex workflows clearer, safer, and easier to use.",
    description:
      "I am a junior developer with a background in IT networking and security, building frontend and full-stack products around operator visibility, trusted workflows, and day-to-day usefulness.",
    primaryCta: {
      label: "View Projects",
      href: "/projects",
    },
    secondaryCta: {
      label: "Contact Me",
      href: "/contact",
    },
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
    { label: "Experience", href: "/experience" },
    { label: "Contact", href: "/contact" },
  ],
  quickFacts: [
    { label: "Based in", value: "Ajman, UAE" },
    { label: "Degree", value: "BSc in IT Networking and Security" },
    { label: "University", value: "Ajman University" },
    { label: "Graduating", value: "Expected 2026" },
  ],
  credibility: [],
  philosophy: [
    "Good software earns trust by being understandable, predictable, and useful under real conditions.",
    "My background in networking and security shaped how I think about systems: what flows through them, where risk appears, and how users make decisions with incomplete information.",
    "That has led me toward product-minded engineering work where technical depth still has to result in something usable by operators, teams, or everyday users.",
  ],
  strengths: [
    {
      title: "Security-aware product thinking",
      description:
        "I care about trust, visibility, and safe defaults when designing technical workflows.",
    },
    {
      title: "Practical automation",
      description:
        "I enjoy building tools that remove repetitive work and turn scripts into usable systems.",
    },
    {
      title: "Operational clarity",
      description:
        "I like interfaces that help people understand what is happening, what matters, and what to do next.",
    },
  ],
  approach: [
    {
      title: "Build for real usage",
      description:
        "I focus on systems that answer a real workflow need, not demos that only look polished from a distance.",
    },
    {
      title: "Design for decisions",
      description:
        "The best technical interfaces help users triage, verify, and move forward without unnecessary friction.",
    },
    {
      title: "Keep architecture grounded",
      description:
        "I value stacks and patterns that are maintainable, understandable, and appropriate for the problem.",
    },
  ],
  contactPanel: {
    title: "Open to junior software roles and technical product opportunities.",
    description:
      "If you are hiring for secure systems work, frontend product engineering, or automation-focused software, I would be glad to connect.",
  },
  education: {
    school: "Ajman University",
    degree: "BSc in IT Networking and Security",
    period: "Expected graduation: 2026",
    summary:
      "Academic work grounded in networking, security fundamentals, and the systems thinking that informs my software projects.",
  },
};

export type SiteConfig = typeof siteConfig;
