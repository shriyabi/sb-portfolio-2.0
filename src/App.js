import logo from './logo.svg';
import './App.css';
import Project from './components/projects';
import Skills from './components/skills';
import ProjectsAndHonors from './components/projectsandhonors';
import Description from './components/changingdescription';
import TypingAnimation from './components/typinganimation';
import 'animate.css';


function App() {
  return (
    <>
      <div class="bg-red-400 flex flex-row justify-center items-center rounded-r-sm w-1/5 pl-1">
        <div class="w-4/5 flex flex-row">
          <h2 class="mr-3 my-1 text-sm rounded-3xl bg-slate-100 px-1"> S </h2>
          <h2 class="text-xl font-semibold">SHROOGLE</h2>
        </div>
        <div class="w-1/5 items-end flex justify-end px-3 font-semibold text-sm">
          X
        </div>

      </div>
      <div id="Home" class="bg-red-300 w-screen min-h-screen px-3 flex-col items-start flex justify-start">

        <div class="rounded-xl my-5 flex flex-row bg-red-200 w-full border-4">
          <div class="w-[2em] rounded-l-xl px-2 mr-2 bg-red-500 animate__animated animate__heartBeat animate__delay-2s"> &#128269; </div>
          <TypingAnimation />
        </div>
        <div class="w-full h-full flex flex-row animate__animated animate__fadeInUp animate__delay-2s">
          <div class="w-auto px-5 py-4 mb-7 bg-red-200 mr-5 min-h-screen rounded-xl border-4">
            <div class="sticky top-0 w-full flex-col flex text-3xl items-start">
              <a href="#Home" class="zoom-out"> &#x1f3e0; </a>
              <a href="#Skills" class="mt-8 zoom-out"> &#128295; </a>
              <a href="#Experience" class="mt-8 zoom-out"> &#x1f3eb; </a>
              <a href="#Projects" class="mt-8 zoom-out"> &#xe11e; </a>
              <a href="#Contact" class="mt-8 zoom-out"> &#x1f4ac; </a>
            </div>
          </div>

          <div class="w-full flex flex-col">
            <h class="text-5xl font-semibold animate__animated animate__delay-3s animate__rubberBand"> Shriya Biddala </h>
            <Description />
            <div class="w-full flex justify-center">
              <div class="w-1/2 bg-red-700 h-[15em]">
                image
              </div>
              <div class="w-1/2 mx-3 mb-10 rounded-lg flex text-end justify-center bg-red-100 h-auto p-3">
                CS enthusiast junior student at the College of Engineering at the University of Michigan pursing Computer Science and Electrical Engineering. Partook in multiple research projects at the university level, notably developing a mental chatbot, on top of engineering, such as developing the bionic knee with Texas Instruments technology and Lego Mindstromer bricks. Aspires to have a specialized focus on intelligent devices and applications of artificial intelligence in community. Pushes for equity and diversity in the technology sphere.
              </div>
            </div>
            <div class="border-2 mr-5 my-4"></div>

            <div id="Skills" class="w-full flex flex-col md:flex-row">
              <div class="w-full md:w-1/2 mr-7 flex flex-col">
                <h class="text-xl underline"> SKILLS </h>
                <h class="text-sm mt-3 overline"> Full-Stack Development </h>
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

                <h class="text-sm mt-3 overline"> SWE </h>
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

                <h class="text-sm mt-3 overline"> AI/ML </h>
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
              <div class="w-full md:w-1/2">
                <h class='text-xl underline'> EDUCATION </h>
                <div class="bg-red-700 rounded-xl  p-4 flex flex-col justify-start text-slate-100">
                  <h class="text-lg font-semibold">University of Michigan - Ann Arbor</h>
                  <h class="text-base italic">Junior, Computer Science Engineering and Electrical Engineering</h>
                  <div class="flex pt-3 flex-col lg:flex-row">
                    <div class="w-full flex flex-col lg:w-1/2">
                      <h class="text-sm underline">Coursework:</h>
                      <h class="text-base leading-4">Data Structures and Algorithms</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base ">Robotics Mechanisms</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base leading-4">Introduction to Computer Architecture</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base leading-4">Introduction to Artificial Intelligence</h>
                      <h class="leading-5 text-red-700">test </h>
                    </div>
                    <div class="w-full flex flex-col lg:w-1/2">
                      <h class="text-sm underline">Activities:</h>
                      <h class="text-base leading-4">Residential Advisor</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base leading-4">Instructional Aide for Data Structures and Algorithms</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base leading-4">Instructional Aide for Robotics Mechanisms</h>
                      <h class="leading-3 text-red-700">test </h>
                      <h class="text-base"> Freelance Full-Stack Developer for For Michigan</h>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="border-2 mr-5 my-8" id="Projects"></div>
            <h class='text-xl underline'> PROJECTS + HONORS </h>
            <h class='text-base italic'> Click each tab to learn more! </h> 
            <ProjectsAndHonors />
          </div>
          <div class="w-1/3 min-h-screen ml-10 flex flex-col items-end justify-start animate__animated animate__delay-3s animate__slideInRight">
            <h2 class='items-start'> LASTEST NEWS </h2>
            <div class="w-full my-2 h-auto bg-red-200 p-3 border-4 align-end rounded-xl h-1/4">
              <h3 class="text-xl overline"> For Michigan Website</h3>
              <div class="bg-red-800 w-full h-[10em]">ioghio</div>
              <h3></h3>
            </div>
            <div class="w-full my-2 h-auto bg-red-200 p-3 border-4 align-end rounded-xl h-1/4">
              <h3 class="text-xl overline"> My Portfolio V1 </h3>
              <div class="bg-red-800 w-full h-[10em]">ioghio</div>
              <h3> More professional Portfolio </h3>
            </div>
            <div class="w-full my-2 h-auto bg-red-200 p-3 border-4 align-end rounded-xl h-1/4">
              <h3 class="text-xl overline"> GreenBrother</h3>
              <div class="bg-red-800 w-full h-[10em]">ioghio</div>
              <h3> MHacks 17 </h3>
            </div>
            <div class="w-full my-2 h-auto bg-red-200 p-3 border-4 align-end rounded-xl h-1/4">
              <h3 class="text-xl overline"> DocuDog </h3>
              <div class="bg-red-800 w-full h-[10em]">ioghio</div>
              <h3> Google x MHacks </h3>
            </div>
            <div class="w-full my-2 h-auto bg-red-200 p-3 border-4 align-end rounded-xl h-1/4">
              <h3 class="text-xl overline"> OneVote </h3>
              <div class="bg-red-800 w-full h-[10em]">ioghio</div>
              <h3> MHacks 16 </h3>
            </div>
          </div>
        </div>
        <div class="border-2 w-full mb-3" id="Projects"></div>
        <div id="Contact" class="w-full flex justify-center flex-col items-center">    
        <h2 class='text-center text-xl underline mb-3'> CONTACT </h2>
        
        
        <form class="w-3/4 p-2 mb-7 bg-red-500  rounded-lg flex flex-col justify-center flex items-center animated__animate animate__delay-4s animate__fadeIn">
    <div class="w-full flex flex-col md:flex-row justify-center items-center">
    <input 

        type="text" 
        placeholder="Name" 
        class="p-1 mr-1 mb-2  text-red-900 focus:outline-red-900 w-1/2 border-2 border-red-500 bg-red-100 rounded" 
        required 
    />

    <input 
        type="email" 
        placeholder="Email" 
        class="p-1 ml-1 text-red-900  focus:outline-red-900  mb-2 w-1/2 border-2 border-red-500 bg-red-100 rounded" 
        required 
    />
    </div>

    <input 
        type="text" 
        placeholder="Subject" 
        class="p-1 w-full text-red-900 focus:outline-red-900 border-2 bg-red-100 border-red-600 flex items-start justify-start h-[5em] rounded" 
        required 
    />

    <button 
        type="submit" 
        class="bg-red-500 text-white p-1 mt-3 rounded  hover:bg-red-600"
    >
        Submit
    </button>
</form>

        </div>
      </div>
      <div class="bg-slate-100 pt-7">
          <div class="w-auto flex flex-row justify-center my-3 items-center">
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-red-900 border-4 flex items-center justify-center bounce"> I </div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-red-900 border-4 flex items-center justify-center bounce"> L </div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-red-900 border-4 flex items-center justify-center bounce"> G </div>
            <div class="icons w-[3em] h-[3em] mx-4 rounded-3xl border-red-900 border-4 flex items-center justify-center bounce"> M </div>
          </div>
        Copyright at Shriya
      </div>
    </>
  );
}

export default App;
