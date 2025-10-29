import backImg from "../assests/back.png";

export default function About() {
    return (
        <div className="container mx-auto px-4 py-16 relative min-h-screen">
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Introduction Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 dark:text-white">
                        About Me
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                       I'm a data-driven professional specializing in extracting meaningful insights, developing predictive models, and transforming raw data into actionable intelligence for business growth.
                    </p>
                </div>

                {/* Experience Cards */}
                <div className="grid gap-8 mb-16">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-bold mb-4 text-teal-500">Professional Journey</h2>
                        <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                            <p>
                                My journey into data began with a fascination for uncovering patterns hidden within numbers and transforming them into meaningful insights. What started as curiosity quickly evolved into a passion for data analysis and problem-solving.
                            </p>
                            <p>
                                Over time, I honed my skills in statistical analysis, data visualization, and predictive modeling — learning how to turn raw data into stories that drive real-world decisions. I enjoy exploring trends, building models, and presenting insights that help organizations make informed, data-driven choices.
                            </p>
                            <p>
                                Today, I focus on using data to bridge the gap between information and impact — continuously learning, experimenting, and finding smarter ways to generate value from data in an ever-evolving digital world.
                            </p>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-bold mb-4 text-orange-500">What I Do</h2>
                        <ul className="space-y-4 text-gray-600 dark:text-gray-300">
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Design and implement scalable cloud solutions on AWS and GCP
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Develop IoT architectures and sensor integration systems
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Create real-time data processing and analytics solutions
                            </li>
                            <li className="flex items-start">
                                <span className="mr-2">•</span>
                                Implement secure and efficient cloud infrastructure
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg transform transition-all duration-300 hover:scale-[1.02]">
                        <h2 className="text-2xl font-bold mb-4 text-blue-500">Technical Approach</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            I believe in creating robust, scalable solutions that drive real business value. 
                            My approach combines deep technical knowledge with practical implementation experience, 
                            ensuring that solutions are not just technically sound but also aligned with business objectives.
                        </p>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="text-center">
                    <a 
                        href="mailto:atul.ab.gupta@gmail.com"
                        className="inline-block px-8 py-4 bg-teal-500 text-white rounded-full font-semibold hover:bg-teal-600 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

            <img
                src={backImg}
                alt="Background decorative"
                className="pointer-events-none absolute inset-0 w-full h-full object-cover object-center opacity-20 z-0"
            />
        </div>
    );
}