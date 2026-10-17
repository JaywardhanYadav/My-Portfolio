import { useState, useEffect } from 'react';
import { resumeData } from '../data/resume';
import SectionWrapper from '../components/SectionWrapper';
import profileImage from '../assets/profile.jpg';
import { Download, ArrowRight, Sparkles } from 'lucide-react';

const roles = [
    "AI/ML Engineer",
    "Data Scientist",
    "Generative AI Engineer",
    "Agentic AI & RAG Architect",
    "MLOps Engineer"
];

const Hero = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const handleType = () => {
            const currentRole = roles[currentRoleIndex];

            if (isDeleting) {
                setDisplayedText(currentRole.substring(0, displayedText.length - 1));
            } else {
                setDisplayedText(currentRole.substring(0, displayedText.length + 1));
            }

            if (!isDeleting && displayedText === currentRole) {
                setTimeout(() => setIsDeleting(true), 1800); // Pause at end
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? 40 : 110);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-32 md:pt-24 pb-16">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 lg:gap-16">
                {/* Text Content */}
                <div className="flex-1 text-center lg:text-left space-y-6">
                    {/* Status Pill */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-medium shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                        </span>
                        <span>Open to AI/ML & Generative AI Opportunities</span>
                    </div>

                    <div>
                        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 tracking-wide">
                            Hello, This is
                        </h2>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mt-1">
                            {resumeData.name}
                        </h1>
                    </div>

                    <div className="text-2xl sm:text-3xl font-medium text-gray-200 min-h-[44px] flex items-center justify-center lg:justify-start">
                        <span>I'm {/^[aeiou]/i.test(displayedText || roles[currentRoleIndex]) ? 'an' : 'a'}{' '}</span>
                        <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-400 font-bold">
                            {displayedText}
                        </span>
                        <span className="animate-pulse text-cyan-400 font-light ml-1">|</span>
                    </div>

                    {/* Summary Paragraph */}
                    <p className="text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg">
                        {resumeData.summary}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-full shadow-[0_0_20px_rgba(34,211,238,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.7)] transition-all duration-300 transform hover:-translate-y-0.5"
                        >
                            <span>Explore Projects</span>
                            <ArrowRight size={18} />
                        </a>

                        <a
                            href={resumeData.resumePdf}
                            download="Jaywardhan_Yadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3.5 border-2 border-cyan-400/80 text-cyan-300 hover:text-black hover:bg-cyan-400 font-semibold rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(34,211,238,0.2)] hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transform hover:-translate-y-0.5"
                        >
                            <Download size={18} />
                            <span>Download Resume</span>
                        </a>

                        <a
                            href="#certifications"
                            className="inline-flex items-center gap-1.5 px-5 py-3.5 bg-[#242a35] hover:bg-[#2d3544] text-gray-300 hover:text-white rounded-full transition-colors text-sm font-medium border border-gray-700/60"
                        >
                            <Sparkles size={16} className="text-yellow-400" />
                            <span>Certifications</span>
                        </a>
                    </div>
                </div>

                {/* Profile Image (Slightly Above) with Interactive Social Dock Below */}
                <div className="flex-1 flex flex-col items-center justify-center relative -translate-y-3 lg:-translate-y-6">
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                        {/* Glowing Ambient Circles */}
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/25 blur-md animate-pulse"></div>
                        <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/15 blur-xl"></div>
                        <div className="absolute -inset-8 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400/90 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex justify-center items-center bg-[#1f242d]">
                            <img
                                src={profileImage}
                                alt={resumeData.name}
                                className="w-full h-full rounded-full object-cover object-top hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Attractive & Interactive Icons Dock Below Photo */}
                    <div className="mt-8 flex items-center gap-3 sm:gap-4 bg-[#181d24]/90 backdrop-blur-xl border border-cyan-400/40 px-5 py-3 rounded-2xl shadow-[0_10px_35px_rgba(0,0,0,0.6),0_0_25px_rgba(34,211,238,0.25)] hover:border-cyan-400 transition-all duration-300">
                        {resumeData.social.map((social) => {
                            const isResume = social.name === 'Resume';
                            return (
                                <a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    download={isResume ? "Jaywardhan_Yadav_Resume.pdf" : undefined}
                                    title={isResume ? "Download Resume (PDF)" : social.name}
                                    aria-label={social.name}
                                    className="group relative p-3 rounded-xl bg-[#1f242d] text-gray-300 hover:text-cyan-300 hover:bg-cyan-400/20 border border-gray-700/80 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-[0_0_15px_rgba(34,211,238,0.6)] flex items-center justify-center"
                                >
                                    <social.icon size={22} className="transition-transform duration-300 group-hover:scale-110" />

                                    {/* Tooltip on Hover */}
                                    <span className="absolute -top-9 px-2.5 py-1 bg-[#101419] border border-cyan-400/50 text-cyan-300 text-xs font-semibold rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-lg">
                                        {social.name}
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
