import React from 'react'
import LetterToGuess from './LetterToGuess'
import {v4 as uuid_v4} from 'uuid'

export default function LettersToGuess(props) {

    return (
        <div className="p-2 m-2" style={{fontSize: "5em"}}>
            {
                props.letters.map(l => 
                    <LetterToGuess to_guess={l.to_guess} guessed={l.guessed} key={uuid_v4()} />
                    )
            }
        </div>
    )
}
