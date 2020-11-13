import React, {useState, useEffect} from 'react'
import Dice from './Dice'

export default function DiceGame(props) {
    
    const [dice1Value, setDice1Value] = useState(1);
    const [dice2Value, setDice2Value] = useState(1);
    const [dicesColor, setDicesColor] = useState("black");

    // function rollDices(){
    //     setDice1Value(getDiceValue());
    //     setDice2Value(getDiceValue());

    //     if (dice1Value === dice2Value)
    //     {
    //         setDicesColor("green");
    //     }
    //     else
    //     {
    //         setDicesColor("red");
    //     }
    // }

    useEffect(() => {
        if (dice1Value === dice2Value)
        {
            setDicesColor("green");
        }
        else
        {
            setDicesColor("red");
        }
        
        return () => {
            // cleanup here
        }
    }, [dice1Value, dice2Value])

    function getDiceValue(){
        let aDiceValue = Math.floor(Math.random()*6) + 1;
        return aDiceValue;
    }

    return (
        <div className="card bg-light m-2" >
            <h2>Dice game</h2>
            <div className="d-flex align-items-center justify-content-around p-3 mb-2" fontSize="10em">
                <Dice diceValue={dice1Value} color={dicesColor} />
                <Dice diceValue={dice2Value} color={dicesColor} />
            </div>
            {/* <button onClick={rollDices}>Roll dices !</button> */}
            <button onClick={() => {setDice1Value(getDiceValue()); setDice2Value(getDiceValue()); }}>Roll dices !</button>
        </div>
    )
}
