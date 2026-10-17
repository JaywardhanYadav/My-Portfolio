import { Github, Linkedin, Mail, FileText } from "lucide-react";

export interface ProjectItem {
    title: string;
    subtitle: string;
    problemStatement: string;
    metrics: string[];
    tech: string[];
    overview: string[];
    description: string;
    highlights: string[];
    github: string;
}

export interface CertificationItem {
    title: string;
    issuer: string;
    tag: string;
    description?: string;
    featured?: boolean;
}

export interface EducationItem {
    degree: string;
    institution: string;
    period: string;
    score: string;
    details?: string;
}

export interface AwardItem {
    title: string;
    year: string;
    category: string;
    description: string;
}

export const resumeData = {
    name: "Jaywardhan Yadav",
    role: "AI/ML Engineer",
    tagline: "Building Production-Grade Agentic AI, Hybrid RAG Platforms & MLOps Systems",
    email: "jaywardhantech@gmail.com",
    location: "Pune, Maharashtra, India",
    resumePdf: "/Jaywardhan_Yadav_Resume.pdf",
    
    summary:
        "M.Sc. in Data Science graduate with a 9.60 CGPA from Dr. D. Y. Patil College with solid foundations in AI Engineering, Generative AI, Multi-Agent Workflows, RAG Systems & Machine Learning. Hands-on expertise in Python, PyTorch, LangGraph, FastAPI, Docker, and End-to-End MLOps. Actively seeking opportunities as an AI/ML Engineer to build scalable, high-impact systems.",


    education: [
        {
            degree: "Master in Data Science",
            institution: "Dr. D. Y. Patil College, Pimpri, Pune",
            period: "2024 – 2026",
            score: "CGPA 9.60",
            details: "Awarded Silver Medal for Academic Excellence"
        },
        {
            degree: "Bachelor in Computer Science",
            institution: "Nowrosjee Wadia College, Pune",
            period: "2021 – 2024",
            score: "CGPA 8.40",
            details: "Strong foundations in Computer Science, Algorithms & Mathematics"
        }
    ] as EducationItem[],

    skills: {
        generative_and_agentic_ai: [
            "Agentic AI",
            "LangGraph Multi-Agent Orchestration",
            "LangChain",
            "Model Context Protocol (MCP)",
            "Human-in-the-Loop (HITL) Workflows",
            "Tool / Function Calling",
            "Two-Stage RAG",
            "Hybrid Search (BM25 + Dense)",
            "Cross-Encoder Reranking (FlashRank)",
            "Weaviate Vector DB",
            "OpenAI Embeddings",
            "Ragas (RAG Evaluation)",
            "LangSmith LLM Tracing",
            "Prompt Engineering",
            "LLM APIs (OpenAI, Groq)",
            "Hugging Face"
        ],
        ml_and_data_science: [
            "Python",
            "PyTorch",
            "Scikit-learn",
            "NumPy",
            "Pandas",
            "Exploratory Data Analysis (EDA)",
            "Feature Engineering",
            "Statistical Analysis",
            "XGBoost",
            "LightGBM",
            "Random Forest",
            "Optuna Hyperparameter Tuning"
        ],
        mlops_cloud_and_devops: [
            "MLflow Model & Experiment Tracking",
            "DVC (Data Version Control)",
            "Evidently AI (Data Drift Monitoring)",
            "Docker & Multi-Container Stacks",
            "AWS (S3, ECS Fargate)",
            "CI/CD Workflows",
            "Git & GitHub",
            "Alembic Database Migrations"
        ],
        backend_and_databases: [
            "FastAPI (REST & AsyncIO)",
            "Pydantic V2 Validation",
            "JWT Authentication",
            "Server-Sent Events (SSE)",
            "PostgreSQL (Async SQLAlchemy)",
            "MSSQL / SQL Server",
            "Redis Caching & Queue",
            "Streamlit Dashboarding",
            "Async Programming"
        ]
    },

    projects: [
        {
            title: "PlanMyTrip AI",
            subtitle: "Multi-Agent Travel Planning System with Human-in-the-Loop & MCP",
            problemStatement: "Vacation planning across multiple sites is chaotic, and standard AI chatbots constantly hallucinate prices and exceed budgets. Travelers need an intelligent, budget-locked assistant that coordinates real bookings safely with human approval.",
            github: "https://github.com/JaywardhanYadav/PlanMyTrip-AI",
            metrics: ["96.0% Guardrail Accuracy", "96.8% Budget Compliance", "~$0.018 / Trip LLM Cost", "11.4s p50 Latency"],
            tech: [
                "Python",
                "LangGraph",
                "FastAPI",
                "OpenAI (GPT-4o-mini)",
                "LangSmith",
                "PostgreSQL",
                "Redis",
                "MCP",
                "Pydantic V2",
                "Docker",
                "SSE",
                "JWT"
            ],
            overview: [
                "I engineered an autonomous multi-agent travel planner generating personalized itineraries, flights, and hotel bookings to budget.",
                "The multi-agent architecture uses a LangGraph state machine and 3 standalone MCP servers for live flight, hotel, and weather data.",
                "Human-in-the-Loop approval checkpoints enforce budget safety before booking, with inference cost optimized to ~$0.018 per trip."
            ],
            description:
                "I built an autonomous travel planner in LangGraph where specialized AI agents coordinate to find live flights, hotels, and weather via MCP—giving users final approval before any booking is made.",
            highlights: [
                "Architected a two-stage multi-agent travel planner in LangGraph (parallel fan-out agents, then location-grounded hotel matching) with Human-in-the-Loop checkpoints.",
                "Decoupled live flight, hotel, attraction, and weather data behind 3 standalone Model Context Protocol (MCP) servers.",
                "Built an input guardrail and evaluation suite over 10 trip scenarios and 25 adversarial cases: achieved 96.0% guardrail accuracy, 96.8% budget compliance, and 95.5% itinerary quality.",
                "Engineered reliable agent state using Pydantic V2, an idempotent keyed-merge reducer, and Decimal budgets for zero floating-point drift.",
                "Kept LLM cost to ~$0.018 (INR 1.50) per trip across 5 GPT-4o-mini agents, traced comprehensively in LangSmith.",
                "Built an async FastAPI backend with JWT auth, PostgreSQL checkpoints, per-user thread ownership, and live progress streaming over SSE; containerized with Docker."
            ]
        },
        {
            title: "LegalDrishti AI",
            subtitle: "Two-Stage RAG Legal Research Platform (Indian Law)",
            problemStatement: "Searching Indian law with basic AI vector search is unreliable because lawyers need exact Bare Act sections and verified citations, not vague summaries or hallucinated laws.",
            github: "https://github.com/JaywardhanYadav/LegalDrishti-AI",
            metrics: ["Hit Rate@5: 48.2% → 86.8%", "MRR@5: 0.384 → 0.762 (+98%)", "68ms Latency", "88.4% Ragas Faithfulness"],
            tech: [
                "Python",
                "FastAPI",
                "PostgreSQL",
                "SQLAlchemy (AsyncIO)",
                "Alembic",
                "Weaviate",
                "OpenAI Embeddings",
                "FlashRank",
                "Ragas",
                "Redis",
                "Docker"
            ],
            overview: [
                "I developed a two-stage RAG legal research platform that answers Indian law queries with verified citations from 28 Bare Acts.",
                "Custom Statute Router pre-filters laws before Weaviate hybrid search (BM25 + dense) and FlashRank cross-encoder reranking.",
                "Async FastAPI backend enables dual-stream grounding over statutory laws and user case vaults, with automated document cleanup."
            ],
            description:
                "I developed an intelligent legal research platform that scans 28 Indian Bare Acts and personal court files, using hybrid search and reranking to deliver verified answers with exact Section citations.",
            highlights: [
                "Architected a Two-Stage RAG pipeline with a custom Statute Router (regex intent + weighted n-gram index, IPC/CrPC to BNS/BNSS/BSA mapping) pre-filtering 28 Indian Bare Acts.",
                "Engineered Weaviate hybrid search (dense + BM25, alpha=0.5) fetching 20 candidates, followed by FlashRank cross-encoder reranking to top 5 with Act, Section, and page-level citations.",
                "Benchmarked on a 75-query golden set: boosted Hit Rate@5 from 48.2% to 86.8% and MRR@5 from 0.384 to 0.762 (+98% lift) over dense-only search at ~68ms retrieval latency.",
                "Ragas evaluation verified high reliability: Faithfulness 88.4%, Context Precision 84.2%, and Answer Relevancy 85.6%.",
                "Built an async FastAPI + PostgreSQL (SQLAlchemy AsyncIO) backend with JWT auth, metered Deep Search credits, and dual-stream grounding over statutes and user document vaults.",
                "Implemented auto-purging ephemeral attachments on chat deletion and master purges for files and embeddings; packaged in Docker."
            ]
        },
        {
            title: "Health Insurance Premium Prediction & End-to-End MLOps Pipeline",
            subtitle: "Production ML Inference, Drift Monitoring & Containerized Pipeline",
            problemStatement: "ML models often work fine in Jupyter notebooks but quietly fail in the real world when customer health trends change, leading to bad insurance pricing if not continuously monitored.",
            github: "https://github.com/JaywardhanYadav/Insurance-premium-prediction-mlops",
            metrics: ["Test R² 0.854", "RMSE 2,891 | MAE 2,201", "20K Records Trained", "Evidently AI Drift Monitoring"],
            tech: [
                "Python",
                "XGBoost",
                "LightGBM",
                "Optuna",
                "MLflow",
                "DVC",
                "FastAPI",
                "Pydantic",
                "Streamlit",
                "MSSQL",
                "SQLAlchemy",
                "Evidently AI",
                "Docker"
            ],
            overview: [
                "I engineered a production ML system that accurately predicts medical insurance premiums from patient clinical health metrics.",
                "Automated pipeline trains an Optuna-tuned XGBoost and LightGBM ensemble, with experiments in MLflow and data versioned in DVC.",
                "High-performance FastAPI service serves live predictions with containerized Evidently AI monitoring for production data drift."
            ],
            description:
                "I engineered an end-to-end machine learning system that predicts medical insurance costs from patient health indicators, served through a FastAPI backend with automated data drift monitoring in production.",
            highlights: [
                "Built a config-driven (YAML) end-to-end ML pipeline with clinical feature engineering (blood-pressure parsing, outlier clipping, interaction features like risk_score, smoker_obese, hypertension).",
                "Trained an Optuna-tuned XGBoost + LightGBM ensemble on 20K records with log-transformed target: Test R² 0.854, RMSE 2,891, MAE 2,201; runs and artifacts tracked in MLflow.",
                "Served predictions through a FastAPI inference API with strict Pydantic validation and an interactive Streamlit UI; logged prediction latencies to MSSQL via SQLAlchemy.",
                "Added an Evidently AI drift monitoring service comparing production prediction logs against reference baselines as a containerized job.",
                "Versioned datasets and pipelines with DVC, packaged the API, UI, database, and monitor as a multi-container Docker stack with AWS ECS Fargate deployment guide."
            ]
        }
    ] as ProjectItem[],

    certifications: [
        {
            title: "Generative AI & Agentic AI",
            issuer: "Udemy",
            tag: "Agentic AI",
            description: "Deep dive into multi-agent systems, LangGraph, tool usage, memory architectures, and production orchestration.",
            featured: true
        },
        {
            title: "Agentic AI Certified Foundations Associate",
            issuer: "Oracle",
            tag: "Oracle Certified",
            description: "Official certification on autonomous agent architectures, enterprise AI patterns, and governance.",
            featured: true
        },
        {
            title: "RAG Architecture",
            issuer: "DeepLearning.AI",
            tag: "Retrieval Augmented Generation",
            description: "Advanced semantic search, hybrid retrieval, chunking strategies, cross-encoders, and evaluation pipelines.",
            featured: true
        },
        {
            title: "Complete Generative AI Course with LangChain & Hugging Face",
            issuer: "Krish Naik Academy",
            tag: "LLMs & Open Source",
            description: "Comprehensive hands-on mastery of LangChain, Hugging Face models, vector stores, fine-tuning, and deployment.",
            featured: true
        },
        {
            title: "Full Stack Data Science",
            issuer: "Udemy",
            tag: "Data Science & ML",
            description: "End-to-end data science lifecycle, exploratory data analysis, statistical modeling, machine learning algorithms, and deployment.",
            featured: false
        },
        {
            title: "Problem Solving & Algorithmic Practice (100+ Problems)",
            issuer: "LeetCode & HackerRank",
            tag: "DSA & Data Science",
            description: "Solved 100+ algorithmic and data structure problems with focus on arrays, hashing, graphs, dynamic programming, and SQL.",
            featured: false
        }
    ] as CertificationItem[],

    achievements: [
        {
            title: "1st Rank – College Level Research Paper",
            year: "2025",
            category: "Academic & Research",
            description: "Secured 1st Rank at college level for our research paper, which was officially selected for the university research publication."
        },
        {
            title: "Silver Medalist – M.Sc. Data Science",
            year: "2026",
            category: "Academic Excellence",
            description: "Awarded the Silver Medal in M.Sc. Data Science at Dr. D. Y. Patil College for graduating with a top CGPA of 9.60."
        },
        {
            title: "2nd Rank – College Hackathon",
            year: "2026",
            category: "Hackathons & Coding",
            description: "Secured 2nd Rank in the college hackathon programming competition, building innovative data-driven software under intense time constraints."
        }
    ] as AwardItem[],

    social: [
        {
            name: "Email",
            url: "mailto:jaywardhantech@gmail.com",
            icon: Mail
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jaywardhanyadav",
            icon: Linkedin
        },
        {
            name: "GitHub",
            url: "https://github.com/JaywardhanYadav",
            icon: Github
        },
        {
            name: "Resume",
            url: "/Jaywardhan_Yadav_Resume.pdf",
            icon: FileText
        }
    ],

    contactDetails: {
        email: "jaywardhantech@gmail.com",
        location: "Pune, Maharashtra, India",
        linkedIn: "linkedin.com/in/jaywardhanyadav",
        github: "github.com/JaywardhanYadav"
    }
};
