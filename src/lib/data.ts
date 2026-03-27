import { Profile } from "@/types";

export const profile: Profile = {
  name: "Phan Đình Minh Hiếu",
  title: "Senior Backend Developer & Blockchain Engineer",
  email: "mhieu25101998@gmail.com",
  phone: "(+84) 964030602",
  location: "Ho Chi Minh City, Vietnam",
  summary: `Senior Backend Developer with 5+ years of experience in Golang, specializing in blockchain systems, AI/ML integration, and high-performance distributed architectures. Expert in building Layer 1 blockchains, DeFi applications, and AI-powered trading platforms. Passionate about leveraging cutting-edge technology to solve complex problems in fintech and Web3.`,
  social: [
    {
      name: "GitHub",
      url: "https://github.com/mhieu2510",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/mhieu2510",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:mhieu25101998@gmail.com",
      icon: "email",
    },
  ],
  experience: [
    {
      company: "BunnyOS",
      position: "Senior Backend Developer",
      location: "Remote",
      period: "Sep 2025 - Mar 2026",
      description: [
        "Architected and developed sophisticated AI Agent using Mastra and NestJS for autonomous decision-making and cross-chain execution in DeFi ecosystem",
        "Engineered multi-agent workflows leveraging LLMs for intent recognition, integrating Virtuals Protocol (ACP) for agent-to-agent communication",
        "Developed high-performance AI Chatbot layer for natural language interaction with complex Web3 protocols",
        "Ensured system reliability using Kysely for type-safe database interactions and Testcontainers for integration testing",
        "Optimized AI decision-making with real-time data pipelines using Viem and Moralis for onchain signals and market sentiment analysis",
      ],
      technologies: ["NestJS", "Mastra", "TypeScript", "LLM", "Viem", "Moralis", "Kysely", "Testcontainers"],
    },
    {
      company: "Guarantek",
      position: "Backend Team Lead",
      location: "Remote",
      period: "Dec 2024 - Present",
      description: [
        "Led development of Fichain, a Layer 1 blockchain for banking and financial sector using Golang with high-performance consensus mechanisms",
        "Architected AI-Powered Stock Trading Platform transitioning from traditional DApp to intelligent trading ecosystem",
        "Developed high-concurrency data pipelines in Golang for real-time global trading data with LLM-based sentiment analysis",
        "Built AI-driven risk management engine combining technical analysis with predictive modeling for automated trade decisions",
        "Managed 3-member cross-functional team (AI/ML, Blockchain, DevOps), implementing MLOps and CI/CD best practices",
      ],
      technologies: ["Golang", "AI/ML", "LLM", "Blockchain", "Kubernetes", "Docker", "CI/CD"],
    },
    {
      company: "Onefusion",
      position: "Head of Blockchain",
      location: "Vietnam",
      period: "Jan 2025 - Jun 2025",
      description: [
        "Led and mentored 3-person blockchain team, managing task allocation and technical reviews",
        "Defined technical architecture and roadmap for blockchain initiatives aligned with business goals",
        "Spearheaded smart contracts and backend infrastructure for Web3 applications",
        "Developed Loyalty Reward System, NFT Membership System, and Token Staking/Vesting Modules",
        "Ensured smart contract quality through code audits, gas optimizations on Ethereum and BSC",
      ],
      technologies: ["Solidity", "Ethereum", "BSC", "Web3.js", "Node.js", "Smart Contracts"],
    },
    {
      company: "BeEarning",
      position: "Senior Backend Developer",
      location: "Vietnam",
      period: "Oct 2021 - Dec 2024",
      description: [
        "Designed and implemented block production mechanism and mobile-friendly light client",
        "Developed high-performance consensus modules using Golang for smartphone validation",
        "Built Cross-chain Bridge DApp enabling asset transfers between BeEarning Chain, Ethereum, and BNB Chain",
        "Developed Binary Tree MLM DApp with smart contract system and mathematical reward distribution model",
        "Integrated off-chain reward calculation engine syncing with on-chain triggers via WebSockets/RPC",
      ],
      technologies: ["Golang", "Blockchain", "Solidity", "WebSocket", "gRPC", "PostgreSQL", "Redis"],
    },
    {
      company: "Ibenefit",
      position: "Senior Backend Developer",
      location: "Vietnam",
      period: "May 2018 - Oct 2021",
      description: [
        "Developed Student Lending Platform using Node.js and PHP with loan workflows and credit scoring",
        "Built File Management Service with Django for secure document handling",
        "Designed and trained ML models for ID card verification using OpenCV and Tesseract",
        "Set up Asterisk VoIP server for automated customer communication and loan reminders",
      ],
      technologies: ["Node.js", "PHP", "Laravel", "Python", "Django", "OpenCV", "Asterisk", "MySQL"],
    },
    {
      company: "Glorucode",
      position: "FullStack Developer",
      location: "Vietnam",
      period: "Apr 2017 - May 2018",
      description: [
        "Developed and maintained outsourced websites for e-commerce, education, and corporate clients",
        "Worked on frontend and backend using PHP (Laravel, WordPress), JavaScript, and HTML/CSS/Bootstrap",
        "Designed responsive UI/UX layouts and implemented dynamic features",
      ],
      technologies: ["PHP", "Laravel", "WordPress", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
    },
  ],
  education: [
    {
      school: "University of Information Technology",
      degree: "Master of Science",
      field: "Computer Science",
      period: "Aug 2022 - Aug 2025",
      thesis: "Developing a Mobile Virtual Assistant using Large Language Models for Task Automation",
    },
    {
      school: "University of Information Technology",
      degree: "Bachelor of Engineering",
      field: "Software Engineering",
      period: "Jun 2016 - Dec 2021",
      thesis: "Blockchain system for saving deposit in Bank",
    },
  ],
  projects: [
    {
      name: "Fichain - Layer 1 Blockchain",
      description: "Custom Layer 1 blockchain for banking sector with PoS consensus and EVM compatibility",
      technologies: ["Golang", "Consensus", "EVM", "Blockchain"],
      highlights: ["Banking-grade security", "High throughput"],
    },
    {
      name: "AI Stock Trading Platform",
      description: "Intelligent trading ecosystem with LLM sentiment analysis and predictive modeling",
      technologies: ["Golang", "Python", "LLM", "Time Series Analysis", "Kafka"],
      highlights: ["Real-time data pipelines", "AI-driven decisions"],
    },
    {
      name: "Cross-chain Bridge DApp",
      description: "Asset transfer bridge between BeEarning Chain, Ethereum, and BNB Chain",
      technologies: ["Solidity", "Web3.js", "Golang", "Smart Contracts"],
    },
    {
      name: "Binary Tree MLM System",
      description: "Smart contract-based multi-level marketing with mathematical reward distribution",
      technologies: ["Solidity", "Golang", "PostgreSQL", "WebSocket"],
    },
    {
      name: "ID Verification System",
      description: "ML-powered document verification with OCR and liveness detection",
      technologies: ["Python", "OpenCV", "Tesseract", "CNN"],
    },
  ],
  skills: [
    // Languages
    { name: "Golang", category: "language" },
    { name: "Python", category: "language" },
    { name: "TypeScript", category: "language" },
    { name: "Node.js", category: "language" },
    { name: "PHP", category: "language" },
    { name: "Solidity", category: "language" },
    // AI/ML
    { name: "LLM/LangChain", category: "ai" },
    { name: "RAG Architecture", category: "ai" },
    { name: "Computer Vision", category: "ai" },
    { name: "TensorFlow/PyTorch", category: "ai" },
    { name: "OpenCV", category: "ai" },
    // Blockchain
    { name: "Ethereum/EVM", category: "blockchain" },
    { name: "Smart Contracts", category: "blockchain" },
    { name: "DeFi/DApps", category: "blockchain" },
    { name: "Consensus Protocols", category: "blockchain" },
    { name: "Web3.js/Ethers.js", category: "blockchain" },
    // Frameworks
    { name: "Gin", category: "framework" },
    { name: "NestJS", category: "framework" },
    { name: "Laravel", category: "framework" },
    { name: "gRPC", category: "framework" },
    { name: "GraphQL", category: "framework" },
    // Databases
    { name: "PostgreSQL", category: "database" },
    { name: "MySQL", category: "database" },
    { name: "MongoDB", category: "database" },
    { name: "Redis", category: "database" },
    { name: "Elasticsearch", category: "database" },
    { name: "Kafka", category: "database" },
    // DevOps
    { name: "Docker", category: "devops" },
    { name: "Kubernetes", category: "devops" },
    { name: "GitHub Actions", category: "devops" },
    { name: "Grafana/Prometheus", category: "devops" },
    { name: "ELK Stack", category: "devops" },
    // Cloud
    { name: "Google Cloud (GCP)", category: "cloud" },
    { name: "Linux/Bash", category: "cloud" },
  ],
  publications: [
    {
      title: "Developing a Mobile Virtual Assistant Using Large Language Models for Task Automation",
      authors: "Phan, Dinh Minh Hieu and Luong, Ngoc Hoang",
      year: "2024 - 2025",
      description: "Research enhancing mobile virtual assistants by integrating Multimodal Large Language Models (MLLMs), enabling better handling of complex requests and dynamic app interfaces through visual understanding.",
    },
  ],
  certificates: ["TOEIC 875", "VSTEP B2"],
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
