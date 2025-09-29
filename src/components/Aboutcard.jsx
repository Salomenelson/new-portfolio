
export const Aboutcard = ({title, text, icon})=>{
    return(
        <div className="w-[100%] text-white h-[20%] py-1 px-3 my-7 rounded-[7px] flex items-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] border-3 border-[#312c51]">
            <div>
                <img src={icon} alt="icon" className="w-[40px] " />
            </div>
            <div>
                <p className="font-semibold text-[#d7d7f9] text-[1.5rem]">{title}</p>
                <p className="text-[1.5rem]">{text}</p>
            </div>
        </div>
    )
}

