import {useState} from 'react';

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
        <label>{props.word} = </label>
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