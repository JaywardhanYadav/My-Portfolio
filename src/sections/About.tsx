import { GraduationCap, Brain, Database, LineChart } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';

const About = () => {
    return (
        <SectionWrapper id="about" className="bg-[#242424]/50">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                About <span className="text-cyan-400">Me</span>
            </h2>

            <div className="flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Column: Text Content */}
                <div className="flex-1 space-y-8 text-center lg:text-left">
                    <h3 className="text-3xl font-bold text-white leading-tight">
                        Transforming Data into <span className="text-cyan-400">Actionable Insights</span>
                    </h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I am a <strong className="text-white">Data Science postgraduate</strong> with a deep passion for uncovering hidden patterns in complex datasets. My expertise lies in bridging the gap between raw data and strategic decision-making through <strong className="text-cyan-400">Machine Learning</strong>, <strong className="text-cyan-400">NLP</strong>, and <strong className="text-cyan-400">Business Intelligence</strong>.
                    </p>
                    <p className="text-gray-300 leading-relaxed text-lg">
                        I thrive on solving real-world challenges, building intelligent systems that learn and adapt. Whether it's crafting sophisticated <strong className="text-white">AI models</strong> or designing intuitive <strong className="text-white">dashboards</strong>, my goal is to drive innovation through data.
                    </p>

                    <div className="pt-4">
                        <a
                            href="#contact"
                            className="inline-block px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
                        >
                            Let's Collaborate
                        </a>
                    </div>
                </div>

                {/* Right Column: Feature Grid (Replacing Photo) */}
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <GraduationCap className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-2">Education</h4>
                        <p className="text-gray-400 text-sm">M.Sc Data Science (CGPA 9.73)<br />Dr D Y Patil College</p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <Brain className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-2">AI & Machine Learning</h4>
                        <p className="text-gray-400 text-sm">Building predictive models and intelligent agents using LLMs & NLP.</p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <Database className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-2">Data Analytics</h4>
                        <p className="text-gray-400 text-sm">Expert in raw data processing, EDA, and statistical analysis.</p>
                    </div>

                    <div className="bg-[#1f242d] p-6 rounded-2xl border border-gray-800 hover:border-cyan-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg group">
                        <LineChart className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform" size={40} />
                        <h4 className="text-xl font-bold text-white mb-2">Visualization</h4>
                        <p className="text-gray-400 text-sm">Crafting compelling data stories with Power BI and Tableau.</p>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
