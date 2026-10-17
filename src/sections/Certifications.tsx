import { Award, Trophy, Star, Medal, GraduationCap, CheckCircle2, BadgeCheck } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <div className="text-center mb-16">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Credentials & Recognition</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Certifications, Courses & <span className="text-cyan-400">Awards</span>
                </h2>
                <p className="text-gray-400 max-w-2xl mx-auto mt-3 text-sm md:text-base">
                    Validated expertise across Agentic AI, RAG Architectures, Full Stack Data Science, and recognized academic distinctions.
                </p>
            </div>

            {/* Certifications & Courses Section */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-cyan-400/10 rounded-2xl text-cyan-400">
                        <Award size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Recent Certifications & Specialized Courses</h3>
                        <p className="text-gray-400 text-sm">Industry-standard credentials in Autonomous Agents, RAG & LLMs</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {resumeData.certifications.map((cert, index) => (
                        <div
                            key={index}
                            className={`group relative bg-[#1f242d] p-6 sm:p-7 rounded-3xl border ${cert.featured ? 'border-cyan-500/40 hover:border-cyan-400' : 'border-gray-800 hover:border-cyan-500/30'} transition-all duration-300 hover:-translate-y-1.5 shadow-lg overflow-hidden flex flex-col justify-between`}
                        >
                            {/* Background Ambient Medal Watermark */}
                            <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-15 group-hover:text-cyan-400 transition-all duration-300">
                                <Medal size={80} />
                            </div>

                            <div>
                                <div className="flex items-center justify-between gap-2 mb-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-500/30">
                                        {cert.tag}
                                    </span>
                                    <span className="text-xs text-gray-400 font-medium">
                                        {cert.issuer}
                                    </span>
                                </div>

                                <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                                    {cert.title}
                                </h4>

                                {cert.description && (
                                    <p className="text-gray-400 text-xs sm:text-sm mt-3 leading-relaxed">
                                        {cert.description}
                                    </p>
                                )}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                                <div className="flex items-center gap-1.5 text-cyan-400/90 font-medium">
                                    <BadgeCheck size={16} />
                                    <span>Verified Credential</span>
                                </div>
                                <span className="text-gray-400">{cert.issuer}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards & Milestones Section */}
            <div className="mb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="p-3 bg-yellow-400/10 rounded-2xl text-yellow-400">
                        <Trophy size={28} />
                    </div>
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Honors & Academic Milestones</h3>
                        <p className="text-gray-400 text-sm">Competition wins and university-recognized academic excellence</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {resumeData.achievements.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1f242d] p-6 rounded-3xl border border-gray-800 hover:border-yellow-400/60 transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="p-3 rounded-2xl bg-yellow-400/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-black transition-colors shrink-0">
                                    <Star size={24} fill="currentColor" fillOpacity={0.2} />
                                </div>
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-yellow-400/10 text-yellow-300 border border-yellow-400/20">
                                            {item.year}
                                        </span>
                                        <span className="text-xs text-gray-400">{item.category}</span>
                                    </div>
                                    <h4 className="text-lg font-bold text-white group-hover:text-yellow-300 transition-colors">
                                        {item.title}
                                    </h4>
                                </div>
                            </div>

                            <p className="text-gray-300 text-sm leading-relaxed mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Academic Timeline Section */}
            <div className="pt-8">
                <div className="flex items-center justify-center gap-3 mb-12">
                    <div className="p-3 bg-cyan-400/10 rounded-2xl text-cyan-400">
                        <GraduationCap size={28} />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">Academic Journey</h3>
                        <p className="text-gray-400 text-sm">Formal degree programs in Data Science and Computer Science</p>
                    </div>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {resumeData.education.map((edu, index) => (
                        <div
                            key={index}
                            className="relative bg-gradient-to-br from-[#1f242d] to-[#181d24] p-8 rounded-3xl border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 shadow-xl"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                                    {edu.period}
                                </span>
                                <span className="text-2xl font-black text-cyan-400">
                                    {edu.score}
                                </span>
                            </div>

                            <h4 className="text-2xl font-bold text-white mb-2">
                                {edu.degree}
                            </h4>
                            <p className="text-gray-300 text-sm mb-4">
                                {edu.institution}
                            </p>

                            {edu.details && (
                                <div className="flex items-center gap-2 text-xs text-gray-400 pt-3 border-t border-gray-800">
                                    <CheckCircle2 size={15} className="text-cyan-400" />
                                    <span>{edu.details}</span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
