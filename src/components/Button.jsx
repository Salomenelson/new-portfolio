
// A reusable component
export const Button = ({buttonTitle, background, color, border, icon, href, target, download}) =>{
    //  border:border || "none" is saying "if border isn't passed, default = none"
    return(
        <a 
        href={href} 
        target={target ?? "_self"} 
        default opens in the same page tab rel={target === "_blank" ? "noopener noreferrer" : undefined} download={download}>
            <button className=" py-2 px-7 rounded-[5px] font-semibold cursor-pointer" style={{backgroundColor:background, color:color, border:border || "none"}}> 
                <div className="flex gap-3 items-center">
                    {buttonTitle}
                    {icon?(<img className="w-5 h-5" src={icon} alt="icon"/>) : null} 
                </div> 

            </button>
        </a>
    )
}