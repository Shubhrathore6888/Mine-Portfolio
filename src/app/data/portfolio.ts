// ─── Types ───────────────────────────────────────────────────────────────────

export type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  github?: string;
  githubApi?: string;
  live?: string;
  highlight?: string;
  features?: string[];
  docs?: string;
  ongoing?: boolean;
};

export type Experience = {
  title: string;
  company: string;
  location?: string;
  period: string;
  duration: string;
  description: string[];
  type: string;
  highlight?: string;
};

export type NavLink = { name: string; href: string };

// ─── Constants ───────────────────────────────────────────────────────────────

export const RESUME_URL =
  "https://drive.google.com/file/d/1fydd-r_MrYxS1BXBqnN0H1Los6HhjlmA/view?usp=sharing";

// ─── Skills ──────────────────────────────────────────────────────────────────

export const skills = {
  languages: ["JavaScript", "TypeScript", "Rust"],
  backend: [
    "Node.js",
    "Express",
    "NestJS",
    "REST APIs",
    "GraphQL",
    "Socket.io",
    "Cron Jobs",
  ],
  data: ["PostgreSQL", "MongoDB", "Prisma", "Diesel ORM", "Redis"],
  blockchain: ["Solidity", "Rust / Anchor (Solana)", "Smart Contracts", "EVM"],
  tools: ["Git", "Docker"],
};

// ─── Experience ──────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    title: "Backend Developer",
    company: "SoluLab",
    location: "Remote",
    period: "June 2024 – March 2026",
    duration: "~22 months",
    description: [
      "Terrava (terrava-platform.ai): Sole backend engineer — architected and shipped the full Node.js/TypeScript backend for a live carbon credit marketplace (30+ REST APIs, credit issuance, buyer settlement, admin workflows).",
      "Designed 30+ MongoDB schemas with Mongoose in a modular service layer with soft-delete patterns for safe iteration.",
      "Built real-time notifications with Socket.io and cron-based background jobs for automated platform workflows.",
      "Integrated BanQu supply chain API for geo-tagged traceability data to support enterprise onboarding.",
      "Dynk Wallet Marketplace: Owned end-to-end backend APIs — core workflows, payment logic, and third-party integrations.",
      "Updateia Platform: Backend connector for external services with real-time sync across third-party systems.",
    ],
    type: "full-time",
    highlight: "🏆 Intern of the Month",
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Web3 Observability Tool",
    description:
      "On-chain monitoring for developers: WebSocket RPC ingestion (ethers.js), decoded contract events, failed-transaction and gas-spike detection, configurable alert engine, and incident timeline with dashboard health. Event-driven pipeline into MongoDB — observability in the spirit of Tenderly/Forta. Monorepo UI + dedicated API service (Vercel + Render).",
    tech: [
      "NestJS",
      "Next.js",
      "TypeScript",
      "MongoDB",
      "ethers.js",
      "WebSocket",
    ],
    category: "Observability",
    github: "https://github.com/Shubhr457/Web3-observability-tool",
    githubApi: "https://github.com/Shubhr457/Web3-observability-tool-Backend",
    live: "https://web3-observabilityy-tool-ui.vercel.app",
  },
  {
    title: "Smart Chat",
    description:
      "Full-stack real-time chat application backend built with FastAPI and Motor (raw async MongoDB driver). Dockerized with docker-compose for a one-command dev environment. Auth layer is complete; real-time messaging, rooms, and presence features are actively in development.",
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Motor",
      "JWT",
      "bcrypt",
      "Docker",
      "pydantic-settings",
    ],
    category: "Backend",
    github: "https://github.com/Shubhr457/Smart-Chat",
    ongoing: true,
    highlight: "In Progress",
  },
  {
    title: "Auth Backend",
    description:
      "Secure authentication REST APIs — registration, login, refresh tokens, password reset — with JWT rotation, SHA-256 token hashing, TTL-based cleanup, rate limiting, CORS, Helmet, and Joi validation.",
    tech: ["Node.js", "MongoDB", "JWT", "Joi", "Helmet"],
    category: "Backend",
    github: "https://github.com/Shubhr457/Auth-backend",
  },
  {
    title: "JWT Auth Service (FastAPI)",
    description:
      "Production-ready JWT authentication REST API built with FastAPI, Motor (async MongoDB driver), and Beanie ODM. Implements a full access + refresh token lifecycle with server-side revocation, bcrypt password hashing, and Pydantic-based request/response validation — all wired together via FastAPI's dependency injection system.",
    tech: [
      "Python",
      "FastAPI",
      "MongoDB",
      "Motor",
      "Beanie",
      "JWT",
      "bcrypt",
      "pydantic-settings",
    ],
    category: "Backend",
    github: "https://github.com/Shubhr457/Auth-FastApis",
    highlight: "Production Ready",
  },
  {
    title: "Real-Time Team Task Management System",
    description:
      "Real-time task management backend with Socket.IO, JWT + OTP authentication, RBAC, team collaboration, and activity logging.",
    tech: ["Node.js", "TypeScript", "MongoDB", "Socket.IO", "Express"],
    category: "Backend",
    github:
      "https://github.com/Shubhr457/Real-Time-Team-Task-Management-System",
    live: "https://real-time-team-task-management-system-4.onrender.com",
  },
  {
    title: "Decride — Backend API",
    description:
      "TypeScript/Express 5 REST API for a decentralized ride-sharing platform. Covers auth, drivers, riders, rides, KYC, payments, notifications, disputes, and admin modules. Uses Ethers.js for on-chain interaction with smart contracts, Mongoose for MongoDB, Zod for validation, and Jest + supertest for integration tests.",
    tech: [
      "TypeScript",
      "Express",
      "MongoDB",
      "Mongoose",
      "Ethers.js",
      "JWT",
      "Zod",
      "Jest",
    ],
    category: "Blockchain",
    github: "https://github.com/Shubhr457/Decride-Backend",
  },
  {
    title: "Terrava — Carbon Credit Platform",
    description:
      "Production carbon credit marketplace backend: REST APIs, Mongoose data model, notifications, integrations — shipped as sole backend engineer.",
    tech: ["Node.js", "TypeScript", "MongoDB", "Socket.io", "REST"],
    category: "Production",
    live: "https://terrava-platform.ai",
  },
  {
    title: "Real Estate Marketplace (Solana)",
    description:
      "Marketplace on Solana with ownership transfers, bidding, governance, and backend integration.",
    tech: ["Solana", "Rust", "Anchor", "TypeScript", "PostgreSQL"],
    category: "Blockchain",
  },
  {
    title: "Crowdfunding + Vesting + Staking",
    description:
      "Upgradeable contracts: caps, vesting, claims, and multi-stage fundraising.",
    tech: ["Solidity", "OpenZeppelin", "Hardhat", "Ethers.js"],
    category: "DeFi",
  },
  {
    title: "Decride — Smart Contracts",
    description:
      "Solidity 0.8.26 smart contract suite for the Decride ride-sharing platform on Polygon Amoy. Includes RIDE ERC-20 token, ride escrow with USD oracle, driver staking, reputation registry, dispute resolution, DAO governor, and token vesting with factory pattern. Built with Hardhat + OpenZeppelin and a full test suite.",
    tech: ["Solidity", "Hardhat", "OpenZeppelin", "Polygon", "ERC-20", "DAO"],
    category: "DeFi",
    github: "https://github.com/Shubhr457/Decride-Contracts",
  },
  {
    title: "Founoun NFT Marketplace",
    description:
      "ERC-1155 marketplace with lazy minting, royalties, emergency controls, and backend integration.",
    tech: ["Solidity", "ERC-1155", "Node.js", "MongoDB"],
    category: "NFT",
  },
];

// ─── Nav Links ────────────────────────────────────────────────────────────────

export const navLinks: NavLink[] = [
  { name: "Why me", href: "#why-me" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Contact", href: "#contact" },
];
