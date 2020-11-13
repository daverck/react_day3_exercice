import React from 'react'
import style from './letterToTry.module.css'

export default function LetterToTry(props) {
    return (
        // <button className={"mr-1 ml-1 btn "+(["a", "e", "i", "o", "u", "y"].indexOf(props.letter) > 0 ? style.vowel : style.consonant)}>
        <button className={"mr-1 ml-1 btn "+(["A", "E", "I", "O", "U", "Y"].indexOf(props.letter.toUpperCase()) >= 0 ? "btn-outline-primary" : "btn-outline-secondary")}
                value={props.letter}
                onClick={(e) => props.funcTryLetter(e)} >
            {props.letter}
        </button>
    )
}
