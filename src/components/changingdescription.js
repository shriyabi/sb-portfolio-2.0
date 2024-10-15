import { useState, useEffect } from 'react';

function Description() {
    const titles = ["Tech Enthusiast", "Equity Activist", "Full-Stack Developer", "AI Enthusiast"];
    const [Curr, setCurr] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurr((prevIndex) => (prevIndex + 1) % titles.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [titles.length]);

    return (
        <h1 className="text-xl mb-3 text-fuchsia-400">
            {titles[Curr]}
        </h1>
    );
}

export default Description;
