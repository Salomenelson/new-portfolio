// Meal mate case study
import { Link } from 'react-router-dom';


function Mealmate(){
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
                         {/* Changed <a> to <Link> and href="#Project" to your actual route path (e.g., to="/projects") */}
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
                <img className="w-full h-full object-cover object-top" src="/Meal Planner.png" alt="Meal planner Image" />
            </div>

            <h4 className="pb-5 text-[1.7rem] text-green-700 pt-6">Meal Planner</h4>
            <div>
                <p>Project Type: Mobile App</p>
                <p className="pt-3">Duration: 1 Month (1st -29th February)</p>
                <div className="flex gap-2 items-center pt-3">
                    <p>Tools:</p>
                    <div className="flex gap-2">
                        <p className="px-3 py-1 rounded-[15px] border border-green-700 bg-gray-50 text-green-700 w-fit h-fit text-[10px] mr-2 ">Figma</p>
                        <p className="px-3 py-1 rounded-[15px] border border-green-700 bg-gray-50 text-green-700 w-fit h-fit text-[10px] mr-2 ">Google Form</p>
                    </div>
                </div>
            </div>

            <h4 className="pt-5 pb-2 text-[1.3rem] text-green-700">Overview</h4>
            <p>MealMate is a mobile meal-planning application designed to simplify daily food decisions. The app provides personalized meal suggestions based on user preferences and helps reduce the stress of deciding what to eat each day.</p>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Problem Statement</h4>
                <p>Many individuals struggle regularly with deciding what to eat. According to survey responses, most participants reported that they often or always experience difficulty choosing meals. As a result, they frequently settle for repetitive meals, snacks, or quick options rather than meals they genuinely want. This repeated decision-making creates unnecessary stress, especially for busy individuals.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Project Goal</h4>
                <p>The goal of MealMate is to simplify daily meal decisions by providing personalized meal suggestions based on dietary preferences and restrictions. The app aims to reduce decision fatigue and make meal planning easier, faster, and more enjoyable.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Research</h4>
                <h5 className="pb-2 text-[1.1rem] text-green-700">Research Method</h5>
                <p>An online survey was conducted using Google Forms to better understand users' eating habits and decision-making patterns.</p>
                <h5 className="pt-3 pb-2 text-[1.1rem] text-green-700">Key Findings</h5>
                <ul className="list-disc list-inside pl-5 space-y-2">
                    <li>Most participants reported that they often or always struggle with deciding what to eat.</li>
                    <li>Repetitive meals are common due to indecision.</li>
                    <li>Some participants settle for snacks or quick options instead of proper meals.</li>
                    <li>Users expressed strong interest in an app that provides daily meal suggestions.</li>
                    <li>Simplicity and ease of use were identified as important features.</li>
                </ul>
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">User Persona</h4>
                <img src="/user-persona.png" alt="User persona" />
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">User Flow</h4>
                <img src="/mealmate-userflow.png" alt="User flow" />
                <p className='pt-7'>The user flow was designed to keep navigation simple and intuitive, allowing users to move seamlessly from selecting preferences to viewing daily meal suggestions, saving favorites, and planning weekly meals.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">Low Fidelity Wireframe</h4>
                <img src="/wireframe.png" alt="wireframe" />
                <p>Low-fidelity wireframes were created to define the layout structure and content hierarchy before applying visual design elements. The focus at this stage was on placement, navigation, and interaction flow rather than color or styling.</p>
            </div>

             <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">Final UI</h4>
                <img src="/mealmate-final-ui.png" alt="Final UI" />
                <p className='pt-3'>The final interface was designed with clarity and simplicity as the main focus. A clean layout, strong visual hierarchy, and large meal imagery help users quickly understand their options. The bottom navigation ensures easy access to Home, Planner, and Favorites, while swipe interactions make browsing meal suggestions intuitive and engaging.</p>
            </div>

            <div>
                <h4 className="pt-7 pb-6 text-[1.3rem] text-green-700">Reflection</h4>
                <p className='pb-3'>One of the most challenging aspects of this project was developing the wireframes. Initially, understanding how to properly separate structure from visual design wasn't easy. Conducting the survey was also a new experience, as it was my first time creating and analyzing responses using Google Forms.</p>
                <p className='pb-3'>Through this project, I gained a stronger understanding of the UX process from research and user insights to wireframing and final interface design. I learned how to design with a clear purpose and structure user interactions more thoughtfully.</p>
                <p>If the project were to be expanded further, I would introduce a feature allowing users to input the ingredients they already have at home. The app would then generate meal suggestions based solely on those available ingredients, making it even more practical and convenient.</p>
            </div>
        </section>
    )
}

export default Mealmate