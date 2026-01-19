import { MapPin, Send } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
// import { resumeData } from '../data/resume'; // Might be unused if we remove email display

const Contact = () => {
    return (
        <SectionWrapper id="contact" className="pb-32">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
                Contact <span className="text-cyan-400">Me</span>
            </h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Contact Info */}
                <div className="flex-1 space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Let's Work Together</h3>
                    <p className="text-gray-400 leading-relaxed mb-8">
                        I am available for freelance work and full-time opportunities.
                        Please use the form to send me a secure message.
                    </p>

                    <div className="space-y-6">
                        {/* Location Only - Email and Phone Removed */}
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-cyan-400/10 rounded-full flex items-center justify-center text-cyan-400">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-sm text-gray-400">Location</p>
                                <p className="text-white">Pune, Maharashtra, India</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 bg-[#242424] p-8 rounded-2xl shadow-lg border border-gray-800">
                    <form
                        className="space-y-6"
                        action="https://api.web3forms.com/submit"
                        method="POST"
                    >
                        {/* Access Key - REPLACE THIS WITH YOUR KEY */}
                        <input type="hidden" name="access_key" value="d029973a-20fa-4826-a48c-c7312181bebd" />
                        <input type="hidden" name="from_name" value="My First Form" />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                name="first_name"
                                type="text"
                                placeholder="First Name"
                                required
                                className="w-full bg-[#1f242d] text-white p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                            <input
                                name="last_name"
                                type="text"
                                placeholder="Last Name"
                                required
                                className="w-full bg-[#1f242d] text-white p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                            />
                        </div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email Address"
                            required
                            className="w-full bg-[#1f242d] text-white p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                        <input
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            required
                            className="w-full bg-[#1f242d] text-white p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors"
                        />
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            required
                            className="w-full bg-[#1f242d] text-white p-3 rounded-lg border border-gray-700 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                        ></textarea>

                        <button type="submit" className="w-full bg-cyan-400 text-black font-bold py-3 rounded-lg hover:bg-cyan-300 transition-colors flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Contact;
