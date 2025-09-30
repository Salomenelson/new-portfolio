
// A reusable component
export const Button = ({buttonTitle, background, color, border, icon}) =>{
    //  border:border || "none" is saying "if border isn't passed, default = none"
    return(
        <button className=" py-3 px-7 text-[#fff] rounded-[5px] font-semibold" style={{backgroundColor:background, color:color, border:border || "none"}}> 
           <div className="flex gap-2">
                {icon?(<img className="w-[12px] h-[12px]" src={icon} alt="icon"/>) : null} 
                {buttonTitle}
            </div> 

        </button>
    )
}