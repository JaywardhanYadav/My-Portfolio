import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { resumeData } from '../data/resume';

const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300 ${
                scrolled
                    ? 'bg-[#181d24]/90 backdrop-blur-md border-b border-gray-800 shadow-xl py-2.5'
                    : 'bg-transparent py-4'
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                        <a href="#home" className="text-xl md:text-2xl font-black text-white tracking-wider flex items-center gap-1 group">
                            <span>Jaywardhan</span>
                            <span className="text-cyan-400 group-hover:animate-pulse">.ai</span>
                        </a>

                        {/* Quick Email, LinkedIn, GitHub & Resume Icons */}
                        <div className="flex items-center gap-1 sm:gap-1.5 pl-2 sm:pl-3 border-l border-gray-700/80">
                            {resumeData.social.map((item) => {
                                const isResume = item.name === 'Resume';
                                return (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download={isResume ? "Jaywardhan_Yadav_Resume.pdf" : undefined}
                                        title={item.name}
                                        aria-label={item.name}
                                        className="p-1.5 sm:p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-lg transition-all duration-200"
                                    >
                                        <item.icon size={17} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-6">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-300 hover:text-cyan-400 px-2 py-1 text-sm font-medium transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        <a
                            href={resumeData.resumePdf}
                            download="Jaywardhan_Yadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-400/10 hover:bg-cyan-400 text-cyan-300 hover:text-black border border-cyan-400/40 text-xs font-bold transition-all duration-300 shadow-sm"
                        >
                            <Download size={14} />
                            <span>Resume</span>
                        </a>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none p-2 rounded-lg bg-[#242a35]"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-[#181d24] border-b border-gray-800 shadow-2xl animate-in slide-in-from-top-2 duration-200">
                    <div className="px-4 pt-3 pb-5 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-lg text-base font-medium hover:bg-gray-800/60"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <a
                                href={resumeData.resumePdf}
                                download="Jaywardhan_Yadav_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-cyan-400 text-black font-bold text-sm shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                <Download size={16} />
                                <span>Download Resume (PDF)</span>
                            </a>
                        </div>

                        {/* Mobile Social Icons Grid */}
                        <div className="pt-3 mt-2 border-t border-gray-800 grid grid-cols-4 gap-2 text-center">
                            {resumeData.social.map((item) => {
                                const isResume = item.name === 'Resume';
                                return (
                                    <a
                                        key={item.name}
                                        href={item.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        download={isResume ? "Jaywardhan_Yadav_Resume.pdf" : undefined}
                                        title={item.name}
                                        className="flex flex-col items-center justify-center py-2 px-1 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors text-xs"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <item.icon size={18} />
                                        <span className="text-[10px] mt-1">{item.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
