import { Button } from "./button"

function Hero(){
    return(
        <section id="Hero" className="bg-[#0d0b1f] text-[#fff]">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-25 flex justify-center items-center text-center">
                <div className="pb-3">
                    <p className="uppercase tracking-[6px] text-[1.5rem] text-[#d7d7f9]">Hello, i'm</p>
                    <h2 className="text-[3rem] py-4 font-bold">Salome <span className="text-[#d7d7f9]">Nelson.</span></h2>
                    <p className="text-[1.8rem]">Creative Software Engineer passionate about building bold, clean and beautiful websites.</p>

                    <div className="mt-10">
                        <a href="#Project">
                            {/* <Button className="text-[1.5rem]" buttonTitle="Explore my work" background="#8827c0"/> */}
                        </a>
                    </div>
                    {/* <button className="bg-[#8827c0] p-3 my-20 text-[#fff] rounded-[5px] font-semibold text-[1.5rem]"><a href="#Project">Explore My work</a></button> */}
                </div>
            </div>
        </section>
    )
}
 
export default Hero