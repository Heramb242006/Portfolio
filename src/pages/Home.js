import React from "react";
import { IoLogoFigma } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiBlender, SiGodotengine } from "react-icons/si";
import { FaPython } from "react-icons/fa";

import profileImg from "../assests/pfp2.jpg";
import backImg from "../assests/back.png";

const skillCategories = [
    {
        title: "Python",
        icon: <FaPython />,
        skills: ["Data analysis", "data science", "Data manipulation"],
        color: "bg-blue-600",
    },
    {
        title: "Web Development",
        icon: <FaReact />,
        skills: [ "javascript", "React", "Tailwind CSS"],
        color: "bg-red-500",
    },
    {
        title: "Figma",
        icon: <IoLogoFigma />,
        skills: ["logo design", "UI/UX design", "Prototyping"],
        color: "bg-orange-500",
    }
];

export default function Home() {
    return (
        <section className="pt-20 sm:pt-16 md:pt-24 pb-32 bg-cream dark:bg-gray-900 overflow-hidden relative min-h-screen">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row items-center">
                    {/* Left Column - Intro */}
                    <div className="md:w-1/2">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-teal-500">
                            Hey there, I'm{" "}
                            <span className="text-orange-500">Heramb Pinge</span>
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg mb-4">
                            Transforming Ideas into{" "}
                            <span className="text-orange-500 font-semibold">
                                Creative solutions
                            </span>{" "}
                            with ideas and innovation
                        </p>
                        <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 mb-6">
                            1032230444@tcetmumbai.in
                        </p>
                        <div className="flex items-center justify-center md:justify-start space-x-6 md:space-x-10">
                            <div>
                                <h2 className="text-3xl font-bold text-textDark dark:text-gray-100">
                                    {new Date().getFullYear() - 2023} +
                                </h2>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Years Experience
                                </p>
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold text-textDark dark:text-gray-100">0+</h2>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Speaking Sessions
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Right Column - Image */}
                    <div className="md:w-1/2 relative">
                        <div className="relative flex justify-center py-4 md:py-8">
                            <img
                                src={profileImg}
                                alt="Profile"
                                className="mx-auto rounded-full border-4 border-teal-400 shadow-lg object-cover w-64 h-64"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Skill Cards */}
            <div className="container mx-auto px-4 mt-20">
                <h2 className="text-2xl md:text-3xl font-bold text-teal-500 mb-8 text-center">
                    Core Skill Areas
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {skillCategories.map((cat) => (
                        <div
                            key={cat.title}
                            className={`rounded-xl p-6 flex flex-col items-center shadow-md ${cat.color} text-white`}
                        >
                            <div className="text-4xl mb-3">{cat.icon}</div>
                            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
                            <ul className="space-y-1 text-center">
                                {cat.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <img
                src={backImg}
                alt="Background decorative"
                className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-20 z-0"
            />
        </section>
    );
}