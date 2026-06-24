// Reusable projectcard
import { Button } from "./Button"


export const Projectcard = ({image, title, description, textcard, textcard1, textcard2, textcard3, liveUrl, githubUrl, projectUrl, caseStudyUrl, type})=>{
    return(
        <section>
            <div className=" hover:transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl mb-5 w-full max-w-sm h-auto pb-5 rounded-[10px] shadow-[0_8px_20px_rgba(0,0,0,0.15)]">
                <div className="bg-gray-50 flex h-48 justify-center py-2">
                    <img className="max-w-[90%] h-auto rounded-[7px]"  src={image} alt="my project" />
                </div>
                <div className="px-7">
                    <div className="flex gap-8 items-center">
                        <h3 className="text-[1.1rem] font-semibold pt-2">{title}</h3>
                        {/* to show project progress */}
                        {textcard? <p className="py-[.3em] px-2 text-[.5rem] rounded-[20px] border border-[#8827c0] text-[#8827c0] w-fit h-fit ">{textcard} </p>: null}
                    </div>
                    <p className="text-black">{description}</p>
                    <div className="flex mt-3">
                        {/* to show tools used for the project */}
                        <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] mr-2">{textcard1}</p>
                        <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] mr-2">{textcard2}</p>
                       {textcard3? <p className="px-3 py-1 rounded-[10px] bg-gray-50 text-[#8b5cf6] w-fit h-fit text-[10px] ">{textcard3}</p>:null}
                    </div>
                    
                    <div className="flex gap-10 mt-7">
                        {/* code to switch the buttons as the projects switch */}
                        {/* type has to be called as a prop and in the .map for it to work */}
                        { type === "frontend" ? (
                            <>
                                <button className=" rounded-[10px]  text-[12px]">{<Button href={liveUrl} target="_blank" buttonTitle={"Live Demo"} background={"#4617b4"} icon={"/external-link.png"} color={"#fff"}/>}</button> 
                                <button className="border border-[#8b5cf6] rounded-[7px] text-[12px]">{<Button href={githubUrl} target="_blank" buttonTitle={"Github"}  icon={"/Github.png"} color={"#4617b4"}/>}</button> 
                            </>
                        ) : (
                            <>
                                <button className=" rounded-[10px]  text-[12px]">{<Button href={projectUrl} target="_blank" buttonTitle={"View Project"} background={"#4617b4"} color={"#fff"}/>}</button> 
                                <button className="border border-[#8b5cf6] rounded-[7px] text-[12px]" >{<Button href={caseStudyUrl} target="_blank" buttonTitle={"Case Study"} color={"#4617b4"}/>}</button>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

