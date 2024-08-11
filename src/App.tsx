import React, { useState, useEffect } from "react";
import "./App.css";

const projects = [
  {
    id: 1,
    title: "AI-Powered Task Manager",
    description:
      "A smart to-do list application using natural language processing",
  },
  {
    id: 2,
    title: "Cryptocurrency Price Tracker",
    description: "Real-time crypto price monitoring with predictive analytics",
  },
  {
    id: 3,
    title: "Augmented Reality Shopping App",
    description:
      "Virtual try-on experience for online shoppers using AR technology",
  },
  {
    id: 4,
    title: "Smart Home IoT Dashboard",
    description:
      "Centralized control panel for managing connected home devices",
  },
];

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "TensorFlow",
  "GraphQL",
  "Docker",
  "AWS",
];

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${darkMode ? "dark:bg-gray-900 dark:text-gray-100" : "bg-gray-50 text-gray-900"}`}
    >
      {/* Navigation */}
      <nav className={`navbar ${darkMode ? "dark:bg-gray-800" : "bg-white"}`}>
        <div className="logo">RandomDev</div>
        <div className="menu-items">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className="menu-button">
          {darkMode ? "☀️" : "🌙"}
        </button>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="menu-button md:hidden"
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className={`mobile-menu ${isMenuOpen ? "show" : ""}`}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      )}

      {/* Main content */}
      <main>
        {/* Hero section */}
        <section className="relative overflow-hidden py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-8">
              <div className="lg:w-1/2 flex flex-col-center">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-4">
                  <span className="block text-gray-900 dark:text-white">
                    Hello, I'm
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400">
                    RandomDev
                  </span>
                </h1>
                <p className="mt-3 text-xl text-gray-500 dark:text-gray-400">
                  Passionate full-stack developer creating innovative solutions
                  for the digital world.
                </p>
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-teal-400 hover:from-blue-600 hover:to-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 lg:w-1/2 flex flex-col-center">
                <div className="relative w-full min-w-[50%] h-auto rounded-full overflow-hidden shadow-2xl transition-transform duration-300 hover:scale-105">
                  <img className="hero-image" src="aw.jpg" alt="RandomDev" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section
          id="projects"
          className={`py-20 ${darkMode ? "dark:bg-gray-800" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {projects.map((project) => (
                <div key={project.id} className="project-card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-blue-500 dark:text-teal-400 hover:bg-lightblue hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 btn-learn-more"
                  >
                    Learn more
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills section */}
        <section
          id="skills"
          className={`py-20 ${darkMode ? "dark:bg-gray-900" : "bg-gray-50"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
              Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span key={index} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section
          id="contact"
          className={`py-20 ${darkMode ? "dark:bg-gray-800" : "bg-white"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-10">
              Contact
            </h2>
            <div className="flex justify-center space-x-6">
              <a href="#" className="contact-link">
                GitHub
              </a>
              <a href="#" className="contact-link">
                LinkedIn
              </a>
              <a href="#" className="contact-link">
                Email
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${darkMode ? "dark:bg-gray-900" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base text-gray-500 dark:text-gray-400">
            © 2024 RandomDev. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
