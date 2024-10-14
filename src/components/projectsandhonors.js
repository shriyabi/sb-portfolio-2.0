import { useState } from 'react';
import Project from './projects'; 
import Award from './awards';
function Modal({ isOpen, onClose, project }) {
    if (!isOpen) return null; //make sure model is not open
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-5 rounded-md max-w-md w-full">
                <h2 className="text-2xl overline text-red-900 font-bold mb-2">{project.awardName}</h2>
                <p>{project.awardDescription}</p>
                <p className='italic text-sm pt-3'>SKILLS: {project.skills}</p>
                <button
                    onClick={onClose}
                    className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
                    Close
                </button>
            </div>
        </div>
    );
}

function ProjectsAndHonors() {
    const [activeTab, setActiveTab] = useState('honors');
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
            skills:"HTML, CSS, JS, TailwindCSS, GoogleAPI",
            imgUrl: ""
        },
        {
            awardName: "OneVote",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "GreenBrother",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "DocuDog",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "Chatbot for Mental Health Awareness",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "A.I. Handwriting Transformer Model",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "RoboPicasso",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        {
            awardName: "BioKnee",
            awardDescription: "Web application for local elections awareness with a conversational agent answering questions and guiding users to polling stations, offering details on ongoing elections, and providing access to candidate websites.",
            imgUrl: ""
        },
        
    ];

    return (
        <div className="w-full mb-7">
            <div className="w-full rounded-t-lg flex flex-row bg-red-200 text-slate-100 text-xl">
                <h3
                    onClick={() => setActiveTab('projects')}
                    className={`py-2 px-1 hover:bg-red-100 hover:text-red-900 text-slate-100 text-xl cursor-pointer ${activeTab === 'projects' ? 'bg-red-500' : 'bg-red-700'}`}>
                    PAST PROJECTS
                </h3>
                <h3
                    onClick={() => setActiveTab('honors')}
                    className={`py-2 px-1 ml-1 hover:bg-red-100 hover:text-red-900 text-slate-100 text-xl cursor-pointer ${activeTab === 'honors' ? 'bg-red-500' : 'bg-red-700'}`}>
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
    <div className="flex flex-wrap justify-start"> {/* Container for all projects */}
        {projects.map((project, index) => (
            <div key={index} className="w-1/4 p-5 flex flex-col justify-between items-center text-center"> {/* Adjusted for vertical alignment */}
                <Award
                    awardName={project.awardName}
                    imgUrl={project.imgUrl} 
                />
                <button
                    onClick={() => handleReadMore(project)}
                    className="mt-2 text-red-500 underline">
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
