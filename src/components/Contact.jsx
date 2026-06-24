// Contact Section
import { Button } from "./Button"


function Contact(){
    return(
        <section id="Contact" >
            <div className="w-[90%] max-w-300 my-0 mx-auto py-20">

                <div className="flex gap-2 pb-10 justify-center items-center">
                    <div className=" mt-2 w-3 h-0.5 bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">Contact Me</p>
                </div>

                <div className="md:flex md:justify-between">
                    <div className="md:w-[40%] pb-6">
                        <p className="text-[1rem] leading-relaxed tracking-wide">Currently building, learning and seeking internship opportunities. Let's connect if you have a role, project or idea.</p>
                    </div>
                    <div className="md:w-[40%]">
                        <div className="flex gap-3 items-center mb-4">
                            <div className="shadow-[0_8px_20px_rgba(0,0,0,0.15)] w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <img className="w-5" src="/mail.png" alt="email icon" />
                            </div>
                            <p className="text-[1rem] font-semibold">Email: <a className="hover:text-violet-800 hover:underline" href="mailto:salomenelson.sn@gmail.com">salomenelson.sn@gmail.com</a></p>
                        </div>

                        <div className="flex gap-3 items-center mb-4">
                            <div className="shadow-[0_8px_20px_rgba(0,0,0,0.15)] w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <img className="w-5" src="/call.png" alt="call icon" />
                            </div>
                            <p className="text-[1rem] font-semibold">Phone: <a href="tel: +2348132653507" target="_blank" >+234-813-265-3507</a></p>
                        </div>

                        <div className="flex gap-3 items-center mb-4">
                            <div className="shadow-[0_8px_20px_rgba(0,0,0,0.15)] w-8 h-8 rounded-full bg-white flex items-center justify-center">
                                <img className="w-5" src="/Github-icon.png" alt="github icon" />
                            </div>
                            <p className="text-[1rem] font-semibold">Github: <a href="https://github.com/salomenelson" target="_blank">salomenelson</a></p>
                        </div>
                    </div>
                        
                </div>
            </div>
        </section>
    )
}
 
export default Contact