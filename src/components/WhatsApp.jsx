// WhatsApp case study
import { Link } from 'react-router-dom';


function WhatsApp(){
    return(
        <section className="w-[90%] max-w-300 my-0 mx-auto py-10">
            {/* Breadcrumb */}
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        
                    {/* Home component */}
                    <li className="inline-flex items-center">
                        <Link to="/#Header" className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                            <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"/>
                            </svg>
                            Home
                        </Link>
                    </li>
        
                  {/* Projects component */}
                    <li>
                        <div className="flex items-center space-x-1.5">
                            <svg className="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                            </svg>
                            <Link to="/#Project" className="inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                                Projects
                            </Link>
                        </div>
                    </li>
        
                    {/* Current page Component */}
                    <li aria-current="page">
                        <div className="flex items-center space-x-1.5">
                            <svg className="w-3.5 h-3.5 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 5 7 7-7 7"/>
                            </svg>
                            <span className="inline-flex items-center text-sm font-medium text-body-subtle">Case Study</span>
                        </div>
                    </li>
                </ol>
            </nav>

            {/* Case Study */}
            <div className="w-full max-w-300 h-62.5 overflow-hidden">
                <img className="w-full h-full object-cover object-top" src="/Whatsapp vn feature.png" alt="WhatsApp Image" />
            </div>

            <h4 className="pb-5 text-[1.7rem] text-green-700 pt-6">WhatsApp Voice Note Editing Redesign</h4>
            <div>
                <p>Project Type: Mobile App Redesign</p>
                <p className="pt-3">Duration: 1 week (4th -11th March)</p>
                <div className="flex gap-2 items-center pt-3">
                    <p>Tools:</p>
                    <div className="flex gap-2">
                        <p className="px-3 py-1 rounded-[15px] border border-green-700 bg-gray-50 text-green-700 w-fit h-fit text-[10px] mr-2 ">Figma</p>
                    </div>
                </div>
            </div>

            <h4 className="pt-5 pb-2 text-[1.3rem] text-green-700">Overview</h4>
            <p>This project focuses on redesigning the voice note experience in WhatsApp by introducing an editing feature that allows users to edit and trim voice notes before sending them.</p>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Problem Statement</h4>
                <p>Currently, WhatsApp does not allow users to edit voice notes before sending them. If a user makes a mistake while recording, the only option is to delete the recording and start again. This can be frustrating, especially when recording longer voice messages.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Current Experience</h4>
                <p>When users pause a recording, they can either send the message or delete it. However, there is no option to edit or trim the audio before sending.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Goal</h4>
                <p>The goal of this redesign is to introduce a simple voice note editing feature that allows users to trim, and adjust their recordings before sending them. This gives users more control and reduces the need to re-record voice messages.</p>
            </div>


            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">User Persona</h4>
                <img src="/whatsapp-user-persona.png" alt="User persona" />
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">User Flow</h4>
                <img src="/whatsapp user-flow.png" alt="User flow" />
                <p className='pt-7'>This user flow illustrates the steps a user takes to record, edit, and send a voice note using the redesigned feature. The process begins when the user opens a chat and starts recording a voice message. If the user pauses the recording and notices a mistake, they can tap the edit option to trim unwanted parts of the voice note before saving and sending the final message.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">Low Fidelity Wireframe</h4>
                <img src="/whatsapp wireframe.png" alt="wireframe" />
            </div>

             <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">Final UI</h4>
                <img src="/whatsapp final design.png" alt="Final UI" />
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Solution/Outcome</h4>
                <p>The redesigned voice note feature allows users to review and edit recordings before sending them. This reduces frustration caused by recording mistakes and gives users more control over their voice messages.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Reflection</h4>
                <h5 className="pb-2 text-[1.1rem] text-green-700">What I Learned</h5>
                <p className='pb-3'>This project taught me how to analyze an existing product and identify meaningful opportunities for improvement without redesigning the entire application. While redesigning WhatsApp in Figma, I first recreated surrounding interface layouts, such as the chat overview, before focusing on the three main feature screens. During this process, I discovered that many interface icons and components were not available online, so I designed them myself from scratch.</p>
                <p className='pb-3'>Although challenging, this experience strengthened my skills in creating cohesive UI elements and reinforced my attention to detail. Continuing this approach will allow me to become even more proficient in designing interface components and icons from the ground up.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Design Decisions</h4>
                <p>The voice note editing feature addresses a common user pain point: the frustration of having to delete and re-record an entire voice message when a mistake occurs. This is particularly problematic for longer recordings, where users may forget key points during re-recording.</p>
                <p>By allowing users to pause, trim, and continue their recordings, the feature reduces stress and makes sending accurate voice notes easier. Users can remove unnecessary parts without losing the rest of their recording, streamlining the interaction while keeping it simple and familiar.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Next Steps</h4>
                <p>A potential improvement for future iterations is enhancing the status video experience. Currently, users cannot easily navigate to a specific moment in a long status video. If they miss something or want to revisit a particular section, they must restart the video from the beginning, which can be frustrating and time-consuming.</p>
                <p>Adding fast-forward and rewind controls, even in small increments, would allow users to quickly jump to relevant parts of a status video. This improvement would increase efficiency, reduce user frustration, and make it easier to share or view specific content without replaying the entire video.</p>
            </div>
        </section>
    )
}

export default WhatsApp