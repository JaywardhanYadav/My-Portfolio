import { resumeData } from '../data/resume';
import { Download } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#161a20] py-10 border-t border-gray-800/80">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-white font-bold text-lg tracking-wide flex items-center justify-center md:justify-start gap-1">
                        <span>{resumeData.name}</span>
                        <span className="text-cyan-400">·</span>
                        <span className="text-gray-400 font-normal text-sm">AI/ML Engineer</span>
                    </p>
                    <p className="text-gray-400 text-xs mt-1">
                        &copy; {new Date().getFullYear()} {resumeData.name}. All Rights Reserved.
                    </p>
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={resumeData.resumePdf}
                        download="Jaywardhan_Yadav_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#242a35] hover:bg-cyan-400 hover:text-black text-cyan-300 text-xs font-semibold border border-cyan-400/30 transition-all"
                    >
                        <Download size={13} />
                        <span>Resume (PDF)</span>
                    </a>

                    {resumeData.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/80 rounded-lg transition-colors duration-200"
                            title={social.name}
                        >
                            <social.icon size={18} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
