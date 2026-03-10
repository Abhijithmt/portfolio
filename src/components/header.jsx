export default function Header(){


    return(
        <div className="px-24 py-6 flex  justify-between">
            <div>
            <h1 className="text-white font-extrabold text-2xl ">ABHIJITH MT</h1>
            </div>
            <div className="font-bold flex gap-3.5">
                <nav className="text-gray-700 hover:text-white ">Home</nav>
                <nav className="text-gray-700 hover:text-white ">About</nav>
                <nav className="text-gray-700 hover:text-white ">Skill</nav>
                <nav className="text-gray-700 hover:text-white ">Projects</nav>
                <nav className="text-gray-700 hover:text-white ">Contact</nav>
            </div>
        </div>
    )
}