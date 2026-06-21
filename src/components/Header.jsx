import { useState } from "react"
import { Button } from "./Button"

function Header(){

    const[isMenuOpen, setIsMenuOpen] = useState(false)

    const toogleMenu = ()=>{
        setIsMenuOpen(!isMenuOpen)   //!false = true
    }

    console.log(isMenuOpen)


    return(
        <header className="fixed top-0 left-0 z-50 w-full bg-[#0d0b1f] text-white text-lg">
            <div className="w-[90%] max-w-[1200px] my-0 mx-auto py-4">
                <div className="flex items-center justify-between">
                    {/* <div className="flex gap-2 items-center"> */}
                        {/* <img src="/logo.png" alt="logo" className="w-[40px]"/> */}
                        <h1 className="text-[1.7rem] text-[#8b5cf6] font-serif underline">Sally.</h1>
                    {/* </div> */}


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

                    <ul className="hidden md:flex space-x-4 items-center">
                        <li><a href="#Hero" className="hover:text-violet-500 active:text-violet-300">Home</a></li>
                        <li><a href="#About" className="hover:text-violet-500 active:text-violet-300">About</a></li>
                        <li><a href="#Techstack" className="hover:text-violet-500 active:text-violet-300">Techstack</a></li>
                        <li><a href="#Project" className="hover:text-violet-500 active:text-violet-300">Project</a></li>
                        <li><a href="#Contact" className="hover:text-violet-500 active:text-violet-300">Contact</a></li>
                        <Button href="/Salome_Nelson_Cv.pdf" target="_blank" buttonTitle="Resume" border="1px solid #8b5cf6" icon="/download-colored.png"/>

                    </ul>

                </div>

                {/* Mobile menu */}
                {isMenuOpen ? (
                    <ul className="flex-col md:hidden">
                        <li className="py-2" ><a href="#Hero" className="hover:text-violet-500 active:text-violet-300">Home</a></li>
                        <li className="py-2" ><a href="#About" className="hover:text-violet-500 active:text-violet-300">About</a></li>
                        <li className="py-2"><a href="#Techstack" className="hover:text-violet-500 active:text-violet-300">Techstack</a></li>
                        <li className="py-2" ><a href="#Project" className="hover:text-violet-500 active:text-violet-300">Project</a></li>
                        <li className="py-2" ><a href="#Contact" className="hover:text-violet-500 active:text-violet-300">Contact</a></li>
                        <Button href="/Salome_Nelson_Cv.pdf" target="_blank" buttonTitle="Resume" border="1px solid #8b5cf6" icon="/download-colored.png"/>
                    </ul>
                ): null}
            </div>

        </header>
    )
}

export default Header