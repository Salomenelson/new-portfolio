
function Tech(){
    return(
        <section id="Techstack" className="bg-[#312c51] text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-25">
                <h2 className="text-[#f0c38e] pt-2 text-[2.4rem] text-center">Techstack</h2>
                <p className="text-[1.5rem] text-center font-semibold pb-3">Experience with</p>
                <div className="flex flex-wrap shadow-[0_8px_20px_rgba(0,0,0,0.15)] items-center justify-center">
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