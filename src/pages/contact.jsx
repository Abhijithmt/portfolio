export default function Contact(){
    const bgImage = "https://images.unsplash.com/photo-1484807352052-23338990c6c6?q=80&w=2070&auto=format&fit=crop";
    return(
<div className=" min-h-screen flex items-center flex-col justify-center gap-5"
    style={{ backgroundImage: `url(${bgImage})` }}>
    <div className="flex justify-center">
    <h1 className="text-white font-extrabold font-poppins">Calicut,Kerala</h1>
    </div>
    <div className=" flex justify-center">
    <h1 className="text-white font-extrabold font-poppins">abhijithmt2005@gmail.com</h1>
    </div>
    <div className=" flex justify-center font-poppins">
        <h1 className="text-white font-extrabold">9539363006</h1>
    </div>
    <div className="flex flex-col gap-6">
        <button className="text-white font-bold px-11 py-2.5  bg-blue-500 cursor-pointer">Linkeln</button>
        <button className="text-white font-bold px-5 py-2.5 bg-pink-500 cursor-pointer">GitHub</button>
        <button className="text-white font-bold px-5 py-2.5  bg-blue-700 cursor-pointer">Instagram</button>
    </div>
</div>
    )
}