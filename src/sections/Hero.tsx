import { useState, useEffect } from 'react';
import { resumeData } from '../data/resume';
import SectionWrapper from '../components/SectionWrapper';
import profileImage from '../assets/profile.jpg';

const roles = ["Data Scientist", "Data Analyst", "AI Enthusiast", "Problem Solver"];

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
                setTimeout(() => setIsDeleting(true), 2000); // Pause at end
            } else if (isDeleting && displayedText === "") {
                setIsDeleting(false);
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
        };

        const timer = setTimeout(handleType, isDeleting ? 50 : 150);
        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, currentRoleIndex]);

    return (
        <SectionWrapper id="home" className="min-h-screen flex items-center justify-center pt-40 md:pt-28">
            <div className="flex flex-col md:flex-row items-center justify-between w-full gap-12">
                {/* Text Content */}
                <div className="flex-1 text-center md:text-left space-y-6">
                    <h2 className="text-2xl md:text-3xl font-medium text-cyan-400">Hello, It's Me</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        {resumeData.name}
                    </h1>
                    <h3 className="text-2xl md:text-3xl text-gray-300 min-h-[40px]">
                        And I'm a <span className="text-cyan-400 font-semibold">{displayedText}</span>
                        <span className="animate-pulse text-white">|</span>
                    </h3>
                    <p className="text-gray-400 max-w-lg mx-auto md:mx-0 leading-relaxed text-lg">
                        {resumeData.about.split('.')[0]}.
                    </p>

                    <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
                        {resumeData.social.map((social) => (
                            <a
                                key={social.name}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 border-2 border-cyan-400 rounded-full text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
                            >
                                <social.icon size={24} />
                            </a>
                        ))}
                    </div>

                    <div className="pt-6">
                        <a
                            href="#about"
                            className="inline-block px-8 py-3 bg-cyan-400 text-black font-bold rounded-full shadow-[0_0_15px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            More About Me
                        </a>
                    </div>
                </div>

                {/* Profile Image / Glow Effect */}
                <div className="flex-1 flex justify-center items-center relative">
                    <div className="relative w-72 h-72 md:w-96 md:h-96">
                        {/* Glowing Circles */}
                        <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 blur-md animate-pulse"></div>
                        <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/20 blur-xl"></div>

                        {/* Main Image Container */}
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_50px_rgba(34,211,238,0.4)] flex justify-center items-center bg-[#1f242d]">
                            <img
                                src={profileImage}
                                alt={resumeData.name}
                                className="w-[90%] h-[90%] rounded-full object-cover object-top hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Hero;
