import { Aboutcard } from "./Aboutcard"
import { Button } from "./Button"

function About(){
    return(
        <section id="About" className=" w-full py-10">
            <div className="w-[90%] max-w-[1200px] my-0 mx-auto py-8">

                <div className="flex gap-2 pb-2 justify-center items-center">
                    <div className=" mt-2 w-3 h-[2px] bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">About Me</p>
                </div>

            {/* <h2 className="text-[1.3rem] text-[#4617b4] py-2 text-center uppercase font-semibold">About Me</h2> */}

                {/* flex container */}
                <div className="md:flex md:justify-between md:items-start py-3">
                    {/* left side */}
                    <div className="md:w-[45%]" >
                        <p className="text-[1rem] leading-relaxed tracking-wide">I'm a Frontend Developer passionate about creating responsive, user-friendly and visually appealing web experiences. I enjoy turning ideas and designs into functional applications using modern web technologies. </p>
                        <p className="text-[1rem] py-2">I am currently seeking internship opportunities where I can contribute, grow my skills and gain hands-on industry experiences while working with oher developers on real-world projects.</p>
                        
                        <div className="my-7">
                            <Button href="/Salome_Nelson_Cv.pdf" download buttonTitle="Download Resume" background="#4617b4" icon="/download-white.png" color="#fff"/>
                        </div>
                    </div>
                    {/* right side */}
                    <div className="w-full md:w-[50%] grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-4 md:mt-6 "> 
                        <Aboutcard icon="/location1.png" title="Lagos, Nigeria" text="Based in Lagos"/>
                        <Aboutcard icon="/code-block.png" title="Frontend Development" text="My main focus"/>
                        <Aboutcard icon="/suitcase.png" title="Open to Opportunities" text="Available for internship positions"/>
                        <Aboutcard icon="/responsive-layout.png" title="Responsive Design" text="Mobile-first and adaptive layouts"/>

                    </div>
                </div>
            </div>
        </section>
    )
}
 
export default About