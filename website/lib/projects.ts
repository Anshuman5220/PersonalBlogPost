export type AIProject = {
  id: string;
  title: string;
  industry: string;
  engagement: "Discovery" | "Pilot" | "Scale";
  timeline: string;
  teamModel: string;
  problem: string;
  constraints: string;
  summary: string;
  impact: string;
  writeup: string[];
  metrics: string[];
  outcomes: string[];
  architectureFocus: string[];
  bestFor: string;
  stack: string[];
  stage: "Live" | "Pilot" | "Case Study";
  repositoryUrl?: string;
};

export const aiProjects: AIProject[] = [
  {
    id: "enterprise-agentic-copilot",
    title: "Enterprise Agentic Copilot",
    industry: "Enterprise Operations",
    engagement: "Scale",
    timeline: "14 weeks",
    teamModel: "4-person pod",
    problem: "Subject-matter teams were losing time across fragmented tools and manual escalation loops.",
    constraints: "Strict RBAC, auditability requirements, and phased release into existing workflows.",
    summary:
      "Built a role-aware enterprise copilot that orchestrates multi-step workflows and tool calls across internal systems.",
    impact: "Reduced decision cycle time and improved team productivity for complex operations.",
    writeup: [
      "This project focused on turning fragmented enterprise workflows into guided agentic flows that could operate with auditability, role awareness, and human checkpoints built in.",
      "The core work involved orchestration design, evaluation loops, and safer transitions between AI-generated suggestions and business-critical human review.",
    ],
    metrics: [
      "37% faster decision turnaround",
      "29% fewer escalations per workflow",
      "91% user trust score after rollout",
    ],
    outcomes: [
      "Operational playbooks converted into guided agentic flows",
      "Centralized evaluation dashboards for release confidence",
      "Safer handoffs between AI and human review",
    ],
    architectureFocus: ["Multi-agent orchestration", "Evaluation loops", "Tool governance"],
    bestFor: "Cross-functional enterprise teams modernizing high-friction operations",
    stack: ["Agentic AI", "RAG", "LLM Orchestration", "Evaluation"],
    stage: "Case Study",
  },
  {
    id: "multimodal-retrieval-platform",
    title: "Multimodal Retrieval Platform",
    industry: "Digital Commerce",
    engagement: "Scale",
    timeline: "11 weeks",
    teamModel: "3 engineers + PM",
    problem: "Search quality was inconsistent across text, images, and long-tail catalog attributes.",
    constraints: "Needed sub-second responses with explainability and region-based compliance controls.",
    summary:
      "Designed semantic and image-based retrieval pipelines for high-precision discovery in large catalogs.",
    impact: "Improved relevance quality and user discovery experience at production scale.",
    writeup: [
      "The aim here was to improve discovery across text and visual search while keeping retrieval quality explainable and fast enough for production traffic.",
      "The implementation combined multimodal retrieval, ranking improvements, and governed indexing so iteration could continue without destabilizing relevance quality.",
    ],
    metrics: [
      "24% increase in first-result relevance",
      "33% improvement in zero-result recovery",
      "18% uplift in conversion-assisted sessions",
    ],
    outcomes: [
      "Unified ranker combining visual and textual intent",
      "Governed indexing with quality and drift checks",
      "Launch playbook for iterative relevance tuning",
    ],
    architectureFocus: ["Hybrid retrieval", "Multimodal embeddings", "Ranking optimization"],
    bestFor: "Product-heavy teams needing precise discovery at catalog scale",
    stack: ["Multimodal", "Vector Search", "Embeddings", "Ranking"],
    stage: "Case Study",
  },
  {
    id: "voice-ai-assistant",
    title: "Voice AI Assistant",
    industry: "Field Operations",
    engagement: "Pilot",
    timeline: "8 weeks",
    teamModel: "2 engineers + domain lead",
    problem: "Field users needed hands-free support without breaking compliance and safety procedures.",
    constraints: "Noisy environments, latency-sensitive prompts, and strict command verification steps.",
    summary:
      "Created a voice-first assistant for guided enterprise interactions with guardrails and governance controls.",
    impact: "Enabled faster hands-free workflows and better operational consistency.",
    writeup: [
      "This pilot explored how voice interfaces can support field operations where hands-free guidance matters but compliance and verification steps cannot be skipped.",
      "The resulting assistant paired low-latency speech handling with fallback paths, prompt guardrails, and auditable transcripts for more reliable operational use.",
    ],
    metrics: [
      "41% reduction in task completion time",
      "27% fewer input errors during guided steps",
      "89% pilot satisfaction across field users",
    ],
    outcomes: [
      "Voice-command templates with role-specific safety checks",
      "Fallback flows for low-confidence recognition",
      "Governed prompt and transcript audit trail",
    ],
    architectureFocus: ["Speech pipeline", "Guardrails", "Human-in-the-loop"],
    bestFor: "Teams enabling voice workflows in constrained operating environments",
    stack: ["Speech", "LLM", "Tool Calling", "Safety"],
    stage: "Pilot",
  },
];
