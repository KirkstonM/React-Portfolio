import React from 'react';
import '../Styles/AnimatedLetters.scss';

export default function AnimatedLetters({letterClass, strArray, idx}){


    return(
        <>
        <span>
{
    strArray.map((char, i) => {
       return <span key={char + i} className={`${letterClass} _${i + idx}`}> 
       {char}
       </span>
    })
}
        </span>
        </>
    )
}