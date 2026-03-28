import React from 'react'
import { NavLink } from "react-router-dom"
import InputCard from './inputCard'
import ProfileImage from "../assets/profileimage.png"
import wave from '../svg/wave.svg'

const Contact = () => {
    return (
        <div className="bg-white w-full flex flex-col justify-center items-center">

            <div className="w-full md:w-[80%] bg-white flex flex-col md:flex-row rounded-lg">

                {/* Left Content */}
                <div className="flex flex-col w-full md:w-[70%] p-4 md:p-8 order-2 md:order-1">

                    {/* Name */}
                    <div className="flex items-center justify-start mb-4">
                        <p className="text-md font-bold text-dark-charcoal">
                            Gouse Munvar Shaik
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="flex mt-10 md:mt-20 flex-col items-start mb-4">
                        <h1 className="text-dark-charcoal text-2xl md:text-3xl font-semibold font-heading">
                            Contact me
                        </h1>
                    </div>

                    {/* About Me Text */}
                    <div className="flex justify-start">
                        <p className="text-gray-700 font-body text-sm md:text-base">
                            I'm always open to new opportunities and collaborations.
                            Whether you have a project idea, a question, or just want to connect,
                            feel free to reach out using the form below or via email.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-start mt-8 space-x-4">
                        <button className="py-2 px-4 rounded-lg bg-brand font-body text-sm md:text-base">
                            Resume
                        </button>
                    </div>
                </div>

                {/* Right Content / Navigation */}
                <div className="flex flex-col w-full md:w-[30%] p-4 md:p-8 order-1 md:order-2">
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

            <div>
                <h3 className='text-2xl md:text-3xl px-4 py-2 text-brand rounded-md font-heading'>Mail me</h3>
                <div className='block w-[80px] md:w-[100px] ml-5 mt-1 h-[4px] rounded-full bg-slate-600'></div>
            </div>

            <div className='w-full flex justify-center mt-10'>
                <InputCard />
            </div>

            <div className='w-full'>
                <img src={wave} alt="" />
            </div>

        </div>
    )
}

export default Contact