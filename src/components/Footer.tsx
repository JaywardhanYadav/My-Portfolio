import { resumeData } from '../data/resume';

const Footer = () => {
    return (
        <footer className="bg-[#1f242d] py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                    <p className="text-gray-400">
                        &copy; {new Date().getFullYear()} <span className="text-white font-bold">{resumeData.name}</span>. All Rights Reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {resumeData.social.map((social) => (
                        <a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        >
                            <social.icon size={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
