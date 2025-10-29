import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
export default function Footer() {
    return(
       <footer className="bg-white dark:bg-gray-900 py-12 px-4 border-t dark;border-gray-700">
        <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 mb-8">
                <div className=" space-y-6">
                    <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold text-teal-500 leading-tight">
                        <span className="block">Let’s build a world where every mind can</span>
                        <span className="block">dream as freely as the ocean itself.</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Start by{" "}
                        <span className="text-orange-500 font-semibold">
                            Ciao
                            </span>
                            </p>
                            <div className="flex space-x-4 mt-4">
                                <a href="mailto:1032230444@tcetmumbai.in" className="text-red-500 hover:text-red-400 text-2xl">
                                <FaEnvelope />
                                </a>
                                <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-500 text-2xl">
                                <FaGithub />
                                </a>
                                <a href="https://www.linkedin.com/" target="_blank" rel ="noopener noreferrer" className="text-blue-500 hover:text-blue-500 text-2xl">
                                <FaLinkedin />
                                </a>
                            </div>
                </div>  
                </div>
                <div className="text-center text-gray-500 dark:text-gray-500 text-sm py-4 border-t dark:border-gray-700 mt-8">
                    <p>{new Date().getFullYear()}
                        Heramb Pinge. All rights reserved.</p>
                </div>
            </div>  
            </footer>
    );
}