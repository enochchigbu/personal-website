// import React, { useState, useEffect } from 'react';

// /**
//  * Typed Text Component
//  * 
//  * Prints out text with a time interval
//  * 
//  * @param string 
//  * @param number?
//  * @param callback?
//  * 
//  * @returns string
//  */


// interface TypedTextProps {
//     text: string;
//     time?: number;
//     onComplete?: () => void;
// }

// const TypedText : React.FC<TypedTextProps> = ({ text, time = 100, onComplete }) => {
//     const [revealedLetters, setRevealedLetters] = useState<number>(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setRevealedLetters((l) => l + 1);
//         }, time);

//         // Clear the interval when text is fully revealed
//         if (revealedLetters === text.length) {
//             clearInterval(interval);
//             if (onComplete) {
//                 onComplete(); // Notify the parent component
//             }
//         }

//         // Cleanup interval on unmount
//         return () => clearInterval(interval);
//     }, [revealedLetters, text, time, onComplete]);

//     return <>{text.substring(0, revealedLetters)}</>;
// }

// export default TypedText;

import React, { useState, useEffect } from 'react';

/**
 * Typed Text Component
 * 
 * Types out multiple words with a type-and-delete effect, keeping the last word
 * 
 * @param string[] - Array of words to cycle through
 * @param number? - Time interval between letters (default: 100ms)
 * @param callback? - Function to call when last word is fully displayed
 * 
 * @returns string
 */

interface TypedTextProps {
    texts: string[];
    time?: number;
    onComplete?: () => void;
}

const TypedText: React.FC<TypedTextProps> = ({ texts, time = 100, onComplete }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [revealedLetters, setRevealedLetters] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const currentText = texts[currentWordIndex];
    const isLastWord = currentWordIndex === texts.length - 1;

    useEffect(() => {
        // If we're on the last word and it's fully displayed, stop
        if (isLastWord && revealedLetters === currentText.length) {
            if (onComplete) {
                onComplete(); // Call onComplete when last word is fully shown
            }
            return; // Don't set up interval
        }

        const interval = setInterval(() => {
            setRevealedLetters((prev) => {
                if (!isDeleting && prev < currentText.length) {
                    // Typing forward
                    return prev + 1;
                } else if (isDeleting && prev > 0) {
                    // Deleting backward (only for non-last words)
                    return prev - 1;
                } else if (!isDeleting && prev === currentText.length) {
                    // Pause at full word, then start deleting (unless last word)
                    setTimeout(() => setIsDeleting(true), 1000);
                    return prev;
                } else if (isDeleting && prev === 0) {
                    // Move to next word
                    setIsDeleting(false);
                    setCurrentWordIndex((idx) => idx + 1);
                    return 0;
                }
                return prev;
            });
        }, time);

        // Cleanup interval on unmount or when dependencies change
        return () => clearInterval(interval);
    }, [revealedLetters, isDeleting, currentText, texts, time, onComplete, isLastWord]);

    return <>{currentText.substring(0, revealedLetters)}</>;
};

export default TypedText;