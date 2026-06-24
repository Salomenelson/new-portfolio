// Hero section
import { Button } from "./Button"

function Hero(){
    return(
        <section id="Hero" className="bg-[#0d0b1f] text-white">
            <div className="w-[90%] max-w-300 my-0 mx-auto py-25 text-center md:flex justify-between items-center md:text-left">
                <div className="pb-3 md:w-[50%]">
                    <p className="uppercase tracking-[6px] text-[1.5rem] text-[#8b5cf6]">Hello, i'm</p>
                    <h2 className="text-[3rem] pt-4 font-bold">Salome Nelson</h2>
                    <p className="text-[1.9rem] text-[#8b5cf6] pb-4">Frontend Developer</p>
                    <p className="text-[1.3rem]">Creative Software Engineer passionate about building bold, clean and beautiful websites.</p>

                    <div className="mt-10 flex justify-center md:justify-start gap-3">
                        <a href="#Project">
                            <Button className="text-[1.5rem]" buttonTitle="Explore my work" background="#4617b4" icon="/arrow-right.png"/>
                        </a>
                        <a href="#Contact">
                            <Button className="text-[1.5rem]" buttonTitle="Contact Me" border="1px solid #4617b4" icon="/chat.png"/>
                        </a>
                    </div>
                </div>

                <div className="md:w-[40%] md:my-0 my-10  relative overflow-hidden border-2 border-violet-500 shadow-[0_0_60px_rgba(139,92,246,0.4)]" style={{borderRadius:"100px 40px 100px 40px"}}>
                    <img src="/hero img.png" alt="portfolio image" className="w-full max-w-full h-112.5 object-cover"/>
                </div>
            </div>
        </section>
    )
}
 
export default Hero