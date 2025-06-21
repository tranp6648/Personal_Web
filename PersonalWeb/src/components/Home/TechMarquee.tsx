import Marquee from "react-fast-marquee";
import {
    FaReact,
    FaNodeJs,
    FaPython,
    FaHtml5,
    FaCss3Alt,
    FaSass,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaBootstrap,
    FaVuejs,
    FaAngular,
    FaDatabase,
    FaJava,
} from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
const icons = [
    { icon: <FaJava className="text-red-400" />, name: 'Java' },
    { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
    { icon: <FaPython className="text-blue-400" />, name: "Python" },
    { icon: <FaHtml5 className="text-orange-500" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-blue-500" />, name: "CSS3" },
    { icon: <FaSass className="text-pink-400" />, name: "SASS" },
    { icon: <FaGitAlt className="text-orange-600" />, name: "Git" },
    { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
    { icon: <FaAws className="text-orange-400" />, name: "AWS" },
    { icon: <FaBootstrap className="text-blue-500" />, name: "Bootstrap" },
    { icon: <FaVuejs className="text-green-400" />, name: "Vue.js" },
    { icon: <FaAngular className="text-red-500" />, name: "Angular" },
    { icon: <FaDatabase className="text-blue-600" />, name: "PostgreSQL" },
    { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },

]
const TechMarquee = () => {
    return (
        <div className="w-full overflow-hidden bg-[#0d1117] py-4">
            <Marquee gradient={false} speed={50}>
                {icons.map((item, index) => (
                    <div key={index} className="flex items-center space-x-1 mx-4">
                        {item.icon}
                        <span className="text-sm text-gray-300 hidden sm:inline">{item.name}</span>
                    </div>
                ))}
            </Marquee>
        </div>
    );
}
export default TechMarquee;