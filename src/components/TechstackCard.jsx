
export const TechstackCard = ({icon, text, background})=>{
    return(
        <div className="hover:transition-transform duration-300 ease-out hover:-translate-y-2 hover:shadow-xl bg-white text-black shadow-md p-6 rounded-[7px] flex flex-col items-center" style={{backgroundColor:background}}>
            <div className="w-20 h-10 flex items-center justify-center">
                <img className="mx-w-full max-h-full object-contain" src={icon} alt="icon" />
            </div>
            <div>
                <p className="text-[.9rem] font-bold pt-2">{text}</p>
            </div>
        </div>
    )
}
