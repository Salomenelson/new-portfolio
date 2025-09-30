
// A reusable component
export const Button = ({buttonTitle, background, color, border, icon}) =>{
    //  border:border || "none" is saying "if border isn't passed, default = none"
    return(
        <button className=" py-3 px-7 text-[#fff] rounded-[5px] font-semibold" style={{backgroundColor:background, color:color, border:border || "none"}}> 
           <div className="flex gap-2 items-center">
                {icon?(<img className="w-[20px] h-[20px]" src={icon} alt="icon"/>) : null} 
                {buttonTitle}
            </div> 

        </button>
    )
}