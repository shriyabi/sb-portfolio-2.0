import React from 'react';

export default function Resume() {
  
  // Helper for neon text styles
  const neonText = (color) => `text-transparent bg-clip-text bg-gradient-to-r ${color} drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`;
  
  // Helper for neon box styles
  const neonBox = (colorBorder, shadowColor) => 
    `bg-neutral-900/80 backdrop-blur-md border-2 ${colorBorder} rounded-2xl shadow-[0_0_15px_${shadowColor},inset_0_0_10px_${shadowColor}40]`;

  return (
    <div id="Resume" className="comfortaa min-h-screen w-full bg-neutral-950 text-slate-100 p-6 md:p-12 overflow-x-hidden selection:bg-fuchsia-500/40 selection:text-white">
      
      {/* --- HEADER: NEON FLICKER TITLE --- */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-end mb-16 animate__animated animate__fadeInDown">
        <div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-2 text-white drop-shadow-[0_0_20px_#d946ef] animate-pulse">
            RESUME
          </h1>
          <p className="text-xl md:text-2xl text-cyan-300 drop-shadow-[0_0_5px_#22d3ee]">
            BSE Computer Science @ UMich
          </p>
        </div>
        
        {/* Focus Statement */}
        <div className={`mt-8 md:mt-0 p-4 ${neonBox('border-yellow-400', '#facc15')} max-w-md`}>
          <p className="text-sm text-neutral-300 uppercase tracking-widest mb-1">Core Focus</p>
          <p className="text-lg">
            Bridging the gap between <span className="text-fuchsia-400 font-bold drop-shadow-[0_0_8px_#d946ef]">Machine Learning</span> research and robust <span className="text-cyan-400 font-bold drop-shadow-[0_0_8px_#22d3ee]">Full-Stack Engineering</span>.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* --- LEFT COLUMN: EXPERIENCE (Timeline) --- */}
        <div className="lg:col-span-7 space-y-12">
          <h2 className="text-3xl font-bold text-fuchsia-400 drop-shadow-[0_0_10px_#d946ef] mb-8 border-b border-fuchsia-500/50 pb-2 inline-block">
            EXPERIENCE
          </h2>

          <div className="relative border-l-4 border-neutral-800 ml-4 space-y-12">
            
            {/* Walmart */}
            <div className="relative pl-8 md:pl-10 group">
              {/* Glowing Dot */}
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"></div>
              
              <div className={`p-6 transition-transform hover:-translate-y-1 duration-300 ${neonBox('border-cyan-500', '#06b6d4')}`}>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-cyan-100">Software Engineering Intern</h3>
                  <span className="text-cyan-300 font-mono text-sm">June 2025 - Aug 2025</span>
                </div>
                <p className="text-md text-cyan-200/80 italic mb-4">Walmart Global Tech | Bentonville, AR</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   {['CosmosDB', 'Python', 'OpenAI 4.1 API', 'LLM-as-a-Judge'].map(t => (
                     <span key={t} className="text-xs px-2 py-1 bg-cyan-900/50 border border-cyan-500/50 rounded text-cyan-200">{t}</span>
                   ))}
                </div>
                <ul className="list-disc ml-4 text-sm text-neutral-300 space-y-2 marker:text-cyan-400">
                  <li>Engineered an evaluation engine based on <b>GPT-4.1</b> LLM-as-a-judge to score procedural errors for a multi-agent system used by <b>2.1M+ associates</b>.</li>
                  <li>Significantly improved decision-making performance, resulting in <b>hallucination rates reduced by 80%</b>.</li>
                </ul>
              </div>
            </div>

            {/* For Michigan */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-fuchsia-500 shadow-[0_0_15px_#d946ef]"></div>
              
              <div className={`p-6 transition-transform hover:-translate-y-1 duration-300 ${neonBox('border-fuchsia-500', '#d946ef')}`}>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-fuchsia-100">Freelance Full-Stack Developer</h3>
                  <span className="text-fuchsia-300 font-mono text-sm">Feb 2024 - Nov 2024</span>
                </div>
                <p className="text-md text-fuchsia-200/80 italic mb-4">For Michigan (America Votes)</p>
                <div className="flex flex-wrap gap-2 mb-4">
                   {['ReactJS', 'Tailwind', 'MySQL', 'Google OAuth'].map(t => (
                     <span key={t} className="text-xs px-2 py-1 bg-fuchsia-900/50 border border-fuchsia-500/50 rounded text-fuchsia-200">{t}</span>
                   ))}
                </div>
                <ul className="list-disc ml-4 text-sm text-neutral-300 space-y-2 marker:text-fuchsia-400">
                  <li>Designed official website engaging <b>100,000+ college students</b> and BIPOC voters across Michigan.</li>
                  <li>Built interactive data directory systems (React, Node, MySQL) hosting and querying data for <b>300+ employees</b> and social media accounts.</li>
                </ul>
              </div>
            </div>

            {/* Freelance Web Dev */}
            <div className="relative pl-8 md:pl-10 group">
              <div className="absolute -left-[11px] top-1 h-5 w-5 rounded-full bg-yellow-400 shadow-[0_0_15px_#facc15]"></div>
              
              <div className={`p-6 transition-transform hover:-translate-y-1 duration-300 ${neonBox('border-yellow-400', '#facc15')}`}>
                <div className="flex flex-col md:flex-row justify-between mb-2">
                  <h3 className="text-xl font-bold text-yellow-100">Freelance Website Developer</h3>
                  <span className="text-yellow-300 font-mono text-sm">Feb 2024 - Present</span>
                </div>
                <p className="text-md text-yellow-200/80 italic mb-4">Self-Employed</p>
                <ul className="list-disc ml-4 text-sm text-neutral-300 space-y-2 marker:text-yellow-400">
                  <li>Deployed custom portfolios and organizational sites using <b>React.js & Tailwind CSS</b>.</li>
                  <li>Clientele includes: Student Turnout Projects, Michigan Next.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* --- RIGHT COLUMN: PROJECTS & SKILLS --- */}
        <div className="lg:col-span-5 space-y-12">
          
          {/* Projects */}
          <div>
            <h2 className="text-3xl font-bold text-green-400 drop-shadow-[0_0_10px_#4ade80] mb-8 border-b border-green-500/50 pb-2 inline-block">
              PROJECTS
            </h2>
            <div className="grid gap-6">
              {[
                {
                  title: "OneVote",
                  award: "Best Social Hack - 3rd Place",
                  tech: "OpenAI API • HTML5",
                  desc: "Election info app using OpenAI summarizer to filter misinformation for 100+ policies.",
                  color: "green"
                },
                {
                  title: "Planner.io",
                  tech: "React • Google Tasks API",
                  desc: "Productivity app with color-coded tasks, focus timers, and UI-based completion tracking.",
                  color: "green"
                },
                {
                  title: "ArchiText",
                  tech: "VSCode API • Pylance",
                  desc: "VSCode extension that integrates buttons to auto-generate AI documentation for functions.",
                  color: "green"
                },
                {
                  title: "A.I. Handwriting Recognition",
                  tech: "OpenCV • Express.js",
                  desc: "Interface for 20+ teachers to convert handwritten docs to data with 4s latency.",
                  color: "green"
                }
              ].map((project, idx) => (
                <div key={idx} className={`p-5 rounded-xl border border-green-500/30 bg-neutral-900/50 hover:bg-neutral-800 hover:border-green-400 hover:shadow-[0_0_15px_#4ade80] transition-all duration-300`}>
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-green-100">{project.title}</h3>
                    {project.award && <span className="text-[10px] uppercase bg-yellow-500/20 text-yellow-300 px-2 py-1 rounded border border-yellow-500/50">🏆 Award</span>}
                  </div>
                  <p className="text-xs font-mono text-green-400/80 mb-2">{project.tech}</p>
                  <p className="text-sm text-neutral-400">{project.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-3xl font-bold text-violet-400 drop-shadow-[0_0_10px_#a78bfa] mb-8 border-b border-violet-500/50 pb-2 inline-block">
              SKILLS
            </h2>
            
            <div className="space-y-6">
              {/* Languages */}
              <div>
                <h4 className="text-sm text-violet-300 mb-2 uppercase tracking-widest">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {["C++ (11/14/17)", "Python", "JavaScript", "Java", "SQL", "Bash", "GraphQL"].map(s => (
                    <span key={s} className="px-3 py-1 text-xs font-bold text-neutral-900 bg-violet-300 rounded-full shadow-[0_0_10px_#a78bfa]">{s}</span>
                  ))}
                </div>
              </div>

              {/* AI/ML */}
              <div>
                <h4 className="text-sm text-cyan-300 mb-2 uppercase tracking-widest">AI / ML</h4>
                <div className="flex flex-wrap gap-2">
                  {["PyTorch", "OpenCV", "Pandas", "Gemini 1.5 Pro", "OpenAI API", "BERT", "LangChain", "LangGraph"].map(s => (
                    <span key={s} className="px-3 py-1 text-xs font-bold text-neutral-900 bg-cyan-300 rounded-full shadow-[0_0_10px_#22d3ee]">{s}</span>
                  ))}
                </div>
              </div>

              {/* Full Stack */}
              <div>
                <h4 className="text-sm text-fuchsia-300 mb-2 uppercase tracking-widest">Full Stack & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {["ReactJs", "Tailwind", "Node.js", "Django", "CosmosDB", "Google Cloud", "Git", "Docker"].map(s => (
                    <span key={s} className="px-3 py-1 text-xs font-bold text-neutral-900 bg-fuchsia-300 rounded-full shadow-[0_0_10px_#d946ef]">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}