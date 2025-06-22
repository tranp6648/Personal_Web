import React from "react"
import { FaExternalLinkAlt, FaGithub, FaShoppingCart, FaTasks, FaUser } from "react-icons/fa"
const LatestProject = () => {
    return (
        <section className="py-20 bg-gray-900/50 relative overflow-hidden">
            <div className="max-w-6xl mx-auto lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold inline-block relative text-white mb-1">
                        Latest
                        <span className="text-green-400">   Projects</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        A collection of my recent work, showcasing innovative solutions and clean code. Click to explore details.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 opacity-0 animate-fadeInUp delay-100">

                        <a>
                            <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/project1.jpg" className="w-full h-48 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <FaTasks className="text-green-400 animate-glowEffect" />
                                Taskify App
                            </h3>
                            <p className="text-gray-300 mb-4">A task management app with real-time collaboration, built using React, Node.js, and MongoDB.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">React</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">Node.js</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">MongoDB</span>
                            </div>
                            <div className="flex gap-4">
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaGithub className="text-xl" />
                                </a>
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaExternalLinkAlt className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 opacity-0 animate-fadeInUp delay-100">

                        <a>
                            <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/project2.jpg" className="w-full h-48 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <FaShoppingCart className="text-green-400 animate-glowEffect" />
                                E-Shop Platform
                            </h3>
                            <p className="text-gray-300 mb-4">A scalable e-commerce platform with Next.js, Stripe payments, and TailwindCSS.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">Next.js</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">Stripe</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">TailwindCSS</span>
                            </div>
                            <div className="flex gap-4">
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaGithub className="text-xl" />
                                </a>
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaExternalLinkAlt className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-950 rounded-lg overflow-hidden border border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 opacity-0 animate-fadeInUp delay-100">

                        <a>
                            <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/project3.jpg" className="w-full h-48 object-cover" />
                        </a>
                        <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                                <FaUser className="text-green-400 animate-glowEffect" />
                                Portfolio Site
                            </h3>
                            <p className="text-gray-300 mb-4">My personal portfolio showcasing my work, built with HTML, TailwindCSS, and Alpine.js.</p>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">Next.js</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">Stripe</span>
                                <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">TailwindCSS</span>
                            </div>
                            <div className="flex gap-4">
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaGithub className="text-xl" />
                                </a>
                                <a className="text-gray-400 hover:text-green-400 transition-colors">
                                    <FaExternalLinkAlt className="text-xl" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default LatestProject