export default function Header() {
    return (
        <div className="px-6 md:px-24 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            
            <div>
                <h1 className="text-white font-extrabold text-xl md:text-2xl tracking-tighter">
                    ABHIJITH MT
                </h1>
            </div>

            <div className="font-bold flex flex-wrap justify-center gap-4 md:gap-8">
                <nav className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm md:text-base">Home</nav>
                <nav className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm md:text-base">About</nav>
                <nav className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm md:text-base">Skill</nav>
                <nav className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm md:text-base">Projects</nav>
                <nav className="text-gray-500 hover:text-white cursor-pointer transition-colors text-sm md:text-base">Contact</nav>
            </div>
        </div>
    )
}