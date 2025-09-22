import { useState } from "react"

function Header(){

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)   //!false = true
    }

    console.log(isMenuOpen)


    return(
        <header className="bg-[#312c51] text-[#f0c38e] text-lg">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-4">
                <div className="flex items-center justify-between">
                
                    <img src="/logo.png" alt="logo" className="w-[40px]"/>

                    <div className="md:hidden">
                        <button className="text-[#f0c38e]" onClick={toogleMenu}>
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
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>

                </div>

                {/* Mobile menu */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden">
                        <li className="py-2" ><a href="#Hero">Home</a></li>
                        <li className="py-2" ><a href="#About">About</a></li>
                        <li className="py-2"><a href="#Techstack">Techstack</a></li>
                        <li className="py-2" ><a href="#">Project</a></li>
                        <li className="py-2" ><a href="#">Contact</a></li>
                    </ul>
                ): null}
            </div>

        </header>
    )
}

export default Header