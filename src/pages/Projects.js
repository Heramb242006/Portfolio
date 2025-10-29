import React from "react";
import loadingGif from "../assests/loading.gif";
import backImg from "../assests/back.png";

export default function Projects() {
    return (
        <div className="container mx-auto px-6 py-24 relative min-h-screen">
            <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-12 sm:p-16 flex flex-col items-center shadow-lg relative z-10">
                <img
                    src={loadingGif}
                    alt="Loading"
                    className="w-80 md:w-96 lg:w-[40rem] h-auto mb-8 rounded-lg shadow-md"
                />
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 text-center">
                    Projects — Coming Soon
                </h1>
                <p className="text-center text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
                    I'm building a polished showcase of my work — case studies, source code, and live demos. Check back soon, or get in touch if you'd like a preview of my projects today.
                </p>

                <a
                    href="mailto:1032230444@tcetmumbai.in"
                    className="mt-8 inline-block px-6 py-3 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition duration-300"
                >
                    Request Projects
                </a>
            </div>

            <img
                src={backImg}
                alt="Background decorative"
                className="pointer-events-none absolute inset-0 w-full h-full object-cover opacity-10 dark:opacity-30 dark:filter dark:brightness-125 dark:mix-blend-screen z-0"
            />

        </div>
    )
}