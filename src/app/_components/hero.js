export default function Hero(){
    return(
    <main>
        <div className="bg-gray-300 h-screen flex flex-wrap">
            <div className="w-full sm:w-8/12 mb-10">
                <div className="container mx-auto sm:p-10">
                    <nav className="flex px-4 justify-between"></nav>
                    <header className="container items-center px-4 lg:flex mt-10 h-full lg:mt-0">
                        <div className="w-full item">
                            <h1 className="text-4xl lg:text-6xl font-bold mb-5">Welcome 
                                <span className=" text-gray-500"> Guest</span></h1>
                            <p className="text-xl mb-8">
                                Berikut website portofolio saya, menggunakan framework Next Js,<br></br>
                                di web portofolio sederhana ini menampilkan beberapa hal tentang diri saya.
                            </p>
                            <p className="text-md mb-4">Powered by</p>
                            <button className="rounded-md bg-indigo-300 px-2.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-1 focus-visible:outline-indigo-600 mx-w-11">Next JS </button>
                            <button class="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-3">   Next UI</button>
                        </div>
                    </header>
                </div>
            </div>
            <img
                width={800}
                height={800}
                alt="cute"
                src="sinz.jpg"
                Priority={true}
                className="w-full object-cover h-[100px] sm:h-screen sm:w-4/12"/>
        </div>
    </main>
    );
}