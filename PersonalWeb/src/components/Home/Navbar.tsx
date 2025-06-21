import React from "react"
const NavBar = () => {
    const menuItems = ["About", "Projects", "Blogs", "Reviews", "Contact"];
    return (
        <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
            <nav className=" max-w-6xl mx-auto text-white px-6 py-4 flex justify-between items-center">
                <div className="max-w-6xl flex items-center space-x-2">
                    <span className="text-green-400 text-xl">
                        &lt;/&gt;
                    </span>
                    <span className="font-bold text-lg">Trần Nguyễn Thanh Phong</span>
                </div>
                <ul className="flex space-x-8 text-gray-300">
                    {menuItems.map((item, idx) => (
                        <li key={idx} className="relative group cursor-pointer hover:text-green-400">
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>

    )
}
export default NavBar;