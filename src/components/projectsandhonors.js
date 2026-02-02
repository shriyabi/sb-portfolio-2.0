import { useState } from "react";
import Project from "./projects"; 
import Award from "./awards";
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faTerminal } from '@fortawesome/free-solid-svg-icons';
import forMich from './images/ForMichigan.png';
import ai from './images/aihandwritingmodel.png';
import robo from './images/EdgeDetection.webp';
import oneVote from './images/oneVote.png';
import greenBro from './images/greenBrother.png';
import plannerIo from './images/plannerIo.png';
import medChatbot from './images/medChatbot.png';
import docuDog from './images/docuDog.png';
import deadlineTracker from './images/deadlineTracker.png';
import architext from './images/architext.png';
import ar from './images/convosenses.png';
import demo from './images/Demostration.webm';
import budget from './images/budgetApp.png'; 

import { faTrophy, faAward, faCertificate, faStar, faCode } from '@fortawesome/free-solid-svg-icons';

function ProjectsAndHonors() {
  const [activeTab, setActiveTab] = useState("projects");
  const [expandedProject, setExpandedProject] = useState(null); 

  const projects = [
    {
      awardName: "For Michigan Website",
      awardDescription: "The official website for the For Michigan non-profit organization, embedded with interactive features, such as color changing background on click, and personalized voting information pages for each college. Includes a 300-person staff directory using MySQL.",
      skills: "HTML, CSS, JavaScript, MySQL, Node.js",
      imgUrl: "forMich",
      imgUrlforProj: forMich,
      github: "https://github.com/shriyabi/for_michigan_website",
    },
    {
      awardName: "🏆 OneVote",
      awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations. 🏆 Best Hack for Social Impact: 3rd Place",
      skills: "HTML/CSS, GPT-4 API, TF-IDF",
      imgUrl: "oneVote",
      imgUrlforProj: oneVote,
      devpost: "https://devpost.com/software/onevote-lsp7eu",
      youtube: "https://www.youtube.com/watch?v=-eGkraEZ6HA",
    },
    {
      awardName: "GreenBrother",
      awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations.",
      skills: "ReactJS, React Native, TailwindCSS",
      imgUrl: "greenBrother",
      imgUrlforProj: greenBro,
      devpost: "https://devpost.com/software/greenbrother",
      github: "https://github.com/shriyabi/3PeasInAPod",
      youtube: "https://www.youtube.com/watch?v=BbTT9nJbXnE"
    },
    {
      awardName: "DocuDog",
      awardDescription: "Web application with generative artifical intelligence to help people to get summaries of particular features of important documents.",
      skills: "Python, Gemini 1.5 Pro API, Prompt Engineering",
      imgUrl: "docuDog",
      imgUrlforProj: docuDog,
      devpost: "https://devpost.com/software/docudog",
      youtube: "https://www.youtube.com/watch?v=Qq7_72aoV08"
    },
    {
      awardName: "Chatbot for Mental Health Awareness",
      awardDescription: "A chatbot utilizing generative AI and Google Search API to provide responses and resources to mental health questions.",
      skills: "PyTorch, Python, Kaggle, Google Cloud, RNNs",
      imgUrl: "demo",
      imgUrlforProj: demo,
      videoUrl: demo,
      youtube: "https://www.youtube.com/watch?v=Afk6gSBdXUg"
    },
    {
      awardName: "A.I. Handwriting Transformer Model",
      awardDescription: "An application with a visually-appleasing user interface with an integrated model developed using OpenCV and PyTorch to detect handwritten components.",
      skills: "OpenCV, PyTorch, HTML/CSS/JS, Express.js",
      imgUrl: "ai",
      imgUrlforProj: ai,
    },
    {
      awardName: "ArchiText",
      awardDescription: "VSCode extension that creates and inserts AI-generated code documentation with the click of one button.",
      skills: "JavaScript, VSCode API, Python, Llama API",
      imgUrl: "architext",
      imgUrlforProj: architext,
      github: "https://github.com/shriyabi/SparthackX",
      devpost: "https://devpost.com/software/architext",
      youtube: "https://www.youtube.com/watch?v=HxY2zq5rcqk&t=1s"
    },
    {
      awardName: "Planner.io",
      awardDescription: "A website to plan out the week with a task checklist, integrated timer, ability to catagorize tasks based on time priority.",
      skills: "React.js, TailwindCSS, Node.js, Google Task API",
      imgUrl: "plannerIo",
      imgUrlforProj: plannerIo,
      website: "https://shriyabi.github.io/Planner.io/",
      github: "https://github.com/shriyabi/Planner.io"
    },
    {
      awardName: "Deadline Tracker",
      awardDescription: "Upload string of events for Gemma/Gemini to extract the event name, time, and date and format it for Google Calendar.",
      skills: "React.js, Gemma, Render, Google Calendar API, FastAPI",
      imgUrl: "deadline",
      imgUrlforProj: deadlineTracker,
      website: "https://shriyabi.github.io/deadline_tracker_more/",
      github: "https://github.com/shriyabi/deadline_tracker_more",
    },
    {
      awardName: "Encourage-mint",
      awardDescription: "Build budgets and track your expenses with one app.",
      skills: "React.js, Tailwind, Render, Gemini 3, Google Sheets, FastAPI",
      imgUrl: "budget",
      imgUrlforProj: budget,
      website: "https://shriyabi.github.io/budgeting-app-vite/",
      github: "https://github.com/shriyabi/budgeting-app-vite",
    },
    {
      awardName: "Chatbot for Medical Condition Awareness",
      awardDescription: "Chatbot to accept symptoms and questions about medican conditions and recieve more information.",
      skills: "BioBERT, PyTorch, Fine-tuning, Attention",
      imgUrl: "medChatbot",
      imgUrlforProj: medChatbot,
    },
    {
      awardName: "RoboPicasso",
      awardDescription: "OpenCV + Canary Line detection to detect edges of any given object in view for the robot to trace.",
      skills: "OpenCV",
      imgUrl: "robo",
      imgUrlforProj: robo,
      github: "https://github.com/ElemelonWind/robo-picasso"
    },
    {
      awardName: "🏆 ConvoSenses",
      awardDescription: "AR Intelligent Public Speaking Coach with a user-dashboard that displays real-time feedback. 🏆 Best Use of Snap AR: 2nd Place",
      skills: "LangChain, Gemini API, ReactJS",
      imgUrl: "ar",
      imgUrlforProj: ar,
      github: "https://github.com/MatchaOnMuffins/MHacks25",
      youtube: "https://www.youtube.com/watch?v=YTZotjnA4ok",
      devpost: "https://devpost.com/software/conversenses"
    },
    
    {
      awardName: "Vision Transformer (ViT) Classifier",
      awardDescription: "Fine-tuned a Vision Transformer for dog breed classification. Experimented with frozen CNN layers to leverage Transfer Learning , implemented custom data augmentation, and optimized the ADAM optimizer to prevent overfitting.",
      skills: "PyTorch, Vision Transformers, Transfer Learning, Hyperparameter Tuning",
      type: "school",
      className: "eecs445",
      honorCode: true
    },
    {
      awardName: "ICU Clinical Prediction Model",
      awardDescription: "Engineered a robust Logistic Regression classifier for ICU patient data. Implemented advanced feature engineering including KNN-based imputation, Polynomial feature expansion, and statistical aggregation to mitigate outlier influence.",
      skills: "Python, Scikit-learn, KNN Imputation, Feature Engineering",
      type: "school",
      className: "eecs445",
      honorCode: true
    },
    {
      awardName: "Neural Question Answering System",
      awardDescription: "Designed a Recurrent Neural Network (RNN) to tackle question answering tasks. Also trained Logistic Regression models to evaluate the coherence and consistency of automated text summarization systems.",
      skills: "Python, PyTorch, RNNs, Logistic Regression, NLP",
      type: "school",
      className: "eecs487",
      honorCode: true
    },
    {
      awardName: "Dense Vector Text Classifier",
      awardDescription: "Implemented a Feed-Forward Neural Network (FFNN) leveraging pretrained GloVe word embeddings. Explored vector semantics to train dense vector representations for text classification tasks.",
      skills: "Python, PyTorch, GloVe Embeddings, FFNN",
      type: "school",
      className: "eecs487",
      honorCode: true
    },
    {
      awardName: "N-Gram Language Models & Naive Bayes",
      awardDescription: "Developed character-level and word-level n-gram models to generate synthetic Yelp reviews. Built a Naive Bayes classifier to distinguish between legitimate news headlines and clickbait with high accuracy.",
      skills: "C, N-Grams, Naive Bayes, Probability Modeling",
      type: "school",
      className: "eecs487",
      honorCode: true 
    },
    {
      awardName: "Virtual Memory Pager",
      awardDescription: "A robust virtual memory management unit written in C++ handling page faults, swap space management, and clock eviction algorithms. Implemented distinct layers for physical memory and disk synchronization.",
      skills: "C++, OS Internals, Paging Algorithms, Mutexes",
      type: "school", 
      className: "eecs482",
      honorCode: true 
    },
    {
      awardName: "Thread-Safe File System",
      awardDescription: "Hierarchical file system supporting concurrent access via fine-grained locking. Features crash consistency through journaling and inode-based metadata management.",
      skills: "C++, Multi-threading, Inodes, Journaling",
      type: "school",
      className: "eecs482",
      honorCode: true
    },

    {
      awardName: "Assembler & Linker",
      awardDescription: "Built a two-pass assembler to translate custom assembly into machine code and a linker to resolve external symbol dependencies across multiple object files.",
      skills: "C, Binary Translation, Symbol Tables",
      type: "school",
      className: "eecs370",
      honorCode: true
    },
  ];

  const schoolProjects = projects.filter(p => p.type === "school");

  const hackathonProjects = [
    projects.find(p => p.awardName === "🏆 OneVote"),
    projects.find(p => p.awardName === "GreenBrother"),
    projects.find(p => p.awardName === "DocuDog"),
    projects.find(p => p.awardName === "ArchiText"),
    projects.find(p => p.awardName === "🏆 ConvoSenses"),
  ];

  const clientProjects = [
    projects.find(p => p.awardName === "For Michigan Website"),
    projects.find(p => p.awardName === "Chatbot for Mental Health Awareness"),
    projects.find(p => p.awardName === "A.I. Handwriting Transformer Model")
  ];

  const personalProjects = projects.filter(
    p => !hackathonProjects.includes(p) && !clientProjects.includes(p) && p.type !== "school"
  );

  return (
    <div className="w-full mb-7 px-4">
      
      <div className="w-full rounded-t-lg flex flex-row bg-fuchsia-200 text-slate-100 text-xl">
        <h3
          onClick={() => { setActiveTab("projects"); setExpandedProject(null); }}
          className={`py-2 px-1 hover:bg-cyan-100 text-neutral-700 text-xl rounded-t-lg cursor-pointer ${activeTab === "projects" ? "bg-yellow-400" : "bg-cyan-400"}`}
        >
          PROJECTS
        </h3>
        <h3
          onClick={() => { setActiveTab("honors"); setExpandedProject(null); }}
          className={`py-2 px-1 ml-1 hover:bg-cyan-100 text-neutral-700 text-xl cursor-pointer ${activeTab === "honors" ? "bg-yellow-400" : "bg-cyan-400"}`}
        >
          HONORS
        </h3>
      </div>

      <div className="w-full flex flex-row bg-slate-100 rounded-b-lg min-h-[300px]">
        
        {activeTab === "honors" ? (
          <div className="w-full p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faTrophy} className="text-yellow-500 text-xl" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">ADUE Teaching Award</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Nominated by students and awarded to the Robotics Mechanisms Teaching Team for providing an exceptional teaching experience to students.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-fuchsia-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-fuchsia-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faAward} className="text-fuchsia-500 text-xl" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">NCWIT Aspirations in Computing</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">
                 <span className="font-bold text-fuchsia-600">National Honorable Mention 2023.</span> Awarded to the top tier of high school female/nonbinary students displaying exemplary work in Computer Science.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-cyan-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-cyan-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faStar} className="text-cyan-500 text-xl" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">MHacks Social Impact Award</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">
                 <span className="font-bold text-cyan-600">3rd Place Winner.</span> Awarded $200 for our civic-engagement focused website, OneVote, recognizing its potential for social good.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-violet-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-violet-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCertificate} className="text-violet-500 text-xl" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">Colorado Seal of Biliteracy</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">
                 Endorsement in Spanish. Awarded to students who have taken Spanish and English through Level 5 and maintained an average GPA of 3.0+.
               </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border-l-8 border-yellow-400 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
               <div className="flex items-center gap-4 mb-3">
                 <div className="w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faCode} className="text-yellow-500 text-xl" />
                 </div>
                 <h3 className="text-lg font-bold text-slate-800">TI Codes Contest</h3>
               </div>
               <p className="text-slate-600 text-sm leading-relaxed">
                 One of five teams who received an <span className="font-bold text-yellow-600">honorable mention</span> in the finalist round, selected from 64 teams through four rounds of development.
               </p>
            </div>

          </div>
        )
        
        : expandedProject !== null ? (
          <div className="w-full flex flex-col md:flex-row bg-fuchsia-50 rounded-b-md shadow-md">
            
            {/* media */}
            <div className="w-full p-4 bg-violet-500 md:w-1/2 flex flex-col items-center justify-center rounded-bl-md min-h-[300px]">
               {/* filter out school projects based on honor code */}
              {projects[expandedProject].honorCode ? (
                <div className="text-center p-6 border-4 border-white/20 rounded-xl bg-violet-600">
                  <FontAwesomeIcon icon={faLock} className="text-6xl text-violet-200 mb-4" />
                  <h3 className="text-xl font-bold text-white">Source Code Confidential</h3>
                  <p className="text-violet-200 mt-2 text-sm max-w-xs mx-auto">
                    Code cannot be shared publicly due to University of Michigan's College of Engineering Honor Code
                  </p>
                </div>
              ) 
              : projects[expandedProject].website ? (
                 <div className="w-full h-full flex flex-col items-center">
                    <iframe 
                      src={projects[expandedProject].website} 
                      className="w-full flex-grow bg-white rounded-md border border-gray-300 mb-4" 
                      title={projects[expandedProject].awardName}
                      style={{ minHeight: '300px' }}
                    ></iframe>
                    
                    <a
                      href={projects[expandedProject].website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-fuchsia-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition-colors"
                    >
                      Open Application in New Tab
                    </a>
                 </div>
              )
              : projects[expandedProject].videoUrl ? (
                <video controls className="w-full h-full object-cover rounded-md">
                  <source src={projects[expandedProject].videoUrl} type="video/mp4" />
                </video>
              ) : projects[expandedProject].youtube ? (
                <iframe
                  className="w-full h-64 md:h-full rounded-md"
                  src={projects[expandedProject].youtube.replace("watch?v=", "embed/")}
                  title={projects[expandedProject].awardName}
                  frameBorder="0"
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
            
            {/* description */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl text-cyan-500 font-extrabold mb-2">
                  {projects[expandedProject].awardName}
                </h2>
                <p className="text-base">{projects[expandedProject].awardDescription}</p>

                <div className="mt-5">
                  <p className="font-bold text-fuchsia-600 text-sm mb-2 uppercase tracking-wide">Skills: </p>
                  <div className="flex flex-wrap gap-2">
                    {projects[expandedProject].skills.split(',').map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs font-bold rounded-full border border-fuchsia-200 shadow-sm">
                        {skill.trim()}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setExpandedProject(null)}
                  className="bg-yellow-400 hover:bg-yellow-600 hover:text-fuchsia-50 hover:font-bold text-neutral-700 px-4 py-2 rounded shadow-sm"
                >
                  Close
                </button>

                {/* Icons */}
                <div className="flex space-x-4">
                  {projects[expandedProject].github && (
                    <a href={projects[expandedProject].github} target="_blank" rel="noopener noreferrer">
                      <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                        <FontAwesomeIcon icon={faGithub} className="fa-lg" style={{ color: '#987cbf', height: '1em' }} />
                      </div>
                    </a>
                  )}
                  {projects[expandedProject].youtube && (
                    <a href={projects[expandedProject].youtube} target="_blank" rel="noopener noreferrer">
                       <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                        <FontAwesomeIcon icon={faYoutube} className="fa-lg" style={{ color: '#FF0000', height: '1em' }} />
                      </div>
                    </a>
                  )}
                  {projects[expandedProject].devpost && (
                    <a href={projects[expandedProject].devpost} target="_blank" rel="noopener noreferrer">
                      <div className="icons w-[2.25em] h-[2.25em] rounded-3xl border-violet-500 border-4 flex items-center justify-center bounce">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg" className="p-1">
                          <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" fill="#003E54"/>
                        </svg>
                      </div>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ) 
        
        : (
          <div className="flex flex-col w-full pb-8">
            
            {/* 1. personal */}
            <h2 className="text-lg font-black text-violet-600 overline pl-5 pt-5"> Personal Projects</h2>
            <div className="flex flex-wrap justify-start">
               {personalProjects.map((project) => (
                <div key={project.awardName} className="w-1/2 md:w-1/3 lg:w-1/4 p-3 flex flex-col justify-start items-center text-center hover:scale-105 transition-transform duration-300">
                  <Award awardName={project.awardName} imgUrl={project.imgUrl} className="w-[90%] h-[200px] object-cover rounded-lg shadow-md" />
                  <button onClick={() => {
                      const originalIndex = projects.findIndex(p => p.awardName === project.awardName);
                      setExpandedProject(originalIndex);
                    }} className="mt-1 text-violet-600 font-medium hover:text-violet-800">
                    Read More
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full border-t-2 border-slate-300 my-4 opacity-50"></div>

            {/* 2. hackathon */}
            <h2 className="text-lg font-black text-violet-600 overline pl-5 pt-2"> Hackathon Projects</h2>
            <div className="flex flex-wrap justify-start">
               {hackathonProjects.map((project) => (
                <div key={project.awardName} className="w-1/2 md:w-1/3 lg:w-1/4 p-3 flex flex-col justify-start items-center text-center hover:scale-105 transition-transform duration-300">
                  <Award awardName={project.awardName} imgUrl={project.imgUrl} />
                  <button onClick={() => {
                      const originalIndex = projects.findIndex(p => p.awardName === project.awardName);
                      setExpandedProject(originalIndex);
                    }} className="mt-1 text-violet-600 font-medium hover:text-violet-800">
                    Read More
                  </button>
                </div>
              ))}
            </div>

            <div className="w-full border-t-2 border-slate-300 my-4 opacity-50"></div>

            {/* 3. client proj */}
            <h2 className="text-lg font-black text-violet-600 overline pl-5 pt-2"> Client Projects</h2>
            <div className="flex flex-wrap justify-start">
              {clientProjects.map((project) => (
                <div key={project.awardName} className="w-1/2 md:w-1/3 lg:w-1/4 p-3 flex flex-col justify-start items-center text-center hover:scale-105 transition-transform duration-300">
                  <Award awardName={project.awardName} imgUrl={project.imgUrl} className="w-[90%] h-[200px] object-cover rounded-lg shadow-md" />
                  <button onClick={() => {
                      const originalIndex = projects.findIndex(p => p.awardName === project.awardName);
                      setExpandedProject(originalIndex);
                    }} className="mt-1 text-violet-600 font-medium hover:text-violet-800">
                    Read More
                  </button>
                </div>
              ))}
            </div>


          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectsAndHonors;