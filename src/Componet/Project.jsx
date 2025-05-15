import React from "react";

const Project = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-6xl mx-auto p-4 sm:p-6 gap-6 bg-black rounded-lg shadow-lg text-gray-300">
            {/* Left side: video */}
            <div className="w-full lg:w-1/2 rounded-lg overflow-hidden bg-gray-900 shadow-lg">
                <video
                    src="https://cdn.pixabay.com/video/2022/12/03/141507-777708200_tiny.mp4"
                    autoPlay
                    loop
                    muted
                    className="object-cover w-full h-64 sm:h-80 lg:h-full"
                />
            </div>

            {/* Right side: text and icons */}
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
                <div>
                    {/* Icon and Title */}
                    <div className="inline-block bg-gray-800 p-3 rounded-lg mb-4 shadow-md">
                        <img
                            src="https://static.vecteezy.com/system/resources/previews/047/248/639/non_2x/folder-3d-folder-icon-3d-folder-symbol-3d-folder-image-free-png.png"
                            alt="Folder Icon"
                            className="w-8 h-8"
                        />
                    </div>

                    <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                        Evaluation and Management of Course FAQ and Chatbot
                    </h2>

                    <p className="text-gray-400 mb-4 text-sm sm:text-base leading-relaxed">
                        A web application for NTU professors to efficiently manage course
                        materials within the course chatbot’s knowledge base. The app also
                        includes a dashboard that provides valuable insights, helping
                        professors understand student sentiment towards the courses.
                    </p>

                    <p className="text-gray-400 mb-6 text-sm sm:text-base leading-relaxed">
                        This web app streamlines backend setup for the chatbot, reducing
                        manual effort and enhancing overall efficiency.
                    </p>
                </div>

                {/* Tech and Link */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    {/* Tech stack icons */}
                    <div className="flex gap-3">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png" alt="React" className="w-7 h-7 sm:w-8 sm:h-8" />
                        <img src="https://cdn3.iconfinder.com/data/icons/teenyicons-outline-vol-3/15/tailwind-128.png" alt="Tailwind" className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded" />
                        <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-128.png" alt="JavaScript" className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>

                    {/* Project Link */}
                    <a
                        href="https://yourprojectlink.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-orange-400 hover:text-orange-600 flex items-center gap-1"
                    >
                        Check this project{" "}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-4 h-4"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Project;
