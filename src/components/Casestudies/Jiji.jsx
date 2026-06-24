// WhatsApp case study
import { Link } from 'react-router-dom';


function Jiji(){
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
                <img className="w-full h-full object-cover object-top" src="/Jiji Redesign.png" alt="Jiji Image" />
            </div>

            <h4 className="pb-5 text-[1.7rem] text-green-700 pt-6">Jiji Redesign</h4>
            <div>
                <p>Project Type: Web App Redesign</p>
                <p className="pt-3">Duration: 2 days (15th -17th April)</p>
                <div className="flex gap-2 items-center pt-3">
                    <p>Tools:</p>
                    <div className="flex gap-2">
                        <p className="px-3 py-1 rounded-[15px] border border-green-700 bg-gray-50 text-green-700 w-fit h-fit text-[10px] mr-2 ">Figma</p>
                    </div>
                </div>
            </div>

            <h4 className="pt-5 pb-2 text-[1.3rem] text-green-700">Overview</h4>
            <p>This project focuses on redesigning key parts of the Jiji web application by identifying usability issues and improving them with clearer layout, better structure, and a more polished visual design.</p>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Key Improvements</h4>
                <div>
                    <h5 className="pb-2 text-[1.1rem] text-green-700">Dashboard</h5>
                    <img className='max-w-[40%]' src="/jiji-dashboard.png" alt="Dashborad before and after image" />
                    <h6 className="pb-2 text-[1rem] text-green-700">Problem</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Layout feels too minimal and lacks supporting structure</li>
                        <li>Overall interface feels basic and not visually refined</li>
                        <li>The page feels empty and not engaging</li>
                    </ul>

                    <h6 className="pb-2 text-[1rem] text-green-700">Solution</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Introduced a more structured and balanced layout</li>
                        <li>Improved overall visual styling for a more modern look</li>
                        <li>Added supporting content to make the interface more engaging</li>
                    </ul>
                </div>

                <h5 className="pb-2 pt-10 text-[1.1rem] text-green-700">Category</h5>
                <div>
                    <img className='max-w-[40%]' src="/jiji category.png" alt="Category page before and after image" />

                    <h6 className="pb-2 text-[1rem] text-green-700">Problem</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>The categories section is not visually engaging</li>
                        <li>The layout feels plain and lacks visual appeal</li>
                    </ul>

                    <h6 className="pb-2 text-[1rem] text-green-700">Solution</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Introduced a more visually appealing layout</li>
                        <li>Improved styling to make the section more engaging and attractive</li>
                        <li>Enhanced overall presentation for better user experience</li>
                    </ul>
                </div>


                <h5 className="pb-2 pt-10 text-[1.1rem] text-green-700">Product Listing</h5>
                <div>
                    <img className='max-w-[40%]' src="/jiji listing.png" alt="Product listing before and after image" />

                    <h6 className="pb-2 text-[1rem] text-green-700">Problem</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Product cards have inconsistent sizes (some long, some short)</li>
                        <li>Poor alignment creates a disorganized layout</li>
                        <li>No uniform structure across listings</li>
                        <li>Images have inconsistent and distracting backgrounds</li>
                    </ul>

                    <h6 className="pb-2 text-[1rem] text-green-700">Solution</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Created a consistent grid system</li>
                        <li>Standardized product card sizes and layout</li>
                        <li>Improved spacing for a cleaner and more organized display</li>
                        <li>Placed all product images on a clean white background for uniformity</li>
                    </ul>
                </div>
                
                <h5 className="pb-2 pt-10 text-[1.1rem] text-green-700">Product Details</h5>
                <div>
                    <img className='max-w-[40%]' src="/jiji product.png" alt="product before and after image" />

                    <h6 className="pb-2 text-[1rem] text-green-700">Problem</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Important product information is not prioritized</li>
                        <li>Seller details appear before the actual product description</li>
                        <li>The layout lacks a clear information hierarchy</li>
                    </ul>

                    <h6 className="pb-2 text-[1rem] text-green-700">Solution</h6>
                    <ul className="list-disc list-inside pl-5 space-y-2 pb-7">
                        <li>Reorganized the layout to prioritize product information</li>
                        <li>Placed key details (title, price, description) beside the product image</li>
                        <li>Moved seller information below, making it secondary</li>
                        <li>Created a clearer and more logical information flow</li>
                    </ul>
                </div>

            </div>

            <div>
                <h4 className="pt-7 pb-2 text-[1.3rem] text-green-700">Final Result</h4>
                <p>The redesign focuses on creating a more structured and visually refined interface with clearer organization and improved consistency. By enhancing layout, hierarchy, and overall presentation, the experience becomes more engaging, intuitive, and professional.</p>
            </div>

        </section>
    )
}

export default Jiji