
export const Aboutcard = ({title, text, icon})=>{
    return(
        <div className="w-[100%] text-white h-[20%] p-1 my-7 rounded-[7px] flex gap-2 shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:border-3 hover:border-[#312c51]">
            <div>
                <img src={icon} alt="icon" className="w-[50px] my-2" />
            </div>
            <div>
                <p className="font-semibold text-[1.5rem]">{title}</p>
                <p className="text-[1.5rem]">{text}</p>
            </div>
        </div>
    )
}

