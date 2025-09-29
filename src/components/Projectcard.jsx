import { Button } from "./button"

export const Projectcard = ({image, title, description, textcard, textcard1, textcard2})=>{
    return(
        <section>
            <div className=" mb-5 w-[100%] h-[370px] border-[#312c51] border-3 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <div>
                    <img className="w-[100%] h-[110px] rounded-t-[7px]" src={image} alt="my project" />
                </div>
                <div className="px-4">
                    <div className="flex gap-8 items-center">
                        <h3 className="text-[1.4rem] pt-2">{title}</h3>
                        {textcard? <p className="py-[.3em] px-2 text-[.5rem] rounded-[20px] border-1 border-[#8827c0] text-[#8827c0] w-fit h-fit ">{textcard} </p>: null}
                    </div>
                    <p className="text-[#fffffff6]">{description}</p>
                    <div className="flex mt-3">
                        <p className="px-2 rounded-[20px] border-1 border-[#8827c0] text-[#8827c0] w-fit h-fit text-[10px] mr-2">{textcard1}</p>
                        <p className="px-2 rounded-[20px] border-1 border-[#8827c0] text-[#8827c0] w-fit h-fit text-[10px] ">{textcard2}</p>
                    </div>
                    
                    <div className="flex justify-between mt-7">
                        <button className=" rounded-[10px]  text-[12px]">{<Button buttonTitle={"Live Demo"} background={"#8827c0"} icon={"/external-link.png"}/>}</button> 
                        <button className="border-1 border-[#312c51] text-[#312c51] rounded-[10px] text-[12px]">{<Button buttonTitle={"Github"} icon={"/Github.png"}/>}</button> 
                    </div>
                </div>
            </div>
        </section>
    )
}