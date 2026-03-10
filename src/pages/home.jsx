import { ArrowRight  } from "lucide-react"
export default function Home(){
    return (
        <div>
            <section>   
                <div className="ml-20 mt-20 ">
                <h1 className="text-white lg:text-6xl sm:text-3xl md:text-4xl font-extrabold">Hi,</h1>
                <h1 className="text-white lg:text-6xl sm:text-3xl md:text-4xl font-extrabold">I'm Abhijith</h1>
                </div>
                <div className="pl-24 pt-14 pr-24 font-bold">
                    <button className="text-white bg-[rgb(0,15,230)] flex items-center gap-2 cursor-pointer">SOFTWARE DEVELOPER <ArrowRight/></button>
                </div>
                <div className="px-20">
                    <hr className="h-0.5 bg-gray-700 border-0 my-8"></hr>
                </div>
                <div className="flex justify-between ">
                <div className=" px-20">
                    <h2 className="text-gray-700 font-extrabold cursor-pointer hover:text-white">FRONTEND DEVELOPMENT</h2>
                    <p className="text-gray-700 font-bold cursor-pointer hover:text-white">Developing responsive UI using <br/>technologies like React js,<br/>HTML,CSS,Tailwind etc..</p>
                </div>
                <div className=" px-20">
                    <h2 className="text-gray-700 font-extrabold cursor-pointer hover:text-white">BACKEND DEVELOPMENT</h2>
                    <p className="text-gray-700 font-bold cursor-pointer hover:text-white">Backend development with Node js,<br/>Express,MongoDB for building<br/> robust and scalable web application.</p>
                </div>
                <div className="px-20">
                    <h2 className="text-gray-700 font-extrabold cursor-pointer hover:text-white">DEPLOYMENT</h2>
                    <p className="text-gray-700 font-bold cursor-pointer hover:text-white">Deploying web application <br/>in vercel.</p>

                </div>
                </div>
            </section>
        </div>
    )
} 