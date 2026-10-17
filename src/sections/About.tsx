import { GraduationCap, Brain, Cpu, Rocket, Download, ArrowUpRight } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-[#1a1f26]/60">
            <div className="text-center mb-14">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Background & Focus</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    About <span className="text-cyan-400">Me</span>
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column: Story & Narrative */}
                <div className="flex-1 space-y-6 text-center lg:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                        Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Production-Grade Agentic AI</span> & Intelligent Systems
                    </h3>

                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        I am an <strong className="text-white">AI/ML Engineer</strong> with an M.Sc. in Data Science (<strong className="text-cyan-300 font-semibold">CGPA 9.60, Silver Medalist</strong>) specialized in building reliable autonomous agents and enterprise retrieval systems.
                    </p>

                    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                        My practical engineering focuses on solving complex real-world workflows: shipping <strong className="text-cyan-400">LangGraph multi-agent planners</strong> with Human-in-the-Loop governance and Model Context Protocol (MCP), designing <strong className="text-cyan-400">two-stage hybrid RAG engines</strong> with verified citation-level grounding, and constructing <strong className="text-cyan-400">end-to-end MLOps pipelines</strong> with automated drift monitoring and Dockerized microservices.
                    </p>

                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <a
                            href={resumeData.resumePdf}
                            download="Jaywardhan_Yadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-black font-semibold rounded-xl shadow-md hover:bg-cyan-300 transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <Download size={18} />
                            <span>Download Full Resume</span>
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-[#242a35] hover:bg-[#2e3747] text-white font-medium rounded-xl border border-gray-700 transition-all duration-300"
                        >
                            <span>Let's Discuss AI</span>
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                {/* Right Column: Key Pillars */}
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                            <Brain size={26} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Agentic AI & Orchestration</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Multi-agent state machines with LangGraph, Model Context Protocol (MCP) servers, tool use, and Human-in-the-Loop checkpoints.
                        </p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                            <Cpu size={26} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Hybrid RAG & Evaluation</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            BM25 + Dense vector search, cross-encoder reranking, custom intent routing, and rigorous benchmarking using Ragas.
                        </p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-black transition-all">
                            <Rocket size={26} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">MLOps & Production APIs</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            FastAPI async backends, Pydantic V2, MLflow model registries, DVC versioning, Evidently AI drift monitoring, and Docker stacks.
                        </p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <div className="w-12 h-12 rounded-xl bg-yellow-400/10 flex items-center justify-center text-yellow-400 mb-4 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black transition-all">
                            <GraduationCap size={26} />
                        </div>
                        <h4 className="text-lg font-bold text-white mb-2">Academics & Honors</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            M.Sc. Data Science (CGPA 9.60, Silver Medalist), 1st Rank College Research Paper (2025), and 2nd Rank College Hackathon (2026).
                        </p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
