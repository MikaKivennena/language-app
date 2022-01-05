import './App.css';
import Word from './Word';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

function App() {
  const url = "http://localhost:3010/vocabulary/1"
  const[wordsArray, setWordsArray] = useState([]);
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res));
  },);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Learn Language App
        </p>
      </header>
      <div>
        <h5>Welcome weary traveler</h5>

        <Word word="Word" correctWord="sana"/>
      </div>

      <div>
          <h1>{wordsArray.finnishWord}</h1>
          <h1>{wordsArray.englishWord}</h1>
          <h1>{wordsArray.category}</h1>
        </div>
    </div>
  );
}

export default App;
