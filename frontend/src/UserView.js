import Word from './Word';

import {useState, useEffect} from 'react';

function UserView () {

  const url = "http://localhost:3010/vocabulary"
  const[wordsArray, setWordsArray] = useState([]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(res => setWordsArray(res))
    .catch(err => console.log(err));
  },);

  return(
    <div className="userview">
      {wordsArray.map((word) => {
      return (
        <div>
          <Word originalWord={word.englishWord} correctWord={word.finnishWord}/>
        </div>
      )
    })}


    </div>
);
}

export default UserView;