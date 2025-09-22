import { Aboutcard } from "./Aboutcard"

function About(){
    return(
        <section id="About" className="bg-[#48426d] w-full text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-30">

                {/* flex container */}
                <div className="md:flex justify-between items-center py-3">
                    {/* left side */}
                    <div className="md:w-[50%]">
                        <img src="/portfolio-img.jpg" alt="portfolio image" className="max-w-[100%] shadow-[0_8px_20px_rgba(0,0,0,0.15)] rounded-[7px]"/>
                        <h2 className="text-[2.4rem] text-[#f0c38e] p-2">About Me</h2>
                        <p className="text-[1.5rem]">I'm a passionate software engineer who loves crafting digital experiences that are both beautiful and functional. When I'm not coding, you'll find me diving deep into data analytics, exploring new technologies, or perfecting the art of clean, elegant code.</p>
                    </div>
                    {/* right side */}
                    <div className="md:w-[40%]"> 
                        <Aboutcard icon="/location.png" title="Location" text="Lagos, Nigeria"/>
                        <Aboutcard icon="/Heart-icon.png" title="Love Building" text="Building creative, beautiful websites"/>
                        <Aboutcard icon="/learning-bulb.png" title="Always Learning" text="New tools and elegant solutions"/>
                        <Aboutcard icon="/Heart-icon.png" title="Passionate About" text="Crafting seamless user-friendly websites"/>
                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default About