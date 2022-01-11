import {useState} from 'react';
import './AdminView.css';
const Word = (props) => {
    const[word, setWord] = useState('');
    const[guessState, setGuessState] = useState("________");
    const[nameClass, setClassName] = useState("");
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