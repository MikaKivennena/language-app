import Word from './Word';

import {useState, useEffect} from 'react';

function UserView () {

  const url = "http://localhost:3010/vocabulary"
  const[wordsArray, setWordsArray] = useState([]);
  /** fetch words form database and add them to wordsArray */
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res))
    .catch(err => console.log(err));
  },);

  return(
    <div className="userview">
      {/* Map the wordsArray and call Word component for each word pair so it puts out list of word pairs */}
      {wordsArray.map((word) => {
      return (
        <div>
          <Word originalWord={word.englishWord} correctWord={word.finnishWord} maxScore={wordsArray.length}/>
        </div>
      )
    })}
    </div>

);
}

export default UserView;