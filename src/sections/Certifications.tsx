import { Award, Trophy, Star, Medal, BookOpen } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Certifications = () => {
    return (
        <SectionWrapper id="certifications">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Honors & <span className="text-cyan-400">Achivements</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Achievements Column */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-400/10 rounded-xl text-yellow-400">
                            <Trophy size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Milestones</h3>
                    </div>

                    <div className="space-y-6">
                        {resumeData.achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="group flex p-4 bg-[#1f242d] rounded-2xl border border-gray-800 hover:border-yellow-400/50 transition-all duration-300 hover:-translate-x-2"
                            >
                                <div className="flex-shrink-0 mt-1 mr-4 text-yellow-500/50 group-hover:text-yellow-400 transition-colors">
                                    <Star size={20} fill="#EAB308" fillOpacity={0.2} />
                                </div>
                                <p className="text-gray-300 group-hover:text-white transition-colors leading-relaxed">
                                    {achievement}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Certifications Column */}
                <div className="space-y-8">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-cyan-400/10 rounded-xl text-cyan-400">
                            <Award size={32} />
                        </div>
                        <h3 className="text-3xl font-bold text-white">Certifications</h3>
                    </div>

                    <div className="grid gap-6">
                        {resumeData.certifications.map((cert, index) => (
                            <div
                                key={index}
                                className="group relative bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <Medal size={60} />
                                </div>
                                <h4 className="text-lg font-bold text-cyan-50 group-hover:text-cyan-400 transition-colors pr-8">
                                    {cert}
                                </h4>
                                <div className="mt-2 flex items-center gap-2 text-sm text-gray-400">
                                    <BookOpen size={14} />
                                    <span>Verified Credential</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Central Line Academic Timeline */}
            <div className="mt-24">
                <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
                    Academic <span className="text-cyan-400">Journey</span>
                </h2>
                <div className="relative max-w-4xl mx-auto">
                    {/* Central Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400/10 via-cyan-400 to-cyan-400/10 rounded-full"></div>

                    <div className="space-y-12">
                        {resumeData.education.map((edu, index) => (
                            <div key={index} className={`relative flex items-center justify-between ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                {/* Empty side for spacing */}
                                <div className="w-[45%]"></div>

                                {/* Center Dot */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#1f242d] border-4 border-cyan-400 rounded-full z-10 shadow-[0_0_15px_rgba(34,211,238,0.5)]"></div>

                                {/* Branch/Card Side */}
                                <div className="w-[45%] group">
                                    <div className={`relative bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                                        {/* Connector Line */}
                                        <div className={`absolute top-1/2 -mt-0.5 w-6 h-1 bg-cyan-400/30 ${index % 2 === 0 ? '-left-6' : '-right-6'}`}></div>

                                        <div className={`flex flex-col ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
                                            <span className="inline-block px-3 py-1 bg-cyan-400/10 text-cyan-400 text-xs font-bold rounded-full mb-3">
                                                {edu.period}
                                            </span>
                                            <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                                            <p className="text-gray-400 text-sm mb-2">{edu.institution}</p>
                                            <p className="text-2xl font-bold text-white tracking-wide border-t border-gray-800 pt-2 w-full">
                                                {edu.score}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </SectionWrapper>
    );
};

export default Certifications;
