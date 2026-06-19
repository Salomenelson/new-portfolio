import { Projectcard } from "./Projectcard"

function Project(){

    const projects = [
        {
            image:"/group-project.png",
            title:"Portfolio Website (Group Project)",
            description:"A collaborative responsive portfolio built with React, CSS, and Tailwind CSS. Served as the lead and contributed greatly to the work.",
            textcard1:"React",
            textcard2:"CSS",
            textcard3:"Tailwind CSS",
            liveUrl:"https://group-project-ruby-two.vercel.app",
            githubUrl:"https://github.com/Salomenelson/group-project"
        },

          {
            image:"/Portfolio img.png",
            title:"Personal Portfolio Website",
            description:"A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects. ",
            textcard1:"React",
            textcard2:"Tailwind CSS",
            liveUrl:"https://new-portfolio-ten-ochre.vercel.app/",
            githubUrl:"https://github.com/Salomenelson/new-portfolio"
        }

    ]
    return(
        <section id="Project">
            <div className="w-[90%] max-w-[1200px] my-0 mx-auto py-20">
                {/* <h2 className="text-[#4617b4] pt-2 text-[1.3rem] uppercase text-center font-semibold"> Projects</h2> */}
                <div className="flex gap-2 justify-center items-center">
                    <div className=" mt-2 w-3 h-[2px] bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">Projects</p>
                </div>
                
                <h3 className="text-[1.7rem] font-semibold pb-5 text-center">What I've Built</h3>
                {/* div for my projects */}
                <div className="grid grid-col-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        projects.map((project) => (
                        <Projectcard 
                        image={project.image} 
                        title={project.title} 
                        description={project.description}
                        textcard1={project.textcard1}
                        textcard2={project.textcard2}
                        textcard3={project.textcard3} 
                        liveUrl={project.liveUrl} 
                        githubUrl={project.githubUrl} 
                        />
                        ))
                    }
                    {/* {

                        projects.map((project) => (
                            <Projectcard image={project.image} title={project.title} description={project.description} />
                        ))
                        
                    } */}
                    {/* {

                        projects.map((project) => (
                            <Projectcard image={project.image} title={project.title} description={project.description} />
                        ))
                        
                    } */}

                    {/* <Projectcard image="/myportfolio.jpeg" title="Portfolio Website" textcard="Ongoing" description="A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects." textcard1="React" textcard2= "Tailwind" liveUrl="new-portfolio-ten-ochre.vercel.app" githubUrl="https://github.com/Salomenelson/new-portfolio"/>
                    <Projectcard image="/school.jpeg" title="School Website" textcard="Ongoing" description="A multipage website project for a school. Currently in progress, with plans to expand features." textcard1="HTML" textcard2= "CSS" liveUrl="task-1-flax-kappa.vercel.app" githubUrl="https://github.com/Salomenelson/Simple-web-page"/>
                    <Projectcard image="/portfolio practical.jpeg" title="Portfolio Website" description="My first attempt at building a portfolio with React and CSS. Focused mainly on layout styling. Not responsive." textcard1="React" textcard2= "Tailwind"/> */}
                    {/* <Projectcard image="/responsiveness.jpeg" title="Responsive webpage" description="A project built practicing responsive design techniques. Adapts across desktops, tablets and mobile screens." textcard1="HTML" textcard2= "CSS" /> */}
                </div>

            </div>
        </section>
    )
}
 
export default Project