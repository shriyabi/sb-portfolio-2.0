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

function Award({ awardName, awardDescription, skills, imgUrl }) {
    let imgSrc;
    switch (imgUrl) {
        case 'forMich':
            imgSrc = forMich;
            break;
        case 'robo':
            imgSrc = robo; 
            break; 
        case 'ai':
            imgSrc = ai;
            break;
        case 'portfolio':
            imgSrc = portfolio;
            break;
        case 'planner':
            imgSrc = planner;
            break; 
        case 'oneVote':
            imgSrc = oneVote; 
            break;
        case 'greenBrother':
            imgSrc = greenBro; 
            break;  
        case 'architext':
            imgSrc = architext;
            break; 
        case 'chatBot':
            imgSrc = chatBot; 
            break; 
        case 'deadline':
            imgSrc = deadlineTracker; 
            break; 
        case 'docuDog':
            imgSrc = docuDog; 
            break; 
        case 'medChatbot':
            imgSrc = medChatbot; 
            break; 
        case 'plannerIo':
            imgSrc = plannerIo; 
            break; 
        default:
            imgSrc = null;
    }
    const iframe = () => {
        if (imgSrc) {
            return <img src={imgSrc} className="mx-auto border-4 border-fuchsia-500" alt={awardName} />;
        }
        switch (imgUrl) {
            case 'architext':
                return (
                    <iframe
                        src="https://www.youtube.com/embed/HxY2zq5rcqk"
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                        title={awardName}
                        allowFullScreen
                    ></iframe>
                );
                break;
            case 'oneVote':
                return (
                     <iframe
                        src="https://www.youtube.com/embed/-eGkraEZ6HA"
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                       title={awardName}
                        allowFullScreen
                     ></iframe>
                );
                break;
            case 'greenbro':
                return (
                    <iframe
                        src="https://www.youtube.com/embed/BbTT9nJbXnE"
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                        title={awardName}
                        allowFullScreen
                    ></iframe>
                );
                break;
            case 'docudog':
                return (
                    <iframe
                        src="https://www.youtube.com/embed/Qq7_72aoV08"
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                        title={awardName}
                        allowFullScreen
                    ></iframe>
                );
                break;
            case 'planner':
                return (
                    <img
                        src={planner}
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                        title={awardName}
                        allowFullScreen
                    ></img>
                );
                break; 
            case 'demo':
                return (
                    <iframe
                        src="https://www.youtube.com/embed/Afk6gSBdXUg"
                        className="mx-auto border-4 w-full h-auto border-fuchsia-500"
                        title={awardName}
                        allowFullScreen
                    ></iframe>
                );
                break;
            default:
                return null;
        }
    };

    return (
        <div className="">
            {iframe()}
            <h3 className="text-lg font-semibold">{awardName}</h3>
            <h3>{awardDescription}</h3>
            <h3 className="italic">{skills}</h3>
        </div>
    );
}

export default Award;
