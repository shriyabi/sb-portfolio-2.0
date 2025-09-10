import { useState } from "react";
import Project from "./projects";
import Award from "./awards";
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import forMich from './images/ForMichigan.png';
import ai from './images/aihandwritingmodel.png';
import robo from './images/EdgeDetection.webp';
import portfolio from './images/My Projects.png';
import demo from './images/Demostration.webm';
import planner from './images/Demostration.webm';
import oneVote from './images/oneVote.png';
import greenBro from './images/greenBrother.png'; 
import plannerIo from './images/plannerIo.png'; 
import medChatbot from './images/medChatbot.png'; 
import docuDog from './images/docuDog.png'; 
import deadlineTracker from './images/deadlineTracker.png'; 
import architext from './images/architext.png'; 
import chatBot from './images/chatBot.png';

function ProjectsAndHonors() {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedProject, setExpandedProject] = useState(null); // project index

  const projects = [
    {
      awardName: "For Michigan Website",
      awardDescription:
        "The official website for the For Michigan non-profit organization, embedded with interactive features, such as color changing background on click, and personalized voting information pages for each college. Includes a 300-person staff directory using MySQL. Check it out at www.4mich.org.",
      skills:
        "HTML, CSS, JavaScript, TailwindCSS, GoogleAPI, MySQL, Node.js, Express.js",
      imgUrl: "forMich",
      imgUrlforProj: forMich,
      videoUrl: "",
      github: "https://github.com/shriyabi/for_michigan_website",
      youtube: "",
    },
    {
      awardName: "OneVote",
      awardDescription:
        "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
      skills: "HTML/CSS, GPT-4 API, TF-IDF",
      imgUrl: "oneVote",
      imgUrlforProj: oneVote,
      videoUrl: "",
      devpost: "https://devpost.com/software/onevote-lsp7eu",
      youtube: "https://www.youtube.com/watch?v=-eGkraEZ6HA",
    },
    {
      awardName: "GreenBrother",
      awardDescription:
        "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
      skills: "ReactJS, React Native, TailwindCSS",
      imgUrl: "greenBrother",
      imgUrlforProj: greenBro,
      devpost: "https://devpost.com/software/greenbrother",
      github: "https://github.com/shriyabi/3PeasInAPod",
      youtube: "https://www.youtube.com/watch?v=BbTT9nJbXnE"
    },
    {
      awardName: "DocuDog",
      awardDescription:
        "Web application with generative artifical intelligence to help people to get summaries of particular features of important documents.",
      skills: "Python, Gemini 1.5 Pro API, LLM Prompt Engineering",
      imgUrl: "docudog",
      imgUrlforProj: docuDog,
      devpost: "https://devpost.com/software/docudog",
      youtube: "https://www.youtube.com/watch?v=Qq7_72aoV08"
    },
    {
      awardName: "Chatbot for Mental Health Awareness",
      awardDescription:
        "A chatbot utilizing generative AI and Google Search API to provide responses and resources to mental health questions.",
      skills:
        "PyTorch, Python, Kaggle, Pandas, Google Cloud, Google Search API, RNNs",
      imgUrl: "demo",
      imgUrlforProj: chatBot,
      youtube: "https://www.youtube.com/watch?v=Afk6gSBdXUg&t=1s"
    },
    {
      awardName: "A.I. Handwriting Transformer Model",
      awardDescription:
        "An application with a visually-appleasing user interface with an integrated model developed using OpenCV and PyTorch to detect handwritten components and convert into a .txt file.",
      skills: "OpenCV, PyTorch, HTML/CSS/JS, Express.js",
      imgUrl: "ai",
      imgUrlforProj: ai,
    },
    {
      awardName: "ArchiText",
      awardDescription:
        "VSCode extension that creates and inserts AI-generated code documentation with the click of one button.",
      skills: "JavaScript, VSCode API, CodeLens, Python, Llama API",
      imgUrl: "architext",
      imgUrlforProj: architext,
      github: "https://github.com/shriyabi/SparthackX",
      devpost: "https://devpost.com/software/architext", 
      youtube: "https://www.youtube.com/watch?v=HxY2zq5rcqk&t=1s"
    },
    {
      awardName: "Planner.io",
      awardDescription:
        "A website to plan out the week with a task checklist, integrated timer, ability to catagorize tasks based on time priority, and the feature to change themes.",
      skills: "React.js, TailwindCSS, Node.js, Google Task API, Google Oauth",
      imgUrl: "plannerIo",
      imgUrlforProj: plannerIo,
      github: "https://github.com/shriyabi/Planner.io"
    },
    {
        awardName: "Deadline Tracker",
        awardDescription: "Track deadlines", 
        skills: "React.js, TailwindCSS, Node.js, Gemma, Google Calendar API, Gogle OAuth, Named Entity Recognition, FastAPI",
        imgUrl: "deadline",
        imgUrlforProj: deadlineTracker,
        github: "https://github.com/shriyabi/deadline_tracker"
      },
      {
        awardName: "Chatbot for Medical Condition Awareness",
        awardDescription: "Chatbot to accept symptoms and questions about medican conditions and recieve more information.",
        skills: "BioBERT, PyTorch, Fine-tuning keyword extraction, Attention",
        imgUrl: "medChatbot",
        imgUrlforProj: medChatbot,
      },
      {
        awardName: "RoboPicasso",
        awardDescription:"OpenCV + Canary Line detection to detect edges of any given object in view for the robot to trace.",
        skills: "OpenCV",
        imgUrl: "robo",
        imgUrlforProj: robo,
        github: "https://github.com/ElemelonWind/robo-picasso"
      },
  ];

  return (
    <div className="w-full mb-7">
      {/* Tabs */}
      <div className="w-full rounded-t-lg flex flex-row bg-fuchsia-200 text-slate-100 text-xl">
        <h3
          onClick={() => {
            setActiveTab("projects");
            setExpandedProject(null);
          }}
          className={`py-2 px-1 hover:bg-cyan-100 text-neutral-700 text-xl cursor-pointer ${
            activeTab === "projects" ? "bg-yellow-400" : "bg-cyan-400"
          }`}
        >
          PAST PROJECTS
        </h3>
        <h3
          onClick={() => {
            setActiveTab("honors");
            setExpandedProject(null);
          }}
          className={`py-2 px-1 ml-1 hover:bg-cyan-100 text-neutral-700 text-xl cursor-pointer ${
            activeTab === "honors" ? "bg-yellow-400" : "bg-cyan-400"
          }`}
        >
          HONORS
        </h3>
      </div>
      <div className="w-full flex flex-row bg-slate-100 rounded-b-lg min-h-[300px]">
        {activeTab === "honors" ? (
          // HONORS list
          <>
            <Project
              awardName="ADUE Teaching Award"
              awardDescription="Nominated by students and awarded to the Robotics Mechanisms Teaching Team for providing an exceptional teaching experience to students."
              imgUrl=""
            />
            <Project
              awardName="NCWIT Aspirations in Computing National Honorable Mention 2023"
              awardDescription="Awarded to 360 high school female/nonbinary students displaying exemplary work in Computer Science"
              imgUrl=""
            />
            <Project
              awardName="MHacks 2023 optiMize Social Impact Award: 3rd Place"
              awardDescription="Awarded $200 for our civic-engagement focused website, OneVote."
              imgUrl=""
            />
            <Project
              awardName="Colorado Seal of Biliteracy Endorsement in Spanish"
              awardDescription="Awarded to students who have taken Spanish and English through Level 5 and maintained an average GPA of 3.0+ in both English and Spanish courses."
              imgUrl=""
            />
            <Project
              awardName="2021 Texas Instruments Codes Contest"
              awardDescription="One of five teams who received an honorable mention in the finalist round, and selected from 64 teams through four rounds of development in the contest."
              imgUrl=""
            />
          </>
) : expandedProject !== null ? (
    <div className="w-full flex flex-col md:flex-row bg-fuchsia-50 rounded-b-md shadow-md">
      {/* Left side: video/image */}
      {(projects[expandedProject].videoUrl || projects[expandedProject].youtube || projects[expandedProject].imgUrlforProj) && (
        <div className="w-full p-4 bg-violet-500 md:w-1/2 flex items-center justify-center rounded-bl-md">
          {projects[expandedProject].videoUrl ? (
            <video controls className="w-full h-full object-cover rounded-md">
              <source src={projects[expandedProject].videoUrl} type="video/mp4" />
            </video>
          ) : projects[expandedProject].youtube ? (
            <iframe
              className="w-full h-full rounded-md"
              src={projects[expandedProject].youtube.replace("watch?v=", "embed/")}
              title={projects[expandedProject].awardName}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : projects[expandedProject].imgUrlforProj ? (
            <img
              src={projects[expandedProject].imgUrlforProj}
              alt={projects[expandedProject].awardName}
              className="w-full h-full object-cover rounded-md"
            />
          ) : null}
        </div>
      )}
  
      {/* Right side: text + buttons */}
      <div className={`w-full ${projects[expandedProject].videoUrl || projects[expandedProject].imgUrlforProj ? 'md:w-1/2' : ''} p-6 flex flex-col justify-between`}>
        <div>
          <h2 className="text-2xl text-cyan-500 font-bold mb-2">
            {projects[expandedProject].awardName}
          </h2>
          <p>{projects[expandedProject].awardDescription}</p>
          <p className="italic font-semibold text-sm text-fuchsia-500 pt-3">
            SKILLS: {projects[expandedProject].skills}
          </p>
        </div>
  
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setExpandedProject(null)}
            className="bg-yellow-400 hover:bg-yellow-600 hover:text-fuchsia-50 hover:font-bold text-neutral-700 px-4 py-2 rounded"
          >
            Close
          </button>
  
          {/* Icons */}
          <div className="flex space-x-4">
            {projects[expandedProject].github && (
              <a href={projects[expandedProject].github} target="_blank" rel="noopener noreferrer">
                <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                  <FontAwesomeIcon icon={faGithub} className="fa-lg" style={{ color: '#987cbf', height: '1em'}} />
                </div>
              </a>
            )}
  
            {projects[expandedProject].youtube && (
              <a href={projects[expandedProject].youtube} target="_blank" rel="noopener noreferrer">
                <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                  <FontAwesomeIcon icon={faYoutube} className="fa-lg" style={{ color: '#FF0000', height: '1em'}} />
                </div>
              </a>
            )}
  
            {projects[expandedProject].devpost && (
              <a href={projects[expandedProject].devpost} target="_blank" rel="noopener noreferrer">
                <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z"/>
                  </svg>
                </div>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
  
          // PROJECTS grid
          <div className="flex flex-wrap justify-start">
            {projects.map((project, index) => (
              <div
                key={index}
                className="w-1/2 md:w-1/4 p-5 flex flex-col justify-between items-center text-center"
                style={{ minHeight: "300px" }}
              >
                <Award awardName={project.awardName} imgUrl={project.imgUrl} />
                <button
                  onClick={() => setExpandedProject(index)}
                  className="mt-2 text-violet-500 underline"
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsAndHonors;
