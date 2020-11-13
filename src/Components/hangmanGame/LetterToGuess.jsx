import React from 'react'

export default function LetterToGuess(props) {

    return (
        <span className="mr-1 ml-1" >
            {props.guessed ? props.to_guess : "_"}
        </span>
    )
}
