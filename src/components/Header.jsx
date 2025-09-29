import { useState } from "react"

function Header(){

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)   //!false = true
    }

    console.log(isMenuOpen)


    return(
        <header className="bg-[#0d0b1f] text-[#d7d7f9] text-lg">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-4">
                <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                        <img src="/logo.png" alt="logo" className="w-[40px]"/>
                        <h1 className="text-[1.7rem]">Sally.</h1>
                    </div>


                    <div className="md:hidden">
                        <button className="text-[#d7d7f9]" onClick={toogleMenu}>
                            <svg 
                            fill="none"
                            stroke="CurrentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="w-6 h-6"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                    <ul className="hidden md:flex space-x-4">
                        <li><a href="#Hero">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#Techstack">Techstack</a></li>
                        <li><a href="#Project">Project</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </ul>

                </div>

                {/* Mobile menu */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden">
                        <li className="py-2" ><a href="#Hero">Home</a></li>
                        <li className="py-2" ><a href="#About">About</a></li>
                        <li className="py-2"><a href="#Techstack">Techstack</a></li>
                        <li className="py-2" ><a href="#Project">Project</a></li>
                        <li className="py-2" ><a href="#Contact">Contact</a></li>
                    </ul>
                ): null}
            </div>

        </header>
    )
}

export default Header