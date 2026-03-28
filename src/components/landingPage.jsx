import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from "../assets/ProfileImage.Gouse_Munvar.jpeg"


const LandingPage = () => {
    return (
        <div className="bg-brand w-full h-screen flex flex-col justify-center items-center p-4 md:p-0">
            <div className="w-full md:w-[80%] h-auto md:h-[80%] shadow-lg bg-white flex flex-col md:flex-row rounded-lg">

                {/* Left Content */}
                <div className="flex flex-col w-full md:w-[70%] p-6 md:p-8 order-2 md:order-1">
                    {/* Name */}
                    <div className="flex items-center justify-start mb-4">
                        <p className="text-sm md:text-md font-bold text-dark-charcoal">
                            Gouse Munvar Shaik
                        </p>
                    </div>

                    {/* Role */}
                    <div className="flex items-center mt-2 mb-4 justify-start">
                        <p className="text-sm md:text-md font-bold text-brand">
                            Web Developer
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="flex flex-col items-start mb-4">
                        <h1 className="text-dark-charcoal text-2xl md:text-3xl font-semibold font-heading">
                            Hello, my name is
                        </h1>
                        <h1 className="text-dark-charcoal text-2xl md:text-3xl font-semibold font-heading mt-2">
                            Gouse Munvar Shaik
                        </h1>
                    </div>

                    {/* About Me Text */}
                    <div className="flex justify-start mb-4">
                        <p className="text-sm md:text-base text-medium-gray font-body">
                            Frontend developer creating clean, responsive web apps with React and Tailwind CSS. I love turning designs into functional websites and exploring modern UI/UX trends.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row justify-start mt-8 space-y-2 md:space-y-0 md:space-x-4">
                        <button className="py-2 px-4 rounded-lg bg-brand font-body font-semibold hover:opacity-90 transition w-full md:w-auto">
                            Projects
                        </button>
                        <button className="py-2 px-4 rounded-lg bg-white border border-dark-charcoal font-body font-semibold hover:bg-dark-charcoal hover:text-white transition w-full md:w-auto">
                            GitHub
                        </button>
                    </div>
                </div>

                {/* Right Content / Navigation */}
                <div className="flex flex-col w-full md:w-[30%] p-6 md:p-8 order-1 md:order-2">
                    <ul className="flex flex-col md:flex-row md:space-x-6 md:justify-end text-center md:text-right space-y-2 md:space-y-0 mb-6 md:mb-0">
                        <li>
                            <NavLink
                                to="/"
                                end
                                className={({ isActive }) =>
                                    `transition font-body text-sm md:text-base ${isActive ? 'text-brand' : 'text-dark-charcoal hover:text-brand'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    `transition font-body text-sm md:text-base ${isActive ? 'text-brand' : 'text-dark-charcoal hover:text-brand'}`
                                }
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) =>
                                    `transition font-body text-sm md:text-base ${isActive ? 'text-brand' : 'text-dark-charcoal hover:text-brand'}`
                                }
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `transition font-body text-sm md:text-base ${isActive ? 'text-brand' : 'text-dark-charcoal hover:text-brand'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className='w-full mt-6 md:mt-10 flex justify-center'>
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className='bg-brand w-48 h-48 md:w-[300px] md:h-[300px] object-contain rounded-full shadow-lg'
                        />
                    </div>
                </div>

            </div>
        </div>
    )

};

export default LandingPage;