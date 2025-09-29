
function Tech(){
    return(
        <section id="Techstack" className="bg-[#0d0b1f] text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-20">
                <h2 className="text-[#d7d7f9] pt-2 text-[2.4rem] text-center">Techstack</h2>
                <p className="text-[1.5rem] text-[#94a3b8] text-center font-semibold pb-3">Experience with</p>
                <div className="flex flex-wrap shadow-[0_8px_20px_rgba(0,0,0,0.15)] items-center justify-center border-3 border-[#312c51]">
                    <img src="/html.png" alt="html icon" className="w-[130px] p-4" />
                    <img src="/CSS.png" alt="CSS icon" className="w-[110px] h-[110px] object-fit p-4"/>
                    <img src="/javascript.png" alt="javascript icon" className="w-[130px] p-4"/>
                    <img src="/React.png" alt="React icon" className="w-[130px] p-4"/>
                    <img src="/Tailwind.png" alt="Tailwind icon" className="w-[130px] p-4"/>
                </div>
                
            </div>
        </section>
    )
}
 
export default Tech