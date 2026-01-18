import { Code2, Database, Brain, BarChart3, Terminal, Cpu, Cloud, Layers, type LucideIcon } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const iconMap: Record<string, LucideIcon> = {
    programming: Code2,
    analytics: BarChart3,
    ml_ai: Brain,
    visualization: Layers,
    databases: Database,
    tools: Terminal,
    devops: Cloud,
    cs_fundamentals: Cpu
};

const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Technical <span className="text-cyan-400">Expertise</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(resumeData.skills).map(([category, items]) => {
                    const Icon = iconMap[category] || Code2;

                    return (
                        <div
                            key={category}
                            className="group relative bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2 shadow-lg overflow-hidden"
                        >
                            {/* Hover Glow Effect */}
                            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-3 bg-cyan-400/10 rounded-lg text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors duration-300">
                                    <Icon size={24} />
                                </div>
                                <h3 className="text-lg font-bold text-white capitalize">
                                    {category.replace('_', ' ')}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {items.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-xs font-medium bg-[#242424] text-gray-300 rounded-lg border border-gray-700 group-hover:border-cyan-400/30 transition-colors"
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
