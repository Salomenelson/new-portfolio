
function Hero(){
    return(
        <section id="Hero" className="bg-[#48426d] w-full min-h-[50vh] text-amber-50 text-lg bg-[linear-gradient(rgba(0,0,0,0.9)),url('/portfolio-img.jpg')] bg-cover bg-no-repeat">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-4 flex justify-center items-center text-center">
                <div className="pb-3">
                    <p className="uppercase tracking-[6px] text-[1.5rem]">Hello, i'm</p>
                    <h2 className="text-[3rem] py-4 font-bold">Salome <span className="text-[#f0c38e]">Nelson.</span></h2>
                    <p className="text-[1.8rem]">Creative Software Engineer passionate about building bold, clean and beautiful websites.</p>

                    <button className="bg-[#f0c38e] p-3 my-20 text-black rounded-[5px] font-semibold text-[1.5rem]">Explore My work</button>
                </div>
            </div>
        </section>
    )
}
 
export default Hero