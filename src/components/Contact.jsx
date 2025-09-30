import { Button } from "./Button"


function Contact(){
    return(
        <section id="Contact" className="bg-[#0d0b1f] text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-20">
                <h2 className="text-[#d7d7f9] pt-2 text-[2.4rem] text-center">Contact Me</h2>
                <p className="text-[1.5rem] text-[#94a3b8] text-center font-semibold pb-8">Got a cool idea, job opportunity? Let's chat!</p>
                <form className="flex flex-col items-center justify-center" action="">
                    <input className="block text-[#d7d7f9] border-[#312c51] border-1 mb-2 w-full p-3 rounded-[7px]" type="text" placeholder="What's your name?" />
                    <input className="block border-[#312c51] border-1 mb-2 w-full p-3 rounded-[7px]" type="email" name="email" id="email" placeholder="Your email - promise no sapm! 😉" />
                    <textarea className="block border-[#312c51] border-1 w-full h-[250px] p-3 rounded-[7px]" name="textarea" id="textarea" placeholder="Let's make something awesome together"></textarea>

                    <div className="mt-10">
                        <Button className="text-[1.5rem]" buttonTitle="Send Message" background="#8827c0" icon="/submit icon.png"/>
                    </div>
                </form>
            </div>
        </section>
    )
}
 
export default Contact