import { Github, Linkedin, Mail } from "lucide-react";

export const resumeData = {
    name: "Jaywardhan Yadav",
    role: "Aspiring Data Scientist | Data Analyst | AI & Machine Learning Enthusiast",
    about: "I am a Data Science postgraduate with strong foundations in data analytics, machine learning, NLP, and business intelligence. I enjoy solving real-world problems using data-driven approaches, building analytical systems, dashboards, and AI-assisted solutions.",
    education: [
        {
            degree: "M.Sc Data Science",
            institution: "Dr D Y Patil College, Pimpri",
            period: "2024–2026",
            score: "CGPA 9.73 (current)"
        },
        {
            degree: "B.Sc Computer Science",
            institution: "Nowrosjee Wadia College, Pune",
            period: "2024",
            score: "CGPA 8.34"
        },
        {
            degree: "H.S.C",
            institution: "Maharashtra State Board",
            period: "2021",
            score: "93.67%"
        },
        {
            degree: "S.S.C",
            institution: "Maharashtra State Board",
            period: "2019",
            score: "90.60%"
        }
    ],
    skills: {
        programming: ["Python", "SQL", "TypeScript", "JavaScript", "Core Java"],
        analytics: ["Data Cleaning", "Advanced EDA", "Statistical Modeling", "ETL Pipelines", "Business Intelligence", "KPI Optimization"],
        ml_ai: ["Generative AI", "LLMs & RAG", "Deep Learning", "TensorFlow", "PyTorch", "NLP", "Computer Vision", "Prompt Engineering"],
        libraries: ["Pandas", "NumPy", "Scikit-learn", "Keras", "Matplotlib", "Seaborn", "NLTK", "OpenCV"],
        visualization: ["Power BI", "Tableau", "Looker Studio", "Data Storytelling", "D3.js"],
        databases: ["PostgreSQL", "MySQL", "MongoDB", "ChromaDB", "Vector Databases"],
        devops_cloud: ["AWS (SageMaker, EC2)", "Docker", "Kubernetes", "CI/CD", "MLOps", "Git/GitHub"],
        cs_fundamentals: ["Data Structures & Algorithms", "Object-Oriented Programming", "System Design"]
    },
    projects: [
        {
            title: "Sentiment-Based Market Trend Analysis",
            tech: ["Python", "Pandas", "NumPy", "NLTK", "VADER", "BERT", "TextBlob", "Power BI"],
            description: "Performed NLP preprocessing, sentiment analysis using ML and deep learning models, evaluated performance metrics, and visualized market sentiment trends with dashboards.",
            github: "https://github.com/jaywardhanyadav0988/Sentiment-Based-Market-Trend-Analysis"
        },
        {
            title: "Customer Support Analytics & AI-Assisted System",
            tech: ["Python", "SQL", "Power BI", "LangChain", "LLMs", "ChromaDB", "FastAPI"],
            description: "Built a customer support analytics system to analyze ticket volume, issue categories, response time, and SLA metrics. Developed Power BI dashboards and integrated AI-based NLP summarization, classification, and automated reporting.",
            github: "https://github.com/jaywardhanyadav0988/Customer-Support-Analytics-AI-Assisted-System"
        }
    ],
    certifications: [
        "Generative AI & Agentic AI (Udemy)",
        "Full Stack Data Science Certification"
    ],
    achievements: [
        "Solved 500+ DSA Problems on LeetCode & GeeksForGeeks; Ranked Top 5% in University Coding Contests.",
        "Authored a research paper on 'Optimizing Transformer Models for Sentiment Analysis' (Under Review).",
        "Lead the Data Science Student Club, mentoring 100+ peers in Python and Machine Learning workshops."
    ],
    social: [
        {
            name: "Email",
            url: "mailto:durvankur9850@gmail.com",
            icon: Mail
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/jaywardhan-yadav-53601b355/",
            icon: Linkedin
        },
        {
            name: "GitHub",
            url: "https://github.com/jaywardhanyadav0988",
            icon: Github
        }
    ]
};
