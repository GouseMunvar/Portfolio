import React from 'react';
import { NavLink } from 'react-router-dom';
import ProfileImage from "../assets/profileimage.png"
import CarouselComponent from './Carosel';
import { BsLinkedin } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import wave from '../svg/wave.svg'

const About = () => {
    return (
        <div className="bg-white w-full flex flex-col justify-center items-center p-4 md:p-0">

            <div className="w-full md:w-[80%] bg-white flex flex-col md:flex-row rounded-lg">

                {/* Left Content */}
                <div className="flex flex-col w-full md:w-[70%] p-6 md:p-8 order-2 md:order-1">

                    {/* Name */}
                    <div className="flex items-center justify-start mb-4">
                        <p className="text-sm md:text-md font-bold text-dark-charcoal">
                            Gouse Munvar Shaik
                        </p>
                    </div>

                    {/* Heading */}
                    <div className="flex mt-8 md:mt-20 flex-col items-start mb-4">
                        <h1 className="text-dark-charcoal text-2xl md:text-3xl font-semibold font-heading">
                            About me
                        </h1>
                    </div>

                    {/* About Me Text */}
                    <div className="flex justify-start">
                        <p className="text-sm md:text-base text-gray-700 font-body">
                            Frontend developer at TCS with experience in React, Redux, and Tailwind CSS. Passionate about creating clean, user-friendly web applications and constantly learning new technologies.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-start mt-8 space-x-4">
                        <button className="py-2 px-4 rounded-lg bg-brand font-body font-semibold hover:opacity-90 transition">
                            Resume
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

            <div className='w-full md:w-[80%] mt-8 md:mt-0'>
                <h3 className='text-2xl md:text-3xl px-4 py-2 text-brand rounded-md font-heading'>Technical Skills</h3>
                <div className='w-[190px] ml-5 mt-1 h-[4px] rounded-full bg-slate-600'></div>
            </div>

            <div className='w-full md:w-[80%] h-auto md:h-[100px] mt-8 md:mt-16 px-4 md:px-0'>
                <CarouselComponent />
            </div>

            <div className='flex w-full md:w-[80%] h-auto md:h-[200px] mt-8 md:mt-16 justify-center items-center gap-6 flex-wrap px-4 md:px-0'>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                    <BsLinkedin className='w-10 h-10 md:w-[40px] md:h-[40px] hover:text-blue-600 transition-colors duration-300' />
                </a>
                <a href="mailto:youremail@gmail.com">
                    <BiLogoGmail className='w-10 h-10 md:w-[40px] md:h-[40px] hover:text-red-500 transition-colors duration-300' />
                </a>
                <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                    <FaInstagramSquare className='w-10 h-10 md:w-[40px] md:h-[40px] hover:text-pink-500 transition-colors duration-300' />
                </a>
            </div>

            <div className='w-full h-[100px]'>
                <img src={wave} alt=""/>
            </div>

        </div>
    );
};

export default About;