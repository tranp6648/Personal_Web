import { FaBook, FaCode, FaCoffee, FaDev, FaDollarSign, FaEnvelope, FaGithub, FaHeart, FaLink, FaLinkedin, FaPaperPlane, FaTwitter, FaUser } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-[#010409] py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D'60'%20height%3D'60'%20viewBox%3D'0%200%2060%2060'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Crect%20width%3D'60'%20height%3D'60'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'40'%20height%3D'40'%20x%3D'10'%20y%3D'10'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'20'%20height%3D'20'%20x%3D'20'%20y%3D'20'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3C%2Fsvg%3E")`,
                backgroundRepeat: 'repeat'
            }}></div>
            <div className="max-w-6xl mx-auto px-4 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="space-y-6 md:col-span-2">
                        <h3 className="flex items-center gap-3">
                            <FaCode className="text-green-400 text-3xl animate-glowEffect" />
                            <span className="text-2xl font-bold text-white">Trần Nguyễn Thanh Phong</span>
                        </h3>
                        <p className="text-gray-300 leading-relaxed pe-6 lg:pe-16">
                            Building the future with clean code, creativity, and a passion for innovation.
                        </p>
                        <div className="flex gap-5">
                            <a className="text-gray-300 hover:text-green-400 text-xl transition-colors transform hover:scale-110">
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
                    <div>
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FaLink className="text-green-400"/>
                            Quick Links
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaUser className="text-sm"/>
                                    About
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaCode className="text-sm"/>
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaGear className="text-sm"/>
                                    Services
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaDollarSign className="text-sm"/>
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaBook className="text-sm"/>
                                    Blogs
                                </a>
                            </li>
                            <li>
                                <a className="text-gray-300 hover:text-green-400 transition-colors flex items-center gap-2">
                                    <FaEnvelope className="text-sm"/>
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <FaEnvelope className="text-green-400"/>
                           Newsletter
                        </h3>
                        <p className="text-gray-300 mb-4">
                        Stay updated with my latest projects and tech insights.
                        </p>
                        <form className="space-y-3">
                            <input type="email" placeholder="Enter Your Email" className="w-full uajskeiolksb py-3 px-5 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 focus:outline-none focus:border-green-400 transition-colors"/>
                            <button type="submit" className="w-full px-5 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors flex justify-center gap-2">
                            <FaPaperPlane />
                                <span>Subscribe</span>
                            </button>
                        </form>
                    </div>
                </div>
              
            </div>
        </footer>
    )
}
export default Footer;