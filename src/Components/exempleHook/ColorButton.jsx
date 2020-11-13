import React, {useState} from 'react'

export default function ColorButton(props) {

    const [color, setColor] = useState("red"); //props.color

    function changeColor(e){
        let colors = ["red", "blue", "yellow"];

        setColor(colors.filter(c => c !== color)[Math.floor(Math.random()*(colors.length-1))]);
    }

    return (
        <div>
            <button style={{ backgroundColor: color }} onClick={changeColor}>Change color (with hooks) !</button>    
        </div>
    )
}
