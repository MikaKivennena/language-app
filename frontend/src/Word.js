import {useState} from 'react';
import Score from './Score';

const Word = (props) => {
    const[word, setWord] = useState('');
    const checkWord = () => {
        if(props.correctWord === word) {
            console.log("Oikein!");
        } else {
            console.log("Väärin!");
        }
    }
    return(
        <div>
        <label>{props.originalWord} = </label>
        <input
        required
        type="text"
        placeholder="Write here"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={checkWord}>check</button>
        </div>
    );
}


export default Word;