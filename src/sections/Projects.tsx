import { ExternalLink, Github, FolderGit2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <SectionWrapper id="projects" className="bg-[#242424]/50">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Featured <span className="text-cyan-400">Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {resumeData.projects.map((project, index) => (
                    <div
                        key={index}
                        className="group relative bg-gradient-to-br from-[#1f242d] to-[#242424] rounded-3xl overflow-hidden border border-gray-800 hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]"
                    >
                        {/* Decorative Header */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                        <div className="p-8 md:p-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                                    <FolderGit2 size={32} />
                                </div>
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg"
                                            title="View Code"
                                        >
                                            <Github size={20} />
                                        </a>
                                    )}
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-lg" title="Live Demo">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </div>

                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">
                                {project.title}
                            </h3>

                            <p className="text-gray-400 mb-8 leading-relaxed text-sm md:text-base border-l-2 border-gray-700 pl-4 group-hover:border-cyan-400/50 transition-colors">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-[#1a1f26] text-cyan-400/80 border border-cyan-400/10 group-hover:border-cyan-400/30 transition-colors">
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
