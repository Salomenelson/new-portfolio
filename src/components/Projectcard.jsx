import { Button } from "./Button"

export const Projectcard = ({image, title, description, textcard, textcard1, textcard2, textcard3, liveUrl, githubUrl})=>{
    return(
        <section>
            <div className=" hover:transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl mb-5 w-full max-w-sm h-auto pb-5 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <div className="bg-gray-50 flex justify-center">
                    <img className="w-[85%] h-[140px] rounded-t-[7px]" src={image} alt="my project" />
                </div>
                <div className="px-7">
                    <div className="flex gap-8 items-center">
                        <h3 className="text-[1.1rem] font-semibold pt-2">{title}</h3>
                        {textcard? <p className="py-[.3em] px-2 text-[.5rem] rounded-[20px] border-1 border-[#8827c0] text-[#8827c0] w-fit h-fit ">{textcard} </p>: null}
                    </div>
                    <p className="text-black">{description}</p>
                    <div className="flex mt-3">
                        <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] mr-2">{textcard1}</p>
                        <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] mr-2">{textcard2}</p>
                        <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] ">{textcard3}</p>
                    </div>
                    
                    <div className="flex gap-10 mt-7">
                        <button className=" rounded-[10px]  text-[12px]">{<Button href={liveUrl} target="_blank" buttonTitle={"Live Demo"} background={"#4617b4"} icon={"/external-link.png"} color={"#fff"}/>}</button> 

                        {/* <button className=" rounded-[10px]  text-[12px]">{<Button href={liveUrl} buttonTitle={"Github"} background={"#4617b4"} icon={"/Github.png"}/>}</button>  */}
                        <button className="border-1 border-[#8b5cf6] rounded-[7px] text-[12px]">{<Button href={githubUrl} target="_blank" buttonTitle={"Github"} icon={"/Github.png"} color={"#4617b4"}/>}</button> 
                    </div>
                </div>
            </div>
        </section>
    )
}

