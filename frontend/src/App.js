import './App.css';
import Word from './Word';
import {useState, useEffect} from 'react';
import Score from './Score';
function App() {
  const currScor = 0;
  const url = "http://localhost:3010/vocabulary"
  const[wordsArray, setWordsArray] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res))
    .catch(err => console.log(err));
  },);

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Learn Language App
        </h1>
      </header>
      {wordsArray.map((word) => {
      return (
        <div>
          <Word originalWord={word.englishWord} correctWord={word.finnishWord}/>
        </div>
      )
    })}

    <Score currentScore={currScor}/>
    </div>
  );
}

export default App;
