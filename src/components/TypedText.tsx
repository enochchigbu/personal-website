import React, { useState, useEffect } from 'react';
import './styles/TypedText.css';

const TypedText = ({text} : {text : string}) => {
    const [revealedLetters, setRevealedLetters] = useState<number>(0);
    const interval = setInterval(() => setRevealedLetters(l  => l + 1), 110);

    useEffect(() => {
        if(revealedLetters === text.length) { clearInterval(interval) }
    }, [text, interval, revealedLetters])

    useEffect(() => {
        return () => clearInterval(interval)
    }, [interval])

    return <>{text.substring(0, revealedLetters)}</>
}

export default TypedText;