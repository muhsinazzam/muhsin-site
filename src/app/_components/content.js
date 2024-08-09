import Image from "next/image";
import skills from "../data/skills";
export default function Edge(){
    return (
        <main>
        <div className="flex flex-wrap mx-0 bg-gray-200">
            <div className="w-full px-4">
                <div className="mx-auto mb-12 max-h[512px] text-center lg:mb-20">
                <h1 className="mb-10 mt-10 text-3x1 font-bold leading-[1.2] text-black">MY Skills</h1>
                <p className="text-gray-500">Aku bukan hanya seorang Front-end Web Devoloper,<br></br>
                namun aku juga mendalami bidang Back-End Devoloper.<br></br>
                di bawah ini mungkin beberapa artikel tentang skills yang aku dalami.</p>
                </div>
            </div>
        </div>
        <div className="flex flex-row justify-center flex-wrap bg-gray-200 pb-20">
            {skills.map((item)=>(
                <div
                    key={item.title}
                    className="p-4 w-[230px]">
                    <div className="h-full border-1 border-gray-200 border-opacity-60">
                        <Image
                            width={300}
                            height={300}
                            src={item.img}
                            alt={item.title}
                            className="h-48 w-full object-cover object-center"/>
                        <div className="p-5 h-36">
                            <h2 className="text-xs title-font font-medium text-gray-500 mb-3"></h2>
                            {item.title}
                            <p className="mb-3 h-19 line-clamp-3">{item.desc}</p>
                        </div>
                    </div>
                    <div className="p-6 mx-0">
                        <a 
                        href="{item.link}"
                        className="text-gray-500 inline-flex items-center hover:text-black">
                        read more
                        </a>
                    </div>
                </div>
            ))}
        </div>
        </main>
    )
}