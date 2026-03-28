

import React from 'react'
import { NavLink } from "react-router-dom"
import ProfileImage from "../assets/profileimage.png"

const projectsData = [
  {
    name: "Project One",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores. Magni aliquid voluptates minus, quisquam optio quaerat atque sunt neque velit ipsam necessitatibus nesciunt nihil illum nulla ullam a ducimus!",
    githubLink: "https://github.com/username/project-one"
  },
  {
    name: "Project Two",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores. Magni aliquid voluptates minus, quisquam optio quaerat atque sunt neque velit ipsam necessitatibus nesciunt nihil illum nulla ullam a ducimus!",
    githubLink: "https://github.com/username/project-two"
  },
  {
    name: "Project Three",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, asperiores. Magni aliquid voluptates minus, quisquam optio quaerat atque sunt neque velit ipsam necessitatibus nesciunt nihil illum nulla ullam a ducimus!",
    githubLink: "https://github.com/username/project-three"
  },
]

const Projects = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-center items-center">

      {/* Header Section */}
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
              Projects
            </h1>
          </div>

          {/* About Me Text */}
          <div className="flex justify-start">
            <p className="text-gray-700 font-body text-sm md:text-base">
              Frontend developer at TCS with experience in React, Redux, and Tailwind CSS. Passionate about creating clean, user-friendly web applications and constantly learning new technologies.
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

      {/* Projects Section */}
      <div className="w-full md:w-[80%] mt-8 md:mt-16 flex flex-col space-y-8">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden"
          >
            {/* Left Side */}
            <div className="w-full md:w-1/3 bg-brand h-48 md:h-auto"></div>

            {/* Right Side */}
            <div className="w-full md:w-2/3 p-4 md:p-6 flex flex-col justify-center">
              <h2 className="text-xl md:text-2xl font-heading mb-2">
                {project.name}
              </h2>

              <p className="text-gray-700 font-body leading-relaxed mb-4 text-sm md:text-base">
                {project.description}
              </p>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2 px-4 rounded-lg bg-brand text-white font-body hover:bg-brand-dark transition w-full md:w-max text-center"
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects