import { Aboutcard } from "./Aboutcard"

function About(){
    return(
        <section id="About" className="bg-[#0d0b1f] w-full text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-20">

                {/* flex container */}
                <div className="md:flex justify-between items-center py-3">
                    {/* left side */}
                    <div className="md:w-[50%]">
                        <img src="/portfolio-img.jpg" alt="portfolio image" className="max-w-[100%] shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-[7px]"/>
                        <h2 className="text-[2.4rem] text-[#d7d7f9] p-2">About Me</h2>
                        <p className="text-[1.5rem] text-justify">I've always been fascinated by how websites are built. That curiosity eventually pushed me into web development and I discovered how much I enjoy building websites that are functional, responsive and visually appealing. Right now, I focus mainly on frontend development, creating clean, responsive designs and in the future I plan to expand my skills into UI/UX and backend development so I can grow into a fullstack developer. </p>
                    </div>
                    {/* right side */}
                    <div className="md:w-[40%]"> 
                        <Aboutcard icon="/location.png" title="Location" text="Lagos, Nigeria"/>
                        <Aboutcard icon="/computer.png" title="Current Focus" text="Frontend development"/>
                        <Aboutcard icon="/layers.png" title="Goal" text="Fullstack development"/>
                        <Aboutcard icon="/heart.png" title="Passion" text="Building creative, beautiful websites"/>
                        {/* <Aboutcard icon="/settings.png" title="Skills" text="HTML, CSS, JavaScript, React, Tailwindcss"/> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default About