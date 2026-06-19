
export const Aboutcard = ({title, text, icon, background})=>{
    return(
        <div className="hover:transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl w-full text-black py-3 px-4 rounded-[7px] flex items-center gap-3 shadow-[0_8px_20px_rgba(0,0,0,0.15)] bg-white" style={{backgroundColor:background}}>
            <div className="w-8 h-13 flex items-center justify-center">
                <img src={icon} alt="icon" className="w-[40px]" />
            </div>
            <div>
                <p className="font-semibold text-black text-[.9rem] pb-1 ">{title}</p>
                <p className="text-[.8rem] ">{text}</p>
            </div>
        </div>
    )
}

