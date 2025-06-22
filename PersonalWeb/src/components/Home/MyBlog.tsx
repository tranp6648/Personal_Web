import { FaArrowRight, FaBookOpen, FaCalendarAlt } from "react-icons/fa";

const MyBlog = () => {
    return (
        <section className="py-20 bg-[#010409] border-y border-gray-800 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[.05]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg%20width%3D'60'%20height%3D'60'%20viewBox%3D'0%200%2060%2060'%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%3E%3Crect%20width%3D'60'%20height%3D'60'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'40'%20height%3D'40'%20x%3D'10'%20y%3D'10'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3Crect%20width%3D'20'%20height%3D'20'%20x%3D'20'%20y%3D'20'%20fill%3D'none'%20stroke%3D'%23ffffff'%20stroke-opacity%3D'0.96'%20stroke-width%3D'1'%2F%3E%3C%2Fsvg%3E")`,
                    backgroundRepeat: 'repeat'
                }}
            ></div>
            <div className="max-w-6xl mx-auto lg:px-12 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold inline-block relative text-white mb-1">
                        My
                        <span className="text-green-400">  Blog</span>
                        <div className="absolute -bottom-2 left-0 w-full h-1 bg-green-500 opacity-70"></div>
                    </h2>
                    <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
                        Dive into my thoughts on coding, tech trends, and developer life. Explore my latest posts below.
                    </p>
                </div>
                <div className="flex flex-col gap-12">
                    <div className="space-y-8">
                        <article className="bg-gray-950 rounded-lg border cursor-pointer border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 flex flex-col md:flex-row overflow-hidden opacity-0 animate-fadeInUp delay-100">
                            <div className="md:w-1/3">
                                <a>
                                    <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/blog1.jpg" className="w-full h-48 md:h-full object-cover" />
                                </a>
                            </div>
                            <div className="p-6 md:w-2/3 flex justify-between flex-col">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        <a className="hover:text-green-400 transition-colors">Mastering React Hooks: A Deep Dive</a>

                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-3">Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">React</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">JavaScript</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">FrontEnd</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <FaCalendarAlt />
                                            <span>May 10, 2025</span>
                                        </div>
                                        <a className="text-green-400 hover:text-green-600 font-medium flex items-center gap-2">
                                            Read More
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="bg-gray-950 rounded-lg border cursor-pointer border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 flex flex-col md:flex-row overflow-hidden opacity-0 animate-fadeInUp delay-100">
                            <div className="md:w-1/3">
                                <a>
                                    <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/blog1.jpg" className="w-full h-48 md:h-full object-cover" />
                                </a>
                            </div>
                            <div className="p-6 md:w-2/3 flex justify-between flex-col">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        <a className="hover:text-green-400 transition-colors">Mastering React Hooks: A Deep Dive</a>

                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-3">Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">React</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">JavaScript</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">FrontEnd</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <FaCalendarAlt />
                                            <span>May 10, 2025</span>
                                        </div>
                                        <a className="text-green-400 hover:text-green-600 font-medium flex items-center gap-2">
                                            Read More
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article className="bg-gray-950 rounded-lg border cursor-pointer border-gray-800 shadow-lg hover:shadow-xl transition-shadow transform hover:!-translate-y-1 flex flex-col md:flex-row overflow-hidden opacity-0 animate-fadeInUp delay-100">
                            <div className="md:w-1/3">
                                <a>
                                    <img src="https://portfolio.tailwindtemplate.net/devpro/src/img/blog1.jpg" className="w-full h-48 md:h-full object-cover" />
                                </a>
                            </div>
                            <div className="p-6 md:w-2/3 flex justify-between flex-col">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        <a className="hover:text-green-400 transition-colors">Mastering React Hooks: A Deep Dive</a>

                                    </h3>
                                    <p className="text-gray-300 mb-4 line-clamp-3">Explore the power of React Hooks to manage state and side effects in functional components, with practical examples and best practices.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">React</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">JavaScript</span>
                                        <span className="px-2 py-1 bg-gray-700/20 text-gray-300 rounded-lg text-sm">FrontEnd</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="text-gray-400 text-sm flex items-center gap-2">
                                            <FaCalendarAlt />
                                            <span>May 10, 2025</span>
                                        </div>
                                        <a className="text-green-400 hover:text-green-600 font-medium flex items-center gap-2">
                                            Read More
                                            <FaArrowRight />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="text-center cursor-pointer">
                        <a className="px-12 py-3 bg-green-500 text-gray-900 font-bold rounded-lg hover:bg-green-600 transition-colors inline-flex items-center gap-2">
                            <FaBookOpen/>
                            View All Posts
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MyBlog;