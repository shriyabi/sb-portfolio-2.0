import logo from './logo.svg';
import './App.css';
import Project from './components/projects';
import Skills from './components/skills';
import ProjectsAndHonors from './components/projectsandhonors';
import Description from './components/changingdescription';
import TypingAnimation from './components/typinganimation';
import 'animate.css';
import shriya from './components/images/shriya-transparent.png';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import forMich from './components/images/ForMichigan.png';
import portfolio from './components/images/My Projects.png';
import demo from './components/images/Demostration.webm';
import plannerIo from './components/images/plannerIo.png';
import medChatbot from './components/images/medChatbot.png';
import docuDog from './components/images/docuDog.png';
import deadlineTracker from './components/images/deadlineTracker.png';
import budget from './components/images/budgetApp.png';
import { useNavigate } from "react-router-dom";

function App() {
  //form
  const formRef = useRef(null);
  const navigate = useNavigate();
  const [submissionStatus, setSubmissionStatus] = useState('');

  const [activeSection, setActiveSection] = useState("Home");

  const handleSubmit = (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbzO-68zD61CnGTH_dpGWCeXvm0TZdo_b2aj_SDds6D8cza-VKd4SLseEJJAnqKPTuc/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(formRef.current)
    })
      .then(response => {
        if (response.ok) {
          setSubmissionStatus('Thank you for submitting! I will contact you as soon as possible.');
        } else {
          throw new Error('Network response was not ok.');
        }
      })
      .catch(error => {
        console.error('Error!', error.message);
        setSubmissionStatus('Something went wrong, please try again.');
      });
  };

  React.useEffect(() => {
    let ticking = false;
    const sections = ["Home", "Skills", "Experience", "Projects", "Contact"];
  
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          let current = "Home";
          sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              if (rect.top <= 150 && rect.bottom >= 150) {
                current = id;
              }
            }
          });
          setActiveSection(current);
          ticking = false;
        });
        ticking = true;
      }
    };
  
    const navButtons = document.querySelectorAll(".hover-sync");
    const hoverHandlers = [];
  
    navButtons.forEach((btn) => {
      const targetId = btn.getAttribute("data-target");
      const targetDiv = document.getElementById(targetId);
      if (targetDiv) {
        const handleEnter = () => {
          targetDiv.classList.add("glow-effect");
        };
        const handleLeave = () => {
          targetDiv.classList.remove("glow-effect");
        };
  
        btn.addEventListener("mouseenter", handleEnter);
        btn.addEventListener("mouseleave", handleLeave);
        hoverHandlers.push({ btn, handleEnter, handleLeave });
      }
    });
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
      hoverHandlers.forEach(({ btn, handleEnter, handleLeave }) => {
        btn.removeEventListener("mouseenter", handleEnter);
        btn.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);
  
  
  
  return (
    <div class="comfortaa">
<div class="w-full justify-start flex mx-auto">
  <div class="border-4 border-cyan-300 shadow-2xl bg-neutral-600 flex flex-row items-center rounded-r-md pl-1 px-3">
    <div class="flex flex-row items-center">
      <h2 class="mr-3 my-1 text-sm rounded-3xl bg-fuchsia-500 px-1">S</h2>
      <h2 class="text-xl text-slate-100 font-black">SHROOGLE News</h2>
    </div>
    <div class="flex items-center justify-end text-yellow-400 font-semibold text-sm ml-3 cursor-pointer">
      X
    </div>
  </div>
</div>

      <div id="Home" class="bg-neutral-800 w-screen min-h-screen px-3 flex-col items-start flex justify-start">

        <div class="rounded-xl my-5 flex flex-row bg-slate-100 shadow-lg pink shadow-fuschia-400 w-full border-4 border-fuchsia-400 mb-7 lg:mb-10">
          <div class="w-[2em] rounded-l-lg px-2 mr-2 bg-yellow-300 animate__animated animate__heartBeat animate__delay-2s"> &#128269; </div>
          <TypingAnimation class="bg-slate-100" />
        </div>


       <div class="w-full px-5 md:p-0 h-full flex flex-col lg:flex-row animate__animated animate__fadeInUp animate__delay-2s">
        <div className="w-full md:w-auto px-5 py-4 mb-7 purple border-violet-500 mr-5 lg:min-h-screen rounded-xl border-4">
  <div className="sticky top-10 flex flex-row lg:flex-col items-center justify-center text-3xl gap-5 lg:gap-8">
  {[
  { id: "Home", icon: "🏠", tooltip:"Home" },
  { id: "Skills", icon: "🔧", tooltip:"Skills" },
  { id: "Experience", icon: "🏫", tooltip:"Education" },
  { id: "Projects", icon: "🧳", tooltip:"Projects" },
  { id: "Contact", icon: "💬", tooltip:"Contact Me" },
  { id: "Resume", icon: "📄", tooltip:"Resume" },
].map(({ id, icon, tooltip }) => (
  <a
    key={id}
    href={`#${id}`}
    data-target={id}
    className={`hover-sync zoom-out rounded-xl p-2 border-4 transition-transform duration-300 ease-in-out will-change-transform
      ${activeSection === id
        ? "border-fuchsia-500 bg-slate-100 shadow-[0_0_10px_rgba(240,46,170,0.5)] scale-105"
        : "border-transparent bg-slate-100 hover:scale-105 hover:border-yellow-400"}
    `}
    style={{ minWidth: "2.5rem", textAlign: "center" }}
    title={tooltip}
  >
    {icon}
  </a>
))}

  </div>
</div> 




          <div class="w-full flex flex-col mr-5">
            <h class="text-5xl font-[1000] animate__animated animate__delay-4s animate__rubberBand text-cyan-300"> Shriya Biddala </h>
            <Description />
            <div class="w-full flex justify-center">
              

              
            <div class="w-full text-slate-100 flex flex-col font-semibold leading-relaxed border-4 border-white rounded-lg p-2 md:p-5 relative bg-transparent">
              
            <h class="text-xl underline font-bold mb-3 text-violet-500"> ABOUT ME </h>
            <div class="w-full text-slate-100 font-semibold leading-relaxed relative bg-transparent">
                <div class="float-left mr-5 mb-3 bg-yellow-400 shadow-lg rounded-lg p-1">
                  <img
                    src={shriya}
                    alt="Shriya"
                    class="w-60 h-auto rounded-lg drop-shadow-xl"
                  />
                </div>

                <p>
                  Hello! I am a Computer Science enthusiast at the University of Michigan's College of Engineering and a freelance full-stack developer, having built websites for organizations like For Michigan and other clients. I have also contributed to several machine learning research projects, including developing a mental health chatbot and a chatbot for medical condition awareness, in addition to my work at Walmart Global Tech. My passions lie in artificial intelligence, automation, and creating innovative web applications by blending creativity with technology and AI. As an advocate for equity and diversity in tech, I aim to merge my technical and activist efforts to build equitable AI-driven solutions for under-resourced communities and develop web applications that have a positive social and business impact.
                </p>

              </div>
              </div>
            </div>

            <div class="border-2 mr-5 my-4"></div>

            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
  
  {/* Skills */}
  <div id="Skills" class="flex flex-col">
    <h class="text-xl underline font-bold text-violet-500 mb-4"> SKILLS </h>
    
    {/* AI / ML / NLP */}
    <div class="mb-6">
      <h class="text-sm overline text-fuchsia-500 mb-2"> AI/ML/NLP </h>
      <div class="space-y-1">
        <Skills skillName="PyTorch" year="4 YEARS" />
        <Skills skillName="OpenCV" year="4 YEARS" />
        <Skills skillName="Transformers (HuggingFace)" year="4 YEARS" />
        <Skills skillName="Scikit-learn" year="4 YEARS" />
        <Skills skillName="Pandas" year="4 YEARS" />
        <Skills skillName="LLMs (RAG, Fine-tuning)" year="4 YEARS" />
        <Skills skillName="Langgraph + Langchain" year="1 YEAR" />
      </div>
    </div>

    {/* SWE & Systems */}
    <div class="mb-6">
      <h class="text-sm overline text-cyan-400 mb-2"> SWE & Systems </h>
      <div class="space-y-1">
        <Skills skillName="Java" year="6 YEARS" />
        <Skills skillName="Git" year="6 YEARS" />
        <Skills skillName="Python" year="5 YEARS" />
        <Skills skillName="Google Cloud Platform" year="4 YEARS" />
        <Skills skillName="C++" year="3 YEARS" />
        <Skills skillName="C" year="2 YEARS" />
        <Skills skillName="Unix" year="2 YEARS" />
        <Skills skillName="Go" year="< 1 YEAR" />
      </div>
    </div>

    {/* Full-Stack */}
    <div class="mb-6">
      <h class="text-sm overline text-yellow-400 mb-2"> Full-Stack Development </h>
      <div class="space-y-1">
        <Skills skillName="HTML + CSS" year="6 YEARS" />
        <Skills skillName="JavaScript" year="4 YEARS" />
        <Skills skillName="ReactJS" year="2 YEARS" />
        <Skills skillName="TailwindCSS" year="2 YEARS" />
        <Skills skillName="Express.js" year="2 YEARS" />
        <Skills skillName="Node.js" year="2 YEARS" />
        <Skills skillName="MySQL" year="2 YEARS" />
        <Skills skillName="Django" year="1 YEAR" />
        <Skills skillName="NoSQL" year="1 YEAR" />
        <Skills skillName="Vite" year="1 YEAR" />
        <Skills skillName="FastAPI" year="1 YEAR" />
        <Skills skillName="UI/UX & Accessibility" year="1 YEAR" />
      </div>
    </div>

    {/* Low Level Systems */}
    <div class="mb-6">
      <h class="text-sm overline text-violet-500 mb-2"> Low-Level Systems </h>
      <div class="space-y-1">
        <Skills skillName="Valgrind" year="2 YEARS" />
        <Skills skillName="GDB" year="2 YEARS" />
        <Skills skillName="ARM-64 Assembly" year="1 YEAR" />
        <Skills skillName="Multithreading (Boost)" year="1 YEAR" />
        <Skills skillName="TCP/IP" year="1 YEAR" />
      </div>
    </div>
  </div>
  
  {/* Education & Credentials */}
  <div class="flex flex-col gap-6">
    
    {/* EDUCATION BLOCK */}
    <div id="Experience">
      <h class='text-xl underline font-bold text-fuchsia-400 mb-4'> EDUCATION </h>
      <div class="border-purple-400 border-4 mt-4 bg-gray-900/50 rounded-xl p-5 flex flex-col text-slate-100 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        <div class="flex justify-between flex flex-col items-start">
          <h class="text-lg font-bold">University of Michigan</h>
          <h class="text-sm text-gray-400">Ann Arbor, MI</h>
        </div>
        
        <h class="text-base font-semibold italic mt-2 text-yellow-400">B.S.E. Computer Science Engineering [2026]</h>
        
        <div class="border-t border-gray-700 my-3"></div>

        <div class="flex flex-col gap-4">
          <div class="w-full">
            <h class="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2">Relevant Coursework</h>
            <ul class="text-base space-y-1 text-gray-300 list-disc list-inside">
              <li>Data Structures & Algorithms (EECS 281)</li>
              <li>Machine Learning (EECS 445)</li>
              <li>Artificial Intelligence (EECS 492)</li>
              <li>Operating Systems (EECS 482)</li>
              <li>Computer Architecture (EECS 370)</li>
              <li>Natural Language Processing (EECS 487)</li>
              <li>Computer Science Pragmatics (EECS 201)</li>
              <li>Human-Centered Software Development (EECS 497)</li>
              <li>Data-Driven Web Applications (SI 364)</li>
            </ul>
          </div>
          <div class="w-full">
            <h class="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2"> Experience </h>
            <ul class="text-base space-y-1 text-gray-300 list-disc list-inside">
              <li> AI/ML SWE Intern @ <span class="text-emerald-400 font-bold"> Walmart Global Tech (2025) </span></li>
              <li>Freelance Full Stack Developer @ <span class="text-cyan-500 font-bold"> For Michigan (under America Votes) (2024) </span></li>
              <li> Data Analytics Researcher @ <span class="text-yellow-500 font-bold"> Social A.I. Lab (University of Michigan) [UROP] (2023-24) </span></li>
            </ul>
          </div>

          <div class="w-full">
            <h class="text-xs uppercase tracking-wider text-gray-500 font-bold mb-2"> Activities</h>
            <ul class="text-base space-y-1 text-gray-300 list-disc list-inside">
              <li><span class="">Instructional Aide</span> (for Data Structures and Algorithms)</li>
              <li>Residential Advisor</li>
              <li>Freelance Developer</li>
              <li>YouTuber (Travel)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    {/* Credentials */}
    <div id="Credentials">
      <h class='text-xl underline font-bold text-violet-400 mb-4'> CREDENTIALS </h>
      
      <div class="border-fuchsia-400 mt-4 border-4 bg-gray-900/50 rounded-xl p-5 flex flex-col text-slate-100 shadow-lg hover:shadow-purple-500/20 transition-all duration-300">
        
      {/* Credential 1 */}
      <a href="https://coursera.org/share/413b3c5bd475e74e062efe6afcbd1d4b" target="_blank" rel="noreferrer" 
         class="group block relative overflow-hidden rounded-xl border-2 border-fuchsia-500/30 bg-gray-900/80 p-4 transition-all hover:scale-[1.02] hover:border-fuchsia-500 hover:shadow-xl hover:shadow-fuchsia-500/20 cursor-pointer">
        
        <div class="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-fuchsia-500/10 blur-2xl transition-all group-hover:bg-fuchsia-500/20"></div>

        <div class="flex items-center gap-4 relative z-10">
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-slate-400 text-white shadow-lg">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
          </div>

          <div class="flex flex-col">
            <h3 class="text-base font-bold text-slate-100 group-hover:text-fuchsia-300 transition-colors">Applied Machine Learning in Python</h3>
            <p class="text-xs text-cyan-400">University of Michigan (Coursera)</p>
          </div>

          <div class="ml-auto">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500 group-hover:text-white transition-colors">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </div>
        </div>
      </a>
      </div>
    </div>
  </div>
</div>

{/* delete */}



            <div class="border-2 mr-5 my-8"></div>
            <div id="Projects" class="flex flex-col">
            <h class='text-xl underline text-cyan-300 font-semibold'> PROJECTS + HONORS </h>
            <h class='text-base italic text-yellow-400'> Click each tab to learn more! </h>
            <ProjectsAndHonors />
            </div>
          </div>
          <div class="border-2 mr-5 my-8"></div>
          <div class="w-full lg:w-1/3 min-h-screen flex flex-col items-end justify-start animate__animated animate__delay-3s animate__slideInRight md:mt-20 lg:mt-0">
            <h2 class='items-start text-cyan-300'> FEATURED NEWS </h2>
            <div class="flex flex-col md:flex-row lg:flex-col w-full flex-wrap">
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-cyan-400">Encourage-mint</h3>
                <img src={budget} class=" w-full h-auto" />
                <h3> Personal Project </h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-fuchsia-400">Conversense</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/YTZotjnA4ok" />
                <h3>MHacks 25 (Best Use of Snap AR: 2nd Place) </h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-violet-400">Deadline Tracker</h3>
                <img src={deadlineTracker} class=" w-full h-auto" />
                <h3> Personal Project </h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-cyan-400">Planner.io</h3>
                <img src={plannerIo} class=" w-full h-auto" />
                <h3> Personal Project </h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-fuchsia-400">Chatbot for Medical Condition Awareness</h3>
                <img src={medChatbot} class=" w-full h-auto" />
                <h3> Class Project </h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-violet-300">For Michigan Website</h3>
                <img src={forMich} class=" w-full h-auto" />
                <h3>Official Website for For Michigan</h3>
              </div>
              {/* <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-fuchsia-400">GreenBrother</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/BbTT9nJbXnE" />
                <h3>MHacks 17</h3>
              </div> */}
              {/* <div class="w-full md:w-1/2 lg:w-full text-slate-100 my-2 h-auto border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-violet-400">OneVote</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/-eGkraEZ6HA" />
                <h3>MHacks 16</h3>
              </div> */}
              <div class="w-full md:w-1/2 lg:w-full text-slate-100 my-2 h-auto border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-cyan-400">Chatbot for Mental Health Awareness</h3>
                <iframe class="w-full h-auto relative" src={demo} />
                <h3>Research Project @ CU Boulder </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="border-2 w-full mb-10"></div>
        <div id="Contact" className="w-full flex justify-center flex-col items-center">
          <h2 className='text-center text-xl underline mb-3 text-yellow-400 font-semibold'>CONTACT</h2>
          <form ref={formRef} onSubmit={handleSubmit} method='POST' action='POST' className="px-5 py-7 w-full md:w-4/5 mb-7 border-4 border-slate-100 rounded-lg flex flex-col justify-center items-center animate__animated animate__delay-4s animate__fadeIn">

            <div className="w-full flex flex-col md:flex-row justify-center items-center">
              <input
                type="email"
                name="Email"
                placeholder="Email"
                className="p-2 md:mr-5 md:mb-3 bg-neutral-800 font-semibold focus:outline-yellow-400 w-full md:w-1/2 border-2 border-fuchsia-500 text-fuchsia-300 mb-5 pink rounded"
                required
              />

              <input
                type="text"
                name="Name"
                placeholder="Name"
                className="p-2 md:ml-5 font-semibold md:mb-3 bg-neutral-800 text-cyan-300 focus:outline-yellow-400 w-full md:w-1/2 border-2 border-cyan-400 blue mb-5 rounded"
                required
              />
            </div>

            <textarea
              type="text"
              name="Subject"
              placeholder="Subject"
              className="p-2 text-wrap w-full bg-neutral-800 font-semibold md:mt-8 text-neutral-900 focus:outline-yellow-400 border-2 border-violet-500 text-violet-300 purple flex items-start justify-start h-[5em] rounded"
              required
            />

            <button
              type="submit"
              className="bg-yellow-400 font-bold text-neutral-950 p-1 mt-10 rounded text-neutral-900 hover:bg-yellow-100"
            >
              Submit
            </button>

            {submissionStatus && (
              <p className="text-fuchsia-300 mt-4">{submissionStatus}</p>
            )}
          </form>
        </div>
      </div>


      <div class="bg-neutral-800 pt-20">
        <div class="w-auto flex flex-row justify-center my-3 items-center">
          <div class="w-auto md:px-7 border-4 flex flex-row justify-center my-3 py-5 rounded-xl items-center">
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-fuchsia-400 border-4 flex items-center justify-center bounce"> <a href="https://www.youtube.com/channel/UCF1wX0AqAWlqtwaSraqN6kA"> <FontAwesomeIcon icon={faYoutube} class="fa-2x" style={{ color: '#FF0000', height: '1em' }} /> </a></div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-cyan-400 border-4 flex items-center justify-center bounce"> <a href="https://www.instagram.com/shriya_bi/"> <FontAwesomeIcon icon={faInstagram} class="fa-2x" style={{ color: '#d946ef', height: '1em' }} /> </a></div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce"> <a href="https://www.linkedin.com/in/shriya-biddala/"> <FontAwesomeIcon icon={faLinkedin} class="fa-2x" style={{ color: '#0284c7', height: '1em' }} /> </a></div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-yellow-400 border-4 flex items-center justify-center bounce"> <a href="https://github.com/shriyabi"> <FontAwesomeIcon icon={faGithub} class="fa-2x" style={{ color: '#987cbf', height: '1em' }} /> </a></div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-fuchsia-400 border-4 flex items-center justify-center bounce"> <a href="mailto:shriyarbiddala@gmail.com"> <FontAwesomeIcon icon={faEnvelope} class="fa-2x" style={{ color: '#e8e8e8', height: '1em' }} /> </a></div>
          </div>
        </div>
        <h class="text-yellow-400"> Copyright at Shriya </h>
      </div>
    </div>
  );
}

export default App;
