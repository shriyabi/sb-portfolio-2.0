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
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import forMich from './components/images/ForMichigan.png'; 
import portfolio from './components/images/My Projects.png'; 
import demo from './components/images/Demostration.webm';

function App() {
  //form
    const formRef = useRef(null);
    const [submissionStatus, setSubmissionStatus] = useState(''); // State for submission status
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        const scriptURL = 'https://script.google.com/macros/s/AKfycbwHtv3OLWznGOme3jug3MFsIyvSb3nXWvWkX329gQelRLoSgfjOg8Lgw_qvm2HYgTM/exec';

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

  return (
    <div class = "comfortaa">
      <div class="border-4 border-cyan-300 shadow-2xl bg-neutral-600  flex flex-row justify-center items-center rounded-r-sm w-[50vw] md:w-1/5 pl-1">
        <div class="w-4/5 flex flex-row">
          <h2 class="mr-3 my-1 text-sm rounded-3xl bg-slate-100 px-1"> S </h2>
          <h2 class="text-xl text-slate-100 font-semibold">SHROOGLE</h2>
        </div>
        <div class="w-1/5 items-end flex justify-end px-3 font-semibold text-sm">
          X
        </div>

      </div>
      <div id="Home" class="bg-neutral-800 w-screen min-h-screen px-3 flex-col items-start flex justify-start">

        <div class="rounded-xl my-5 flex flex-row bg-slate-100 shadow-lg pink shadow-fuschia-400 w-full border-4 border-fuchsia-400">
          <div class="w-[2em] rounded-l-lg px-2 mr-2 bg-yellow-300 animate__animated animate__heartBeat animate__delay-2s"> &#128269; </div>
          <TypingAnimation class="bg-slate-100"/>
        </div>
        <div class="w-full px-5 md:p-0 h-full flex flex-col lg:flex-row animate__animated animate__fadeInUp animate__delay-2s">
          <div class="w-full h-auto md:w-auto px-5 py-4 mb-7 purple border-violet-500 mr-5 lg:min-h-screen rounded-xl border-4">
            <div class="sticky top-0 w-full md:w-auto justify-center items-center flex-row lg:flex-col flex text-3xl items-start">
              <a href="#Home" class="zoom-out bg-slate-100 rounded-xl p-1"> &#x1f3e0; </a>
              <a href="#Skills" class="ml-5 md:ml-10 lg:mt-8 lg:ml-0 zoom-out bg-slate-100 rounded-xl p-1"> &#128295; </a>
              <a href="#Experience" class="ml-5 md:ml-10 lg:mt-8 lg:ml-0 zoom-out bg-slate-100 rounded-xl p-1"> &#x1f3eb; </a>
              <a href="#Projects" class="ml-5  md:ml-10 lg:mt-8 lg:ml-0 zoom-out bg-slate-100 rounded-xl p-1"> &#x1f9f3; </a>
              <a href="#Contact" class="ml-5 md:ml-10 lg:mt-8 lg:ml-0 zoom-out bg-slate-100 rounded-xl p-1"> &#x1f4ac; </a>
            </div>
          </div>

          <div class="w-full flex flex-col mr-5">
            <h class="text-5xl font-semibold animate__animated animate__delay-4s animate__rubberBand text-cyan-300"> Shriya Biddala </h>
            <Description />
            <div class="w-full flex flex-col md:flex-row justify-center">
              <div class="w-full flex flex-row justify-start items-end md:items-center md:w-1/2 bg-yellow-400 h-[12em] md:h-[15em]">
                  <img src={shriya} class="shriya w-auto h-full"/>
                  <h class="text-xl mb-5 md:mb-0 md:text-2xl text-slate-100 font-semibold"> Hello! Hola! Namaste! </h>
              </div>
              <div class="w-full mt-5 md:mt-0 md:text-lg md:w-1/2 md:mx-3 mb-10 rounded-lg flex text-end justify-center border-4 blue border-cyan-400 text-slate-100 font-semibold h-auto p-3">
              Hello! I am a Computer Science enthusiast at the University of Michigan's College of Engineering and a freelance full-stack developer, having built websites for organizations like For Michigan and other clients. I have also contributed to several machine learning research projects, including developing a mental health chatbot. My passions lie in artificial intelligence, automation, and creating innovative web applications by blending creativity with technology. As an advocate for equity and diversity in tech, I aim to merge my technical and activist efforts to build equitable AI-driven solutions for under-resourced communities and develop web applications that have a positive social and business impact.</div>
            </div>
            <div class="border-2 mr-5 my-4"></div>

            <div id="Skills" class="w-full flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-7 flex flex-col">
                <h class="text-xl underline font-bold text-violet-500"> SKILLS </h>
                <h class="text-sm mt-3 overline text-fuchsia-500"> Full-Stack Development </h>
                <Skills
                  skillName="ReactJS"
                  year="1 YEAR" />
                <Skills
                  skillName="TailwindCSS"
                  year="1 YEAR" />
                <Skills
                  skillName="HTML + CSS"
                  year="5 YEARS" />
                <Skills
                  skillName="JavaScript"
                  year="3 YEARS" />
                <Skills
                  skillName="Express.js"
                  year="1 YEAR" />
                <Skills
                  skillName="Node.js"
                  year="1 YEAR" />
                <Skills
                  skillName="MySQL"
                  year="1 YEAR" />
                <Skills
                  skillName="GraphQL"
                  year="1 YEAR" />

                <h class="text-sm mt-3 overline text-cyan-400"> SWE </h>
                <Skills
                  skillName="Python"
                  year="4 YEARS" />
                <Skills
                  skillName="C++"
                  year="2 YEARS" />
                <Skills
                  skillName="C"
                  year="1 YEAR" />
                <Skills
                  skillName="Java"
                  year="7 YEARS" />

                <h class="text-sm mt-3 overline text-yellow-400"> AI/ML </h>
                <Skills
                  skillName="PyTorch"
                  year="2 YEARS" />
                <Skills
                  skillName="Pandas"
                  year="2 YEARS" />
                <Skills
                  skillName="Generative LLMs"
                  year="2 YEARS" />
              </div>
              <div class="w-full mt-10 md:mt-0 md:w-1/2">
                <h class='text-xl underline font-bold text-fuchsia-400'> EDUCATION </h>
                <div class="border-purple-400 border-4 purple rounded-xl p-4 my-4 flex flex-col justify-start text-slate-100">
                  <h class="text-lg font-bold">University of Michigan - Ann Arbor</h>
                  <h class="text-base font-semibold italic">Junior, Computer Science Engineering and Electrical Engineering</h>
                  <div class="flex pt-3 flex-col lg:flex-row">
                    <div class="w-full flex flex-col lg:w-1/2 lg:mr-3">
                      <h class="text-sm underline">Coursework:</h>
                      <h class="text-base leading-4">Data Structures and Algorithms</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base ">Robotics Mechanisms</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base leading-4">Introduction to Computer Architecture</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base leading-4">Introduction to Artificial Intelligence</h>
                      <h class="leading-5 text-neutral-700">test </h>
                    </div>
                    <div class="w-full flex flex-col lg:w-1/2">
                      <h class="text-sm underline">Activities:</h>
                      <h class="text-base leading-4">Residential Advisor</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base leading-4">Instructional Aide for Data Structures and Algorithms</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base leading-4">Instructional Aide for Robotics Mechanisms</h>
                      <h class="leading-3 text-neutral-700">test </h>
                      <h class="text-base"> Freelance Full-Stack Developer for For Michigan</h>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-2 mr-5 my-8" id="Projects"></div>
            <h class='text-xl underline text-cyan-300 font-semibold'> PROJECTS + HONORS </h>
            <h class='text-base italic text-yellow-400'> Click each tab to learn more! </h>
            <ProjectsAndHonors />
          </div>
          <div class="border-2 mr-5 my-8" id="Projects"></div>
          <div class="w-full lg:w-1/3 min-h-screen flex flex-col items-end justify-start animate__animated animate__delay-3s animate__slideInRight md:mt-20 lg:mt-0">
            <h2 class='items-start text-cyan-300'> LATEST NEWS </h2>
            <div class="flex flex-col md:flex-row lg:flex-col w-full flex-wrap">
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-cyan-300">For Michigan Website</h3>
                <img src={forMich} class=" w-full h-auto"/>
                <h3></h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-violet-400">My Portfolio V1</h3>
                <img src={portfolio} class=" w-full h-auto"/>
                <h3>More professional Portfolio</h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400 p-3 yellow border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-fuchsia-400">GreenBrother</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/BbTT9nJbXnE" />
                <h3>MHacks 17</h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full my-2 h-auto text-slate-100 border-yellow-400  yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-cyan-400">DocuDog</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/Qq7_72aoV08" />
                <h3>Google x MHacks</h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full text-slate-100 my-2 h-auto border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-violet-400">OneVote</h3>
                <iframe class="w-full h-auto relative" src="https://www.youtube.com/embed/-eGkraEZ6HA" />
                <h3>MHacks 16</h3>
              </div>
              <div class="w-full md:w-1/2 lg:w-full text-slate-100 my-2 h-auto border-yellow-400 yellow p-3 border-4 align-end rounded-xl">
                <h3 class="text-xl overline p-3 text-fuchsia-400">Chatbot for Mental Health Awareness</h3>
                <iframe class="w-full h-auto relative" src={demo} />
              </div>
            </div>
          </div>
        </div>

        <div class="border-2 w-full mb-10" id="Projects"></div>
        <div id="Contact" class="w-full flex justify-center flex-col items-center">
          <h2 class='text-center text-xl underline mb-3 text-yellow-400 font-semibold'> CONTACT </h2>
          <form ref={formRef} onSubmit={handleSubmit} class="px-5 py-7 w-full md:w-4/5 mb-7 border-4 border-slate-100 rounded-lg flex flex-col justify-center flex items-center animated__animate animate__delay-4s animate__fadeIn">
            <div class="w-full flex flex-col md:flex-row justify-center items-center">
              <input

                type="text"
                placeholder="Name"
                class="p-1 md:mr-5 md:mb-3 text-neutral-900 focus:outline-yellow-400 w-full md:w-1/2 border-2 border-fucshia-500 mb-5 pink rounded"
                required
              />

              <input
                type="email"
                placeholder="Email"
                class="p-1 md:ml-5 md:mb-3 text-neutral-900 focus:outline-yellow-400 w-full md:w-1/2 border-2 border-cyan-400 blue mb-5 rounded"
                required
              />
            </div>

            <input
              type="text"
              placeholder="Subject"
              class="p-1 w-full md:mt-8 text-neutral-900 focus:outline-yellow-400 border-2 border-violet-500 purple flex items-start justify-start h-[5em] rounded"
              required
            />

            <button
              type="submit"
              class="bg-yellow-400 text-white p-1 mt-10 rounded text-neutral-900 hover:bg-yellow-100"
            >
              Submit
            </button>
            {submissionStatus && (
                <p className="text-fuchsia-500 mt-4">{submissionStatus}</p>
            )}
          </form>

        </div>
      </div>
 
      <div class="bg-neutral-800 pt-20">
        <div class="w-auto flex flex-row justify-center my-3 items-center">
          <div class="w-auto md:px-7 border-4 flex flex-row justify-center my-3 py-5 rounded-xl items-center">
          <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-cyan-400 border-4 flex items-center justify-center bounce"> <a href="https://www.instagram.com/shriya_bi/"> <FontAwesomeIcon icon={faInstagram} class="fa-2x" style={{ color: '#d946ef', height: '1em'}} /> </a></div>
          <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce"> <a href="https://www.linkedin.com/in/shriya-biddala/"> <FontAwesomeIcon icon={faLinkedin} class="fa-2x" style={{ color: '#0284c7', height: '1em'}} /> </a></div>
          <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-yellow-400 border-4 flex items-center justify-center bounce"> <a href="https://github.com/shriyabi"> <FontAwesomeIcon icon={faGithub} class="fa-2x" style={{ color: '#f9fafb', height: '1em'}} /> </a></div>
          <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-fuchsia-400 border-4 flex items-center justify-center bounce"> <a href="mailto:shriyarbiddala@gmail.com"> <FontAwesomeIcon icon={faEnvelope} class="fa-2x" style={{ color: '#ffffff', height: '1em'}} /> </a></div>
        </div>
        </div>
        <h class="text-yellow-400"> Copyright at Shriya </h>
      </div>
    </div>
  );
}

export default App;
