import { Link } from "react-router-dom"
import { useState } from "react"
import { Projectcard } from "./Projectcard"
import Mealmate from "./Mealmate"
import WhatsApp from "./WhatsApp"
import Jiji from "./Jiji"


// Data array used to dynamically render project cards in the UI
function Project(){

    const frontendProjects = [
        {
            image:"/group-project.png",
            title:"Portfolio Website (Group Project)",
            description:"A collaborative responsive portfolio built with React, CSS, and Tailwind CSS. Served as the lead and contributed greatly to the work.",
            textcard1:"React",
            textcard2:"CSS",
            type:"frontend",
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
            type:"frontend",
            liveUrl:"https://new-portfolio-ten-ochre.vercel.app/",
            githubUrl:"https://github.com/Salomenelson/new-portfolio"
        },

        {
            image:"/Solar-website.png",
            title:"Solar Website (Group Project)",
            description:"A fully responsive personal portfolio built with React and Tailwind CSS to showcase my skills and projects. ",
            textcard1:"React",
            textcard2:"CSS",
            type:"frontend",
            textcard3:"Fetch API",
            liveUrl:"https://new-portfolio-ten-ochre.vercel.app/",
            githubUrl:"https://github.com/Salomenelson/new-portfolio"
        }

    ]

    const uiuxProjects = [
        {
            image:"/Meal Planner.png",
            title:"Meal Planner",
            description:"MealMate is a mobile meal-planning application designed to simplify daily food decisions. ",
            textcard1:"Figma",
            textcard2:"Google forms",
            caseStudyUrl:"/Mealmate",
            projectUrl:"https://www.figma.com/proto/JngWRRKE6IufiHrKObPA5j/Meal-Planner?node-id=163-27&p=f&t=SPtAfHf29iPdwo4r-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=163%3A2&show-proto-sidebar=1"
        },

         {
            image:"/Whatsapp vn feature.png",
            title:"WhatsApp VN Editing Feature",
            description:"Introducing an editing feature that allows users to edit and trim voice notes before sending them. ",
            textcard1:"Figma",
            caseStudyUrl:"/WhatsApp",
            projectUrl:"https://www.figma.com/proto/FYYhCZbezvpgJ8reVbLJ7O/Whatsapp-Redesign?node-id=10-6&p=f&t=uiLxkYksznb6Rcmt-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1"
        },

         {
            image:"/Jiji Redesign.png",
            title:"Jiji Web App Redesign",
            description:"This focuses on redesigning key parts of the Jiji web application. ",
            textcard1:"Figma",
            caseStudyUrl:"/Jiji",
            projectUrl:"https://www.figma.com/design/u0Bj47jfm4vtDeVxOAIiRs/Ugntitled?node-id=0-1&p=f&t=H96pOI2xa2qs8Q18-0"
        }
    ]

    // To set the active project tab to always be on frontend when you load the portfolio
    const [activeTab, setActiveTab] = useState("frontend");

    return(
        <section id="Project">
            <div className="w-[90%] max-w-300 my-0 mx-auto py-20">
                <div className="flex gap-2 justify-center items-center">
                    <div className=" mt-2 w-3 h-0.5 bg-[#4617b4]"></div>
                    <p className="uppercase tracking-[5px] text-sm pt-2 text-[.8rem] text-center text-[#4617b4]">Projects</p>
                </div>
                
                <h3 className="text-[1.7rem] font-semibold pb-5 text-center">What I've Built</h3>
               
               {/* category button to switch to the project when clicked*/}
                <div className="flex gap-4 justify-center mb-7">
                    <button onClick={() => setActiveTab("frontend")} className={
                        activeTab === "frontend" ? "py-2 px-3 bg-[#4617b4] text-white rounded-full outline-0" : "py-2 px-3 rounded-full border border-[#4617b4] text-[#4617b4] text-[.7rem] font-semibold outline-0"}>Front-end
                    </button>
                    
                    <button onClick={() => setActiveTab("UI/UX")} 
                        className={activeTab === "UI/UX" ? "py-2 px-3 bg-[#4617b4] text-white rounded-full outline-0" :"py-2 px-3 rounded-full border border-[#4617b4] text-[#4617b4] text-[.7rem] font-semibold outline-0" }>UI/UX
                    </button>

                </div>

                {/* div for my projects*/}
                <div className="grid grid-col-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ensuring the frontend cards only show when the frontend tab is active */}
                    {activeTab === "frontend" && frontendProjects.map((project) => (
                        <Projectcard 
                        image={project.image} 
                        title={project.title} 
                        description={project.description}
                        textcard1={project.textcard1}
                        textcard2={project.textcard2}
                        type={project.type}
                        textcard3={project.textcard3} 
                        liveUrl={project.liveUrl} 
                        githubUrl={project.githubUrl} 
                        />
                        ))
                    }
                </div>

                <div className="grid grid-col-1 place-items-center sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Ensuring the UI/UX cards only show when the UI/UX tab is active */}
                    {activeTab === "UI/UX" && uiuxProjects.map((project) => (
                        <Projectcard 
                        image={project.image} 
                        title={project.title} 
                        description={project.description}
                        textcard1={project.textcard1}
                        textcard2={project.textcard2} 
                        caseStudyUrl={project.caseStudyUrl} 
                        projectUrl={project.projectUrl} 
                        />
                        ))
                    }
                </div>

            </div>
        </section>
    )
}
 
export default Project