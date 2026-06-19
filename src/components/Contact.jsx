import { Button } from "./Button"


function Contact(){
    return(
        <section id="Contact" >
            <div className="w-[90%] max-w-[1200px] my-0 mx-auto py-20">

                <div className="flex gap-2 pb-10 justify-center items-center">
                    <div className=" mt-2 w-3 h-[2px] bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">Contact Me</p>
                </div>

                {/* <h2 className="text-[#4617b4] py-2 uppercase pt-2 pb-10 text-[1.3rem] font-semibold text-center">Contact Me</h2> */}
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
                
                
                {/* <form className="flex flex-col items-center justify-center" action="mailto:salomenelson2002@gmail.com" method="POST" enctype="text/plain">
                    <input className="block text-[#d7d7f9] border-[#312c51] border-1 mb-2 w-full p-3 rounded-[7px]" type="text" placeholder="What's your name?" />
                    <input className="block border-[#312c51] border-1 mb-2 w-full p-3 rounded-[7px]" type="email" name="email" id="email" placeholder="Your email - promise no sapm! 😉" />
                    <textarea className="block border-[#312c51] border-1 w-full h-[250px] p-3 rounded-[7px]" name="textarea" id="textarea" placeholder="Let's make something awesome together"></textarea>

                    <div className="mt-10">
                        <Button className="text-[1.5rem]" buttonTitle="Send Message" background="#8827c0" icon="/submit icon.png"/>
                    </div>
                </form> */}
            </div>
        </section>
    )
}
 
export default Contact