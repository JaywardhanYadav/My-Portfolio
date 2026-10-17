import { Bot, BrainCircuit, Network, Server, type LucideIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const categoryMeta: Record<string, { title: string; icon: LucideIcon; description: string; accent: string }> = {
    generative_and_agentic_ai: {
        title: "Generative AI & Agentic Systems",
        icon: Bot,
        description: "Multi-agent frameworks, LangGraph, tool calling, MCP, hybrid RAG, cross-encoder reranking & evaluation",
        accent: "border-cyan-500/40 hover:border-cyan-400 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]"
    },
    ml_and_data_science: {
        title: "Machine Learning & Data Science",
        icon: BrainCircuit,
        description: "Core algorithms, tree ensembles, PyTorch, exploratory analysis, statistical modeling & Optuna tuning",
        accent: "border-blue-500/40 hover:border-blue-400 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.2)]"
    },
    mlops_cloud_and_devops: {
        title: "MLOps, Cloud & DevOps",
        icon: Network,
        description: "Experiment tracking with MLflow, DVC data versioning, Evidently AI drift checks, Docker & AWS",
        accent: "border-teal-500/40 hover:border-teal-400 group-hover:shadow-[0_0_25px_rgba(20,184,166,0.2)]"
    },
    backend_and_databases: {
        title: "Backend, APIs & Databases",
        icon: Server,
        description: "Async FastAPI services, Pydantic V2 validation, JWT authentication, PostgreSQL, Redis, MSSQL & SSE",
        accent: "border-indigo-500/40 hover:border-indigo-400 group-hover:shadow-[0_0_25px_rgba(99,102,241,0.2)]"
    }
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <div className="text-center mb-14">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Technical Proficiencies</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Core <span className="text-cyan-400">Expertise</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
                    Comprehensive technical toolkit spanning modern GenAI orchestration, classical machine learning, and production engineering.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(resumeData.skills).map(([category, items]) => {
                    const meta = categoryMeta[category] || {
                        title: category.replace(/_/g, ' '),
                        icon: Bot,
                        description: "",
                        accent: "border-gray-800 hover:border-cyan-400"
                    };
                    const Icon = meta.icon;

                    return (
                        <div
                            key={category}
                            className={`group relative bg-[#1f242d] p-7 md:p-8 rounded-3xl border ${meta.accent} transition-all duration-300 hover:-translate-y-1.5 shadow-xl overflow-hidden`}
                        >
                            {/* Ambient Top Glow */}
                            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-cyan-400/10 blur-2xl group-hover:bg-cyan-400/20 transition-all duration-500"></div>

                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3.5 bg-cyan-400/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                                    <Icon size={26} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white tracking-wide">
                                        {meta.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs mt-1">
                                        {meta.description}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2.5 mt-6">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3.5 py-1.5 text-xs font-medium bg-[#161a20] text-gray-200 rounded-lg border border-gray-700/80 hover:border-cyan-400/60 hover:text-cyan-300 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
