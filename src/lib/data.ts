import { Profile } from "@/types";

// Experience descriptions in both languages
const experienceDescriptions = {
  bunnyos: {
    en: [
      "Architected and developed sophisticated AI Agent using Mastra and NestJS for autonomous decision-making and cross-chain execution in DeFi ecosystem",
      "Engineered multi-agent workflows leveraging LLMs for intent recognition, integrating Virtuals Protocol (ACP) for agent-to-agent communication",
      "Developed high-performance AI Chatbot layer for natural language interaction with complex Web3 protocols",
      "Ensured system reliability using Kysely for type-safe database interactions and Testcontainers for integration testing",
      "Optimized AI decision-making with real-time data pipelines using Viem and Moralis for onchain signals and market sentiment analysis",
    ],
    vi: [
      "Thiết kế và phát triển AI Agent nâng cao sử dụng Mastra và NestJS cho việc ra quyết định tự động và thực thi cross-chain trong hệ sinh thái DeFi",
      "Xây dựng multi-agent workflows sử dụng LLMs cho nhận diện intent, tích hợp Virtuals Protocol (ACP) cho giao tiếp giữa các agent",
      "Phát triển AI Chatbot hiệu năng cao cho tương tác ngôn ngữ tự nhiên với các giao thức Web3 phức tạp",
      "Đảm bảo độ tin cậy hệ thống bằng Kysely cho tương tác database type-safe và Testcontainers cho integration testing",
      "Tối ưu hóa ra quyết định AI với data pipelines thời gian thực sử dụng Viem và Moralis cho onchain signals và phân tích sentiment thị trường",
    ],
  },
  guarantek: {
    en: [
      "Led development of Fichain, a Layer 1 blockchain for banking and financial sector using Golang with high-performance consensus mechanisms",
      "Architected AI-Powered Stock Trading Platform transitioning from traditional DApp to intelligent trading ecosystem",
      "Developed high-concurrency data pipelines in Golang for real-time global trading data with LLM-based sentiment analysis",
      "Built AI-driven risk management engine combining technical analysis with predictive modeling for automated trade decisions",
      "Managed 3-member cross-functional team (AI/ML, Blockchain, DevOps), implementing MLOps and CI/CD best practices",
    ],
    vi: [
      "Dẫn dắt phát triển Fichain, một Layer 1 blockchain cho ngành ngân hàng và tài chính sử dụng Golang với cơ chế consensus hiệu năng cao",
      "Thiết kế Nền tảng Giao dịch Chứng khoán tích hợp AI, chuyển đổi từ DApp truyền thống sang hệ sinh thái giao dịch thông minh",
      "Phát triển data pipelines đồng thời cao bằng Golang cho dữ liệu giao dịch toàn cầu thời gian thực với phân tích sentiment dựa trên LLM",
      "Xây dựng engine quản lý rủi ro tích hợp AI kết hợp phân tích kỹ thuật với mô hình dự đoán cho quyết định giao dịch tự động",
      "Quản lý team 3 người đa chức năng (AI/ML, Blockchain, DevOps), triển khai MLOps và CI/CD best practices",
    ],
  },
  onefusion: {
    en: [
      "Led and mentored 3-person blockchain team, managing task allocation and technical reviews",
      "Defined technical architecture and roadmap for blockchain initiatives aligned with business goals",
      "Spearheaded smart contracts and backend infrastructure for Web3 applications",
      "Developed Loyalty Reward System, NFT Membership System, and Token Staking/Vesting Modules",
      "Ensured smart contract quality through code audits, gas optimizations on Ethereum and BSC",
    ],
    vi: [
      "Dẫn dắt và hướng dẫn team blockchain 3 người, quản lý phân chia task và review kỹ thuật",
      "Định nghĩa kiến trúc kỹ thuật và lộ trình cho các khởi tạo blockchain phù hợp với mục tiêu kinh doanh",
      "Tiên phong phát triển smart contracts và hạ tầng backend cho các ứng dụng Web3",
      "Phát triển Hệ thống Điểm Thưởng Loyalty, Hệ thống Thành viên NFT, và Modules Staking/Vesting Token",
      "Đảm bảo chất lượng smart contract thông qua code audits, tối ưu gas trên Ethereum và BSC",
    ],
  },
  beearning: {
    en: [
      "Designed and implemented block production mechanism and mobile-friendly light client",
      "Developed high-performance consensus modules using Golang for smartphone validation",
      "Built Cross-chain Bridge DApp enabling asset transfers between BeEarning Chain, Ethereum, and BNB Chain",
      "Developed Binary Tree MLM DApp with smart contract system and mathematical reward distribution model",
      "Integrated off-chain reward calculation engine syncing with on-chain triggers via WebSockets/RPC",
    ],
    vi: [
      "Thiết kế và triển khai cơ chế sản xuất block và light client thân thiện với di động",
      "Phát triển modules consensus hiệu năng cao bằng Golang cho validation trên điện thoại",
      "Xây dựng Cross-chain Bridge DApp cho phép chuyển tài sản giữa BeEarning Chain, Ethereum, và BNB Chain",
      "Phát triển Binary Tree MLM DApp với hệ thống smart contract và mô hình phân phối phần thưởng toán học",
      "Tích hợp engine tính toán phần thưởng off-chain đồng bộ với on-chain triggers qua WebSockets/RPC",
    ],
  },
  ibenefit: {
    en: [
      "Developed Student Lending Platform using Node.js and PHP with loan workflows and credit scoring",
      "Built File Management Service with Django for secure document handling",
      "Designed and trained ML models for ID card verification using OpenCV and Tesseract",
      "Set up Asterisk VoIP server for automated customer communication and loan reminders",
    ],
    vi: [
      "Phát triển Nền tảng Cho vay Sinh viên sử dụng Node.js và PHP với workflows vay và chấm điểm tín dụng",
      "Xây dựng Dịch vụ Quản lý File với Django cho xử lý tài liệu bảo mật",
      "Thiết kế và huấn luyện các mô hình ML cho xác minh CMND/CCCD sử dụng OpenCV và Tesseract",
      "Thiết lập máy chủ Asterisk VoIP cho giao tiếp khách hàng tự động và nhắc nhở khoản vay",
    ],
  },
  glorucode: {
    en: [
      "Developed and maintained outsourced websites for e-commerce, education, and corporate clients",
      "Worked on frontend and backend using PHP (Laravel, WordPress), JavaScript, and HTML/CSS/Bootstrap",
      "Designed responsive UI/UX layouts and implemented dynamic features",
    ],
    vi: [
      "Phát triển và bảo trì các website outsource cho khách hàng thương mại điện tử, giáo dục và doanh nghiệp",
      "Làm việc trên frontend và backend sử dụng PHP (Laravel, WordPress), JavaScript, và HTML/CSS/Bootstrap",
      "Thiết kế layouts UI/UX responsive và triển khai các tính năng động",
    ],
  },
};

const projectDescriptions = {
  fichain: {
    en: "Custom Layer 1 blockchain for banking sector with PoS consensus and EVM compatibility",
    vi: "Layer 1 blockchain tùy chỉnh cho ngành ngân hàng với consensus PoS và tương thích EVM",
  },
  aiTrading: {
    en: "Intelligent trading ecosystem with LLM sentiment analysis and predictive modeling",
    vi: "Hệ sinh thái giao dịch thông minh với phân tích sentiment LLM và mô hình dự đoán",
  },
  crossChain: {
    en: "Asset transfer bridge between BeEarning Chain, Ethereum, and BNB Chain",
    vi: "Bridge chuyển tài sản giữa BeEarning Chain, Ethereum, và BNB Chain",
  },
  binaryMlm: {
    en: "Smart contract-based multi-level marketing with mathematical reward distribution",
    vi: "Multi-level marketing dựa trên smart contract với phân phối phần thưởng toán học",
  },
  idVerification: {
    en: "ML-powered document verification with OCR and liveness detection",
    vi: "Xác minh tài liệu bằng ML với OCR và phát hiện liveness",
  },
};

const educationThesis = {
  master: {
    en: "Developing a Mobile Virtual Assistant using Large Language Models for Task Automation",
    vi: "Phát triển Trợ lý Ảo Di động sử dụng Large Language Models cho Tự động hóa Tác vụ",
  },
  bachelor: {
    en: "Blockchain system for saving deposit in Bank",
    vi: "Hệ thống blockchain cho tiền gửi tiết kiệm trong Ngân hàng",
  },
};

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
      url: "https://github.com/HendrickPhan",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hieu-phan-0b66521b4/",
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
      description: experienceDescriptions.bunnyos.en,
      technologies: ["NestJS", "Mastra", "TypeScript", "LLM", "Viem", "Moralis", "Kysely", "Testcontainers"],
    },
    {
      company: "Guarantek",
      position: "Backend Team Lead",
      location: "Remote",
      period: "Dec 2024 - Present",
      description: experienceDescriptions.guarantek.en,
      technologies: ["Golang", "AI/ML", "LLM", "Blockchain", "Kubernetes", "Docker", "CI/CD"],
    },
    {
      company: "Onefusion",
      position: "Head of Blockchain",
      location: "Vietnam",
      period: "Jan 2025 - Jun 2025",
      description: experienceDescriptions.onefusion.en,
      technologies: ["Solidity", "Ethereum", "BSC", "Web3.js", "Node.js", "Smart Contracts"],
    },
    {
      company: "BeEarning",
      position: "Senior Backend Developer",
      location: "Vietnam",
      period: "Oct 2021 - Dec 2024",
      description: experienceDescriptions.beearning.en,
      technologies: ["Golang", "Blockchain", "Solidity", "WebSocket", "gRPC", "PostgreSQL", "Redis"],
    },
    {
      company: "Ibenefit",
      position: "Senior Backend Developer",
      location: "Vietnam",
      period: "May 2018 - Oct 2021",
      description: experienceDescriptions.ibenefit.en,
      technologies: ["Node.js", "PHP", "Laravel", "Python", "Django", "OpenCV", "Asterisk", "MySQL"],
    },
    {
      company: "Glorucode",
      position: "FullStack Developer",
      location: "Vietnam",
      period: "Apr 2017 - May 2018",
      description: experienceDescriptions.glorucode.en,
      technologies: ["PHP", "Laravel", "WordPress", "JavaScript", "jQuery", "Bootstrap", "MySQL"],
    },
  ],
  education: [
    {
      school: "University of Information Technology",
      degree: "Master of Science",
      field: "Computer Science",
      period: "Aug 2022 - Aug 2025",
      thesis: educationThesis.master.en,
    },
    {
      school: "University of Information Technology",
      degree: "Bachelor of Engineering",
      field: "Software Engineering",
      period: "Jun 2016 - Dec 2021",
      thesis: educationThesis.bachelor.en,
    },
  ],
  projects: [
    {
      name: "Fichain - Layer 1 Blockchain",
      description: projectDescriptions.fichain.en,
      technologies: ["Golang", "Consensus", "EVM", "Blockchain"],
      highlights: ["Banking-grade security", "High throughput"],
    },
    {
      name: "AI Stock Trading Platform",
      description: projectDescriptions.aiTrading.en,
      technologies: ["Golang", "Python", "LLM", "Time Series Analysis", "Kafka"],
      highlights: ["Real-time data pipelines", "AI-driven decisions"],
    },
    {
      name: "Cross-chain Bridge DApp",
      description: projectDescriptions.crossChain.en,
      technologies: ["Solidity", "Web3.js", "Golang", "Smart Contracts"],
    },
    {
      name: "Binary Tree MLM System",
      description: projectDescriptions.binaryMlm.en,
      technologies: ["Solidity", "Golang", "PostgreSQL", "WebSocket"],
    },
    {
      name: "ID Verification System",
      description: projectDescriptions.idVerification.en,
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

// Export translations for use in components
export { experienceDescriptions, projectDescriptions, educationThesis };

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
