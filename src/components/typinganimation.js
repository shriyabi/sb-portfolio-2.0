import { useState, useEffect } from 'react';

function TypingAnimation() {
    const name = "SShriya Biddala";
    const [type, setType] = useState("");

    useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            setType((prevText) => prevText + name[currentIndex]);
            currentIndex++;
            if (currentIndex === name.length - 1) {
                clearInterval(interval);
            }
        }, 150);
        return () => clearInterval(interval);
    }, [name]);

    return (
        <h3 className="text-lg">
            {type}
        </h3>
    );
}

export default TypingAnimation;
