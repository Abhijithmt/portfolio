import { ArrowRight  } from "lucide-react"
export default function Home(){
    return (
        <div>
            <section>   
                <div className="ml-20 mt-40 ">
                <h1 className="text-white lg:text-6xl sm:text-3xl md:text-4xl font-extrabold">Hi,</h1>
                <h1 className="text-white lg:text-6xl sm:text-3xl md:text-4xl font-extrabold">I'm Abhijith</h1>
                </div>
                <div className="pl-24 pt-14 pr-24 font-bold">
                    <button className="text-white bg-[rgb(0,15,230)] flex items-center gap-2 cursor-pointer">SOFTWARE DEVELOPER <ArrowRight/></button>
                </div>
            </section>
        </div>
    )
} 