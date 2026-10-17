import { Github, FolderGit2, Sparkles, CheckCircle, BarChart2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <SectionWrapper id="projects">
            <div className="text-center mb-16">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Production Systems</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Featured <span className="text-cyan-400">Projects</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                    Real-world, benchmarked AI platforms and end-to-end MLOps pipelines built for enterprise reliability and scalability.
                </p>
            </div>

            <div className="space-y-12 max-w-6xl mx-auto">
                {resumeData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-gradient-to-br from-[#1f242d] to-[#161a20] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-400/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.12)] p-6 sm:p-8 md:p-10"
                    >
                        {/* Top Accent Gradient Bar */}
                        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500"></div>

                        {/* Card Header */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-cyan-400/10 rounded-2xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                                    <FolderGit2 size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-cyan-400/90 text-sm font-medium mt-0.5">
                                        {project.subtitle}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3">
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#242a35] hover:bg-cyan-400 hover:text-black text-gray-200 rounded-xl transition-all font-medium text-sm border border-gray-700/80 hover:border-cyan-400 shadow-sm"
                                        title="View GitHub Repository"
                                    >
                                        <Github size={18} />
                                        <span>Source Code</span>
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* Metrics Banner */}
                        <div className="flex flex-wrap gap-2.5 mb-5">
                            {project.metrics.map((metric, mIdx) => (
                                <div
                                    key={mIdx}
                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/40 text-cyan-300 text-xs font-semibold shadow-inner"
                                >
                                    <BarChart2 size={13} className="text-cyan-400" />
                                    <span>{metric}</span>
                                </div>
                            ))}
                        </div>

                        {/* Problem Statement in Natural Human Language */}
                        <div className="mb-5 p-4 rounded-2xl bg-[#161a20]/90 border border-amber-500/30 flex items-start gap-3">
                            <span className="text-amber-400 font-bold text-base mt-0.5 shrink-0">🎯</span>
                            <div className="text-sm sm:text-base leading-relaxed text-gray-200 text-pretty" style={{ textWrap: 'pretty' }}>
                                <span className="font-semibold text-amber-300">Problem Statement: </span>
                                {project.problemStatement}
                            </div>
                        </div>

                        {/* 3-Line High-Level System Architecture */}
                        <div className="mb-6 space-y-2.5 bg-[#14181f]/80 border border-gray-800/90 rounded-2xl p-4 sm:p-5">
                            {project.overview.map((line, oIdx) => (
                                <p key={oIdx} className="flex items-start gap-3 text-gray-300 text-sm sm:text-base leading-relaxed text-pretty" style={{ textWrap: 'pretty' }}>
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] mt-2 shrink-0"></span>
                                    <span className="text-pretty">{line}</span>
                                </p>
                            ))}
                        </div>

                        {/* Engineering Highlights List */}
                        <div className="space-y-2.5 mb-8 bg-[#181d24] p-5 sm:p-6 rounded-2xl border border-gray-800/80">
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 flex items-center gap-2">
                                <Sparkles size={14} className="text-yellow-400" />
                                <span>Key Architectural Highlights & Benchmarks</span>
                            </div>
                            {project.highlights.map((highlight, hIdx) => (
                                <div key={hIdx} className="flex items-start gap-3 text-sm text-gray-300">
                                    <CheckCircle size={16} className="text-cyan-400 shrink-0 mt-1" />
                                    <span className="leading-relaxed">{highlight}</span>
                                </div>
                            ))}
                        </div>

                        {/* Tech Stack Pills */}
                        <div>
                            <div className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2.5">
                                Technologies & Tools
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium rounded-lg bg-[#14181f] text-gray-300 border border-gray-700/70 group-hover:border-cyan-400/30 transition-colors"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;
