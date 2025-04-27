import { useState } from 'react';
import Project from './projects'; 
import Award from './awards';

function Modal({ isOpen, onClose, project }) {
    if (!isOpen) return null; //make sure model is not open
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center lg:items-end justify-center">
            <div className="bg-white p-5 rounded-md max-w-md w-full">
                <h2 className="text-2xl overline text-cyan-500 font-bold mb-2">{project.awardName}</h2>
                <p>{project.awardDescription}</p>
                <p className='italic text-sm pt-3'>SKILLS: {project.skills}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-yellow-500 text-neutral-700 text-white px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}

function ProjectsAndHonors() {
    const [activeTab, setActiveTab] = useState('projects');
    const [modalOpen, setModalOpen] = useState(false);
    const [currentProject, setCurrentProject] = useState(null);

    const handleReadMore = (project) => {
        setCurrentProject(project);
        setModalOpen(true);
    };

    const projects = [
        {
            awardName: "For Michigan Website",
            awardDescription: "The official website for the For Michigan non-profit organization, embedded with interactive features, such as color changing background on click, and personalized voting information pages for each college. Includes a 300-person staff directory using MySQL. Check it out at www.4mich.org.",
            skills:"HTML, CSS, JavaScript, TailwindCSS, GoogleAPI, MySQL, Node.js, Express.js",
            imgUrl: "forMich"
        },
        {
            awardName: "OneVote",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            skills:"HTML/CSS, GPT-4 API", 
            imgUrl: "onevote"
        },
        {
            awardName: "GreenBrother",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            skills:"ReactJS, React Native, TailwindCSS",
            imgUrl: "greenbro"
        },
        {
            awardName: "DocuDog",
            awardDescription: "Web application with generative artifical intelligence to help people to get summaries of particular features of important documents.",
            skills:"Python, Gemini 1.5 Pro API, LLM Prompt Engineering",
            imgUrl: "docudog"
        },
        {
            awardName: "Chatbot for Mental Health Awareness",
            awardDescription: "A chatbot utilizing generative AI and Google Search API to provide responses and resources to mental health questions.",
            skills:"PyTorch, Python, Kaggle, Pandas, Google Cloud, Google Search API, RNNs",
            imgUrl: "demo"
        },
        {
            awardName: "A.I. Handwriting Transformer Model",
            awardDescription: "An application with a visually-appleasing user interface with an integrated model developed using OpenCV and PyTorch to detect handwritten components and convert into a .txt file.",
            skills:"OpenCV, PyTorch, HTML/CSS/JS, Express.js",
            imgUrl: "ai"
        },
        {
            awardName: "ArchiText",
            awardDescription: "VSCode extension that creates and inserts AI-generated code documentation with the click of one button.",
            skills:"JavaScript, VSCode API, CodeLens, Python, Llama API",
            imgUrl: "architext"
        },
        {
            awardName: "Planner.io",
            awardDescription: "A website to plan out the week with a task checklist, integrated timer, ability to catagorize tasks based on time priority, and the feature to change themes.",
            skills:"React.js, TailwindCSS, Node.js",
            imgUrl: "planner"
        },
        
    ];

    return (
        <div className="w-full mb-7">
            <div className="w-full rounded-t-lg flex flex-row bg-fuchsia-200 text-slate-100 text-xl">
                <h3
                    onClick={() => setActiveTab('projects')}
                    className={`py-2 px-1 hover:bg-cyan-100 text-neutral-700 text-xl cursor-pointer ${activeTab === 'projects' ? 'bg-yellow-400' : 'bg-cyan-400'}`}>
                    PAST PROJECTS
                </h3>
                <h3
                    onClick={() => setActiveTab('honors')}
                    className={`py-2 px-1 ml-1 hover:bg-cyan-100 text-neutral-700 text-xl cursor-pointer ${activeTab === 'honors' ? 'bg-yellow-400' : 'bg-cyan-400'}`}>
                    HONORS
                </h3>
            </div>

            <div className="w-full flex flex-col md:flex-row bg-slate-100 rounded-b-lg">
                {activeTab === 'honors' ? (
                    // HONORS content
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
                ) : (
                    // PAST PROJECTS content
                    <>
    <div className="flex flex-wrap justify-start">
        {projects.map((project, index) => (
            <div key={index} className="w-1/2 md:w-1/4 p-5 flex flex-col justify-between items-center text-center max-h-2/3">
                <Award
                    awardName={project.awardName}
                    imgUrl={project.imgUrl} 
                />
                <button
                    onClick={() => handleReadMore(project)}
                    className="mt-2 text-violet-500 underline">
                    Read More
                </button>
            </div>
        ))}
    </div>
</>

                )}
            </div>

            <Modal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
                project={currentProject}
            />
        </div>
    );
}

export default ProjectsAndHonors;
