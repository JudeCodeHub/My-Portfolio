
export interface Project {
  id: number;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  tech: string[];
  image: string;
  mobileImagePosition?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  liveUrl?: string;
  figmaUrl?: string;
  terminalName: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "WriteFlow — DevSecOps Pipeline for AWS EKS",
    category: "DevSecOps / Cloud",
    summary:
      "End-to-end DevSecOps pipeline for WriteFlow, a three-tier blog app (React, Node.js, PostgreSQL) deployed on AWS EKS.",
    highlights: [
      "Provisioned AWS infrastructure with Terraform, including a 3-AZ VPC and an EKS Auto Mode cluster with encrypted secrets and audit logging",
      "GitHub Actions CI/CD pipeline with ESLint, Hadolint, npm audit, Checkov IaC scanning, Docker build and push to GHCR, and Trivy image scanning",
      "GitOps with ArgoCD auto-syncing deployments from Git, with NetworkPolicies enforcing one-way traffic from frontend to backend to database",
      "Hardened containers by upgrading end-of-life base images, fixing HIGH-severity CVEs, and documenting unfixable ones instead of disabling security scans",
    ],
    tech: [
      "AWS EKS",
      "Terraform",
      "GitHub Actions",
      "ArgoCD",
      "Docker",
      "GHCR",
      "Trivy",
      "Checkov",
      "ESLint",
      "Hadolint",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    image: "/projects/project9.png",
    mobileImagePosition: "center",
    githubUrl: "https://github.com/JudeCodeHub/WriteFlow-DevSecOps.git",
    linkedinUrl: "https://lnkd.in/p/gkGV7ikk",
    terminalName: "writeflow-eks",
  },
  {
    id: 2,
    title: "End-to-End DevSecOps Kubernetes Project",
    category: "DevSecOps / Cloud",
    summary:
      "Full CI/CD pipeline with Jenkins that automatically builds, scans, and deploys the app to AWS EKS on every code change.",
    highlights: [
      "Provisioned all AWS infrastructure (EC2, EKS cluster) with Terraform as Infrastructure as Code",
      "Containerized the app with Docker and deployed to AWS EKS using Kubernetes manifests",
      "Security scanning at multiple stages: SonarQube (code quality), OWASP Dependency-Check (vulnerable dependencies), Trivy (container images)",
      "Automated deployment updates by having Jenkins push the new image version straight into the Kubernetes manifest in GitHub",
    ],
    tech: [
      "Jenkins",
      "Terraform",
      "AWS EC2",
      "AWS EKS",
      "Kubernetes",
      "Docker",
      "SonarQube",
      "OWASP Dependency-Check",
      "Trivy",
      "GitHub",
    ],
    image: "/projects/project8.png",
    githubUrl:
      "https://github.com/JudeCodeHub/End-to-End-DevSecOps-Kubernetes-Project.git",
    linkedinUrl: "https://lnkd.in/p/g3m63wec",
    terminalName: "devsecops-k8s",
  },
  {
    id: 3,
    title: "GitOps CI/CD Pipeline for Go",
    category: "DevOps",
    summary:
      "End-to-end DevOps configuration and CI/CD pipelines for a Go web application, automating build, test, image creation, and deployment.",
    highlights: [
      "Containerized the app with Docker and integrated image build/push into the pipeline for consistent, reproducible releases",
      "Multi-environment workflows (feature/staging/production) with automated tests, environment-specific secrets handling, and rollback-safe deployments",
      "Reduced manual release effort and improved release reliability and developer feedback loops",
    ],
    tech: ["Go", "Docker", "CI/CD", "GitOps"],
    image: "/projects/project2.png",
    githubUrl: "https://github.com/JudeCodeHub/Go-web-app.git",
    linkedinUrl: "https://lnkd.in/p/gJYUK7A6",
    terminalName: "gitops-pipeline",
  },
  {
    id: 4,
    title: "CiniVerse — AWS Cloud Deployment",
    category: "Cloud Architecture",
    summary: "Designed and deployed a scalable, secure AWS cloud architecture.",
    highlights: [
      "Custom VPC with 2 public and 2 private subnets across 2 AZs, Application Load Balancer, and Auto Scaling Group",
      "RDS MySQL in a private subnet, HTTPS via free ACM SSL certificate, domain bought on GoDaddy and configured in Route 53",
      "CloudWatch monitoring with SNS alerts for real-time production visibility",
      "Nginx reverse proxy, systemd process management, and a golden AMI for repeatable deployments",
    ],
    tech: [
      "AWS VPC",
      "ALB",
      "ASG",
      "RDS MySQL",
      "ACM",
      "Route 53",
      "CloudWatch",
      "SNS",
      "Nginx",
      "systemd",
      "AMI",
      "GoDaddy",
    ],
    image: "/projects/project1.png",
    githubUrl: "https://github.com/JudeCodeHub/CiniVerse.git",
    linkedinUrl: "https://lnkd.in/p/g4cWRg2x",
    terminalName: "ciniverse",
  },
  {
    id: 5,
    title: "SitePulse",
    category: "Full-Stack",
    summary:
      "Full-stack MERN platform that runs AI-powered SEO audits and tracks Google keyword rankings over time.",
    highlights: [
      "Real-time audit pipeline using Browserbase + Playwright for headless browser scraping and Google Gemini AI for scoring (SEO, Performance, Accessibility, Best Practices)",
      "Automated daily rank tracking with node-cron, historical position charts, and competitor visibility",
      "Dark/light themed UI in React 19 + TypeScript + Tailwind CSS 4, with JWT auth and plan-based usage limits enforced server-side",
    ],
    tech: [
      "MongoDB",
      "Express",
      "React 19",
      "Node.js",
      "TypeScript",
      "Tailwind CSS 4",
      "Browserbase",
      "Playwright",
      "Google Gemini",
      "node-cron",
      "JWT",
    ],
    image: "/projects/project5.png",
    githubUrl: "https://github.com/JudeCodeHub/SitePulse.git",
    liveUrl: "https://site-pulse-snowy-three.vercel.app/",
    terminalName: "sitepulse",
  },
  {
    id: 6,
    title: "NexBuy — Multi-Vendor E-Commerce Platform",
    category: "Full-Stack",
    summary:
      "Full-stack multi-vendor marketplace with Buyer, Seller, and Admin roles under a single auth identity with role-based access control.",
    highlights: [
      "Complete seller ecosystem: store application with admin approval, product management, and revenue analytics dashboard with trend charts and top products",
      "Stripe + Cash on Delivery payments, coupon codes, subscription perks via Clerk Billing, and automated order-confirmation emails",
      "Event-driven background jobs with Inngest for user sync, scheduled coupon expiry, and transactional emails without blocking the main request flow",
    ],
    tech: ["Clerk", "Clerk Billing", "Stripe", "Inngest", "RBAC"],
    image: "/projects/project6.png",
    githubUrl: "https://github.com/JudeCodeHub/NexBuy-Ecommerce-App.git",
    liveUrl: "https://e-nexbuy.vercel.app/",
    terminalName: "nexbuy",
  },
  {
    id: 7,
    title: "Resumind — AI Resume Analyzer",
    category: "Full-Stack / AI",
    summary:
      "Full-stack AI-powered resume analyzer where users upload PDF resumes and get ATS-focused, section-wise feedback in a clear review interface.",
    highlights: [
      "Puter-based authentication, storage, and AI integration",
      "Resume preview generation and robust error handling with AI model fallback for reliability",
      "Deployed on Netlify with SPA routing for smooth navigation and refresh behavior across routes",
    ],
    tech: ["Puter (auth, storage, AI)", "Netlify", "PDF processing"],
    image: "/projects/project4.png",
    githubUrl: "https://github.com/JudeCodeHub/Resume-Analyzer.git",
    liveUrl: "https://resumindjude.netlify.app/",
    terminalName: "resumind",
  },
  {
    id: 8,
    title: "EdgeCase — AI Test Automation Agent",
    category: "Full-Stack / AI",
    summary:
      "Web app that connects to a GitHub repo, reads the code with Google Gemini, and generates test cases.",
    highlights: [
      "AI pipeline that parses the repo, gives Gemini the right context, and turns its output into clean, editable test cases",
      "Clerk for login and GitHub OAuth",
      "Responsive, mobile-first UI built with Tailwind and shadcn/ui",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Drizzle ORM",
      "Neon Postgres",
      "Clerk",
      "GitHub OAuth",
      "Google Gemini",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    image: "/projects/project7.png",
    githubUrl: "https://github.com/JudeCodeHub/AI-Test-Automation-Agent.git",
    liveUrl: "https://testedgecase.vercel.app/",
    terminalName: "edgecase",
  },
  {
    id: 9,
    title: "UGC Sri Lanka Website Redesign",
    category: "UI/UX Design",
    summary:
      "Redesigned the homepage of the UGC Sri Lanka website in Figma for clearer navigation and a modern UI.",
    highlights: [
      "Well-structured design source with clear layout hierarchy and co-located visual assets (images, SVG) for consistent visuals",
      "Clickable prototype to validate navigation and user experience before development",
    ],
    tech: ["Figma"],
    image: "/projects/project3.png",
    figmaUrl:
      "https://www.figma.com/file/PkX0gMzUMNAYHwMvLSHoku/UGC-website-Redesigned",
    terminalName: "ugc-website",
  },
];
