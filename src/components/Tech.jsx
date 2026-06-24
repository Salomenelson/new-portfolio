// Techstack Section
import { TechstackCard } from "./TechstackCard"


function Tech(){
    return(
        <section id="Techstack" className="">
            <div className="w-[90%] max-w-300 my-0 mx-auto pb-10">
                {/* <h2 className="text-[#4617b4] pt-2 text-[1.3rem] uppercase text-center font-semibold ">Skills </h2> */}
                <div className="flex gap-2 justify-center items-center">
                    <div className=" mt-2 w-3 h-0.5 bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">Skills</p>
                </div>

                <h3 className="text-[1.7rem] font-semibold pb-1 text-center">My Tech Stack </h3>
                <p className="text-[1.1rem] pb-5 text-center">Technologies and tools I use to bring ideas to life.</p>
                
                {/* Putting the techstackcard as a reusable component */}
                <div className="flex justify-center flex-wrap gap-7 pt-4">
                    <TechstackCard  icon="/html.png" text="HTML"/>
                    <TechstackCard  icon="/CSS.png" text="CSS"/>
                    <TechstackCard  icon="/javascript.png" text="JavaScript"/>
                    <TechstackCard  icon="/React.png" text="React"/>
                    <TechstackCard  icon="/Tailwind.png" text="Tailwind CSS"/>
                    <TechstackCard  icon="/Github.png" text="Github"/>
                    <TechstackCard  icon="/vscode.png" text="Vscode"/>
                    <TechstackCard  icon="/git.png" text="Git"/>
                    <TechstackCard  icon="/figma.png" text="Figma"/>
                </div>
                
            </div>
        </section>
    )
}
 
export default Tech