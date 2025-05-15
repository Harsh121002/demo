export default function Contact() {
    return (
        <div
            className="bg-gray-900  mx-auto px-4 py-12 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex justify-center items-start"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/1402922016/photo/crack-in-the-cement-wall-a-gray-concrete-wall-floor-natural-cement-or-stone-old-material-use.jpg?s=612x612&w=0&k=20&c=crpIOE1TSECZhRY4w0j2yTyF1atHYFnm37rSjkYRDUw=')`,
                backgroundRepeat: 'repeat',
                backgroundSize: 'auto',
                backgroundColor: '#0f0f0f',
            }}
        >
            <div className="w-fit max-w-2xl bg-gray-900/80 backdrop-blur-md rounded-lg border border-gray-700 p-6 sm:p-8 lg:p-10 text-gray-300 shadow-lg">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-200">
                    Let's talk
                </h2>
                <p className="mb-8 text-base sm:text-lg text-gray-400">
                    Whether you’re looking to build a new website, improve your existing platform, or bring a unique project to life, I’m here to help.
                </p>

                <form className="space-y-6">
                    <div>
                        <label
                            htmlFor="name"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            className="w-full rounded-md bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            className="w-full rounded-md bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="block mb-2 text-sm font-medium text-gray-300"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message..."
                            rows="5"
                            className="w-full rounded-md bg-gray-800 border border-gray-700 text-gray-300 px-4 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-md transition w-full sm:w-auto"
                    >
                        Send message
                    </button>
                </form>

            </div>
            <div className="fixed  flex bottom-2 left-2 gap-2 ">
                <a href="https://github.com/Harsh121002"  target="_blank" className="bg-white rounded-lg cursor-pointer"><img src="https://cdn1.iconfinder.com/data/icons/picons-social/57/github_rounded-128.png" className="w-10" /></a>
                <a href="https://www.linkedin.com/in/harsh-virani-hh121002/"  target="_blank" className="bg-white rounded-lg cursor-pointer"><img src="https://cdn3.iconfinder.com/data/icons/social-round-corner/512/linkdin__social_media_logo-128.png" className="w-10" /></a></div>
        </div>
    );
}
