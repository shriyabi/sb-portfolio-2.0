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
import ar from './images/convosenses.png'; 
import budget from './images/budgetApp.png'; 

function Award({ awardName, awardDescription, skills, imgUrl }) {
    const sources = {
      forMich,
      robo,
      ai,
      portfolio,
      planner,
      oneVote,
      greenBrother: greenBro,
      architext,
      chatBot,
      deadline: deadlineTracker,
      docuDog,
      medChatbot,
      plannerIo,
      ar,
      budget
    };
  
    const imgSrc = sources[imgUrl] || null;
  
    const renderMedia = () => {
      // If it’s an image
      if (imgSrc) {
        return (
          <img
            src={imgSrc}
            alt={awardName}
            className="w-full aspect-[4/3] object-cover rounded-lg border-4 border-fuchsia-500 shadow-md"
          />
        );
      }
  
      // If it’s a video/iframe embed
      const embedUrls = {
        architext: "https://www.youtube.com/embed/HxY2zq5rcqk",
        oneVote: "https://www.youtube.com/embed/-eGkraEZ6HA",
        greenbro: "https://www.youtube.com/embed/BbTT9nJbXnE",
        //docudog: "https://www.youtube.com/embed/Qq7_72aoV08",
        demo: "https://www.youtube.com/embed/Afk6gSBdXUg",
        ar: "https://www.youtube.com/embed/Afk6gSBdXUg",
      };
  
      const embed = embedUrls[imgUrl];
      if (!embed) return null;
  
      return (
        <iframe
          src={embed}
          title={awardName}
          allowFullScreen
          className="w-full aspect-[4/3] rounded-lg border-4 border-fuchsia-500 shadow-md"
        ></iframe>
      );
    };
  
    return (
      <div className="flex flex-col items-center">
        {renderMedia()}
        <h3 className="text-lg font-semibold mt-2">{awardName}</h3>
        <p className="text-sm">{awardDescription}</p>
        <p className="italic text-gray-600">{skills}</p>
      </div>
    );
  }
  
  export default Award;
  
