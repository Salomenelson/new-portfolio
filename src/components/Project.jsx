import { Projectcard } from "./Projectcard"

function Project(){
    return(
        <section id="Project" className="bg-[#0d0b1f] text-white">
            <div className="w-[80%] max-w-[1000px] my-0 mx-auto py-20">
                <h2 className="text-[#d7d7f9] pt-2 text-[2.4rem] text-center">Projects</h2>
                <p className="text-[1.5rem] text-[#94a3b8] text-center font-semibold pb-3">Some of my recent works</p>
                {/* div for my projects */}
                <div className="grid grid-cold-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Projectcard image="/myportfolio.jpeg" title="Portfolio Website" textcard="Ongoing" description="A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects." textcard1="React" textcard2= "Tailwind" />
                    <Projectcard image="/school.jpeg" title="School Website" textcard="Ongoing" description="A multipage website project for a school. Currently in progress, with plans to expand features." textcard1="HTML" textcard2= "CSS"/>
                    <Projectcard image="/portfolio practical.jpeg" title="Portfolio Website" description="My first attempt at building a portfolio with React and CSS. Focused mainly on layout styling. Not responsive." textcard1="React" textcard2= "Tailwind"/>
                    {/* <Projectcard image="/responsiveness.jpeg" title="Responsive webpage" description="A project built practicing responsive design techniques. Adapts across desktops, tablets and mobile screens." textcard1="HTML" textcard2= "CSS" /> */}
                </div>

            </div>
        </section>
    )
}
 
export default Project