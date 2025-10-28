export default function Resume() {
  return (
    <div id="Resume" className="comfortaa bg-neutral-800 min-h-screen w-full flex flex-col justify-start items-start text-slate-100 p-5 md:px-10">
      
      <h1 className="text-5xl text-cyan-300 font-bold mb-5 animate__animated animate__fadeInDown">Resume</h1>
      
      {/* Education */}
      <div className="border-4 border-fuchsia-400 rounded-xl bg-neutral-700 shadow-xl p-5 w-full mb-8">
        <h2 className="text-2xl text-fuchsia-400 font-semibold underline mb-2">Education</h2>
        <div className="flex flex-col md:flex-row md:justify-between">
          <div>
            <h3 className="text-lg font-bold">The University of Michigan</h3>
            <p className="italic">Ann Arbor, MI</p>
            <p>BSE in Computer Science Engineering, Minor in UX/UI Development</p>
            {/* <p className="text-yellow-300">Expected Graduation: May 2026 | GPA: 3.64/4.00</p> */}
            <p className="text-yellow-300">Expected Graduation: May 2026</p>
            <p className="text-sm mt-2 text-neutral-300">
              <b>Coursework:</b> Data Structures & Algorithms, Operating Systems, Artificial Intelligence, Machine Learning, 
              Natural Language Processing, Computer Organization, Data-Driven Web Applications, AI App Development for Entrepreneurship
            </p>
            <p className="text-sm mt-2 text-neutral-300">
              <b>Awards:</b> Aspirations in Computing National Honorable Mention (2023), MHacks OptiMize 3rd Place, TI Codes Competition Honorable Mention, Joseph M. Geisinger Scholarship
            </p>
            <p className="text-sm mt-2 text-neutral-300">
              <b>Activities:</b> Instructional Aide for Data Structures & Algorithms, Residential Advisor, Freelance Web Developer
            </p>
          </div>
        </div>
      </div>

      {/* Work Experience */}
      <div className="border-4 border-cyan-300 rounded-xl bg-neutral-700 shadow-xl p-5 w-full mb-8">
        <h2 className="text-2xl text-cyan-300 font-semibold underline mb-2">Work Experience</h2>

        {/* Walmart */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-300">AI/ML Software Engineering Intern</h3>
          <p className="italic text-sm">Walmart Global Tech | June 2025 - August 2025 | Bentonville, AR</p>
          <p className="text-sm text-neutral-300 mb-2">CosmosDB, Python, Azure OpenAI, LangGraph, Postman</p>
          <ul className="list-disc list-inside text-neutral-200 text-sm space-y-1">
            <li>Engineered and deployed a reusable LLM-as-a-judge framework for a multi-agent HR system supporting 2.1M associates.</li>
            <li>Designed a 25+ metric rubric using weighted confidence scores to reduce hallucination rates by 80%.</li>
            <li>Developed a LangGraph-based sliding-window summarization method reducing token expenditure by 30%.</li>
          </ul>
        </div>

        {/* For Michigan */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-300">Freelance Full-Stack Developer</h3>
          <p className="italic text-sm">For Michigan (affiliated with America Votes) | February 2024 - November 2024</p>
          <p className="text-sm text-neutral-300 mb-2">ReactJS, TailwindCSS, MySQL, Express.js, Node.js</p>
          <ul className="list-disc list-inside text-neutral-200 text-sm space-y-1">
            <li>Developed the official voter engagement website, reaching 100,000+ students and BIPOC voters statewide.</li>
            <li>Built a MySQL + Node.js data directory with OAuth integration for 500+ organizational and social media accounts.</li>
          </ul>
        </div>

        {/* Freelance */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-300">Freelance Website Developer</h3>
          <p className="italic text-sm">Self-Employed | February 2024 - Present</p>
          <p className="text-sm text-neutral-300 mb-2">ReactJS, TailwindCSS, HTML5, CSS3</p>
          <ul className="list-disc list-inside text-neutral-200 text-sm space-y-1">
            <li>Designed and deployed portfolio and organizational websites for clients including Student Turnout Projects and Michigan Next.</li>
            <li>Optimized client visibility and engagement through responsive and SEO-friendly front-end design.</li>
          </ul>
        </div>

        {/* PHYPid Lab */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-yellow-300">Research Assistant, PHYPid Lab</h3>
          <p className="italic text-sm">University of Colorado Boulder | January 2023 - August 2023</p>
          <p className="text-sm text-neutral-300 mb-2">C++, YAML, WebAssembly, Ubuntu</p>
          <ul className="list-disc list-inside text-neutral-200 text-sm space-y-1">
            <li>Defined 12+ distinct physical structures for fluid simulations via YAML configurations.</li>
            <li>Developed a WebAssembly-based web app to host simulation libraries, transitioning access from local software to the cloud.</li>
          </ul>
        </div>

        {/* Research */}
        <div>
          <h3 className="text-xl font-bold text-yellow-300">Machine Learning Researcher</h3>
          <p className="italic text-sm">Brain, A.I., and Child Center, University of Colorado Boulder | Sept 2022 - Feb 2023</p>
          <p className="text-sm text-neutral-300 mb-2">Encoder-Decoder Architecture, PyTorch, HuggingFace, Google Cloud</p>
          <ul className="list-disc list-inside text-neutral-200 text-sm space-y-1">
            <li>Built a fine-tuned encoder-decoder model for improved keyword recognition using Google Search API.</li>
            <li>Achieved 75% of generated responses exceeding a ROUGE score of 70.</li>
          </ul>
        </div>
      </div>

      {/* Projects */}
      <div className="border-4 border-yellow-300 rounded-xl bg-neutral-700 shadow-xl p-5 w-full mb-8">
        <h2 className="text-2xl text-yellow-300 font-semibold underline mb-2">Project Experience</h2>
        
        <ul className="list-disc list-inside text-neutral-200 text-sm space-y-3">
          <li>
            <b>Medical Advice Delivery:</b> Created a custom BioBERT-powered NLP system for controlled clinical text generation with interactive visualization.
          </li>
          <li>
            <a href="https://shriyabi.github.io/deadline_tracker/" className="underline hover:text-fuchsia-500">
              <b>Deadline Tracker:</b>
            </a> Developed a full-stack dashboard (React + Tailwind + Calendar API) with NLP parsing using spaCy and Gemma for event extraction.
          </li>
          <li>
            <a href="https://devpost.com/software/conversenses" className="underline hover:text-fuchsia-500">
              <b>Conversenses (MHacks 25 – 2nd Place):</b>
            </a> Built a real-time multi-agent LangChain framework integrated with Snap AR for public speaking analysis.
          </li>
          <li>
            <b>OneVote (OptiMize – 3rd Place):</b> Built a web app using OpenAI API summarizer to deliver verified election and candidate data for 1,000+ elections.
          </li>
          <li>
            <b>AI Handwriting Recognition:</b> Integrated OpenCV with Express.js to digitize handwritten content, reducing teacher grading latency by 4 seconds.
          </li>
          <li>
            <b>ArchiText:</b> Built a VSCode extension using Pylance API to auto-generate contextual docstrings above functions and classes.
          </li>
          <li>
            <b>Planner.io:</b> Designed a React + Tailwind productivity tracker with Google Tasks API integration and color-coded task visualization.
          </li>
        </ul>
      </div>

      {/* Skills */}
      <div className="border-4 border-violet-400 rounded-xl bg-neutral-700 shadow-xl p-5 w-full mb-8">
        <h2 className="text-2xl text-violet-400 font-semibold underline mb-2">Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-200">
          <div>
            <h3 className="text-fuchsia-400 font-semibold mb-1">Programming Languages</h3>
            <p>C++ (11/14/17), Python, JavaScript, Java, HTML5/CSS3, Bash, SQL, GraphQL, MySQL</p>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-1">AI / ML</h3>
            <p>PyTorch, OpenCV, Pandas, Numpy, NLTK, Transformers, LangGraph, LangChain, Azure AI, HuggingFace, Gemini API</p>
          </div>
          <div>
            <h3 className="text-yellow-400 font-semibold mb-1">Full-Stack Development</h3>
            <p>ReactJS, TailwindCSS, Express.js, Node.js, Django, CosmosDB, Postman, Google Cloud APIs (OAuth, Tasks, Calendar)</p>
          </div>
        </div>
      </div>
    </div>
  );
}
