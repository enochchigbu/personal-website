import React, { useState, useEffect } from 'react';

/**
 * Typed Text Component
 * 
 * Prints out text with a time interval
 * 
 * To style, wrap in a <text> HTML component and apply styling
 * 
 * @param string 
 * @param number?
 * 
 * @returns string
 */

function TypedText ({text, time} : {text : string, time? : number}) {
    if (time === undefined) { time = 100 }
    const [revealedLetters, setRevealedLetters] = useState<number>(0);
    const interval = setInterval(() => setRevealedLetters(l  => l + 1), time);

    useEffect(() => {
        if(revealedLetters === text.length) { clearInterval(interval) }
    }, [text, interval, revealedLetters])

    useEffect(() => {
        return () => clearInterval(interval)
    }, [interval])

    return <>{text.substring(0, revealedLetters)}</>
}

export default TypedText;