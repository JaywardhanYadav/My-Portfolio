import { MapPin, Mail, Phone, Send, Github, Linkedin, FileText } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { resumeData } from '../data/resume';

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="pb-32">
            <div className="text-center mb-16">
                <span className="text-cyan-400 font-semibold text-sm tracking-wider uppercase">Get In Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mt-2">
                    Contact <span className="text-cyan-400">Me</span>
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto mt-3 text-sm md:text-base">
                    Interested in collaborating on Agentic AI, RAG systems, or hiring for AI/ML engineering roles? Let's connect!
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
                {/* Contact Info Side */}
                <div className="flex-1 space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-3">Let's Build Something Exceptional</h3>
                        <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                            I am currently open to full-time AI/ML Engineer opportunities, research collaborations, and innovative GenAI consulting projects. Feel free to reach out directly through email, phone, or LinkedIn.
                        </p>
                    </div>

                    <div className="space-y-5">
                        {/* Email */}
                        <a
                            href={`mailto:${resumeData.contactDetails.email}`}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-[#1f242d] border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-x-1 group"
                        >
                            <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors shrink-0">
                                <Mail size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Direct Email</p>
                                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                                    {resumeData.contactDetails.email}
                                </p>
                            </div>
                        </a>

                        {/* Phone */}
                        <a
                            href={`tel:${resumeData.contactDetails.phone.replace(/\s+/g, '')}`}
                            className="flex items-center gap-4 p-4 rounded-2xl bg-[#1f242d] border border-gray-800 hover:border-cyan-400/60 transition-all duration-300 hover:-translate-x-1 group"
                        >
                            <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-colors shrink-0">
                                <Phone size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Phone / WhatsApp</p>
                                <p className="text-white font-semibold text-sm sm:text-base group-hover:text-cyan-300 transition-colors">
                                    {resumeData.contactDetails.phone}
                                </p>
                            </div>
                        </a>

                        {/* Location */}
                        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[#1f242d] border border-gray-800">
                            <div className="w-12 h-12 bg-cyan-400/10 rounded-xl flex items-center justify-center text-cyan-400 shrink-0">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-medium">Location</p>
                                <p className="text-white font-semibold text-sm sm:text-base">
                                    {resumeData.contactDetails.location}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Connect Buttons */}
                    <div className="pt-2 flex flex-wrap gap-3">
                        <a
                            href={resumeData.social.find(s => s.name === 'LinkedIn')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1f242d] hover:bg-[#28303d] text-gray-200 hover:text-cyan-300 border border-gray-700/80 rounded-xl text-sm font-medium transition-colors"
                        >
                            <Linkedin size={18} className="text-blue-400" />
                            <span>LinkedIn Profile</span>
                        </a>

                        <a
                            href={resumeData.social.find(s => s.name === 'GitHub')?.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1f242d] hover:bg-[#28303d] text-gray-200 hover:text-cyan-300 border border-gray-700/80 rounded-xl text-sm font-medium transition-colors"
                        >
                            <Github size={18} />
                            <span>GitHub Profile</span>
                        </a>

                        <a
                            href={resumeData.resumePdf}
                            download="Jaywardhan_Yadav_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2.5 bg-cyan-950/60 hover:bg-cyan-900/60 text-cyan-300 border border-cyan-500/40 rounded-xl text-sm font-medium transition-colors"
                        >
                            <FileText size={18} />
                            <span>Resume PDF</span>
                        </a>
                    </div>
                </div>

                {/* Interactive Contact Form */}
                <div className="flex-1 bg-gradient-to-br from-[#1f242d] to-[#181d24] p-8 sm:p-10 rounded-3xl shadow-2xl border border-gray-800">
                    <h4 className="text-xl font-bold text-white mb-2">Send a Direct Message</h4>
                    <p className="text-gray-400 text-sm mb-6">Leave your message below and I will respond promptly.</p>

                    <form
                        className="space-y-5"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        <input type="hidden" name="access_key" value="d029973a-20fa-4826-a48c-c7312181bebd" />
                        <input type="hidden" name="from_name" value="Jaywardhan Portfolio Contact" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">First Name</label>
                                <input
                                    name="first_name"
                                    type="text"
                                    placeholder="John"
                                    required
                                    className="w-full bg-[#161a20] text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-medium text-gray-400 mb-1.5">Last Name</label>
                                <input
                                    name="last_name"
                                    type="text"
                                    placeholder="Doe"
                                    required
                                    className="w-full bg-[#161a20] text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Your Email</label>
                            <input
                                name="email"
                                type="email"
                                placeholder="john.doe@company.com"
                                required
                                className="w-full bg-[#161a20] text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Subject</label>
                            <input
                                name="subject"
                                type="text"
                                placeholder="AI/ML Opportunity / Project Inquiry"
                                required
                                className="w-full bg-[#161a20] text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors text-sm"
                            />
                        </div>

                        <div>
                            <label className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                            <textarea
                                name="message"
                                rows={4}
                                placeholder="Tell me about your project or role..."
                                required
                                className="w-full bg-[#161a20] text-white px-4 py-3 rounded-xl border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors resize-none text-sm"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-black font-bold py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:-translate-y-0.5"
                        >
                            <span>Send Message</span>
                            <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
