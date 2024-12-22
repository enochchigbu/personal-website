import React, { useState, useEffect } from 'react';

/**
 * Typed Text Component
 * 
 * Prints out text with a time interval
 * 
 * @param string 
 * @param number?
 * @param callback?
 * 
 * @returns string
 */


interface TypedTextProps {
    text: string;
    time?: number;
    onComplete?: () => void;
}

function TypedText({ text, time = 100, onComplete }: TypedTextProps) {
    const [revealedLetters, setRevealedLetters] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRevealedLetters((l) => l + 1);
        }, time);

        // Clear the interval when text is fully revealed
        if (revealedLetters === text.length) {
            clearInterval(interval);
            if (onComplete) {
                onComplete(); // Notify the parent component
            }
        }

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [revealedLetters, text, time, onComplete]);

    return <>{text.substring(0, revealedLetters)}</>;
}

export default TypedText;