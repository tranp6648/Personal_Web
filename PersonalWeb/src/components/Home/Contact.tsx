import { FaDev, FaEnvelope, FaGithub, FaLinkedin, FaMapMarked, FaMapMarkedAlt, FaPaperPlane, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
    return (
        <section className="py-16 bg-gray-900/50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto px-5 lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold inline-block relative text-white mb-1">
                        Get in
                        <span className="text-green-400">  Touch</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Have a project in mind or simply want to discuss ideas?
                        I'm open to collaboration and always excited to take on new challenges.
                        Feel free to reach out — let’s make things happen!
                    </p>
                </div>
                <div className="relative bg-gray-950 p-8 rounded-lg border border-gray-800 shadow-lg overflow-hidden opacity-0 animate-fadeInUp delay-100">
                    <div className="absolute bottom-20 right-20 size-56 bg-gray-800/20 border-2 border-gray-700 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 opacity-[.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D'60'%20height%3D'60'%20viewBox%3D'0%200%2060%2060'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Crect%20width%3D'60'%20height%3D'60'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'40'%20height%3D'40'%20x%3D'10'%20y%3D'10'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'20'%20height%3D'20'%20x%3D'20'%20y%3D'20'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3C%2Fsvg%3E")`,
                                backgroundRepeat: 'repeat'
                            }}
                        ></div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
                        <div className="relative">
                            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                <FaEnvelope className="text-green-400 animate-glowEffect" />
                                Send a Message
                            </h3>
                            <form className="space-y-8">
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Name</label>
                                    <input type="text" placeholder="Your Name" className="w-full uajskeiolksb py-3 px-5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Email</label>
                                    <input type="email" placeholder="Your Email" className="w-full uajskeiolksb py-3 px-5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors" />
                                </div>
                                <div>
                                    <label className="block text-gray-300 mb-2 font-medium">Message</label>
                                    <textarea rows={5} placeholder="Your Message" className="w-full uajskeiolksb py-3 px-5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors" />
                                </div>
                                <button type="submit" className="w-full px-5 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors flex justify-center gap-2">
                                    <FaPaperPlane />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>
                        <div className="space-y-8">
                            <div className="relative">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    Contact Info
                                </h3>
                                <ul className="space-y-4 text-gray-300">
                                    <li className="flex items-center gap-3">
                                        <FaEnvelope className="text-green-400" />
                                        <a className="hover:text-green-400 transition-colors">
                                            tranp6648@gmail.com
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaPhone className="text-green-400" />
                                        <a className="hover:text-green-400 transition-colors">
                                            0924517309
                                        </a>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <FaMapMarkedAlt className="text-green-400" />
                                        <a className="hover:text-green-400 transition-colors">
                                            Ho Chi Minh,VN
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="relative">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                    Connect with Me
                                </h3>
                                <div className="flex gap-5">
                                    <a className="text-gray-300 hover:text-green-400 text-2xl transition-colors transform hover:scale-110">
                                        <FaGithub />
                                    </a>
                                    <a className="text-gray-300 hover:text-green-400 text-2xl transition-colors transform hover:scale-110">
                                        <FaLinkedin />
                                    </a>
                                    <a className="text-gray-300 hover:text-green-400 text-2xl transition-colors transform hover:scale-110">
                                        <FaTwitter />
                                    </a>
                                    <a className="text-gray-300 hover:text-green-400 text-2xl transition-colors transform hover:scale-110">
                                        <FaDev />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-20 right-2 sm:right-[32vh] w-12 h-16 animate-fadeInUp delay-[100ms]">
                        <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
                        <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
                        <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
                            <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
                        </div>
                        <div className="absolute w-6 h-1 bg-white/20 rounded left-3 top-3"></div>
                        <div className="absolute w-1.5 h-4 bg-white/30 left-4 top-[0.5rem] rounded animate-floatOut delay-[0s]"></div>
                        <div className="absolute w-1.5 h-4 bg-white/30 left-6 top-4 rounded animate-floatOut delay-[0.5s]"></div>
                        <div className="absolute w-1.5 h-4 bg-white/30 left-8 top-3 rounded animate-floatOut delay-[1s]"></div>
                        <div className="absolute left-2 bottom-3 text-[8px] tracking-widest">COFFEE</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Contact;