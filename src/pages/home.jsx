import { ArrowRight } from "lucide-react"

export default function Home() {
    return (
        <div className="min-h-screen">
            <section className="max-w-7xl mx-auto px-6 py-10 md:py-20">   
                {/* landing Section */}
                <div className="text-left md:ml-14">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold">Hi,</h1>
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold">I'm Abhijith</h1>
                </div>

                {/* Button Section */}
                <div className="mt-10 md:ml-14">
                    <button className="text-white bg-blue-700 hover:bg-blue-800 transition-all flex items-center gap-2 cursor-pointer px-6 py-3 font-bold text-sm md:text-base">
                        SOFTWARE DEVELOPER <ArrowRight size={18}/>
                    </button>
                </div>

                {/* Divider */}
                <div className="my-12">
                    <hr className="h-0.5 bg-gray-800 border-0" />
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-10">
                    {/* frontend */}
                    <div className="group cursor-pointer">
                        <h2 className="text-gray-500 font-extrabold group-hover:text-white transition-colors">FRONTEND DEVELOPMENT</h2>
                        <p className="text-gray-600 font-bold group-hover:text-white mt-2 leading-relaxed">
                            Developing responsive UI using <br className="hidden md:block"/>
                            technologies like React js, HTML, CSS, Tailwind etc..
                        </p>
                    </div>

                    {/* Backend */}
                    <div className="group cursor-pointer">
                        <h2 className="text-gray-500 font-extrabold group-hover:text-white transition-colors">BACKEND DEVELOPMENT</h2>
                        <p className="text-gray-600 font-bold group-hover:text-white mt-2 leading-relaxed">
                            Backend development with Node js, <br className="hidden md:block"/>
                            Express, MongoDB for robust applications.
                        </p>
                    </div>

                    {/* Deployment */}
                    <div className="group cursor-pointer">
                        <h2 className="text-gray-500 font-extrabold group-hover:text-white transition-colors">DEPLOYMENT</h2>
                        <p className="text-gray-600 font-bold group-hover:text-white mt-2 leading-relaxed">
                            Deploying web applications <br className="hidden md:block"/>
                            in Vercel.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}