import {useState} from 'react';
import './AdminView.css';

const Word = (props) => {
    const[word, setWord] = useState('');
    const[guessState, setGuessState] = useState("________");
    const[nameClass, setClassName] = useState("");
    /**Check the user anser. If correct. Switch state to green correct text. If false, red wrong text */
    const checkWord = () => {
        if(props.correctWord === word.toLowerCase()) {
            setGuessState("Correct!")
            setClassName("corr");
        } else {
            setGuessState("Wrong!");
            setClassName("fals");
        }
    }

    return(
        /**Creates a single table row out of word pairs and add button to check if the answer is correct.
         * The button also adjusts the nameClass which sets corrrect or wrong texts to page.
         */
        <div>
        <table>
        <div>
        <tr>
        <th>
        <label>{props.originalWord}</label>
        </th>
        <th>
        <input
        required
        type="text"
        placeholder="Answer here"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        />
        </th>
            <th><button onClick={checkWord}>check</button></th>
                <th className={nameClass}>{guessState}</th>
        </tr>
        </div>
            </table>
        </div>

    );
}


export default Word;