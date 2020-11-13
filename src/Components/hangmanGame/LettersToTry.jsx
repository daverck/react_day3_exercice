import React from 'react'
import LetterToTry from './LetterToTry'

export default function LettersToTry(props) {
    return (
        <div className="p-2 m-2" style={{fontSize: "5em"}}>
            {
                props.letters.map(l => 
                    <LetterToTry letter={l} funcTryLetter={props.funcTryLetter} key={l} />
                    )
            }
        </div>
    )
}
