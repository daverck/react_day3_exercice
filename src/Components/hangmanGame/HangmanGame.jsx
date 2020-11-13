import React, {useState, useEffect} from 'react'
import wordList from './ListWord.json'
import Emoji from './Emoji'
import LettersToGuess from './LettersToGuess'
import LettersToTry from './LettersToTry'

export default function HangmanGame() {
    const [emoji, setEmoji] = useState("neutral");
    const [word, setWord] = useState("");
    const [letters, setLetters] = useState([]);
    const [tried_letters, setTriedLetters] = useState([]);
    const [letters_to_try, setLettersToTry] = useState([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
    const [remaining_nb_try, setRemainingNbTry] = useState(0);

    function getRandomWord()
    {
        let random_word = wordList[Math.floor(Math.random()*wordList.length)];
        console.log(random_word);

        let letters_to_guess = [...random_word].map(l => 
                ({
                    guessed: false,
                    to_guess: l.toUpperCase()
                })
            );

        setWord(random_word);
        setLetters(letters_to_guess);
        setTriedLetters([]);
        setLettersToTry([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']);
        setRemainingNbTry(random_word.length);
        setEmoji("neutral");
    }

    function tryLetter(e){
        e.preventDefault();

        let tried_letter = e.target.value.toUpperCase();

        if(tried_letters.indexOf(tried_letter) === -1)
        {
            setTriedLetters([...tried_letters, tried_letter]);
            setLettersToTry([...letters_to_try.filter(l => l !== tried_letter)]);

            let good_guess = false;
            let letters_to_guess = letters.map(l => 
                {
                    if(l.to_guess !== tried_letter)
                    {
                        return l;
                    }
                    else
                    {
                        good_guess = true;
                        return {
                                        guessed: true,
                                        to_guess: l.to_guess
                                };
                    }
                });

            setLetters(letters_to_guess);
            
            if(good_guess)
            {
                setEmoji("good");
            }
            else
            {
                setEmoji("wrong");
            }
        }
        else
        {
            alert("letter already tried !");
        }

        setRemainingNbTry(remaining_nb_try - 1);
    }

    useEffect(() => {

        if (remaining_nb_try == 0)
        {
            const word_found_reducer = (accumulator, currentValue) => (accumulator && currentValue.guessed)
            let found = letters.reduce(word_found_reducer, true)

            if(found)
            {
                setEmoji("success");
            }
            else
            {
                setEmoji("lost");
            }
        }

        return () => {
            //cleanup
        }
    }, [remaining_nb_try])

    return (
        <div className="card bg-light p-2 m-2">
            <button onClick={getRandomWord}>nouveau mot</button>
            <h2>Le jeu du pendu</h2>
            <p><strong>{remaining_nb_try}</strong> essai(s) restant(s)</p>
            <LettersToGuess letters={letters} />
            <div>
                <Emoji emoji_id={emoji} />
            </div>
            <LettersToTry letters={letters_to_try} funcTryLetter={tryLetter}/>
        </div>
    )
}
