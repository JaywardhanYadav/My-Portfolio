import { MapPin, Mail, Github, Linkedin, FileText } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="text-center mb-12">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
                    Interested in collaborating on Agentic AI, RAG systems, or hiring for AI/ML engineering roles? Let's connect!
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-[#1f242d]/90 to-[#14181f]/90 p-8 sm:p-12 rounded-3xl border border-gray-800 shadow-2xl backdrop-blur-md text-center">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Let's Build Something <span className="text-cyan-400">Exceptional</span>
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm sm:text-base max-w-xl mx-auto mb-8">
                    I am actively seeking full-time AI/ML Engineer opportunities and innovative GenAI collaborations. Feel free to reach out directly via email or connect on LinkedIn.
                </p>

                {/* Direct Contact Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-left">
                    {/* Email Card */}
                    <a
                        href={`mailto:${resumeData.contactDetails.email}`}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-[#161a20] border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1 group"
                    >
                        <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors shrink-0">
                            <Mail size={22} />
                        </div>
                        <div className="min-w-0">
                            <p className="text-xs text-gray-400 font-medium">Direct Email</p>
                            <p className="text-white font-semibold text-sm truncate group-hover:text-cyan-300 transition-colors">
                                {resumeData.contactDetails.email}
                            </p>
                        </div>
                    </a>

                    {/* Location Card */}
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#161a20] border border-gray-800">
                        <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                            <MapPin size={22} />
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-medium">Location</p>
                            <p className="text-white font-semibold text-sm">
                                {resumeData.contactDetails.location}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick Connect Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-gray-800/80">
                    <a
                        href={`mailto:${resumeData.contactDetails.email}`}
                        className="inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-semibold rounded-xl text-sm transition-all shadow-[0_0_20px_rgba(34,211,238,0.25)] hover:shadow-[0_0_28px_rgba(34,211,238,0.4)] transform hover:-translate-y-0.5"
                    >
                        <Mail size={18} />
                        <span>Email Me Directly</span>
                    </a>

                    <a
                        href={resumeData.social.find(s => s.name === 'LinkedIn')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#161a20] hover:bg-[#202632] text-gray-200 hover:text-cyan-300 border border-gray-700/80 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-0.5"
                    >
                        <Linkedin size={18} className="text-blue-400" />
                        <span>LinkedIn Profile</span>
                    </a>

                    <a
                        href={resumeData.social.find(s => s.name === 'GitHub')?.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-[#161a20] hover:bg-[#202632] text-gray-200 hover:text-cyan-300 border border-gray-700/80 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-0.5"
                    >
                        <Github size={18} />
                        <span>GitHub Profile</span>
                    </a>

                    <a
                        href={resumeData.resumePdf}
                        download="Jaywardhan_Yadav_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/40 rounded-xl text-sm font-medium transition-all transform hover:-translate-y-0.5"
                    >
                        <FileText size={18} />
                        <span>Download Resume</span>
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
